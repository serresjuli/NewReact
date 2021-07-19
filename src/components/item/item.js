import {Link} from 'react-router-dom'
import './item.css'

export const Item = ({item}) =>{
    const {id, title, price, pictureUrl} = item
    return(
        <Link to={`/item/${id}`}>
            <div className='ConstructorProducto' id={id}>
                <img className='img img__box' src={pictureUrl} alt='producto'></img>
                <h2 className='title__box'>{title}</h2>
                <p className='p__box'>${price}</p>
            </div>
        </Link>
    )
}