// const URL = 'https://dummyjson.com/products';
const URL = 'http://localhost:3000/user/1'; 
async function chamaapi() {
    const response = await fetch(URL);
    if (response.status === 200) {


        const data = await response.json();

            console.log(data);
        }      
        
}
chamaapi();