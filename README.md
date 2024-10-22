# PDF Letterhead Generator

This project provides a simple tool to generate PDF letterheads using Deno and Puppeteer.

## Features

- Creates a PDF letterhead with sender and recipient information
- Uses Puppeteer to generate the PDF from HTML content
- Customizable letterhead layout using inline CSS
- Utilizes the Arc browser for PDF generation

## Main Components

- `createLetterhead.ts`: Contains the main functionality for creating the PDF letterhead
- `input.ts`: (Not provided, but referenced) Contains input data such as sender, recipient, and output file information

## Usage

1. Ensure you have Deno installed on your system
2. Make sure you have the Arc browser installed at the default location
3. Run the script using Deno:

```bash
deno run --allow-net --allow-write --allow-env --allow-run createLetterhead.ts
