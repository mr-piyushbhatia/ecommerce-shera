import React from 'react'
import {Link} from 'react-router-dom'
import ReactStars from 'react-rating-stars-component'


const Product = ({product}) => {
    const options = {
        edit:false,
        color:'gold',
        activeColor:'tomato',
        size:window.innerWidth < 600 ? 20 : 25 ,
        value:product.Ratings,
        isHalf:true
    }
    const to = `/product/${product._id}`
  return (
    <>
        <Link className="productCard" to={to}>
        <img src={product.Images[0].url} alt={product.Name} />
        <p>{product.Name}</p>
        <div>
            <ReactStars {...options} />
            <span>({product.NumofReviews} Reviews)</span>
        </div>
        <span> ₹{product.Price} </span>
        </Link>
    </>
  )
}

export default Product