const https = require('https');
const jsdom = require('jsdom');
const $ = require('jquery')(new jsdom.JSDOM().window);
const path = require('path');
const fs = require('fs');

// 加载模拟浏览器请求头的json文件
let jsonPath = path.join(__dirname,"../data/https_options.json");
let jsonData = fs.readFileSync(jsonPath,'utf-8');
let headers = JSON.parse(jsonData);


let html = '';
let options = {
		hostname: "github.com",
		method: "GET",
		path: "/ourfor/Blog/issues/25",
		headers
};
https.get(options,function(resp){
		resp.on('data',function(chunk){
				html += chunk;
		});
		resp.on('end',()=>{
				console.log(html);
				let $doc = $(html);
				let $imgs = $doc.find('img');
				$imgs.each((i)=>{
						let link = $imgs.eq(i).attr('src');
						console.log(link);
				});
		});

});

