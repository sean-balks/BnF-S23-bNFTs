const fs = require('fs');
const fetch = require('node-fetch');
const FormData = require('form-data');

// function callAPI(i) {
//     const form = new FormData();
//     const fileStream = fs.createReadStream(`../build/images/${i}.png`);
//     form.append('file', fileStream);

//     const options = {
//     method: 'POST',
//     body: form,
//     headers: {
//         'Authorization': 'a7db6a2d-8d43-4420-b860-561dcd5fcccb',
//     },
//     };

//     sleep(2000).then(
//         fetch('https://api.nftport.xyz/v0/files', options)
//         .then(response => {
//             return response.json()
//         })
//         .then(responseJson => {
//             // Handle the response
//             console.log(responseJson);
//         })
//     );

//     // sleep(500);/
// }

function callAPI(i) {
    const form = new FormData();
    const fileStream = fs.createReadStream(`../build/images/${i}.png`);
    form.append('file', fileStream);

    const options = {
    method: 'POST',
    body: form,
    headers: {
        'Authorization': 'a7db6a2d-8d43-4420-b860-561dcd5fcccb',
    },
    };

    fetch('https://api.nftport.xyz/v0/files', options)
    .then(response => {
        return response.json()
    })
    .then(responseJson => {
        // Handle the response
        console.log(responseJson);
    })
}

let i = 1
// call the API every second
setInterval(function() {
  callAPI(i);
  i += 1
}, 1000); // 1000 milliseconds = 1 second