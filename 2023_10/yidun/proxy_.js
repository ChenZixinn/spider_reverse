proxy_ = function (func){
    return new Proxy(func, {
        set(target, key, value,){
            console.table([{'类型': 'set', '调用者': target, '调用属性': key, '调用值': value}])
            return Reflect.set(...arguments)
        },
        get(target, key, ){
            console.table([{'类型': 'set', '调用者': target, '调用属性': key, '调用值': target[key]}])
            return target[key]
        }
    })
}