var net = require("net");

var chatServer = net.createServer();
let chatList = [];
let nickname = ["Tom","Pitter","Siri","Catana"];

chatServer.on("connection",function(client){
	client.name = client.remoteAddress + ":" + client.remotePort;
	client.write(`Hi ${client.name} !\n`);
	client.nickname = nickname.pop();

	chatList.push(client);
	client.on("data",function(data){
		boradcast(data,this);
	});

	client.on("end",()=>{
		chatList.splice(chatList.indexOf(client),1);
	});

	client.on("error",function(e){
		console.log(e);
	})
});

function boradcast(message,client){
	var cleanup = [];
	chatList.forEach(function(item){
		if(item.writable && client != item){
			item.write(`${client.nickname}:${message}`);
		} else if(!item.writable) {
			cleanup.push(item);
			item.destroy();
		}
		cleanup.forEach(function(item){
			chatList.splice(chatList.indexOf(item),1);
		});
	});
}

chatServer.listen(9000,"127.0.0.1");
