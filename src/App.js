// import Chat from './components/chat';
import ChangeColorCompoent from './components/changeColor';
import CounterAppComponent from './components/counterApp';

import "./App.css"

function App() {
  return (
    <main className='main-component'>
        <h2 className='main-h2-header'>April-Fest React Projects</h2>
        <details>
            <summary>
                Counter App
            </summary>
            <CounterAppComponent/>
        </details>
        <h2>2. Click Button to switch color</h2>
        <ChangeColorCompoent/>
        <h2>3. Character Counter</h2>
    </main>
  );
}


// create a Header component

export default App;
