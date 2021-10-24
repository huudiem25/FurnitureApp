import React from 'react'
import {Image} from 'react-native'

export default function Cart({cart, RemoveFromCart}) {
        return (
            <>    
            <h1>Cart</h1>
            <div>
            {cart.map((product,productId) => (
                <div key={productId}>
                <h3>{product.productName}</h3>
                <h4>{product.price}</h4>
                <Image source={{ uri: product.image }} alt={product.productName} style={{width:300, height:200}}/>
                <button onClick={() => RemoveFromCart(product)}>Remove </button>
                </div>
            ))}
            </div>
            </>
        );
}
