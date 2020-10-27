function renderLayout(props) {
    const {
        title = "",
        style = "",
        children = ""
    } = props;
    return /*html*/ `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>${title}</title>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
        </head>
        <body>
            <div class="jumbotron">
                <h1 class="text-center">${title}</h1>
            </div>
            <div class="container">
                <div class="col-sm-6 col-sm-offset-3">
                    ${children}
                </div>
            </div>
        </body>
        </html>
    `;
}

module.exports = renderLayout;