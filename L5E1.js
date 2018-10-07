const axios = require('axios');
const  express = require('express');
const { Observable, Subject, ReplaySubject, from, of, range } = require('rxjs');
const { map, filter, switchMap } = require('rxjs/operators');

const app = express();

app.set('x-powered-by', false);
app.set('strict routing', true);
app.enable('case sensitive routing');
app.enable('trust proxy');

//Using Promise
app.get('/users', (req, res) => {
    axios.get('http://jsonplaceholder.typicode.com/users/')
         .then((response) => {
             res.send(JSON.stringify(response.data));
             res.end();

         })
         .catch((error) => console.log(error));
});

//Using Async and Await
// app.get('/users', async function jsonApi(req, res) {
//     try{
//         const jsonData = await axios.get('http://jsonplaceholder.typicode.com/users/');
//         res.send(jsonData);
//         res.end();
//     }
//     catch(error){
//         console.log('Error:', error.message);
//     }
// });

//Useing Observable
app.get('/users', function (req, res){
    from(axios.get('http://jsonplaceholder.typicode.com/users/'))
    .pipe(map(output => output.data))
    .subscribe((output) => {
        res.send(output);
        res.end();
    });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));