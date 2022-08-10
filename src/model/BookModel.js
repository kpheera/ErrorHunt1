const mongoose = require('mongoose');
mongoose.createConnection('process.env.MONGODB_URI || mongodb://localhost:27017/Library', {useUnifiedTopology: true, useNewUrlParser: true});
const Schema = mongoose.Schema;


const BookSchema = new Schema({
    title : String,
    author: String,
    image: String,
    about: String
});

const bookdata = mongoose.model('bookdata',BookSchema);

module.exports = bookdata;