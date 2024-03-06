import useFetch from "../../utils/Hooks";
import Card from '../Card/Card';

const CardsContainer = () => {
  const { data, loading } = useFetch('../data/data.json');
  console.log('data', data);
  

  return (
    <div className="card-container">
    {loading && <p>Loading...</p>}
    {!loading && data.map((card) => (
      <Card key={card.id} id={card.id} title={card.title} cover={card.cover} />
      ))}
    </div>
  );
};

export default CardsContainer;
