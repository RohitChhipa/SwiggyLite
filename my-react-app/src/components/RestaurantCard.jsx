import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { CDN_URL } from '../utils/constant';

const RestaurantCard = (props) => {
  const { resData = {} } = props;

  const {
    cloudinaryImageId = '',
    name = 'Unknown',
    avgRating = 0,
    cuisines = [],
    sla : {deliveryTime  = 0 } = {},
    costForTwo = '₹0 for two',
  } = resData;

  const [isValidImage, setIsValidImage] = useState(true);

  useEffect(() => {
    const imageUrl = CDN_URL + cloudinaryImageId;
    fetch(imageUrl)
      .then((response) => {
        if (response.status !== 200) {
          setIsValidImage(false);
        }
      })
      .catch(() => {
        setIsValidImage(false);
      });
  }, [cloudinaryImageId]);

  return (
    <div
      data-testid="resCard"
      className="res-card"
    >
      {isValidImage ? (
        <img
          className="res-img"
          alt="res-logo"
          src={CDN_URL + cloudinaryImageId}
        />
      ) : (
        <div className="rounded-lg bg-gray-300 h-[320px] w-[508px] flex items-center justify-center">
          <span>Image not available</span>
        </div>
      )}
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} ⭐</h4>
      <h4>{costForTwo }</h4>
      <h4>{deliveryTime}minutes⏳</h4>
    </div>
  );
};

RestaurantCard.propTypes = {
  resData: PropTypes.shape({
    data: PropTypes.shape({
      cloudinaryImageId: PropTypes.string,
      name: PropTypes.string,
      avgRating: PropTypes.number,
      cuisines: PropTypes.arrayOf(PropTypes.string),
      costForTwo: PropTypes.number,
      deliveryTime: PropTypes.number,
    }),
  }),
};

export default RestaurantCard;

