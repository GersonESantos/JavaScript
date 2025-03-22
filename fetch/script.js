// const URL = 'https://dummyjson.com/products';
const URL = 'http://localhost:3000/user/1'; 
function chamaapi() {
    fetch(URL)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => console.error(error));
}
chamaapi();