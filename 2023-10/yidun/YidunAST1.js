const fs = require("fs");//文件读写
const parse = require("@babel/parser"); //解析为ast
const traverse = require('@babel/traverse').default;//遍历节点
const types = require('@babel/types');//类型
const generator = require('@babel/generator').default;//ast解析为代码
const jscode = fs.readFileSync(
    './watchman.min.js', {
        encoding: 'utf-8'
    }
);
let ast_code = parse.parse(jscode);

console.time("处理完毕，耗时");


console.log('======================================================================')
try {
    ast = String_deobfuscation(ast_code)//字符串解混淆
    console.log('字符串解混淆结束,共处理', ast["count"]);
    ast_code = parse.parse(generator(ast['ast']).code);
} catch (e) {
    console.log('失败', e)
}
console.log('======================================================================')
try {
    ast = Large_array_decryption(ast_code)//大数组还原
    console.log('大数组还原结束,共处理:', ast["count"]);
    ast_code = parse.parse(generator(ast['ast']).code);
} catch (e) {
    console.log('失败', e)
}
console.log('======================================================================')
try {
    ast = String_deobfuscation(ast_code)//字符串解混淆
    console.log('字符串解混淆结束,共处理', ast["count"]);
    ast_code = parse.parse(generator(ast['ast']).code);
} catch (e) {
    console.log('失败', e)
}
console.log('======================================================================')
js_code = generator(ast_code).code
fs.writeFile('./demoWatchman.js', js_code, (err) => {
});
console.log('文件保存结束');
console.log('======================================================================')
console.timeEnd("处理完毕，耗时");


//===================================================================================//
//大数组解混淆
function Large_array_decryption(ast) {
    let count = 0;//计数
    console.log('开始大数组解混淆');
    var DecryptFuncName_assignment = [];//解密函数以及被赋值解密函数的值
    let end = 3;//切片需要处理的代码块
    let newAst = parse.parse('');//新建ast
    decrypt_code = ast.program.body.slice(0, end);//切片
    newAst.program.body = decrypt_code;// 将前3个节点替换进新建ast
    let stringDecryptFunc = generator(newAst, {compact: true},).code;//转为js
    eval(stringDecryptFunc);//执行三部分的代码
    let stringDecryptFuncAst = ast.program.body[end - 1];// 拿到解密函数所在的节点
    if (stringDecryptFuncAst.type === 'VariableDeclaration') {
        var DecryptFuncName = stringDecryptFuncAst.declarations[0].id.name;//拿到解密函数的名字
    } else if (stringDecryptFuncAst.type === 'FunctionDeclaration') {
        DecryptFuncName = stringDecryptFuncAst.id.name;//拿到解密函数的名字
    } else {
        throw '未匹配到解密函数';
    }
    DecryptFuncName_assignment.push(DecryptFuncName);
    console.log('解密函数名称为:', DecryptFuncName);//打印
    // rest_code = ast.program.body.slice(end); // 剩下的节点
    // ast.program.body = rest_code;//剩下的节点替换
    traverse(ast, {
        NumericLiteral(path) {
            if (path.node.extra && /^0[obx]/i.test(path.node.extra.raw)) {
                path.node.extra = undefined;
            }
        },
    });
    for (j = 0; j < DecryptFuncName_assignment.length; j++) {
        DecryptFunc = DecryptFuncName_assignment[j];
        traverse(ast, {
            AssignmentExpression(path) {//赋值表达式匹配--替换加密数组为对应的值
                if (path.node.right.name === DecryptFunc) {       //当变量名与解密函数名相同时，就执行相应操作
                    DecryptFuncName_assignment.push(path.node.left.name);
                    path.remove();
                }
            },
            VariableDeclarator(path) {//赋值表达式匹配--替换加密数组为对应的值
                try {
                    if (path.node.init.name === DecryptFunc) {       //当变量名与解密函数名相同时，就执行相应操作
                        DecryptFuncName_assignment.push(path.node.id.name);
                        path.remove();
                    }
                } catch (e) {
                }
            },
        });
    }
    for (i = 0; i < DecryptFuncName_assignment.length; i++) {
        DecryptFunc = DecryptFuncName_assignment[i];
        if (DecryptFunc !== DecryptFuncName) {
            traverse(ast, {
                CallExpression(path) {//回调表达式匹配--替换加密数组为对应的值
                    if (types.isIdentifier(path.node.callee, {name: DecryptFunc})) {       //当变量名与解密函数名相同时，就执行相应操作
                        path.node.callee.name = DecryptFuncName;      // 值替换节点
                    }
                },
            });
        }
        traverse(ast, {
            CallExpression(path) {//回调表达式匹配--替换加密数组为对应的值
                if (types.isIdentifier(path.node.callee, {name: DecryptFuncName})) {       //当变量名与解密函数名相同时，就执行相应操作
                    try {
                        path.replaceWith(types.valueToNode(eval(path.toString())));      // 值替换节点
                        count += 1;
                    } catch (e) {

                    }
                }
            },
        });
    }
    return {ast, count};

}

//===================================================================================//
//字符串解混淆
function String_deobfuscation(ast) {
    let count = 0//计数
    console.log('开始字符串解混淆');
    traverse(ast, {
        'NumericLiteral|StringLiteral'(path) {
            delete path.node.extra//直接删掉，简单粗暴
            count += 1
        }
    })
    return {ast, count}
}





