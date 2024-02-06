import { totalPrice } from '../../units/total-price';
import Button from '../button/button';
import './cart.css';


const Cart = ({ cartItems, onCheckout }) => {
  return (
    <div className='cart__container'>
        <p>Umumiy narx: {totalPrice(cartItems)} ming so'm</p>

        <Button 
        title={`${cartItems.length === 0 ? 'Buyurtma berish📱' : "To'lov💵"}`} 
        disable={cartItems.length === 0 ? true : false}
        type={'checkout'} 
        onClick={onCheckout}
        />
    </div>
  )
}

export default Cart