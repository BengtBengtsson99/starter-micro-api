var http = require('http');
fs = require('fs');


fs.readFile('./html/app.html', function (err, html))
{
    if (err) {
        throw err;
    }
    http.createServer(function (req, res) {
        console.log(`Just got a request at ${req.url}!`)
        res.writeHeader(200, { 'Content-Type': 'text/html' });
        res.write(html);
        res.end();
    }).listen(process.env.PORT || 3000);
};

