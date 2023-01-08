import Form from './Form';

const Register  = () => {
    const title = 'Register!';
    const welcomeMessage= 'Register to create an account!';
    return (
        <div>
            <Form title={title} welcomeMessage={welcomeMessage} />
        </div>
    )
}

export default Register;