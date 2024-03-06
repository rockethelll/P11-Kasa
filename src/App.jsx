import Banner from './components/Banner/Banner';

const App = () => {
  return (
    <>
      <Banner
        image="../images/falaise.webp"
        text={'Chez vous, partout et ailleurs'}
        filter="brightness(0.4)"
      />
      <div className='card-container'></div>
    </>
  );
};

export default App;
