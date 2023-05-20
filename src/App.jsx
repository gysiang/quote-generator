import './App.css'
import { useState,useEffect } from 'react'
import axios from 'axios'
import QuoteContainer from './components/quoteContainer'

function App() {
  const [quote, setQuote] = useState('')
  const [author, setAuthor] = useState('')
  const [tags, setTags] = useState([])

  const getQuote = () => {
    axios
    .get('https://api.quotable.io/random')
    .then((result) => {
      setQuote(result.data.content);
      setAuthor(result.data.author);
      setTags(result.data.tags);
      console.log(tags);
    })
    .catch((error) => {
        console.log("Error message: ", error);
      });
  };

  useEffect(() => {
    getQuote();
  },[]);

  const listTags = tags.map((tag) => {
    return <span style={{
      backgroundColor:"lightgrey",
      color:"black",
      margin: "5px",
      padding: "5px",
      borderRadius: "5px",
    }} key={tag}> {tag} </span>;
  });

  return (
      <div>
        <h3>Quote Generator</h3>
        <QuoteContainer 
          quote={quote} 
          author={author}/>
      <div style={{
        fontSize: '12px',
      }}>
        <p>Tags: </p>
        {listTags}
      </div>
      <button onClick={getQuote}> Generate<br/> Random Quote</button>
      </div>
  )
}

export default App
