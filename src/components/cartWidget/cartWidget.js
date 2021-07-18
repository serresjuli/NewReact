import carrito from './images/carrito.png'
import './cartWidget.css'

export const CartWidget = () => {
    return(
    <button className= 'btnCarrito'> 
        <img src={carrito} alt='icono'></img>
    </button>
    )
}