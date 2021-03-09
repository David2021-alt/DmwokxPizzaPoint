let carts = document.querySelectorAll('.add-cart');

let products = {
    {
    name: "small Size Pizza"
    price: 900,
        inCart: 0;
    name: "Medium Size Pizza"
    price: 1200,
        inCart: 0;
    name: "Large Size Pizza"
    price: 1500,
        inCart: 0;
    name: " Cripsy Crust Pizza"
    price: 1300,
        inCart: 0;
    name: "Stuffed Crust Pizza"
    price: 1600,
        inCart: 0;
    name: "Glutten-free Crust Pizza"
    price: 1400,
        inCart: 0;

    }
}
for (let i = 0; i < carts.length; i++){
    carts[i].addEventListener('click', () => {
        cartNumbers();
    })

}
function cartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    console.log(productNumbers);
    productNumbers = parseInt(prudctNumbers);

    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cartSpan').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querrySelector('.cart span').textContent = +1;
        {
        
    }
    
}
    onLoadCartNumbers();
