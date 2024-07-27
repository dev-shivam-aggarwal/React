import { SRC_URL } from "../utils/helpers";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const RestaurantAccordion = ({ data }) => {
  console.log("data ===> ", data)
  const dispatch = useDispatch();

  const handleAddItem = (e) => {
    
    dispatch(addItem(e));
  };

  return (
    <div>
      {data.card.card.itemCards.map((e, index) => (
        <div
          key={index}
          className="w-full h-auto  flex justify-between p-4 border-b-2"
        >
          <div className="w-5/6">
            <div className="text-xl font-medium">{e.card.info.name}</div>
            <div className="font-medium">
              ₹{e.card.info.price / 100 || e.card.info.defaultPrice / 100}
            </div>
            <div className="text-sm my-2 text-slate-500">
              {e.card.info.description}
            </div>
          </div>
          <div className="w-40 relative">
            <img
              className="w-40 rounded-md"
              src={SRC_URL + e.card.info.imageId}
            />
            <button
              className="absolute bg-white -bottom-1 left-7 px-7 py-1 rounded-lg border text-green-700 font-bold shadow-md"
              onClick={() => handleAddItem(e)}
            >
              ADD
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestaurantAccordion;
