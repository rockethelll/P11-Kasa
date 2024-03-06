import PropTypes from 'prop-types';

const Banner = ({ image, text, filter }) => {
  return (
    <div className="banner-container" style={{'--filter': filter}}>
      <img src={image} alt="Banner" />
      {text && <h1>{text}</h1>}
    </div>
  );
};

Banner.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string,
  filter: PropTypes.string,
};
Banner.defaultProps = {
  filter: 'brightness(0.6)'
}
export default Banner;
