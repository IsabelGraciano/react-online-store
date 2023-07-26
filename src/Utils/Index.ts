import { product } from "../Types/PropTypes";

export const totalPrice = (products: product[]) => {
    let price:number = 0;

    products.forEach((product: product) => price += product.price * product.quantity);

    return price
}