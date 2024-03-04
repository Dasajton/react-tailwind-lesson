import { NavLink } from 'react-router-dom'
import MenuLink from './MenuLink'

const links = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
]

const Navbar = () => {
    return (
        <nav className="m-4 flex h-16 items-center  justify-between rounded-lg bg-white/20 p-4 ">
            <NavLink to="/">
                <h1 className="text-5xl font-bold text-white">DS</h1>
            </NavLink>
            <ul className="flex gap-4">
                {links.map((link) => {
                    return (
                        <li key={link.path}>
                            <MenuLink path={link.path}>{link.label}</MenuLink>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Navbar
