import RestaurantCard from "./RestaurantCard";
import { useState, useEffect,useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { BODY_API } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(BODY_API);

    const json = await data.json();

    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>
        Looks like you're offline !! Please check your internet connection
      </h1>
    );
  
  const {loggedInUser,setUserName} = useContext(UserContext);

  if (listOfRestaurants.length == 0) {
    return <Shimmer />;
  }

  return (
    <div className="body ml-auto mr-auto w-[85%] mt-[5px] bg-white">
      <div className="filter flex items-center gap-[20px]">
        <div className="search p-[10px] flex gap-[10px]">
          <input
            type="text"
            className="search-box h-[50px] border-[1px] border-[tomato] w-[15vw] text-[20px] font-[500] text-[rgb(76,60,57)]"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-box-btn w-[90px] text-[rgb(255,255,255)] font-[600] italic text-[15px] bg-[tomato] border-0 cursor-pointer"
            onClick={() => {
              const filteredRestaurants = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn m-[20px]  py-[15px] px-[20px] text-[rgb(255,255,255)] font-[600] italic text-[15px] bg-[tomato] border-0 rounded-full cursor-pointer hover:bg-[rgb(252,86,57)]"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.2
            );
            setFilteredRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
        <div>
          <input
            type="text"
            className="p-2 h-[50px] border-[1px] border-[tomato] w-[15vw] text-[20px] font-[500] text-[rgb(76,60,57)]"
            value={loggedInUser}
            placeholder="User Name"
            
            onChange={(e)=>setUserName(e.target.value)}
          />
        </div>
      </div>

      <div className="grid gap-[2rem] grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {filteredRestaurants.map((e) => (
          <Link
            className="link"
            key={e.info.id}
            to={"/restaurants/" + e.info.id}
          >
            <RestaurantCard resData={e} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
