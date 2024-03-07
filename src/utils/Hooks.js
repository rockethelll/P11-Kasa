import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => console.log('Something went wrong: ', err));
  }, [url]);

  return { data, loading };
};

export default useFetch;

export const useFetchLogement = (url, id) => {
  const navigate = useNavigate();
  const [logement, setLogement] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const logementFind = data.find((logement) => logement.id === id);
        if (!logementFind) {
          navigate('/404', { replace: true });
        } else {
          setLogement(logementFind);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.error('Something went wrong: ', err);
        navigate('/404', { replace: true });
      });
  }, [url, id, navigate]);

  return { logement, loading };
};
