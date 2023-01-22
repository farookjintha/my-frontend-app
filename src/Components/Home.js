import { useState, useEffect } from 'react';
import ChildComponent from './ChildComponent';

const Home = () => {
    // const count = 0;
    // const [stateVariableName, functionToChangeTheState] = useState(initialValue);
    const [counter, setCounter] = useState(0);
    // const [name, setName] = useState('');
    const [userDetails, setUserDetails] = useState({
        name: '',
        email: '',
        age: null,
        mobileNumber: ''
    })
    const [totalUsers, setTotalUsers] = useState([]);



    const { name, email, age, mobileNumber} = userDetails;



    // LIFECYCLE 

    useEffect();












    // END - LIFECYCLE

    const handleClick = () => {
        setCounter(counter + 1);
    }
    return(
        <div>
            <h2>My Home Page</h2>
            <h4>State Counter: {counter}</h4>
            <button onClick={handleClick}>Click!</button>

            <ChildComponent counter={counter} />

        </div>
    )
}

export default Home;