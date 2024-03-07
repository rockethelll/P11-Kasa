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
      <Tags tags={logement.tags} />
      <RatingStar star={logement.rating} />
    </div>
  );
};

LogementInfo.propTypes = {
  logement: PropTypes.shape({
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    host: PropTypes.arrayOf(PropTypes.string).isRequired,
    rating: PropTypes.number.isRequired
  }).isRequired,
};

export default LogementInfo;
