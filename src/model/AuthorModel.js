const mongoose = require('mongoose');
mongoose.createConnection(process.env.MONGODB_URI || 'mongodb://localhost:27017/Library', {useUnifiedTopology: true, useNewUrlParser: true});
const Schema = mongoose.Schema;


const AuthorSchema = new Schema({
    title : String,
    image: String,
    about: String
});

const authordata = mongoose.model('authordata',AuthorSchema);

module.exports = authordata;