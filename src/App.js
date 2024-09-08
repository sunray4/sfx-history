import logo from './logo.svg';
import Header from './components/Header'
import TimelineNav from './components/TimelineNav';
import data from './data.json';
import React, {useState} from 'react';
import Content from './components/Content';

function App() {
  const [year, setYear] = useState(data[0].Date.substring(3,6));
  function handleClick(event) {
    const {name} = event.target;
    setYear(name);
  }
  return (
    <div className="">
      <Header />
      <TimelineNav handleClick={handleClick} />
      <Content year={year} />
    </div>
  ); 
}

export default App;
