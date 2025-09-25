import React from 'react'
import Title from './Title'
import { useSelector } from 'react-redux'
import { getCartTotal } from '../Store/cartSlice'

const CartTotal = () => {
    const totalAmount = useSelector((state) => getCartTotal(state.cart));

    const deliveryFees = 5;
  return (
    <div className='w-full'>
      <div className='text-2xl'>
        <Title text1={"CART"} text2={"TOTAL"}/>
      </div>
      <div className='flex flex-col gap-2 mt-2 text-sm'>
        <div className='flex justify-between'>
            <p>Subtotal</p>
            <p>${totalAmount}.00</p>
        </div>
             <div className='flex justify-between'>
            <p>Delivery Fees</p>
            <p>${deliveryFees}.00</p>
        </div>
        <hr />
        <div className='flex justify-between'>
            <b>Total</b>
            <p>${totalAmount === 0 ? 0.00 : totalAmount + deliveryFees}.00</p>
        </div>
        <hr />
      </div>
    </div>
  )
}

export default CartTotal
