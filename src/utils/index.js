// Esta funcion calcula el precio total de nuestr orden.
//Es una funcion parametrizada, el tipo de dato que tiene products es array... cartProduct: Array of objects.  returns a number, total price of the function.
export const totalPrice = (products) => {
    let sum = 0
    products.forEach(product => sum += product.price)
    return sum
}