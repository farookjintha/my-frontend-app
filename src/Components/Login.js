import Form from "./Form";
import '../styles/login.css';

//JSX Format -  JAVASCRIPT and XML Format (.js -> both JS code and HTML code can be written)
const Login = () => {
    const title = 'Login!';
    const welcomeMessage = 'Login to continue!'

    return (
        <div className="login-wrapper">
            <Form title={title}  welcomeMessage={welcomeMessage}/>
        </div>
    )
}

export default Login;