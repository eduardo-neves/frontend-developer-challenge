var output = "";

function getData(){ //work in progress. will try to fetch data and then parse it.
    var promise = "Something";
    fetch('https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1')
    .then(response => response.text())
    .then(products => console.log(products))
    .then(products => promise = products); // response gets logged to console. seems fine.

    document.getElementById("response").innerHTML = promise; //output gets display under the div id='response'.
}

function generateCards(){ //html template for product cards.
    let template = `
        <div id="productCard">
            <a  href="https://placeholder.com"><img id="productImage" src="https://via.placeholder.com/200x150"></a>
            <p id="productName">Nome do produto</p>
            <p>Descrição do produto um pouco maior, com duas linhas ou três que explica melhor do que se trata.</p>
            <p>De: R$23,99</p>
            <h3 id="productPrice">Por: R$19,99</h3>
            <p>ou 2x de R$9,99</p>
            <input id="BtnComprar" value="Comprar" type="button" onclick="">
        </div>
        `; // The template variable receives the basic structure of the card div.
        for(var i = 1; i<= 8; i++){
           output = output + template; // for loop for creating the eight required cards.
          }

        document.getElementById("response").innerHTML = output; //output gets display under the div id='response'.
}


