
	let x = [4,1,5,7,2,3,1,4,6,5,2];
	console.log(removeDups1(x));
	
	console.log(removeDups2(x));
	
	//using ES6
	function removeDups1(myArray){
		return myArray.filter((item, index, arr) => {
			return arr.indexOf(item) == index;
		});
	}

	function removeDups2(myArray){
		return [...new Set(myArray)];
	}


	// using promise
	function removeDupsPromise(myArray){
		return new Promise((resolve, reject) => {
			resolve(removeDups1(myArray));
		});
	}
	removeDupsPromise(x).then(data => console.log(data));

	// using Async/wait
	async function removeDupsAsyncWait(myArray){
		try{
			let filteredArr = await removeDupsPromise(myArray);
			console.log(filteredArr);
		}catch(error){
			console.log(error);
		}
	}
	removeDupsAsyncWait(x);
	console.log('Finish');

	// using observables
	const { from } = rxjs;
	const { distinct, reduce } = rxjs.operators;
	from(x)
		.pipe(
			distinct(),
			reduce(
				(acc,cur) => {
					acc.push(cur);
					return acc;
				},[]),
		)
		.subscribe(
			itm => console.log(itm),
			null,
			() => console.log('Done')
		)
