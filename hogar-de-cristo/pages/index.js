import ControlledCarousel from "../components/ControlledCarousel";

function HomePage() {
  return (
    <div>
      <h2 style={{ widht:'100%', textAlign:'center', marginTop:'10px' }}>Welcome to Next.js!</h2>

      <div style={{ width: '70%', margin: '3% auto'}}>
        <ControlledCarousel></ControlledCarousel>
      </div>
    </div>
  );
}

export default HomePage;
