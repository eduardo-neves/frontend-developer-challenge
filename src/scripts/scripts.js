var output = "";

function getData(){
    fetch('https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1')
    .then(response => response.json())
    .then(products => console.log(products));
}

function generateCards(){
    let template = `
        <div id="productCard">
            <a  href="https://placeholder.com"><img id="productImage" src="https://via.placeholder.com/200x150"></a>
            <h2 id="productName">Nome do produto</h2>
            <p>Descrição do produto um pouco maior, com duas linhas ou três que explica melhor do que se trata.</p>
            <p>De: R$23,99</p>
            <h3 id="productPrice">Por: R$19,99</h3>
            <p>ou 2x de R$9,99</p>
            <input id="BtnComprar" value="Comprar" type="button" onclick="">
        </div>
        `;
        for(var i = 1; i<= 8; i++){
           output = output + template;
          }

        document.getElementById("response").innerHTML = output;
}


