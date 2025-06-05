import argparse

from server import Server


def main() -> None:
    parser = argparse.ArgumentParser(description="Start API service.")

    parser.add_argument("--root_endpoint", action="store", type=str, default="api", help="Root endpoint(default api)")
    parser.add_argument("--port", action="store", type=int, default=8000, help="Server port number(default 8000)")
    parser.add_argument("--host", action="store", type=str, default="localhost", help="Server host(default localhost)")

    args = parser.parse_args()

    server = Server(root_endpoint=args.root_endpoint, host=args.host, port=args.port)
    server.start()


if __name__ == "__main__":
    main()
