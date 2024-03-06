import useFetch from '../../utils/Hooks';
import Card from '../Card/Card';
import { Link } from 'react-router-dom';

const CardsContainer = () => {
  const { data, loading } = useFetch('../data/data.json');

  return (
    <div className="card-container">
      {loading && <p>Loading...</p>}
      {!loading &&
        data.map((card) => (
          <Link to={`/logement/${card.id}`} key={card.id}>
          <Card
            // key={card.id}
            id={card.id}
            title={card.title}
            cover={card.cover}
          />
          </Link>
        ))}
    </div>
  );
};

export default CardsContainer;
