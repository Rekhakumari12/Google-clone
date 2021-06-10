import { React,useState, useRef } from 'react';
export default function Main() {
  const [getQuery, setGetQuery] = useState(null)
  const input = useRef()
  const onClick = () => {
    if (getQuery) {
      let url=`https://www.google.com/search?q=${getQuery}`
      window.open(url, '_self')
      console.log(input.current.value='')
   }
  }
  const feelingLucky = () => {
   window.open(`https://www.google.com/doodles`,'_self')
 }
  return (
    <div className="App">
      <div className="main">
        <img src={process.env.PUBLIC_URL + "/images/google.png"} alt="googleImg" />
        <div className="searchArea">
          <input type="text" className="searchInput" ref={input}onChange={(e)=> setGetQuery(e.target.value)}/>
            <div className="icons">
            <img src={process.env.PUBLIC_URL+"/images/search.png"} alt="" />
              <img src={process.env.PUBLIC_URL + "/images/mic.png"} alt="" />
            </div>
          </div>
          <div className="button">
            <button className="searchBtn" id="search" onClick={onClick}>Google Search</button>
            <button className="searchBtn" id="feelinglucky" onClick={feelingLucky}>I'm Feeling Lucky</button>
          </div>
      </div>
    </div>
  );
}

