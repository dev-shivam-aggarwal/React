import { useSelector } from "react-redux";
import RestaurantAccordion from "./RestaurantAccordion";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.cart.items);

  const dataFormat = {
    card: {
      card: {
        itemCards: data,
      },
    },
  };

  const clear = () => {
    dispatch(clearCart());
  };
  return (
    <div className="w-6/12 m-auto my-20">
      <h1 className="font-extrabold text-xl m-auto text-center">Cart Page</h1>
      <button
        onClick={() => clear()}
        className="bg-slate-800 text-white px-6 py-3 flex mx-auto my-5 rounded-3xl"
      >
        Clear Cart
      </button>
      <div className="flex m-auto">
        <RestaurantAccordion data={dataFormat} />
      </div>
    </div>
  );
};

export default Cart;
