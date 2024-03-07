import PropTypes from 'prop-types';
import RatingStar from '../RatingStar/RatingStar';
import Tags from '../Tags/Tags';

const LogementInfo = ({ logement }) => {
  return (
    <div className="logement-infos">
      <div className="title">
        <h2>{logement.title}</h2>
        <div className="author">
          <p>{logement.host.name}</p>
          <img src={logement.host.picture} alt={logement.host.name} />
        </div>
      </div>
      <h3>{logement.location}</h3>
      <div className="tags-stars">
        <Tags tags={logement.tags} />
        <RatingStar star={logement.rating} />
      </div>
    </div>
  );
};

LogementInfo.propTypes = {
  logement: PropTypes.shape({
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    host: PropTypes.shape({
      name: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired
    }).isRequired,
    rating: PropTypes.string.isRequired
  }).isRequired
};

export default LogementInfo;
