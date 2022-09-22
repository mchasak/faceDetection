import React from 'react';
import '../styles/Signin.scss';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.sate = {
            email: '',
            password: '',
            name: ''
        }
    }

    onNameChange = (event) => {
        this.setState({name: event.target.value})
    }

    onEmailChange = (event) => {
        this.setState({email: event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({password: event.target.value})
    }

    onSubmitRegister = () => {
        fetch('http://localhost:3000/register', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
                name: this.state.name
            })
        })
            .then(response => response.json())
            .then(user => {
                if (user.id) {
                    this.props.loadUser(user)
                    this.props.onRouteChange('home');
                }
            })
    }

    render() {    
        const { onRouteChange } = this.props;
        return (
            <div className='signin'>
                <h2 className="signin__title">Register</h2>
                <span className="signin__input-name">Name</span>
                <input 
                    className='signin__input' 
                    id="name" 
                    type="input"
                    onChange={this.onNameChange}
                />
                <span className="signin__input-name">Email</span>
                <input 
                    className='signin__input' 
                    id="email" 
                    type="input"
                    onChange={this.onEmailChange}
                />
                <span className="signin__input-name">Password</span>
                <input 
                    className='signin__input' 
                    id="password" 
                    type="input"
                    onChange={this.onPasswordChange}
                />
                <button className='signin__btn' onClick={this.onSubmitRegister} onKeyPress={this.handleKeyDown}>Register</button>
                <span onClick={()=> onRouteChange('signin')} className='signin__link'>Sign In</span>
            </div>
        )
    }
}

export default Register 