import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [menuGroups, setMenuGroups] = useState([]);
  const { resId } = useParams(); // Get restaurant ID from URL

  useEffect(() => {
    fetchMenu();
  }, [resId]);

  const fetchMenu = async () => {
    try {
      const response = await fetch(MENU_API + resId);
      const json = await response.json();
      console.log("Full API Response:", json);
      setResInfo(json);

      // Extract and group menu items based on group title
      let groups = [];
      const cards = json?.data?.cards || [];
      cards.forEach((card) => {
        const groupCards = card?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
        groupCards.forEach((group) => {
          if (group?.card?.card?.itemCards) {
            const groupTitle = group?.card?.card?.title || "Others";
            groups.push({
              title: groupTitle,
              items: group.card.card.itemCards,
            });
          }
        });
      });
      console.log("Menu Groups:", groups);
      setMenuGroups(groups);
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  };

  if (!resInfo) {
    return <Shimmer />;
  }

  // Extract restaurant details
  const restaurantInfo = resInfo?.data?.cards[2]?.card?.card?.info || {};
  const restaurantImage = restaurantInfo?.cloudinaryImageId;

  return (
    <div className="menu">
      <h1>{restaurantInfo?.name || "Restaurant"}</h1>
      <h2>{restaurantInfo?.cuisines?.join(", ") || "No cuisines available"}</h2>
      <h3>Rating: {restaurantInfo?.avgRating || "No rating"} ⭐</h3>
      <h3>Cost for Two: {restaurantInfo?.costForTwoMessage || "Not available"}</h3>
      <h4>Location: {restaurantInfo?.locality || "No location"}</h4>

      {/* Display Restaurant Image */}
      {restaurantImage && (
        <img
          src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_500/${restaurantImage}`}
          alt={restaurantInfo?.name}
          style={{
            width: "300px",
            height: "200px",
            borderRadius: "10px",
            marginTop: "10px",
          }}
        />
      )}

      {/* Render each menu group as a separate section */}
      {menuGroups.length > 0 ? (
        menuGroups.map((group, index) => (
          <div key={index}>
            <h2>{group.title}</h2>
            <ul>
              {group.items.map((item) => {
                const { id, name, price, defaultPrice, description, imageId } =
                  item?.card?.info || {};
                const finalPrice =
                  price ? price / 100 : defaultPrice ? defaultPrice / 100 : "N/A";
                return (
                  <li key={id} style={{ marginBottom: "20px", listStyle: "none" }}>
                    <h3>{name}</h3>
                    <p>Price: ₹{finalPrice}</p>
                    <p>{description || "No description available"}</p>
                    {imageId ? (
                      <img
                        src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300/${imageId}`}
                        alt={name}
                        style={{
                          width: "150px",
                          borderRadius: "8px",
                          marginTop: "5px",
                        }}
                      />
                    ) : (
                      <p>No Image Available</p>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        ))
      ) : (
        <p>No menu items available</p>
      )}
    </div>
  );
};

export default RestaurantMenu;
