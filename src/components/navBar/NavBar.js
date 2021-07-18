import {CartWidget} from '../cartWidget/cartWidget'
import './navBar.css'

export const NavBar = () =>{
    return(
    <nav className= 'menuPrincipal'>
        <section className="tittle">
            <h1>NONNI</h1>
            <p className='descripcionH1'> Tejidos a mano - Venta por mayor y por menor</p>
        </section>
        <section className="homelist">
            <ul className="nav"> 
                <li>Conjuntos</li>
                <li>Saquitos</li>
                <li>Pantalones</li>
            </ul>
        </section>
        <CartWidget/>
    </nav>
)
}