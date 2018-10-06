var fs = require('fs');

function readMyFile(url){
    console.log("RMF: "+url);
    var file = fs.readFileSync(__dirname + '/'+url);
    console.log(file);
    return file;
}

process.on('message', (url) => {
        console.log('Child URL: '+url);
        var myFile = readMyFile(url);
        console.log("Before Send: "+myFile);
        
        process.send(myFile.toString());
});

