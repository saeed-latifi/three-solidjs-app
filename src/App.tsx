import ThreeScene from './components/ThreeScene';

const App = () => {
  return (
    <>
      <h1 style={{ position: 'absolute', color: 'black', 'z-index': 1 }}>
        SolidJS + Three.js GLB Viewer
      </h1>
      <ThreeScene />
    </>
  );
};

export default App;