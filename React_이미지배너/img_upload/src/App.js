import Uploader from "./components/Uploader";
// import Uploader2 from "./components/Uploader2";

function App() {
  return (
    <div className="App" 
      style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '60vh' }}>
      <Uploader></Uploader>
      <br></br>
    </div>
  );
}

export default App;