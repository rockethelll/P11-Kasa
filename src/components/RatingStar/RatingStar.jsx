import PropTypes from 'prop-types';
import greyStar from '../../assets/star-solid-grey.svg';
import primaryStar from '../../assets/star-solid-primary.svg';

const RatingStar = ({ star }) => {
  const totalStars = 5;

  return (
    <div className="stars-container">
      {/* Create an array of 5 elements to render the stars */}
      {[...Array(totalStars)].map((_, index) => (
        <img
          key={index}
          src={index < star ? primaryStar : greyStar}
          alt={index < star ? 'Red Star' : 'Grey Star'}
          className="star"
        />
      ))}
    </div>
  );
};

RatingStar.propTypes = {
  star: PropTypes.string.isRequired
};
export default RatingStar;
