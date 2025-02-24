import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategories = ({ data , showItems,setShowIndex}) => {

    // const [showItems, setShowItems] = useState(false);

    const handleClick = () =>{
        // setShowItems(!showItems );
        setShowIndex();
    };

  return (
    <div>
      {/* {Header} */}
      <div className="w-6/12 mx-auto my-6 bg-gray-50 shadow-lg p-4 ">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
          <span className="font-bold text-lg ">
            {data.title} ({data.itemCards.length})
          </span>
          <span className="font-bold text-lg">⩔</span>
        </div>

        {/* {Accodian Body} */}

        {showItems && <ItemList items={data.itemCards} />}
      </div>
      
    </div>
  );
};

export default RestaurantCategories;
