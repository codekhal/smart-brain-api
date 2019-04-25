const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const database = {
    users: [
        {
            id: '123',
            name: 'Khushal',
            email: 'khushal@gmail.com',
            password: 'khush',
            entries: 0,
            joined: new Date()
        },
        {
            id: '124',
            name: 'Khushi',
            email: 'khushi@gmail.com',
            password: 'khushi',
            entries: 0,
            joined: new Date()
        },


    ]
}

app.get('/',(req,res) => {
    res.send("its working!");
})

app.post('/signin',(req,res) => {
    if(req.body.email === database.users[0].email && 
        req.body.name === database.users[0].name) {
            res.json('success');
        }
    else {
        res.status(400).json('error logging in');
    }
})


app.listen(3000, () => {
    console.log("app is running!");
})