import { createContext, useState } from 'react';
import { product } from '../Types/PropTypes';

export const StoreContext = createContext<any | undefined>(undefined)

export const StoreContextProdiver = ({children}: { children: JSX.Element}) => {
    // shopping cart
    const [shoppingCartCount, setShoppingCartCount] = useState<number>(0);
    
    // product detail close and open
    const [isProductDetailOpen, setIsProductDetailOpen] = useState<boolean>(false);
    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false);

    // checkout side menu close and open
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState<boolean>(false);
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);
    
    // product detail show product details
    const [productToShow, setProductToShow] = useState<product>({
        id: 0,
        title: '',
        price: 0,
        description: '',
        category: '',
        image: '', 
        rating: {
            rate: 0,
            count: 0,
        },
        quantity: 0
    });

    // Cart products
    const [cartProducts, setCartProducts] = useState<product[]>([])

    // Order
    const [order, setOrder] = useState<product[]>([])

    const valueToSend = {
        shoppingCartCount,
        setShoppingCartCount,
        
        openProductDetail,
        closeProductDetail,
        isProductDetailOpen,

        openCheckoutSideMenu,
        closeCheckoutSideMenu,
        isCheckoutSideMenuOpen,

        productToShow,
        setProductToShow,

        cartProducts,
        setCartProducts,

        order,
        setOrder
    }

    return (
        <StoreContext.Provider value={valueToSend}>
            {children}
        </StoreContext.Provider>
    )
}