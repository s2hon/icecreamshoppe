function oneIce(props){
    const {name, price, awesomeness} = props;
    // Step 2: Place the data in the html
    return /*html*/`        
        <ul>
            <li>${name}</li>
            <li><p>price: $ ${price}</p></li>
            <li><p>Awesomeness: ${awesomeness} /10 </p></li>

            <a href='/icecream'><li>Go Home</li></a>
        </ul>    
   
    `;
}

module.exports = oneIce;