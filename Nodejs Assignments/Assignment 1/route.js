const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if(url === '/'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Greeting</title></head>');
        res.write('<body><h1>Hello!! How are u??</h1><br><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">SEND</button></form></body>');
        res.write('</html>');
        return res.end();
        
    }
    if(url === '/users'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Users</title></head>');
        res.write('<body><ul><li>User 1</li><li>User 2</li><li>User 3</li><li>User 4</li></ul></body>');
        res.write('</html>');
        return res.end();
    }

    if(url === '/create-user' && method === 'POST'){
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        req.on('end', () => {
            const message = Buffer.concat(body).toString().split('=')[1];
            console.log(message);
        });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        res.end();
    }
};

module.exports = requestHandler;