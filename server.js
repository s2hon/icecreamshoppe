const express = require('express');
const app = express();
let thisType = [];

const PORT = process.env.PORT || 8080;

const renderAll = require("./views/layout.view.js");
const renderOne = require('./views/oneice.view');
const renderIce = require('./views/icecream.view');

const icecreams = [
    {routeName: 'bourbon-pecan-pie', name: 'Bourbon Pecan Pie', price: 6, awesomeness: 8.4},
    {routeName: 'brewed-to-matter', name: 'Brewed to Matter', price: 5, awesomeness: 9.6},
    {routeName: 'cherry-garcia', name: 'Cherry Garcia', price: 4, awesomeness: 8.8},
    {routeName: 'cold-brew-caramel-latte', name: 'Cold Brew Caramel Latte', price: 5, awesomeness: 9.2},
    {routeName: 'smores', name: 'Smores', price: 4, awesomeness: 8.2},
    {routeName: 'urban-bourbon', name: 'Urban Bourbon', price: 6, awesomeness: 8.4}
];

app.get("/", function(req, res){
res.send(`
<a href='/icecream'>Go Checkout all the Flavors</a>
What is your favorite flavor?`)
});

app.get("/icecream", function(req, res){
    const html = renderAll({
        title: 'my favorite Ice Cream',
        children: renderIce({icecream: 'ALL OF THEM', type:icecreams})
    });
    res.send(html);
});

app.get("/icecream/:name?", function(req, res){
    var chosen = req.params.name;
    console.log(chosen);
    for (var i = 0; i < icecreams.length; i++) {
        if (chosen == icecreams[i].routeName) {
            const html = renderAll({
                title: 'this one is...'+icecreams[i].name,
                children: renderOne(icecreams[i])
            });
            res.send(html);
        };
        
    }
});

app.listen(PORT, function() {
    console.log('Server listening on: http://localhost:' + PORT);
});