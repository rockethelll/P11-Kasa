import PropTypes from 'prop-types';

const Card = ({ id, title, cover }) => {
  return (
    <div className="card" data-id={id}>
      <img src={cover} alt={title} />
      <h2>{title}</h2>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired
};

export default Card;
