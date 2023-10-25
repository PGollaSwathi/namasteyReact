import RestauantCard from "./RestauantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
// import resObj from "../utilits/mockData";
const Body = () => {
  //state variable - super poweful variable
  //[] this is a default value
  //array                    function
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [filtedRestaurent, setfiltedRestaurent] = useState([]);
  const [searchText, setsearchText] = useState("");
  console.log("body rendered");
  //   [
  //   {
  //     info: {
  //       id: "23714",
  //       name: "McDonald's",
  //       cloudinaryImageId: "ee5f8e06b300efc07c9fe3f4df40dfc4",
  //       locality: "Lido Mall",
  //       areaName: "Ulsoor",
  //       costForTwo: 40000,
  //       cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
  //       avgRating: 4.3,
  //     },
  //   },
  //   {
  //     info: {
  //       id: "23713",
  //       name: "KFC",
  //       cloudinaryImageId: "182191ab163770437b62861a6f987709",
  //       locality: "Lido Mall",
  //       areaName: "Ulsoor",
  //       costForTwo: 50000,
  //       cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
  //       avgRating: 3.7,
  //     },
  //   },
  // ]
  // const Url =
  //   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&collection=96593&tags=layout_ux4&sortBy=&filters=&type=rcv2&offset=0&page_type=null";
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
        // {
        //   lat: 12.9715987,
        //   lng: 77.5945627,
        //   nextOffset: "COVCELQ4KICQoqHv6pfULDCnEzgC",
        // }
      );

      const json = await data.json();
      console.log(json, "line 55");
      setlistOfRestaurants(
        //optional chaining
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setfiltedRestaurent(
        //optional chaining
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.log(error, "error2");
    }
  };

  // if (listOfRestaurants.length === 0) {
  //   return <Shimmer />;
  // }

  // let listOfRestaurants2 = [
  //   {
  //     info: {
  //       id: "23714",
  //       name: "McDonald's",
  //       cloudinaryImageId: "ee5f8e06b300efc07c9fe3f4df40dfc4",
  //       locality: "Lido Mall",
  //       areaName: "Ulsoor",
  //       costForTwo: 40000,
  //       cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
  //       avgRating: 4.3,
  //     },
  //   },
  //   {
  //     info: {
  //       id: "23713",
  //       name: "KFC",
  //       cloudinaryImageId: "182191ab163770437b62861a6f987709",
  //       locality: "Lido Mall",
  //       areaName: "Ulsoor",
  //       costForTwo: 50000,
  //       cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
  //       avgRating: 3.7,
  //     },
  //   },
  // ];
  // if (listOfRestaurants.length === 0) {
  //   return <Shimmer />;
  // }

  //ternary operator (condition fallowed by "?" (what we want to return) then true codition(":"))
  //condition ? exprIfTrue : exprIfFalse
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              //filter the restarent card and update
              console.log(searchText);
              const filtedRestaurent = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfiltedRestaurent(filtedRestaurent);
            }}
          >
            search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            //filter logic here

            const filterdList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.2
            );
            setlistOfRestaurants(filterdList);
          }}
        >
          Top Rated Restaruant
        </button>
      </div>
      <div className="res-container">
        {/* {resObj.map((restaurant,index) => (
            <RestauantCard key={restaurant.info.id}(or) key={index}//this is not recommended resData={restaurant} />
          ))} */}
        {filtedRestaurent.map((restaurant, index) => (
          <RestauantCard key={restaurant.info.id} resData={restaurant} />
        ))}
        {/* this is one method of passing data */}
        {/* // <RestauantCard resData={resObj} /> */}
        {/* <RestauantCard resData={resObj[1]} /> */}
        {/* // <RestauantCard resData="names" /> */}
      </div>
    </div>
  );
};
export default Body;
