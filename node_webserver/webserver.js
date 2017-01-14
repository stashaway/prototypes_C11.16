var http = require('http');
var fs = require('fs');

function handleRequest(request,response){
    console.log('Node console notification - handling request');
    // response.write('Booyah! You get a fritter, all-star!\n');
    // response.write('Path hit: ' + request.url);
    fs.readFile('public/index.html',function(err, data){
        if (err) {
            console.log('Error!'+err);
        } else {
            response.end(data);
        }
    });
}
// function handleError(err,data){
//     console.log('Error!',data);
// }
var server = http.createServer(handleRequest);
server.listen(8086, function(){
    console.log("Server listening on: http://localhost:%s", 8086);

});
