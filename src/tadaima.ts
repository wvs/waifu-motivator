import { cheers } from './cheers';

export function Tadaima() {
    let html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Cat Coding</title>
    </head>
    <body>
        <h1>{Okaeri}</h1>
        <img src="file://../res/Miki_Full_Smile.png" width="300" />
    </body>
    </html>`;
    html = html.replace("{Okaeri}", cheers.cheerOnReturn());
    return html;
}