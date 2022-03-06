
const express = require('express');

const app = express();

const cors = require('cors');

const dotenv = require('dotenv');

dotenv.config();

const connection = require('./dbService');

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended : false }));

/*const serverPort = 5000;

app.listen(serverPort, (err) => { 
    if(err) console.log(err.message)
    console.log('server is listening on port 5000');
    });*/


// create

app.post('/insert', (req, res) => {

    const requestObject = req.body;

    var sql = "INSERT INTO patient_records ('id', 'Patient_name', 'Date', 'Age', 'Gender', 'Contact_number') VALUES ('requestObject.Serial_Number', 'requestObject.Patient_Name', 'requestObject.Date', 'requestObject.Age', 'requestObject.Gender', 'requestObject.Contact_Number')";

    connection.query(sql, (err, result) => {

        if (err) throw err;
        console.log("1 record inserted");
    });
    
    /*const { name } = request.body;
    
    const db = dbService.getDbServiceInstance();

    const result = db.insertNewName(name);

    result
    
    .then(data => response.json({ data: data}))
    
    .catch(err => console.log(err));*/
})

// read

/*app.get('/getAll', (request, response) => {
    const db = dbService.getDbServiceInstance();

    const result = db.getAllData();

    result
    
    .then(data => response.json({data : data}))
    
    .catch(err => console.log(err));
})*/

// update

/*app.patch('/update', (request, response) => {
    const { id, name } = request.body;
    const db = dbService.getDbServiceInstance();

    const result = db.updateNameById(id, name);

    result
    .then(data => response.json({success : data}))
    .catch(err => console.log(err));
});

// delete

app.delete('/delete/:id', (request, response) => {
    const { id } = request.params;
    const db = dbService.getDbServiceInstance();

    const result = db.deleteRowById(id);

    result
    .then(data => response.json({success : data}))
    .catch(err => console.log(err));
});

app.get('/search/:name', (request, response) => {
    const { name } = request.params;
    const db = dbService.getDbServiceInstance();

    const result = db.searchByName(name);

    result
    .then(data => response.json({data : data}))
    .catch(err => console.log(err));
})*/

app.listen(process.env.PORT, () => console.log('app is running'));


