const dns = require('dns');
const host = 'www.mum.edu';
const { from } = require('rxjs');

dns.resolve4(host, (err, address) =>{
    if(err){
        console.log("Host:", err.message);
    }else{
        console.log("Host:", address);
    }
}
);

//Using Promise Object

const p = (url) => new Promise((resolve, reject) => {
    dns.resolve4(url, (err, address) =>{
        if(err){
            reject("HostPromise:", err.message);
        }else{
            resolve("HostPromise:", address);
        }
    });
});

p(host)
    .then((data)=> console.log(data))
    .catch((err) => console.log(err));

//Using Async/wait

async function getIp(url) {
    try{
        const ip = await p(url);
        console.log('HostAsync:',ip);
    }catch(err){
        console.log('HostAsync:',err);
    }
}
getIp(host);

//Using Observables

from(p(hostname)).subscribe(value => console.log("Observable:",value));