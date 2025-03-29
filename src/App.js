import "./App.css"

import ChangeColorCompoent from './components/changeColor';
import CounterAppComponent from './components/counterApp';
import CharacterCounterComponent from './components/characterCounter';

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
        <details>
            <summary>
                Switch Color
            </summary>
            <ChangeColorCompoent/>
        </details>
        <details>
            <summary>
                Character Count
            </summary>
            <CharacterCounterComponent/>
        </details>
    </main>
  );
}


// create a Header component

export default App;
