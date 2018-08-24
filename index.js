let express = require('express'),
    bodyParser = require('body-parser');
let app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

app.listen(process.env.PORT || 5000, () => {
  console.log("Server Running");
});