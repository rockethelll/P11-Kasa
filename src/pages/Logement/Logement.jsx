import { useParams } from 'react-router-dom';
import { useFetchLogement } from '../../utils/Hooks';

const Logement = () => {
  const { id } = useParams();
  const { logement, loading } = useFetchLogement('../data/data.json', id);
  console.log('logement', logement);
  return <div>page de logement {id}</div>;
};

export default Logement;
