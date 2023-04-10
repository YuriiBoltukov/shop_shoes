import {products} from "../MOCK/products";

function getData(products: any) {
    const productsData = fetch(products)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error))
}