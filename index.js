const express = require('express');
const mongoose = require("mongoose");
<<<<<<< HEAD

// Import models
const Course = require('./models/courseModel');
const Student = require('./models/studentModel');

// Import routes
const courseRoute = require('./routes/courseRoute');
const studentRoute = require('./routes/studentRoute');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true}));



app.use('/api', courseRoute);
app.use('/api', studentRoute);
=======
const Library = require('./models/libraryModel.js');
// Import routes
const libraryRoute = require('./routes/libraryRoute.js');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false}));



app.use('/api', libraryRoute);
>>>>>>> 0d822ef75e1e7e78de20dad7c413482482d14e94

app.get('/', (req, res) => {
    res.send('Hello World')
});

// Connect MongoDB
mongoose.connect("mongodb+srv://juliuseli2004:dfrjhCa74G9q88hs@cluster0.8l2ki.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(() => {
    app.listen(3000, () =>{
        console.log("Server is running on port 3000.....");
    });

    console.log('MongoDB is connected')
})
.catch(() => {
    console.log('MongoDB connection failed');
});

