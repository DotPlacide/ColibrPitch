const express = require('express');

const app = express();
const connectDB = require('./config/db');
//connect to databse
connectDB();
app.use(express.json({extended:true}));
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
//worker routes
app.use('/becomeAworker' , require('./routes/workerRegister'));
app.use('/workerauth' , require('./routes/workerauth'));


//company routes
app.use('/companyregister' , require('./routes/companyRegister'));
app.use('/companyauth' , require('./routes/companyauth'));


//post routes
app.use('/postjob' , require('./routes/project'));
app.use('/companyauth' , require('./routes/companyauth'));


//jobs list
app.use('/project' ,require('./routes/project'));
app.use('/project/:id',require('./routes/project'));
// Client Route
if(process.env.NODE_ENV === 'production') {
    const path = require('path');
    app.use(express.static(path.resolve(process.cwd(), 'build')));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(process.cwd(), 'build', 'index.html'));
    });
}
const PORT= process.env.PORT || 5000;

app.listen(PORT ,() => console.log(`server started at ${PORT}`));