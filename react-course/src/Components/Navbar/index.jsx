import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { NavLink } from "react-router-dom"
const Navbar = () => {
    const context = useContext(ShoppingCartContext)
    const activeStyle = 'underline underline-offset-4'
    
    return (
        <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-white">
            <ul className="flex items-center gap-3">
                <li className="font-semibold  text-lg">
                    <NavLink to='/'>
                        YourStore
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/'
                    // onClick = {() => context.setSearchByCategory()}
                    className={({ isActive }) =>
                    isActive ? activeStyle : undefined
                }>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/clothes'
                    // onClick = {() => context.setSearchByCategory("men's clothing && women's clothing")}
                    className={({ isActive }) =>
                    isActive ? activeStyle : undefined
                }>
                       Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/electronics'
                    // onClick = {() => context.setSearchByCategory('electronics')}
                    className={({ isActive }) =>
                    isActive ? activeStyle : undefined
                }>
                     Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/forniture'
                    // onClick = {() => context.setSearchByCategory('jewelery')}
                    className={({ isActive }) =>
                    isActive ? activeStyle : undefined
                }>
                     Forniture
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/toys'
                    // onClick = {() => context.setSearchByCategory()}
                    className={({ isActive }) =>
                    isActive ? activeStyle : undefined
                }>
                    Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/other'
                    // onClick = {() => context.setSearchByCategory()}
                    className={({ isActive }) =>
                    isActive ? activeStyle : undefined
                }>
                     Other
                    </NavLink>
                </li>
            </ul>
            <ul className="flex items-center gap-3">
                <li className="text-black/60">
                    user@ystore.com
                </li>
                <li>
                    <NavLink 
                    to='/my-orders'
                    className={({ isActive }) =>
                    isActive ? activeStyle : undefined
                }>
                 
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/my-account'
                    className={({ isActive }) =>
                    isActive ? activeStyle : undefined
                }>
                 
                        MyAccount
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/sign-in'
                    className={({ isActive }) =>
                    isActive ? activeStyle : undefined
                }>
                 
                        Sing In
                    </NavLink>
                </li>
                <li className='flex items-center'>
                <ShoppingBagIcon className='h-6 w-6 text-black'/>
                <div>
                    {context.count}
                </div>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar