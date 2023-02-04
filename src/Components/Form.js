import '../styles/form.css';
import { useContext } from 'react'; //first import hook called useContext
import { UserContext } from '../App'; //then import the context created.
import { useNavigate } from 'react-router-dom';


const Form = (props) => {
    const navigate = useNavigate();

    //Context Consume:
    const getUserContext = useContext(UserContext);
    const {userCredentials, handleUserCred} = getUserContext;

    //or
    // const {userCredentials, handleUserCred} = useContext(UserContext);


    const {title, welcomeMessage} = props; //destructuring the props

    // const {userCredentials, handleUserCred} = getUserContext;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('userCredentials: ', userCredentials);
        navigate('/');
    }


    return (
        <div className="form-wrapper">
            <h3>{title}</h3>
            <h6>{welcomeMessage}</h6>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => handleUserCred({email: e.target.value})} value={userCredentials.email} placeholder="Enter your email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"  onChange={(e) => handleUserCred({password: e.target.value})} value={userCredentials.password} placeholder="Enter your password" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Form;