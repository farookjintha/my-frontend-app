import Form from "./Form";
import '../styles/login.css';
import { UserContext } from "../App";
import { useContext } from "react";

//JSX Format -  JAVASCRIPT and XML Format (.js -> both JS code and HTML code can be written)
const Login = () => {

    const myUserDetails = useContext(UserContext);
    const title = 'Login!';
    const welcomeMessage = 'Login to continue!'

    console.log('Context Data in Login; ', myUserDetails)

    return (
        <div className="login-wrapper">
            <Form title={title}  welcomeMessage={welcomeMessage}/>
        </div>
    )
}

export default Login;