from __future__ import annotations

import os
import socket
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path


ROOT = Path(__file__).resolve().parent
PORT = int(os.environ.get("PORTFOLIO_PORT", "8080"))
HOST = os.environ.get("PORTFOLIO_HOST", "0.0.0.0").strip() or "0.0.0.0"


def resolve_lan_ip() -> str:
    sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    try:
        sock.connect(("8.8.8.8", 80))
        return sock.getsockname()[0]
    except OSError:
        return "127.0.0.1"
    finally:
        sock.close()


def main() -> None:
    handler = partial(SimpleHTTPRequestHandler, directory=str(ROOT))
    server = ThreadingHTTPServer((HOST, PORT), handler)

    lan_ip = resolve_lan_ip()
    print(f"Portfolio local URL: http://127.0.0.1:{PORT}")
    if lan_ip != "127.0.0.1":
        print(f"Portfolio iPhone/LAN URL: http://{lan_ip}:{PORT}")
        print("Open the LAN URL from your iPhone while both devices are on the same Wi-Fi.")

    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        server.server_close()


if __name__ == "__main__":
    main()