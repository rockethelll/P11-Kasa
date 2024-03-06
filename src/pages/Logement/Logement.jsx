import { useParams } from 'react-router-dom';

const Logement = () => {
  const { id } = useParams();
  return (
    <div>
      page de logement { id }
    </div>
  );
};

export default Logement;