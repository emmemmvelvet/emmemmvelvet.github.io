# Emm Emm Velvet — Makefile
SHELL := /bin/bash

# Default target: display help
.PHONY: help
help:
	@echo "=========================================================="
	@echo "  Emm Emm Velvet — Automation & Development Tools"
	@echo "=========================================================="
	@echo "  make dev        Start Next.js development server"
	@echo "  make debug      Start dev server with Node.js inspector / debug mode"
	@echo "  make build      Build production bundle and generate SEO files"
	@echo "  make start      Start production server"
	@echo "  make sitemap    Generate static public/sitemap.xml & public/robots.txt"
	@echo "  make lint       Run ESLint code quality checks"
	@echo "  make clean      Remove .next cache and generated files"
	@echo "=========================================================="

# Development server
.PHONY: dev
dev:
	npm run dev

# Debug mode (Node.js inspector enabled on port 9229 for VS Code / Chrome DevTools)
.PHONY: debug
debug:
	NODE_OPTIONS='--inspect=0.0.0.0:9229' npm run dev

# Production build + automated SEO generation
.PHONY: build
build:
	npm run build

# Start production server
.PHONY: start
start:
	npm run start

# Generate sitemap and robots
.PHONY: sitemap seo
sitemap seo:
	node scripts/generate-seo.mjs

# Code quality check
.PHONY: lint
lint:
	npm run lint

# Clean build artifacts
.PHONY: clean
clean:
	rm -rf .next public/sitemap.xml public/robots.txt
