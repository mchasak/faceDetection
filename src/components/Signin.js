import React from 'react';
import '../styles/Signin.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.sate = {
            signInEmail: '',
            signInPassword: ''
        }
    }

    onEmailChange = (event) => {
        this.setState({signInEmail: event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({signInPassword: event.target.value})
    }

    onSubmitSignIn = () => {
        fetch('https://salty-shelf-72851.herokuapp.com//signin', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.signInEmail,
                password: this.state.signInPassword
            })
        })
            .then(response => response.json())
            .then(user => {
                if (user.id) {
                    this.props.loadUser(user);
                    this.props.onRouteChange('home');
                }
            })
    }

    render() {
        const { onRouteChange } = this.props;
        return (
            <div className='signin'>
                <h2 className="signin__title">Sign In</h2>
                <span className="signin__input-name">Email</span>
                <input 
                    className='signin__input' 
                    type="input" 
                    id="email" 
                    onChange={this.onEmailChange}
                />
                <span className="signin__input-name">Password</span>
                <input 
                    className='signin__input' 
                    type="input" 
                    id="password"
                    onChange={this.onPasswordChange} 
                />
                <button className='signin__btn' onClick={this.onSubmitSignIn}>Sing In</button>
                <span onClick={() => onRouteChange('register')} className='signin__link'>Register</span>
            </div>
        )
    }
}

export default SignIn