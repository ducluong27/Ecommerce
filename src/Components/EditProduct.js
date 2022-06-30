import React from 'react'
import { Link } from 'react-router-dom'
import {HoverProduct} from './HomeStyle'
const EditProduct = ({products}) => {
  return (
    products.map((product) =>
    <HoverProduct className='product card col-3' key={product.ID}>
        <div className='product-img text-center'>
            <img src={product.url} alt="product-img" className='img-fluid mb-1' style={{width:"250px", height:"220px"}}/>
        </div>
        <div className='product-text title font-weight-bold'>{product.title}</div>
        <div className='product-text description'>{product.description}</div>
        <div className='product-text price'>$ {product.price}</div>
        <div className='btn-group'>
            <Link to="/edit" state={product} className='btn btn-outline-warning' ><span className="fa fa-pencil mr-1"></span>Edit</Link>
            <div className='btn btn-outline-danger'><span className="fa fa-trash mr-1"></span>Delete</div>
        </div>
    </HoverProduct>
    )
    )
}

export default EditProduct