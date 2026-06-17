import sys
from livereload import Server

def main():
    """
    Starts a live-reloading web server.
    Accepts an optional port number as a command-line argument.
    """
    port = 8000  # Default port
    if len(sys.argv) > 1:
        try:
            port = int(sys.argv[1])
        except ValueError:
            print(f"Warning: Invalid port '{sys.argv[1]}'. Using default port {port}.")

    server = Server()
    server.watch('*.html')
    server.watch('*.css')
    server.watch('*.js')
    server.serve(port=port, host='localhost')

if __name__ == "__main__":
    main()