from fastapi import FastAPI
import uvicorn

"""
Server class for managing API of frontend app
"""
class Server:
    def __init__(self, root_endpoint: str = "api", host: str = "localhost", port: int = 8000) -> None:
        self._app = FastAPI()
        self._root_endpoint = root_endpoint
        self._host = host
        self._port = port

        @self._app.get(f"/{self._root_endpoint}")
        def read_root():
            return {"ping": "pong!"}

    def start(self) -> None:
        host = self._host
        port = self._port

        print(f"Server started\nhttp://{host}:{port}/{self._root_endpoint}. Press Ctrl+C to exit.")
        uvicorn.run(self._app, host=host, port=port)