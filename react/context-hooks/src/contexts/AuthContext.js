import React, { Component, createContext } from 'react'

export const AuthContext = createContext();

export default class AuthContextProvider extends Component {
    state = {
        isLoggedIn : false,
    };

    changeLogin = () => {
        this.setState({isLoggedIn : !this.state.isLoggedIn});
    };

    render() {
        return (
            <AuthContext.Provider value={{...this.state, changeLogin: this.changeLogin}}>
                {this.props.children}
            </AuthContext.Provider>
        )
    }
}
