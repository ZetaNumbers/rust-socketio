/**
 * This is an example server, used to test the current code.
 * It might be a good idea to use this in an automated test.
 */
const engine = require('engine.io');
const server = engine.listen(4200);

console.log("Started")
server.on('connection', socket => {
    console.log("Connected");

    socket.on('message', message => {
        console.log(message.toString());
    });

    socket.on('error', message => {
        console.log(message.toString());
    });

    socket.on('close', () => { 
        console.log("Close");
    });

    socket.send('utf 8 string');
});


