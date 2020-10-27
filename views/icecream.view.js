function renderIce(props) {
    const {icecream, type} = props;
    return /*html*/ `
        <h1>${icecream}</h1>
            <ul>
                ${type.map(type => {
                    return /*html*/`
                        <li>
                            <a href='./icecream/${type.routeName}'><p>${type.name}</p></a>
                            <p>price: $ ${type.price}</p>
                            <p>Awesomeness: ${type.awesomeness} /10 </p>
                        </li>`}).join("")}
            </ul>
    `
}

module.exports = renderIce;