import React from "react";
import styles from './Home.module.scss';


const Home = (props) => {

    const { select, setSelect, handleMoodSubmit } = props;

    const handleSelectChange = event => {
        const value = event.target.value;
        setSelect(value);
    };

    return (
        <div className={styles.form_container}>
            <h1>How are you feeling today?</h1>
            <form action="" className={styles.form_check}>
                <label>
                    <input type="radio" value="Angry" checked={select === "Angry"} onChange={event => handleSelectChange(event)}/>
                    <span>Angry, frustrated, annoyed, anxious, grumpy</span>
                </label>

                <label>
                    <input type="radio" value="Average"  checked={select === "Average"} onChange={event => handleSelectChange(event)}/>
                    <span>Average, normal, uneventfull</span>
                </label>

                <label>
                    <input type="radio" value="Tired" checked={select === "Tired"} onChange={event => handleSelectChange(event)} />
                    <span>Sick, tired, lazy, lethargic, unmotivated, exhausted</span>
                </label>

                <label>
                    <input type="radio" value="Productive" checked={select === "Productive"} onChange={event => handleSelectChange(event)}/>
                    <span>Productive, alive, active, evergetic, motivated, focused</span>
                </label>

                <label>
                    <input type="radio" value="Sad" checked={select === "Sad"} onChange={event => handleSelectChange(event)}/>
                    <span>Sad, lonley, depressed, insecure, down, numb</span>
                </label>

                <label>
                    <input type="radio" value="Unsure" checked={select === "Unsure"} onChange={event => handleSelectChange(event)}/>
                    <span>Unsure, disassociated</span>
                </label>

                <label>
                    <input type="radio" value="Joyful" checked={select === "Joyful"} onChange={event => handleSelectChange(event)}/>
                    <span>Joyful, fulfield, contend, satisfied, GOOD!</span>
                </label>
                <div className={styles.buttonContainer}>
                    <button onClick={handleMoodSubmit}>Add today's mood</button>
                </div>
                
            </form>
        </div>
    );
};

export default Home;
