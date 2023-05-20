function QuoteContainer({ quote, author }) {
  return (
    <div style={{
      backgroundColor: "#fff",
      borderRadius:"10px",
      color:"black",
      padding:"10px",
      fontStyle:"italic",
      fontSize:"20px",
      opacity:"0.8"
    }}>
      <div style={{
        display:"flex",
      }}>
        <span style={{
          fontSize:"30px",
          fontWeight:"bold",
        }}>&ldquo;</span>
        <h5> {quote}</h5> 
        <span style={{
          fontSize:"30px",
          fontWeight:"bold",
        }}>&rdquo;</span>
     </div>
     <h5 style={{
      marginTop:"-20px"
     }}>{author}</h5>
    </div>
    
  );
}

export default QuoteContainer;
