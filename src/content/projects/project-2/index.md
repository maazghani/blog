---
title: "pdfquery"
description: "CLI tool for building vector databases from PDFs and querying them using GPT."
date: "05/27/2025"
demoURL: "https://github.com/maazghani/pdfquery"
repoURL: "https://github.com/maazghani/pdfquery"
---

![pdfquery](/pdfquery-preview.jpg)

**pdfquery** is a lightweight, CLI-based tool for embedding and querying PDFs using OpenAI and FAISS. Ideal for researchers, engineers, and anyone looking to extract structured information from unstructured PDF content.

It chunks and embeds documents using OpenAI's latest embedding models, stores them with FAISS, and lets you ask questions via the GPT-4o API.

## 🚀 Deploy your own

<div class="flex gap-2">
  <a target="_blank" aria-label="Deploy on Replit" href="https://replit.com/new">
    <img src="/deploy_replit.svg" />
  </a>
</div>

## 📋 Features

- ✅ CLI tool with Typer
- ✅ Chunking with overlap for context preservation
- ✅ Embeddings via OpenAI's `text-embedding-3-small`
- ✅ Querying with `gpt-4o` or `gpt-4o-mini`
- ✅ Dry-run support for inspecting chunks
- ✅ Dockerfile + GitHub workflows
- ✅ Makefile for consistent development
- ✅ Full unit test coverage
- ✅ Markdown-based usage documentation

## ⚡ How it works

1. `pdfquery index --source document.pdf --name my-index`
2. `pdfquery query --name my-index "What are the key ideas?"`

It returns a GPT-4o powered response based only on your document content.

## 💻 Commands

| Command               | Description                                 |
|----------------------|---------------------------------------------|
| make venv            | Create a local Python virtual environment   |
| make install         | Install app in editable mode with dev deps  |
| make test            | Run all unit tests via `pytest`             |
| make lint            | Run linting with `ruff`                     |
| make format          | Auto-format code using `black`              |
| make docker-build    | Build Docker image locally                  |
| make clean           | Remove virtualenv and build artifacts       |

## 🏛️ License

MIT
