import { useParams } from 'react-router-dom';
import { useFetchLogement } from '../../utils/Hooks';
import Carousel from '../../components/Carousel/Carousel';

const Logement = () => {
  const { id } = useParams();
  const { logement, loading } = useFetchLogement('../data/data.json', id);

  console.log('logement', logement);
  
  return (
    loading ? <p>Loading...</p> : (
      <div>
      <Carousel images={logement.pictures} />
        <div>
          <h2>{logement.title}</h2>
          <p>{logement.description}</p>
          <p>{logement.price}</p>
          <p>{logement.location}</p>
        </div>
      </div>
    )
  );
};

export default Logement;
