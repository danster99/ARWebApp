const express = require('express');
const app = express();
const path = require('path');


const { Client } = require('pg');

    const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
    });

    client.connect();

    client.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, res) => {
    if (err) throw err;
    for (let row of res.rows) {
        console.log(JSON.stringify(row));
    }
    client.end();
    });

    
app.set("/", "html");
app.use(express.static(path.join(__dirname, "/")));
app.use(express.json());
app.use(express.urlencoded({extended: false}));



app.get('/', (req, res)=>
{
    res.render('index');
    
});

app.listen(process.env.PORT || 80, () => {
    console.log("Listening on http://visualizr-ar.herokuapp.com:80");
    
});