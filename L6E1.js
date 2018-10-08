const express = require('express');
var morgan = require('morgan');
var validator = require('express-validator');
var app = express();
var bodyParser = require('body-parser');

class Grade {
    constructor(id, name, course, grade) {
        this.id = id;
        this.name = name;
        this.course = course;
        this.grade = grade;
    }
}
var gradesDB = []; // MOCK Database
var id = 4;

//Configuration

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('combined'));
app.use(express.urlencoded({ extended: true }));
app.use(validator());

var port = 5000;


var router = express.Router(); 

// Middleware
router.use(function (req, res, next) {
    
    console.log('Middleware ...');
    return next(); 
});


router.get('/', function (req, res) {
    res.json({ message: 'Welcome to the API' });

    console.log(`A [${grade.name}] Record is added successfully `);
});


router.route('/grades')
    .post((req, resp) => {
        var errors = [];
        console.log('posting data received');
        req.assert('name', 'name field is required').notEmpty();
        req.assert('course', 'course field is required').notEmpty();
        req.assert('grade', 'grade field is required').notEmpty();
        var errors = req.validationErrors();
        if (errors) resp.json({ message: errors });
        else {
            var name = req.body.name;
            var course = req.body.course;
            var grade = req.body.grade;
            var gradeInstance = new Grade(id, name, course, grade);
            id++;
            gradesDB.push(gradeInstance);
            resp.json({ message: 'grade created successfully!' });
        }

    })
    .get((req, resp) => {
        console.log('size: ' + gradesDB.length);
        if (gradesDB.length == 0)
            resp.send(new Error());
        resp.json(gradesDB);
    })

router.route('/grades/:grade_id')
    .get((req, resp) => {
        var id = req.params.grade_id;
        var name = req.body.name;
        var course = req.body.course;
        var gradeNew = req.body.grade;
        var grade;
        for (let g of gradesDB) {
            if (g.id == id) grade = g;
        }

        if (!grade) resp.send(new Error('No grade with such id'));
        resp.json(grade);
    })
    .put((req, resp) => {
        var id = req.params.grade_id;
        var grade;
        for (let g of gradesDB) {
            if (g.id == id) grade = g;
        }
        if (!grade) resp.send(new Error('No grade with such id'));
        grade.name = name;
        grade.course = course;
        grade.grade = gradeNew;
        resp.json({ message: 'Grade updated successfully!' });
    })
    .delete((req, resp) => {
        var id = req.params.grade_id;
        var grade;
        for (let g of gradesDB) {
            if (g.id == id) grade = g;
        }
        if (!grade) resp.send(new Error('No grade with such id'));
        gradesDB.pop(grade);
        resp.json({ message: 'deleting done successfully' });
    });


app.use('/api', router);


app.listen(port, function () {
    console.log('Server Running on: ' + port);
    console.log('Loading Data...');
    var grade1 = new Grade('1', 'Alem', 'FPP', 'A');
    var grade2 = new Grade('2', 'TG', 'MPP', 'A');
    var grade3 = new Grade('3', 'Fevi', 'MWA', 'A');
   
    gradesDB.push(grade1);
    gradesDB.push(grade2);
    gradesDB.push(grade3);
   
});