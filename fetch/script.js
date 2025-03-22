const URL = 'https://dummyjson.com/products';
function chamaapi() {
    fetch(URL)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => console.error(error));
}
chamaapi();