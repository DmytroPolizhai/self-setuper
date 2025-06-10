from typing import List

from fastapi.responses import RedirectResponse
from fastapi import APIRouter
import uvicorn

from src.fabrics.router_fabric import RouterFabric


class Server:
    def __init__(self,
                 root_endpoint: str = "api",
                 host: str = "localhost",
                 port: int = 8000,
                 protocol: str = "http",
                 redirect_from_root: bool = True) -> None:

        self._fabric = RouterFabric()
        self._protocol = protocol
        self._root_endpoint = root_endpoint
        self._host = host
        self._port = port

        # Define FastAPI routes directly on the fabric app
        app = self._fabric.app

        if redirect_from_root:
            @app.get("/")
            async def redirect_to_api():
                return RedirectResponse(
                    status_code=301,
                    url=f"{self._protocol}://{self._host}:{self._port}/{self._root_endpoint}"
                )

        @app.get(f"/{self._root_endpoint}")
        async def read_root():
            return {"ping": "pong!"}

    def include_router(self, new_router: APIRouter) -> None:
        self._fabric.register_router(new_router)

    def include_routers(self, new_routers: List[APIRouter]) -> None:
        for new_router in new_routers:
            self.include_router(new_router)

    def start(self) -> None:
        app = self._fabric.build()

        print(f"Server started\n{self._protocol}://{self._host}:{self._port}/{self._root_endpoint}")

        uvicorn.run(app, host=self._host, port=self._port)
