const mongoose = require('mongoose')


const port = process.env.PORT || 3000;
const runServer = (app) => {
    app.listen(port, () => {
        console.log("Listening to port " + port);
    })
}

const connectToDatabase = async (app) => {
    mongoose.connect(
        process.env.MONGO_URI
    )
    .then(function () {
        console.log('Successfully connected to Database...');
    })
    .catch(function (err) {
        console.log("Error while connecting to Database ",err);
    });
    runServer(app);
}

module.exports = connectToDatabase;