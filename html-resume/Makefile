# Variables for live preview
PORT ?= 8000

# Attempt to find a suitable browser opening command based on OS
# Use the 'start' command on Windows to open the browser
BROWSER_CMD ?= cmd /c start

.PHONY: all help serve preview live setup

all: help

help: ## Display this help message
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'

serve: ## Start a simple, non-reloading web server
	@echo "Starting server on http://localhost:$(PORT)"
	@echo "Press Ctrl+C to stop the server."
	py -m http.server $(PORT)

live: ## Start a live-reloading server for development
	@echo "--> Ensuring dependencies are installed..."
	@pip install -r requirements.txt --quiet
	@echo "--> Starting live-reloading server. Press Ctrl+C to stop."
	py server.py $(PORT)

preview: ## Open browser and start the live-reloading server
	@echo "Attempting to open browser to http://localhost:$(PORT)..."
	$(BROWSER_CMD) http://localhost:$(PORT)
	@echo "Browser command executed. Now starting server."
	$(MAKE) live

setup: ## Install Python dependencies for live reload
	pip install -r requirements.txt