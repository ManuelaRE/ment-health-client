import React from 'react';
import styles from './App.scss';
import { useEffect, useState } from 'react';

import Routes from './containers/routes';
import Nav from './components/nav';



function App() {
  const [currentDate, setCurrentDate] = useState();

  const [select, setSelect] = useState('Angry');

  // Store data returned from the API
  const [moodData, setMoodData] = useState([]);

  //===============================================================
  // MOOD FETCH FUNCTIONS
  //===============================================================

  useEffect(() => {
    // On component load/mount let's make a call to our API and show data on the page
    handleMoodFetch();
  }, []);

  const handleMoodFetch = () => {
    fetch('http://localhost:8080/getMood')
      .then((res) => {
        return res.json()
      }).then(res => {
        setMoodData(res)
      })
  }


  const handleMoodSubmit = (e) => {
    e.preventDefault();
    const fetchOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        "date": currentDate,
        "mood": select
      })
    }
    fetch("http://localhost:8080/mood", fetchOptions)
      .then(res => res.json())
      .then(res => {
        console.log("I've send a new mood")
        // display the updates result
        // console.log(res);
        handleMoodFetch();
      })
  }


  // get current date on click

  const getCurrentDate = () => {
    let newDate = new Date()
    let date = newDate.getDate();
    setCurrentDate(date);
  }

  useEffect(() => {
    getCurrentDate();
  }, [])


  return (
    <div className={styles.app}>
      <Nav />
      <Routes 
        setSelect={setSelect} 
        select={select} 
        handleMoodSubmit={handleMoodSubmit} 
        moodData={moodData}
      />
    </div>
  );
}
export default App;
