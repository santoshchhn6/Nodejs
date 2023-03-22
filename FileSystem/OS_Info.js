var os=require('os');

console.log("RAM Size:"+os.totalmem());
console.log("RAM Available:"+os.freemem());
console.log("Home Dire:"+os.homedir());
console.log("Network Interface:"+os.networkInterfaces());
console.log("Platform:"+os.platform());
console.log("UP Time:"+os.uptime());
console.log("Version:"+os.version());