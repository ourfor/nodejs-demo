let timer = setInterval(()=>(console.log(new Date().toLocaleTimeString())),1000);
setTimeout(()=>(timer.unref()),6000);
setTimeout(()=>(timer.ref()),3000);