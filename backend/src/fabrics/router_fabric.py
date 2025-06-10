from fastapi import FastAPI, APIRouter
from typing import List


class RouterFabric:
    def __init__(self):
        self.app = FastAPI()
        self.routers: List[APIRouter] = []

    def register_router(self, router: APIRouter):
        """Register a single router."""
        self.routers.append(router)

    def build(self) -> FastAPI:
        """Attach all routers to the app and return it."""
        for router in self.routers:
            self.app.include_router(router)
        return self.app
