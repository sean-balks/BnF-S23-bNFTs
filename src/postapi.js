const fs = require('fs');
const fetch = require('node-fetch');
const FormData = require('form-data');

for (i = 1; i < 101; i++) {
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
    
    sleep(1000).then(
        fetch('https://api.nftport.xyz/v0/files', options)
        .then(response => {
            return response.json()
        })
        .then(responseJson => {
            // Handle the response
            console.log(responseJson);
        })
    );

    // sleep(500);/
}