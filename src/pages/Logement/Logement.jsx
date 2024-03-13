import { useParams } from 'react-router-dom';
import Carousel from '../../components/Carousel/Carousel';
import DropDownText from '../../components/DropDown/DropDownText';
import LogementInfo from '../../components/LogementInfos/LogementInfo';
import { useFetchLogement } from '../../utils/Hooks';
import DropDownArray from '../../components/DropDown/DropDownArray';

const Logement = () => {
  // Get id from url
  const { id } = useParams();

  // Fetch logement with id
  const { logement, loading } = useFetchLogement('../data/data.json', id);

  return loading ? (
    // Display loading message
    <p>Loading...</p>
  ) : (
    // Display logement information
    <>
      <Carousel images={logement.pictures} />
      <LogementInfo logement={logement} />
      <div className="dropdowns">
        <DropDownText title={'Description'} content={logement.description} />
        <DropDownArray title={'Équipements'} content={logement.equipments} />
      </div>
    </>
  );
};

export default Logement;
