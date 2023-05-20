import './App.css'
import { useState,useEffect } from 'react'
import axios from 'axios'
import QuoteContainer from './components/quoteContainer'

function App() {
  const [quote, setQuote] = useState('')
  const [author, setAuthor] = useState('')

  const getQuote = () => {
    axios
    .get('https://api.quotable.io/random')
    .then((result) => {
      setQuote(result.data.content);
      setAuthor(result.data.author);
      console.log(result.data);
    })
    .catch((error) => {
        console.log("Error message: ", error);
      });
  };

  useEffect(() => {
    getQuote();
  },[]);

  return (
      <div>
        <h3>Quote Generator</h3>
        <QuoteContainer 
          quote={quote} 
          author={author}/>
      <button onClick={getQuote}> Generate<br/> Random Quote</button>
      </div>
  )
}

export default App
