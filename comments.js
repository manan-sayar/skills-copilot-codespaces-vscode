//Create web server
const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

//read json file
const fs = require('fs');
const data = fs.readFileSync('comments.json');
const comments = JSON.parse(data);

//middleware
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//get request
app.get('/api/comments', (req, res) => {
    res.json(comments);
});

//post request
app.post('/api/comments', (req, res) => {
    const comment = req.body;
    comments.push(comment);
    res.json(comment);
    const data = JSON.stringify(comments, null, 2);
    fs.writeFile('comments.json', data, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("File written successfully");
        }
    });
});

//put request
app.put('/api/comments/:id', (req, res) => {
    const id = req.params.id;
    const comment = req.body;
    comments[id] = comment;
    res.json(comment);
    const data = JSON.stringify(comments, null, 2);
    fs.writeFile('comments.json', data, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("File written successfully");
        }
    });
});

//delete request
app.delete('/api/comments/:id', (req, res) => {
    const id = req.params.id;
    comments.splice(id, 1);
    res.json(comments);
    const data = JSON.stringify(comments, null, 2);
    fs.writeFile('comments.json', data, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("File written successfully");
        }
    });
});

//listen to port 3000
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});