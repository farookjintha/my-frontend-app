import { useContext } from "react";
import { UserContext } from "../App";

const Home = () => {
    
    const getUserContext = useContext(UserContext);
    const {userCredentials} = getUserContext;

    return(
        <div>
            <h2>Welcome to our Home!  You have signed in as {userCredentials.email}</h2>
        </div>
    )
}

export default Home;