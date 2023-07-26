import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { v4 as uuidv4 } from 'uuid'
import { StoreContext } from '../../Context/Index'
import OrderCard from '../OrderCard/Index'
import { product, order } from '../../Types/PropTypes'
import { totalPrice } from '../../Utils/Index'
import './styles.css'

const CheckoutSideMenu = () => {
    const context = useContext(StoreContext)

    const handleDeleteProduct = (id: number) => {
        const filteredProducts = context.cartProducts.filter((product: product) => product.id !== id)
        context.setCartProducts(filteredProducts)
    }

    const handleCheckout = () => {
        const orderToAdd: order = {
            date: '01.2.23',
            products: context.cartProducts,
            totalProducts: context.cartProducts.lenght,
            totalPrice: totalPrice(context.cartProducts)
        }

        context.setOrder([...context.order, orderToAdd])

        context.setCartProducts([])
    }

    return (
        <aside
            className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed bg-white right-0 border border-black rounded-lg` }
        >
            <div className='flex justify-between items-center'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <XMarkIcon onClick={() => context.closeCheckoutSideMenu()} className='h-6 w-6 cursor-pointer'/>
            </div>

            <div className='px-6 overflow-y-auto flex-1'>
                {
                    context.cartProducts.map((product: product) => (
                        <OrderCard
                            key={uuidv4()}
                            id={product.id}
                            title={product.title}
                            imageURL={product.image}
                            price={product.price}
                            quantity={product.quantity}
                            handleDeleteProduct={handleDeleteProduct}
                        />
                    ))
                }
            </div>

            <div className='px-6 mb-6'>
                <p className='flex justify-between items-center mb-2'>
                    <span className='font-light'>Total:</span>
                    <span className='font-medium text-xl'>${totalPrice(context.cartProducts)}</span>
                </p>

                <Link to='/my-orders/last'>
                    <button className='w-full bg-black py-3 text-white rounded-lg' onClick={() => handleCheckout()}>Checkout</button>
                </Link>
            </div>
        </aside>
    )
}

export default CheckoutSideMenu