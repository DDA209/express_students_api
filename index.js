require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const { PORT, MONGODB_URI } = process.env;

const port = PORT || 3000;

const app = express();

mongoose.connect('mongoose://localhost:27017/student_api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}, (err) => {
    if (err !== null) {
        console.log('DB not connected with err:', err);
        return;
    }
    console.log('DB connected')
});

app.get('/', (req, res) => {
    console.log('GET /');
    res.send('youppi');
})


// Model : Start
const StudentModel = mongoose.model('Student', {
    firstName: String,
    lastName: String,
    age: Number,
    grade: String,
    favoriteSubjects: [String],
    created: {
        type: String,
        default:
    }
})

// Model : End

// Controllers : Start
// Controllers : End






app.listen(port, () => {
    console.log(`Server is connected on port ${port}`);
});