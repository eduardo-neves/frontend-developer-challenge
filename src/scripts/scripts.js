
function getData(){
    fetch('https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1')
    .then(response => response.json())
    .then(products => console.log(products));
}



