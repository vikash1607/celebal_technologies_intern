const request = require('request');

function fetchDataPromise(url) {
    return new Promise((resolve, reject) => {
        request(url, (err, response, body) => {
            if (err) {
                reject(err);
            } else {
                resolve(body);
            }
        });
    });
}

function processDataPromise(data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const processedData = JSON.parse(data).map(item => item.name);
            resolve(processedData);
        }, 1000);
    });
}

fetchDataPromise('https://jsonplaceholder.typicode.com/users')
    .then((data) => processDataPromise(data))
    .then((processedData) => {
        console.log('Processed data:', processedData);
    })
    .catch((err) => {
        console.error('Error fetching or processing data:', err);
    });
