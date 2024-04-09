import sys
import asyncio
import websockets


async def receive_massage(websocket):
    while True:
        # 输入参数
        send_text = input("Enter param please: ")
        if send_text == "quit":
            await websocket.send(send_text)
            await websocket.close()
            print('quit')
            sys.exit()
        else:
            # 发送参数
            await websocket.send(send_text)
            # 返回结果
            response_text = await websocket.recv()
            print("\n result：", response_text)


start_server = websockets.serve(receive_massage, '127.0.0.1', 5678)  # 自定义端口
asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()

