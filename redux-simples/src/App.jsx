import './App.css';

import Interval from './components/Interval';
import Media from './components/Media';
import Soma from './components/Soma';
import Sorteio from './components/Sorteio';

function App() {

  return (
    <div className="App">
      <h1>Exercício React-Redux (Simples)</h1>
      <div className='linha'>
        <Interval title='Card 1'>X</Interval>
      </div>
      <div className="linha" >
        <Media ></Media>
        <Soma ></Soma>
        <Sorteio ></Sorteio>
      </div>
    </div>
  );
}

export default App;
