import React from 'react';
import { Router } from "@reach/router";
import Home from '../../components/home';
import Chart from '../../components/chart';


const Routes = (props) => {
const {setSelect, select, handleMoodSubmit, moodData} = props;
    return (
        <Router>
            <Home path="/" 
                setSelect={setSelect} 
                select={select} 
                handleMoodSubmit={handleMoodSubmit}
            />
            <Chart path="chart" moodData={moodData}/>
        </Router>
    )
}

export default Routes
