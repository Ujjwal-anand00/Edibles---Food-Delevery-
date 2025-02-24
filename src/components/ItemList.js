import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {

  const dispatch = useDispatch();

  const handleAddItems = (item) => {
    dispatch(addItem(item));

  }
 

  return (

    <div>
      <div>
        {items.map((item) => (
          <div
            key={item?.card?.info?.id}
            className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between "
          >
            <div className="p-0 w-9/12 flex flex-col gap-1">
              <span className="text-base font-bold">
                {item?.card?.info?.name}
              </span>
              <span className="font-semibold">
                ₹
                {item.card.info.defaultPrice
                  ? item.card.info.defaultPrice / 100
                  : item?.card?.info?.price / 100}
              </span>
              <p>{item?.card?.info?.description}</p>
            </div>
            <div className="w-3/12 h-auto ">
              <div className="absolute">
                <button className="bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-lg font-bold shadow-lg text-green-700 px-4 py-2 rounded-lg"
                onClick={()=>handleAddItems(item)}>
                  Add
                </button>
              </div>
              <img
                src={CDN_URL + item.card.info.imageId}
                className="w-[20rem]  rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ItemList;
