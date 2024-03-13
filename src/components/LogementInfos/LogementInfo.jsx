import PropTypes from 'prop-types';
import RatingStar from '../RatingStar/RatingStar';
import Tags from '../Tags/Tags';

const LogementInfo = ({ logement }) => {
  // Split the host name to get the first and last name
  const firstName = logement.host.name.split(' ')[0];
  const lastName = logement.host.name.split(' ')[1];

  return (
    <div className="logement-infos">
      <div className="infos-left">
        <h2>{logement.title}</h2>
        <h3>{logement.location}</h3>
        <Tags tags={logement.tags} />
      </div>
      <div className="infos-right">
        <div className="author">
          <div className="author-name">
            <p>{firstName}</p>
            <p>{lastName}</p>
          </div>
          <img src={logement.host.picture} alt={logement.host.name} />
        </div>
        <div className="stars">
          <RatingStar star={logement.rating} />
        </div>
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
