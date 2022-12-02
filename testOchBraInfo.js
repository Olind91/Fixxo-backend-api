
//Hårdkodat för test.

/*const members = [
{
    id:1,
    name:'limpan lund',
    email: 'limpan@lund.com',
    status: 'active',

},
{
    id:2,
    name:'perick pund',
    email: 'perick@pund.com',
    status: 'active',
}
]*/

//Hämtar all info som json
/*
app.get('/api/members', (req, res) => res.json(members));  
*/     

//Hämta ett ID
app.get('/api/members/:id', (req, res) => {
    const found = member.some(member => member.id === parseInt(req.params.id)); //"some" går genom condition och ger true eller false, 
    

    //Går genom våra ID och kollar så att det vi vill hämta finns.
    if(found) {
        res.json(members.filter(member => member.id === parseInt(req.params.id))); //req.params hämtar som string, behöver definera id som nummer med hjälp av parseInt.
    } else {
        res.status(400).json({ msg: `No member with the id of ${req.params.id}`});
    }
    
    //Går genom vårt condition och kollar om ID finns, finns inte ID så skickar den status 400 och ett felmeddelande.
});

/*
Middleware literally means anything you put in the middle of one layer of the software and another. 
Express middleware are functions that execute during the lifecycle of a request to the Express server. 
Each middleware has access to the HTTP request and response for each route (or path) it’s attached to. 
In fact, Express itself is compromised wholly of middleware functions. Additionally, 
middleware can either terminate the HTTP request or pass it on to another middleware function using next (more on that soon).
This “chaining” of middleware allows you to compartmentalize your code and create reusable middleware.
*/