import { useState } from 'react'
import QuoteBox from './component/QuoteBox';
import colors from './colors.json';
import quotes from './quotes.json';
import './App.css'

function App() {
  //position random of colors.json
  const indexColors = Math.floor(Math.random() * colors.length);
  document.body.style = `background: ${colors[indexColors]}`;

  //position random of quotes.json
  const randomPosition = Math.floor(Math.random() * quotes.length);
  const [ index, setIndex ] = useState(randomPosition);

  return (
    <div className="App" style={{color: colors[indexColors]}}>
      <div className="App__card">
          <i className="fa-solid fa-quote-left"></i>
          <QuoteBox index= {index} setIndex={setIndex} quotes={quotes}/>
      </div>
    </div>
  )
}

export default App
