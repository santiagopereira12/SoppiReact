import { useContext } from 'react'
import {NavLink} from 'react-router-dom'
import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../context'

const Navbar = () => {
    const context = useContext(ShoppingCartContext)
    const activeStyle = 'underline underline-offset-4'
    return (
        <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light'>
            <ul className='flex items-center gap-3'>
                <li className='font-semibold text-lg'>
                    <NavLink 
                    to='/'
                    className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>
                       Shoppi
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/'
                    className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/clothes'
                    className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/electronics'
                    className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/shoes'
                    className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>
                        Shoes
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/accessories'
                    className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>
                        Accessories
                    </NavLink>
                </li>
            </ul>
            <ul className='flex items-center gap-3'>
                <li className='text-black/60'>
                    contacto@correo.com
                </li>
                <li>
                    <NavLink 
                    to='/myOrders'
                    className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/myAccount'
                    className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/signIn'
                    className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>
                        Sign In
                    </NavLink>
                </li>
                <li className='flex items-center'>
                    <ShoppingBagIcon className='h-6 w-6 text-black'></ShoppingBagIcon>
                    <div>{context.count}</div>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar