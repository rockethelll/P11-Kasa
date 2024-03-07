import { useParams } from 'react-router-dom';
import Carousel from '../../components/Carousel/Carousel';
import LogementInfo from '../../components/LogementInfos/LogementInfo';
import { useFetchLogement } from '../../utils/Hooks';

const Logement = () => {
  const { id } = useParams();
  const { logement, loading } = useFetchLogement('../data/data.json', id);

  return loading ? (
    <p>Loading...</p>
  ) : (
    <>
      <Carousel images={logement.pictures} />
      <LogementInfo logement={logement} />
    </>
  );
};

export default Logement;
