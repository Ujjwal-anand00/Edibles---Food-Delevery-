import { CDN_URL } from "../utils/constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;

 

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;

  return (
    <div className="res-card flex flex-col font-[Arial,Helvetica,sans-serif] w-[250px] h-[405px] p-[3px] gap-[1px] cursor-pointer rounded-[15px] bg-[rgba(170,170,170,0.07)] hover:shadow-[rgba(99,73,68,0.378)_0px_3px_8px] break-words overflow-hidden ">
      <img className="res-logo rounded-[15px] w-full h-[15vw]" src={CDN_URL + cloudinaryImageId} />

      <h3 className="name text-[rgba(46,46,46,0.72)] text-lg">{name}</h3>
      <p className="cuisines text-[rgba(67,67,67,0.62)]">{cuisines.join(", ")}</p>
      <p className="avgRating text-[rgba(67,67,67,0.62)]">{avgRating}</p>
      <p className="cost text-[rgba(67,67,67,0.62)]">{costForTwo}</p>
      <p className="time text-[rgba(67,67,67,0.62)]">Delivery Time: {sla?.deliveryTime} Minutes </p>
      

    </div>
  );
};

export default RestaurantCard;
