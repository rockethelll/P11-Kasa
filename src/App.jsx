import Banner from './components/Banner/Banner';
import Card from './components/Card/Card';

const App = () => {
  return (
    <>
      <Banner
        image="../images/falaise.webp"
        text={'Chez vous, partout et ailleurs'}
        filter="brightness(0.4)"
      />
      <div className="card-container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
};

export default App;
