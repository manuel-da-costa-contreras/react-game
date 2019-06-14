const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors');

const lowdb = require('lowdb');

const fileAsync = require('lowdb/adapters/FileAsync');
const adapter = new fileAsync('db.json');
const db = lowdb;

// Port to use
const PORT = 4000;

// Create Server
app.use(cors());
app.use(bodyParser.json());


//instance of server
db(adapter).then(db => {

    app.post('/employee/last', function (req, res) {
        var emp = db.get('employees')
        .last().value();
        
        db.get('employees')
        .push({...req.body, id: emp.id + 1})
        .write()
        
        console.log(emp);

            /* .push({...req.body})
            .write() */

    res.status(200).send({'employee' : 'Employee added successfully'});
    })

    //Routes

    // POST
    // Gets Employee Form and save it in the Json
    app.post('/employee/add', function (req, res) {
        var emp = db.get('employees')
            .last().value();


        db.get('employees')
            .push({...req.body, id: emp.id + 1})
            .write()

    res.status(200).send({'employee' : 'Employee added successfully'});
    })

    // GET
    // Gets all employees in the Json
    app.get('/employees', function(req, res) {
        const employees = db.get('employees')
            .value()


    res.status(200).send(employees)
        
    })

    // Find ID of Employee
    app.get('/employee/edit/:id', function(req, res) {
        const employee = db.get('employees')
            .find( {id: parseInt(req.params.id)} )
            .value()

    res.status(200).send(employee);
    })

    // UPDATE
    app.put('/employee/update/:id', function(req, res) {
        db.get('employees')
            .find( { id: parseInt(req.params.id) } )
            .assign({...req.body})
            .write()

        res.status(200).send('Employee updated successfully');
    })

    // DELETE
    // delete employee if ID in db = to the request
    app.delete('/employee/:id', function(req, res) {
        db.get('employees')
            .remove({ id: parseInt(req.params.id) })
            .write()

    res.status(200).send({'employee' : 'Employee deleted successfully'})
    })
    
})

app.listen(PORT, function(){
    console.log('server is running on port:' ,PORT);
})