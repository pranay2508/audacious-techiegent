import './App.css';
// import styled from "styled-components";
import LeftPanel from './components/Leftpanel';
import RightPanel from './components/Rightpanel';
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <LeftPanel/>
       <RightPanel/>
      </header>
    </div>
  );
}
export default App;
