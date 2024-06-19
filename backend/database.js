const mongoose = require('mongoose');
const URI = 'mongodb://localhost/tp5-bd'; //127.0.0.1 => localhost
mongoose.connect(URI)
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err))
module.exports = mongoose;