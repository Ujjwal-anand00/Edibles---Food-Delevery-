import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();

  const handleClearCart = (item) => {
    dispatch(clearCart(item));
  };

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="m-2 p-2 bg-black text-white font-black rounded-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        <div className="flex items-center flex-col">
          {cartItems.length === 0 && (
            <div>
              <h1 className="text-2xl font-bold">Your cart is empty </h1>

              <img className="mt-10 mb-10 " src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-illustration-download-in-svg-png-gif-file-formats--bucket-shopping-basket-cuterr-illustrations-pack-people-3020773.png?f=webp"></img>

              <span className="text-sm text-gray-600">
                You can go to home page to view more restaurants
              </span>
            </div>
          )}
        </div>
        <div>
            <ItemList items={cartItems} />
            
        </div>

        
      </div>
    </div>
  );
};

export default Cart;
