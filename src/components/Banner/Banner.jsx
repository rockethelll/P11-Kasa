import PropTypes from 'prop-types';

const Banner = ({ image, text }) => {
  return (
    <div className="banner-container">
      <img src={image} alt="Banner" />
      {text && <h1>texte</h1>}
    </div>
  );
};

Banner.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string
};
export default Banner;
