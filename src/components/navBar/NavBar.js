import {NavLink, Link} from 'react-router-dom'
import {CartWidget} from '../cartWidget/cartWidget'
import './navBar.css'

export const NavBar = () =>{

    const categories = ['conjuntos', 'saquitos', 'pantalones']

    return(
    <nav className= 'menuPrincipal'>
        <section className="tittle">
            <Link to='/'>
                <h1>NONNI</h1>
            </Link>
            <p className='descripcionH1'> Tejidos a mano - Venta por mayor y por menor</p>
        </section>
        <section className="homelist">
            <ul className="nav"> 
                {categories.map((category)=>(
                    <NavLink to={`/category/${category}`}>
                        <li>{category}</li>
                    </NavLink>
                ))}
            </ul>
        </section>
        <CartWidget/>
    </nav>
)
}