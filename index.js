const express = require('express');
const path = require('path'); //node.js modul som hjälper med file-paths
const app = express();
const exphbs = require('express-handlebars');
const cors = require('cors');
const products = require('./data/Products')



//initialisera middleware
//app.use(logger);

//Body Parser Middleware

app.use(express.json()); //Hanterar json
app.use(express.urlencoded({ extended:false }));  //45.18 föreläsning 4. Hasse har true här. warum?
app.use(cors());



//Handlebars Middleware
app.engine('handlebars', exphbs.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


//Homepage Route CRUD Products
app.get('/', (req, res) => res.render('index', {
    title:'Product CRUD',
    products
}));





const PORT = process.env.PORT || 5000; //Kollar efter port i environment variabel, kör på 5000 om inget annat är tillgängligt.

//Routes för Products
const productTags = require('./Routes/productsTags')
app.use('/api/products', productTags);

const router = require('./Routes/products')
app.use('/api/products', router);


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));











