import React from 'react'
import {HoverProduct} from './HomeStyle'
export const Product = ({product,AddToCart}) => {
    const handleAddToCart=()=>{
       AddToCart(product)
    }
  return (
    
    <HoverProduct className='product card col-3'>
        <div className='product-img'>
            <img src={product.url} alt="product-img" className='img-fluid' style={{width:"120px", height:"120px"}}/>
        </div>
        <div className='product-text title'>{product.title}</div>
        <div className='product-text description'>{product.description}</div>
        <div className='product-text price'>$ {product.price}</div>
        <div className='btn btn-danger btn-md cart-btn mb-1' onClick={handleAddToCart}>Thêm vào giỏ hàng</div>
    </HoverProduct>

  )
}
