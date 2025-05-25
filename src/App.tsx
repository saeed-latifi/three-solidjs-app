import ThreeScene from './components/ThreeScene';

const App = () => {
  return (
    <>
      <h1 style={{ "font-size":"1.2rem", left:"1rem","background-color":"darkslategrey",padding:".6rem", "border-radius":"0.6rem", position: 'absolute', color: 'white', 'z-index': 1 }}>
        SolidJS-Three.js Demo with Orbit and Pan
      </h1>
      <ThreeScene />
    </>
  );
};

export default App;