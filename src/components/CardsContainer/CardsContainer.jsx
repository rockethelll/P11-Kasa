import { Link } from 'react-router-dom';
import useFetch from '../../utils/Hooks';
import Card from '../Card/Card';

const CardsContainer = () => {
  const { data, loading } = useFetch('../data/data.json');

  return (
    <div className="card-container">
      {/* Display loading if fetch take time */}
      {loading && <p>Loading...</p>}

      {/* Display cards if fetch is done */}
      {!loading &&
        data.map((card) => (
          <Link to={`/logement/${card.id}`} key={card.id}>
            <Card id={card.id} title={card.title} cover={card.cover} />
          </Link>
        ))}
    </div>
  );
};

export default CardsContainer;
