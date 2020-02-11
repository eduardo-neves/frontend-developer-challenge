document.getElementById('fetchProductDataBtn').addEventListener('click', fetchProductData);

function fetchProductData(){
    fetch('https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1')
    .then(response => response.json())
    .then(products => console.log(products))
    .then(products => {
        let output = '<h2>Lists of Products</h2>';
        output += '<ul>';
        products.forEach(function(product) {
            output += `
                <li>
                    ${product.name}
                </li>
            `;
        });
        output += '</ul>'
        document.getElementById("response").innerHTML = output;
    });
}

