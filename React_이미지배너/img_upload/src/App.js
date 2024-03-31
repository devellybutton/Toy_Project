import Uploader from "./components/Uploader";

function App() {
  return (
    <div className="App" 
      style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '60vh' }}>
      <Uploader></Uploader>
    </div>
  );
}

export default App;