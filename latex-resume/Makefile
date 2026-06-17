# ====================================================================
# CONFIGURATION
# ====================================================================
 
# Pass the .tex filename when running 'make' (e.g., make watch FILE=latex-resume/main.tex)
FILE ?= latex-resume/main.tex
 
# --- Internal variables, do not edit ---
# Get the base name of the file without extension (e.g., "main")
BASENAME = $(notdir $(patsubst %.tex,%,$(FILE)))
# The final PDF will have the basename (e.g., "main.pdf")
PDF_OUTPUT = $(BASENAME).pdf
 
# Explicitly choose your engine/distribution path
COMPILER = F:/texlive/2025/bin/windows/xelatex.exe
# COMPILER = D:/miktex/miktex/bin/x64/xelatex.exe
 
BUILD_DIR = build
 
# ====================================================================
# BUILD TARGETS
# ====================================================================
 
.PHONY: all clean setup watch latex-browser-watch npm-setup
 
# Default LaTeX target
all: setup $(PDF_OUTPUT)
 
# Standard core compilation sequence
$(PDF_OUTPUT): $(FILE)
	@echo "Compiling $(FILE) using $(COMPILER)..."
	"$(COMPILER)" -output-directory=$(BUILD_DIR) "$(FILE)"
	"$(COMPILER)" -output-directory=$(BUILD_DIR) "$(FILE)"
	@powershell -Command "if (Test-Path '$(BUILD_DIR)/$(PDF_OUTPUT)') { Copy-Item '$(BUILD_DIR)/$(PDF_OUTPUT)' './' -Force }"
	@echo "Build successful! Generated $(PDF_OUTPUT)"

# --------------------------------------------------------------------
# LIVE PREVIEW / WATCH FEATURE (for external PDF viewers)
# --------------------------------------------------------------------
# This tracks the file's LastWriteTime attribute. If the file changes, 
# it calls 'make FILE=$(FILE)' recursively to rebuild the project.
watch: all
	@echo "===================================================="
	@echo " Starting Live Preview for: $(FILE)"
	@echo " Opening $(PDF_OUTPUT) in your default PDF viewer..."
	@echo " NOTE: For a true 'live' experience, use a PDF viewer that auto-refreshes (e.g., SumatraPDF)."
	@echo " Press Ctrl+C in this terminal to stop the watcher."
	@echo "===================================================="
	@start $(PDF_OUTPUT)
	@powershell -Command "\
		$$file = '$(FILE)'; \
		$$lastWrite = (Get-Item $$file).LastWriteTime; \
		while ($$true) { \
			$$currentWrite = (Get-Item $$file).LastWriteTime; \
			if ($$currentWrite -ne $$lastWrite) { \
				Write-Host '[Change Detected] Recompiling...' -ForegroundColor Yellow; \
				make FILE='$(FILE)'; \
				$$lastWrite = $$currentWrite; \
			} \
			Start-Sleep -Seconds 1; \
		}"

# --------------------------------------------------------------------
# LIVE PREVIEW IN BROWSER
# --------------------------------------------------------------------
latex-browser-watch: npm-setup
	@echo "===================================================="
	@echo " Starting LaTeX Live Preview in your browser..."
	@echo " Watching: $(FILE)"
	@echo " Press Ctrl+C in this terminal to stop the server."
	@echo "===================================================="
	@powershell -Command "$$env:LATEX_FILE='$(FILE)'; npx browser-sync start --config bs-config.js"

# Helper to install Node.js dependencies from package.json
npm-setup:
	@if not exist "node_modules" ( \
		echo "Node.js modules not found. Running 'npm install'..." && npm install \
	)
 
# Create isolated build directory
setup:
	@powershell -Command "if (!(Test-Path '$(BUILD_DIR)')) { New-Item -ItemType Directory -Path '$(BUILD_DIR)' | Out-Null }"
 
# Clean workspace
clean:
	@powershell -Command "if (Test-Path '$(BUILD_DIR)') { Remove-Item -Recurse -Force '$(BUILD_DIR)' }"
	@powershell -Command "if (Test-Path '$(PDF_OUTPUT)') { Remove-Item -Force '$(PDF_OUTPUT)' }"
	@echo "Workspace cleaned."