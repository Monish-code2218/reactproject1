import React from 'react'

function Navbar({ openCart, cartCount }) {
    return (

        <nav className='p-4 bg-red-300 text-white font-sans    flex justify-between items-center rounded-lg'>
            <h1 className='text-2xl font-bold'>Kaboom Shopping</h1>
            <button onClick={openCart} className='bg-yellow-200 text-black px-4 py-2 rounded-full'>
                Cart: {cartCount}
            </button>
        </nav>
    )
}

export default Navbar