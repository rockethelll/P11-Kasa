import Banner from './components/Banner/Banner';
import CardsContainer from './components/CardsContainer/CardsContainer';

const App = () => {
  return (
    <>
      <Banner
        image="../images/falaise.webp"
        text={'Chez vous, partout et ailleurs'}
        filter="brightness(0.4)"
      />
      <CardsContainer />
    </>
  );
};

export default App;
