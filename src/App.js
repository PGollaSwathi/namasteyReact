import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

// const resObj = {
//   "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
//   info: {
//     id: "588619",
//     name: "KFC",
//     city: "1",
//     slugs: {
//       restaurant: "kfc-brigade-road-central-bangalore",
//       city: "bangalore",
//     },
//     cloudinaryImageId: "56c9ab92bd79745fd152a30fa2525426",
//     address:
//       "Ground Floor & 1st Floor, Brigade Rd, opposite Space Centre, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka 560029",
//     locality: "Brigade Rd",
//     areaName: "Ashok Nagar",
//     costForTwo: "40000",
//     costForTwoMessage: "₹400 FOR TWO",
//     cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
//     avgRating: 4.1,
//     feeDetails: {
//       restaurantId: "588619",
//       fees: [
//         {
//           name: "BASE_DISTANCE",
//           fee: 3400,
//         },
//         {
//           name: "BASE_TIME",
//         },
//         {
//           name: "ANCILLARY_SURGE_FEE",
//         },
//       ],
//       totalFee: 3400,
//       title: "Delivery Charge",
//       amount: "3400",
//     },
//     avgRatingString: "4.1",
//     totalRatingsString: "500+",
//     sla: {
//       deliveryTime: 26,
//       minDeliveryTime: 26,
//       maxDeliveryTime: 26,
//       lastMileTravel: 2.4,
//       serviceability: "SERVICEABLE",
//       rainMode: "RAIN_MODE_NONE",
//       slaString: "26 MINS",
//       lastMileTravelString: "2.4 km",
//       iconType: "ICON_TYPE_EMPTY",
//     },
//     availability: {
//       opened: true,
//       restaurantClosedMeta: {},
//     },
//     aggregatedDiscountInfo: {
//       visible: true,
//     },
//     badges: {},
//     aggregatedDiscountInfoV2: {
//       visible: true,
//     },
//     ratingSlab: "RATING_SLAB_5",
//     orderabilityCommunication: {
//       title: {},
//       subTitle: {},
//       message: {},
//       customIcon: {},
//     },
//     cartOrderabilityNudgeBanner: {
//       parameters: {},
//       presentation: {},
//     },
//   },
//   analytics: {
//     screenName: "explore",
//     context:
//       '{"tid":"b378a531-e6ce-9343-751a-a9cea703344a","grid":"e953ae01-a8d7-4e70-8381-b780b29ede08","queryUniqueId":"f8bd2f7e-8287-94c3-06f5-ddae29346ed7","query":"kfc"}',
//     objectValue: "588619",
//     clickObjectName: "click-restaurant",
//   },
//   ctaWithParams: {
//     link: "swiggy://menu",
//     type: "DEEPLINK",
//     params: {
//       restaurant_id: "588619",
//       query: "kfc",
//       sourceSessionId: "9sb6966b-a48d-44c4-8190-c14c21fe5dd2",
//       source: "SEARCH",
//       isSld: "false",
//       sourceRequestId: "6523b849c53c5721f73cd3d40009e4dd",
//     },
//   },

//   "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
//   info: {
//     id: "43836",
//     name: "McDonald's",
//     city: "1",
//     slugs: {
//       restaurant: "mcdonalds-kasturba-road-central-bangalore",
//       city: "bangalore",
//     },
//     cloudinaryImageId: "ee5f8e06b300efc07c9fe3f4df40dfc4",
//     address:
//       "Hardcastle Restaurants Pvt Ltd, No. 10, India Garage, Opp. Cubbon Park police Station, Near BPCL Petrol pump, Kasturba Road, Bengaluru - 560001",
//     locality: "MG Road",
//     areaName: "Ashok Nagar",
//     costForTwo: "40000",
//     costForTwoMessage: "₹400 FOR TWO",
//     cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
//     avgRating: 4.2,
//     feeDetails: {
//       restaurantId: "43836",
//       fees: [
//         {
//           name: "BASE_DISTANCE",
//           fee: 2900,
//         },
//         {
//           name: "BASE_TIME",
//         },
//         {
//           name: "ANCILLARY_SURGE_FEE",
//         },
//       ],
//       totalFee: 2900,
//       title: "Delivery Charge",
//       amount: "2900",
//     },
//     avgRatingString: "4.2",
//     totalRatingsString: "10K+",
//     sla: {
//       deliveryTime: 19,
//       minDeliveryTime: 19,
//       maxDeliveryTime: 19,
//       lastMileTravel: 1.4,
//       serviceability: "SERVICEABLE",
//       rainMode: "RAIN_MODE_NONE",
//       slaString: "19 MINS",
//       lastMileTravelString: "1.3 km",
//       iconType: "ICON_TYPE_EMPTY",
//     },
//     availability: {
//       opened: true,
//       restaurantClosedMeta: {},
//     },
//     aggregatedDiscountInfo: {
//       visible: true,
//     },
//     badges: {
//       textExtendedBadges: [
//         {
//           iconId: "guiltfree/GF_Logo_android_3x",
//           shortDescription: "options available",
//           fontColor: "#7E808C",
//         },
//       ],
//     },
//     aggregatedDiscountInfoV2: {
//       visible: true,
//     },
//     ratingSlab: "RATING_SLAB_5",
//     orderabilityCommunication: {
//       title: {},
//       subTitle: {},
//       message: {},
//       customIcon: {},
//     },
//     cartOrderabilityNudgeBanner: {
//       parameters: {},
//       presentation: {},
//     },
//   },
//   analytics: {
//     screenName: "explore",
//     context:
//       '{"tid":"fcd006af-ba8b-7c5f-2d0c-9ec991ee7973","grid":"eba9c2ab-5a8d-43bf-89ac-3c376c6995cb","queryUniqueId":"bba5addf-e006-ade5-9eaa-11355f520457","query":"McDonald\'s"}',
//     objectValue: "43836",
//     clickObjectName: "click-restaurant",
//   },
//   ctaWithParams: {
//     link: "swiggy://menu",
//     type: "DEEPLINK",
//     params: {
//       sourceSessionId: "9sb6966b-a48d-44c4-8190-c14c21fe5dd2",
//       source: "SEARCH",
//       isSld: "false",
//       sourceRequestId: "6523c49c4a1acb1ed40bc35d685999a9",
//       restaurant_id: "43836",
//       query: "McDonald's",
//     },
//   },
// };

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
