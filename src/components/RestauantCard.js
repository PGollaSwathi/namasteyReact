import { CDN_URL } from "../utilits/constants";
const RestauantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    costForTwo,
    avgRating,
    deliveryTime,
  } = resData.info;
  // console.log(resData);
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} </h4>
      <h4>{deliveryTime} 15 minutes</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};
export default RestauantCard;
