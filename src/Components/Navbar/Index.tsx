import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { isActiveType } from '../../Types/PropTypes'
import { StoreContext } from '../../Context/Index'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'

const Navbar = () => {
    const activeStyle = 'underline underline-offset-4 text-blue-500'
    const isActiveStyle = ({ isActive }: isActiveType) => isActive ? activeStyle : undefined
    const context = useContext(StoreContext)

    return (
        <nav className='flex justify-between items-center fixed z-2 w-full py-5 px-8 text-sm font-light top-0'>
            <ul className='flex items-center gap-3'>
                <li className='font-semibold text-lg'>
                    <NavLink to='/'>Shopi</NavLink>
                </li>
                <li>
                    <NavLink to='/' className={isActiveStyle}>All</NavLink>
                </li>
                <li>
                    <NavLink to='/woman' className={isActiveStyle}>Woman</NavLink>
                </li>
                <li>
                    <NavLink to='/man' className={isActiveStyle}>Man</NavLink>
                </li>
                <li>
                    <NavLink to='/shoes' className={isActiveStyle}>Shoes</NavLink>
                </li>
                <li>
                    <NavLink to='/sport' className={isActiveStyle}>Sport</NavLink>
                </li>
                <li>
                    <NavLink to='/accessories' className={isActiveStyle}>Accessories</NavLink>
                </li>
            </ul>
            <ul className='flex items-center gap-3'>
                <li className='text-black/60'>
                    isabel@gmail.com
                </li>
                <li>
                    <NavLink to='/my-orders' className={isActiveStyle}>My orders</NavLink>
                </li>
                <li>
                    <NavLink to='/my-account' className={isActiveStyle}>My account</NavLink>
                </li>
                <li>
                    <NavLink to='/sign-in' className={isActiveStyle}>Sign in</NavLink>
                </li>
                <li className='flex'>
                    <ShoppingCartIcon className='h-6 w-6'/> {context.shoppingCartCount}
                </li>
            </ul>
        </nav>
    )
}

export default Navbar