import { Dropbox } from 'dropbox';
import fetch from 'node-fetch';

if (process.env.NODE_ENV === undefined) {
    require('dotenv-json')();
}

const accessToken = process.env.dropboxtoken;
const dbx = new Dropbox({
    accessToken,
    fetch
});

// dbx.filesListFolder({
//     path: ''
// }).then(response => console.log(response));

dbx.filesGetThumbnailBatch({
    entries: [
        {
            path: '/einstein.png',
            size: 'w32h32',
            format: 'png'
        }
    ]
})
    .then(response => console.log(response))
    .catch(err => console.log(err));
