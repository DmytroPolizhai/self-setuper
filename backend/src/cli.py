import argparse

from server import Server
from routers.api_router import APIRouter


def main() -> None:
    parser = argparse.ArgumentParser(description="Start API service.")

    parser.add_argument("--root", action="store", type=str, default="api", help="Root endpoint(default api)")
    parser.add_argument("--port", action="store", type=int, default=8000, help="Server port number(default 8000)")
    parser.add_argument("--host", action="store", type=str, default="localhost", help="Server host(default localhost)")
    parser.add_argument("--protocol", action="store", type=str, default="http", help="Protocol(default http)")
    parser.add_argument("--root-redirect", action="store", type=bool, default=True,
                        help="Redirect to root endpoint(default True)")

    args = parser.parse_args()

    server = Server(root_endpoint=args.root, host=args.host, port=args.port, protocol=args.protocol,
                    redirect_from_root=args.root_redirect)

    server.add_router(APIRouter())

    # server.start()


if __name__ == "__main__":
    main()
