const request = require('request');

function fetchDataCallback(url, callback) {
    request(url, (err, response, body) => {
        if (err) {
            return callback(err);
        }
        processData(body, callback);
    });
}

function processData(data, callback) {
    // Simulate an asynchronous operation
    setTimeout(() => {
        const processedData = JSON.parse(data).map(item => item.name);
        callback(null, processedData);
    }, 1000);
}

fetchDataCallback('https://jsonplaceholder.typicode.com/users', (err, result) => {
    if (err) {
        console.error('Error fetching or processing data:', err);
    } else {
        console.log('Processed data:', result);
    }
});
