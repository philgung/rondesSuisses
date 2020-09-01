const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const nextConfig = require('./next.config');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({dev, conf: nextConfig});
const handle = app.getRequestHandler();

app.prepare().then(() => {
    createServer((requete, reponse) =>
        handle(requete, reponse, parse(requete.url, true).pathname),
    ).listen(port, (err) => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${port}`);
    });
});