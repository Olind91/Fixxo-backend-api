require('dotenv').config();
const PORT = process.env.PORT || 7000; //Kollar efter port i environment variabel, kör på 7000 om inget annat är tillgängligt.
const MongoDBInit = require('./api_server');
const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const cors = require('cors');
const path = require('path'); //node.js modul som hjälper med file-paths
const products = require('./Schemas/ProductSchema')




//initialisera middleware
app.use(express.json()); //Hanterar json
app.use(express.urlencoded({ extended:false }));  
app.use(cors());


//Handlebars Middleware
app.engine('handlebars', exphbs.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');



//Homepage Route CRUD Products
app.get('/', (req, res) => res.render('index', {
    title:'Product CRUD',
    products
    
}));



//Set static folder
app.use(express.static(path.join(__dirname, 'public')));



//Routes för Products
const productTags = require('./Routes/productsTags')
app.use('/api/products', productTags);




MongoDBInit()
app.listen(PORT, () => console.log(`Server API started on port ${PORT}`));













