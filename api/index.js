var express = require("express");
var app = express();
var router = require("./routes/routes")();

// Allow for CORS operations
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/api', router);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});