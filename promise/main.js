"Use Strict"
//promise
let promise = Promise.resolve('foo');

promise.then(res => console.log(res));

//implementing timeout
let timeoutPromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(2), 3000);
});

timeoutPromise.then(res => console.log(res));

//REST serice call

let getData  = (method, url) => {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open(method, url);

        xhr.onload = () => {
            if(this.status <= 200 && this.status > 300){
                resolve(xhr.response);
            }else{
                reject({
                    status: xhr.status,
                    statusText: xhr.statusText
                });
            }
        };

        xhr.onerror = () => {
            reject({
                status: xhr.status,
                statusText: xhr.statusText
            })
        };

        xhr.send();
    });
}

getData('GET', 'http://jsonplaceholder.typicode.com/todos').then((data) =>{
    console.log(data)
}).catch((err) => {
    console.log(err);
})

