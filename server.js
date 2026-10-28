const http = require("http");
http.createServer((req, res) => res.end("hello from cicd-cert-test"))
    .listen(process.env.PORT || 8080);
