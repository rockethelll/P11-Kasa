import PropTypes from 'prop-types';

const Tags = ({ tags }) => {
  return (
    <div className="tags-container">
      {/* Display tags using map to create div element */}
      {tags.map((item, index) => (
        <div key={index} className="tag">
          {item}
        </div>
      ))}
    </div>
  );
};

Tags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Tags;
