// import Chat from './components/chat';
import ChangeColorCompoent from './components/changeColor';
import CounterAppComponent from './components/counterApp';

import "./App.css"

function App() {
  return (
    <div>
        <h2>1. Click Add/Sub Button to change counter</h2>
        <CounterAppComponent/>
        <h2>2. Click Button to switch color</h2>
        <ChangeColorCompoent/>
    </div>
  );
}


// create a Header component

export default App;
