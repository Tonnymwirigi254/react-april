import "./App.css"

import ChangeColorCompoent from './components/changeColor';
import CounterAppComponent from './components/counterApp';
import CharacterCounterComponent from './components/characterCounter';
import DigitalClockComponent from "./components/digitalClock";

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
        <details>
            <summary>
               Digital Clock
            </summary>
            <DigitalClockComponent/>
        </details>
    </main>
  );
}


// create a Header component

export default App;
