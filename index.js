// const net = require("net");

// telnet 127.0.0.1
const server = net.createServer(socket => {
    console.log("connected");

    socket.on("data" , data => {
        console.log(data);
    })
})

server.listen(3000)



// echo "12345678" | nc -w1 -u  127.0.0.1 3000
const dgram = require("dgram");

const socket = dgram.createSocket('udp4');


socket.on("message", (msg , rinfo) => {
    console.log(`message is ${msg} from ${rinfo.address}  ${rinfo.port} ${rinfo.size} ${rinfo.family} `)
})


socket.bind(3000)