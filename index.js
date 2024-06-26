
const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect("mongodb+srv://ramapurammaneesha:Amma0402@cluster0.c0s2lps.mongodb.net/abc", {
  useNewUrlParser: true // to avoide the deprication warring
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )


app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
  console.log('Express app running on port ' + (process.env.PORT || 3000))
});
