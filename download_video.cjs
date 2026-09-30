const https = require('https');
const fs = require('fs');

const url = 'https://cdn.prod.website-files.com/6579b29e061735d1f8804918/65846f882a933f81e3752e50_dance-transcoded.mp4';
const file = fs.createWriteStream('./public/dance-character.mp4');

const options = {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
    'Accept': '*/*',
    'Referer': 'https://www.cosmos.studio/'
  }
};

https.get(url, options, (response) => {
  if (response.statusCode === 301 || response.statusCode === 302) {
    console.log('Redirected to: ', response.headers.location);
    https.get(response.headers.location, options, (res) => {
       res.pipe(file);
       file.on('finish', () => {
         file.close();
         console.log('Download complete');
       });
    });
  } else if (response.statusCode !== 200) {
     console.error('Failed: ', response.statusCode);
  } else {
    response.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log('Download complete');
    });
  }
}).on('error', (err) => {
  console.error('Error: ', err.message);
});
