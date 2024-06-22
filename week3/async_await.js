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

async function fetchData(url) {
    try {
        const data = await fetchDataPromise(url);
        const processedData = await processDataPromise(data);
        console.log('Processed data:', processedData);
    } catch (err) {
        console.error('Error fetching or processing data:', err);
    }
}

fetchData('https://jsonplaceholder.typicode.com/users');
