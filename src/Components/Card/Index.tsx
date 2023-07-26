import { product } from '../../Types/PropTypes'
import { useContext, useState } from 'react';
import { StoreContext } from '../../Context/Index';
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline'

const Card = (props: {data: product}) => {
    const { data } = props;
    const context = useContext(StoreContext)
    const [productQuantity, setProductQuantity] = useState<number>(0)

    const addProductToCart = (e: React.MouseEvent<SVGSVGElement, MouseEvent>, productData: product) => {
        e.stopPropagation()
        context.setShoppingCartCount(context.shoppingCartCount + 1)
        const productAlreadyExistsInCart = context.cartProducts.filter((product: product) => product.id ===  productData.id).length > 0
        
        if (productAlreadyExistsInCart) {
            modifyQuantityFromProduct(productData, 'add')
        } else {
            productData.quantity = 1
            context.setCartProducts([...context.cartProducts, productData])
            setProductQuantity(productData.quantity)
        }
    
        context.openCheckoutSideMenu()
        context.closeProductDetail()
    }
    
    const modifyQuantityFromProduct = (productData: product, modificationType: string) => {
        const cartProductsCopy = context.cartProducts
        const newProductCartProducts = cartProductsCopy.map((product: product) => {
            if (product.id === productData.id) {
                if (modificationType === 'add') {
                    setProductQuantity(product.quantity+1)
                    return {...product, quantity: product.quantity + 1}
                } else if ('remove') {
                    setProductQuantity(product.quantity-1)
                    return {...product, quantity: product.quantity - 1}
                }
            } else {
                return product
            }
        })
        context.setCartProducts(newProductCartProducts)
    }

    const removeProductToCart = (e: React.MouseEvent<SVGSVGElement, MouseEvent>, productData: product) => {
        e.stopPropagation()
        context.setShoppingCartCount(context.shoppingCartCount - 1)
        
        modifyQuantityFromProduct(productData, 'remove')
        
        const productInCart = context.cartProducts.find((product: product) => product.id ===  data.id)
        if (productInCart.quantity === 1) {
            context.setCartProducts(context.cartProducts.filter((product: product) => product.id != productInCart.id))
        }
    
        context.openCheckoutSideMenu()
        context.closeProductDetail()
    }

    const showProduct = (productDetail: product) => {
        context.openProductDetail()
        context.setProductToShow(productDetail)
    }

    const renderIcon = (data: product) => {
        const productInCart = context.cartProducts.filter((product: product) => product.id ===  data.id)

        if (productInCart.length > 0) {
            return (
                <div className='absolute top-0 right-0 flex justify-center items-center bg-white rounded-full m-2 p-1'>
                    <MinusIcon className='w-6 h-6' onClick={(e) => removeProductToCart(e, data)} />
                    <p>{productQuantity}</p>
                    <PlusIcon className='w-6 h-6' onClick={(e) => addProductToCart(e, data)} />
                </div>
            )
        } else {
            return (
                <PlusIcon
                    className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'
                    onClick={(e) => addProductToCart(e, data)}
                />
            )
        }
    }

    return (
        <div
            className='bg-white w-56 h-60 rounded-lg'
            onClick={() => showProduct(data)}
        >
            <figure className='relative mb-2 w-full h-4/5 cursor-pointer'>
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{data.category}</span>
                <img className='w-full h-full object-cover rounded-lg' src={data.image} alt={data.title} />
                {renderIcon(data)}
            </figure>
            <p className='flex justify-between'>
                <span className=' text-sm font-light'>{data.title}</span>
                <span className=' text-lg font-medium'>${data.price}</span>
            </p>
        </div>
    )
}

export default Card