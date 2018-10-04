const dns = require('dns');
const { from } = require('rxjs');

const hostname = "www.mum.edu"; 

// direct
dns.resolve4(hostname,(err, addresses) => {
	if(err){
		console.log("Direct:", err.message);
	}else{
		console.log("Direct:", addresses);
	}
});

// using promise
const ipPromise = (url) => new Promise((resolve, reject) => {
	dns.resolve4(url,(err, addresses) => {
		if(err){
			reject(err.message);
		}else{
			resolve(addresses);
		}
	});
});



ipPromise(hostname)
	.then((data) => console.log("Promise:", data))
	.catch((err) => console.log("Promise:", err));

// using Async/wait
async function getIPAsync(url){
	try{
		const ip = await ipPromise(url);
		console.log("AsyncWait:", ip);
	}catch(err){
		console.log("AsyncWait:", err);
	}
}
getIPAsync(hostname);

// using observables
from(ipPromise(hostname)).subscribe(info => console.log("Observable:",info));