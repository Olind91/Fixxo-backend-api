
//CRUD innan MongoDB

/*
     //Create - POST - Behöver bodyparser - initialisera med hjälp av marticleNumberdleware
    router.post('/', (req, res) => {
    const newProduct = {
        articleNumber:(products[products.length -1])?.articleNumber > 0 ? (products[products.length -1])?.articleNumber + 1 : 1, //Kollar efter objekt, tar sista objektet i arrayen och lägger +1, annars sätts objekt som 1.
        name: req.body.name,
        category:req.body.category,
        description:req.body.description,
        price:req.body.price,
        rating:req.body.rating,
        imageName:req.body.imageName
        
    }

    //Kollar så att alla värden är uppfyllda, om inte, skickar felmeddelande.
    if(!newProduct.name || !newProduct.price || !newProduct.category || !newProduct.description || !newProduct.rating ){
        return res.status(400).json({ msg: 'You need to include a name, description, category, price, rating and an to create a new product'});
    }

    newProduct.push(newProduct); //Tar den hårkodade arrayen och lägger till den nya informationen
    //res.json(products);      //Skickar tillbaka hela arrayen med alla products och den nya
    res.redirect('/');
});



//Hämta ett articleNumber - GET
router.get('/:articleNumber', (req, res) => {
    const found = products.some(product => product.articleNumber === parseInt(req.params.articleNumber)); //"some" går genom condition och ger true eller false, 
    

    //Går genom våra articleNumber och kollar så att det vi vill hämta finns.
    if(found) {
        res.json(products.filter(product => product.articleNumber === parseInt(req.params.articleNumber))); //req.params hämtar som string, behöver definera articleNumber som nummer med hjälp av parseInt.
    } else {
        res.status(400).json({ msg: `No product with the articleNumber of ${req.params.articleNumber}`});
    }
    
    //Går genom vårt condition och kollar om articleNumber finns, finns inte articleNumber så skickar den status 400 och ett felmeddelande.
});



//Update product - PUT
router.put('/:articleNumber', (req, res) => {
    
    const found = products.some(product => product.articleNumber === parseInt(req.params.articleNumber)); 
     
    //Skickar ny info till ett existerande articleNumber, funktionen loopar genom listan för att se så att articleNumber matchar.
    
    if(found) {
       const updateProduct = req.body;
       products.forEach(product => {
        
        if(product.articleNumber === parseInt(req.params.articleNumber)) {
            product.name = updateProduct.name ? updateProduct.name : product.name; //Uppdaterar namn om nytt namn angetts, annars behåller den det gamla
            product.description = updateProduct.description ? updateProduct.description : product.description; // ----||----
            product.category = updateProduct.category ? updateProduct.category : product.category;
            product.price = updateProduct.price ? updateProduct.price : product.price;
            product.rating = updateProduct.rating ? updateProduct.rating : product.rating;
            product.imageName = updateProduct.imageName ? updateProduct.imageName : product.imageName;
            
            res.json({ msg: 'Product updated', product});
        }
       });
    } else {
        res.status(400).json({ msg: `No product with the articleNumber of ${req.params.articleNumber}`});
    }
    
    
});


//Delete product - DELETE
router.delete('/:articleNumber', (req, res) => {
    const found = products.some(product => product.articleNumber === parseInt(req.params.articleNumber)); 
        
    if(found) {
        res.json({ msg: 'Product deleted', products: products.filter(product => product.articleNumber !== parseInt(req.params.articleNumber))}); 
    } else {
        res.status(400).json({ msg: `No product with the articleNumber of ${req.params.articleNumber}`});
    }
      
});

*/

/*
Middleware literally means anything you put in the middle of one layer of the software and another. 
Express middleware are functions that execute during the lifecycle of a request to the Express server. 
Each middleware has access to the HTTP request and response for each route (or path) it’s attached to. 
In fact, Express itself is compromised wholly of middleware functions. Additionally, 
middleware can either terminate the HTTP request or pass it on to another middleware function using next (more on that soon).
This “chaining” of middleware allows you to compartmentalize your code and create reusable middleware.
*/