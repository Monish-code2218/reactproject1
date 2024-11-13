import React, { useEffect, useState } from 'react'

function ProductList({ cartItems, setCartItems }) {

    const [products, setProducts] = useState([]);


    console.log(products);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
        console.log(products);
    }, []);

    const addToCart = (product) => {
        if (cartItems.find((item) => item.id === product.id)) {
            alert('Product already in cart');
        }
        else {
            setCartItems([...cartItems, product]);
        }
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 p-4'>
            {products.map((product) => (

                <div key={product.id} className='border border-gray-300 p-4 rounded-lg shawdow-lg bg-white'>
                    <img src={product.image} alt={product.title} className='h-40 mx-auto mb-4' />
                    <h2 className='text-lg font-semibold text-gray-700'>{product.title}</h2>
                    <p className='text-lg text-red-600 font-bold'>${product.price}</p>
                    <button onClick={() => addToCart(product)} className='bg-red-300 text-white w-full py-2 my-2 rounded-full hover:bg-red-200'>Add to Cart</button>
                </div>
            ))}
        </div>
    )
}

export default ProductList