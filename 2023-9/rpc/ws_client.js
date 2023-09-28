!(function () {
    // 监听端口
    var ws = new WebSocket("ws://127.0.0.1:5678");  // 自定义端口

    ws.onmessage = function (evt) {
        console.log("receive msg: " + evt.data);
        // 退出
        if (evt.data === "quit") {
            ws.close();
        } else {
            // 调用方法，此处的my_crypto改为定义的函数名
            ws.send(my_crypto(evt.data))
        }
    };
})()