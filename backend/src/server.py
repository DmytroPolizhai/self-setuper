from fastapi import FastAPI
from starlette.responses import RedirectResponse
from routers.models.router import Router

"""
Server class for managing API of frontend app
"""
class Server:
    def __init__(self,
                 root_endpoint: str = "api",
                 host: str = "localhost",
                 port: int = 8000,
                 protocol: str = "http",
                 redirect_from_root: bool = True) -> None:

        self._app = FastAPI()
        self._protocol = protocol
        self._root_endpoint = root_endpoint
        self._host = host
        self._port = port

        if redirect_from_root:
            @self._app.get("/")
            async def redirect_to_api():
                return RedirectResponse(status_code=301,
                                        url=f"{self._protocol}://{self._host}:{self._port}/{self._root_endpoint}")

        @self._app.get(f"/{self._root_endpoint}")
        async def read_root():
            return {"ping": "pong!"}

    def add_router(self, new_router: Router):
        """
        ome logic to add router
        Need this functionality
        was localhost:----/
        add router like APIRouter
        after localhost:----/ become
        localhost:----/
            api/
                *stuff from api*
        """
        for endpoint, callback in new_router._callbacks.items():
            self._app.add_api_route()
    def start(self) -> None:
        host = self._host
        port = self._port

        print(f"Server started\n{self._protocol}://{host}:{port}/{self._root_endpoint}")

        from uvicorn.main import run as uvicorn_run
        uvicorn_run(self._app, host=host, port=port)
