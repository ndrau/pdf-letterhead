import puppeteer from "https://deno.land/x/puppeteer@16.2.0/mod.ts";

async function createPDF(senderInfo: string, recipientInfo: string, outputFilename: string): Promise<void> {
    // HTML Template for the letterhead
    const htmlContent = `
    <html>
    <head>
        <style>
            body { font-family: Arial, sans-serif; }
            .letterhead {
                margin-top: 2.7cm;
                margin-left: 2.5cm;
                margin-right: 1.0cm;
                font-size: 12px;
            }
            .sender { font-size: 8px; }
            .recipient { margin-top: 2cm; }
        </style>
    </head>
    <body>
        <div class="letterhead">
            <div class="sender">
                Abs.: ${senderInfo}
            </div>
            <div class="recipient">
                ${recipientInfo.replace(/\n/g, '<br>')}
            </div>
        </div>
    </body>
    </html>`;

    // Launch Puppeteer with the Arc browser as the executable
    const browser = await puppeteer.launch({
        executablePath: "/Applications/Arc.app/Contents/MacOS/Arc"  // Path to Arc browser
    });
    const page = await browser.newPage();
    await page.setContent(htmlContent);
    await page.pdf({ path: outputFilename, format: 'A4', margin: { top: '1cm', bottom: '1cm' } });

    await browser.close();
    console.log(`PDF created: ${outputFilename}`);
}

// Example usage
import { outputFile, recipient, sender } from "./input.ts";

createPDF(sender, recipient, outputFile).catch(err => console.error(err));
