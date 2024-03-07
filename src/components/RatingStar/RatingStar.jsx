import PropTypes from 'prop-types';

const RatingStar = ({ star }) => {
  return (
    <>
      <div>{star}</div>
      <img src="../images/star-solid-primary.svg" alt="" />
      <img src="../images/star-solid-grey.svg" alt="" />
    </>
  );
};

RatingStar.propTypes = {
  star: PropTypes.number.isRequired
};
export default RatingStar;
