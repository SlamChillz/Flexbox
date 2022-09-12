const url = require('url');
const fs = require('fs');

exports.callback = async (req, res) => {
    const URL = url.parse(req.url, true);
    let path = URL.pathname;
    if(path == '/home')
        res.writeHead({"Location": "/"});
    if(path == '/'){
        path = '/index';
    }
    fs.readFile(`views${path}.html`, (err, content) => {
        if (err) {
            console.log(err);
            // HTTP Status: 404 : NOT FOUND
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.write("<h1>Page Not Found</h1>");
        } else {	
            //Page found	  
            // HTTP Status: 200 : OK
            res.writeHead(200, {'Content-Type': 'text/html'});	
            // Write the content of the file to response body
            res.write(content.toString());		
        }
        // Send the response body 
        res.end();
    });
    
}