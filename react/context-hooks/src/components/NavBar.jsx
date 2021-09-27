import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';

export const NavBar = () => {
    const { isDarkTheme, ligthTheme, darkTheme } = useContext(ThemeContext);
    const { isLoggedIn, changeLogin } = useContext(AuthContext);
    const theme = isDarkTheme ? darkTheme : ligthTheme;

    return (
        <nav style={{background: theme.background, color: theme.text, height: '120px'}}>
            <h2 style={{textAlign: 'center', color: theme.text, margin: '4px'}} 
                className="ui centered header">Context and Hooks Test
            </h2>
            <p onClick={changeLogin} style={{textAlign: 'center'}}>{isLoggedIn ? 'Logged In': 'Logged Out'}</p>
            <div className="ui three buttons">
                <button className="ui button">Overview</button>
                <button className="ui button">Contact</button>
                <button className="ui button">Support</button>
            </div>
        </nav>
    )
}
// ContextTyype
// export default class NavBar extends Component {
//     static contextType = ThemeContext;
//     render() {
//         const { isDarkTheme, ligthTheme, darkTheme } = this.context;
//         const theme = isDarkTheme ? darkTheme : ligthTheme;
//         return (
//             <nav style={{background: theme.background, color: theme.text, height: '120px'}}>
//                 <h2 style={{textAlign: 'center', color: theme.text, padding: '10px', margin: '4px'}} className="ui centered header">Context and Hooks Test</h2>
//                 <div className="ui three buttons">
//                     <button className="ui button">Overview</button>
//                     <button className="ui button">Contact</button>
//                     <button className="ui button">Support</button>
//                 </div>
//             </nav>
//         )
//     }
// }

// ContextConsumer
// export default class NavBar extends Component {
//     render() {
//         return (
//             <AuthContext.Consumer>{ authContext =>{
//                 return (
//                     <ThemeContext.Consumer>{ themeContext => {
//                         const { isDarkTheme, ligthTheme, darkTheme } = themeContext;
//                         const { isLoggedIn, changeLogin } = authContext;
//                         const theme = isDarkTheme ? darkTheme : ligthTheme;

//                         return (
//                             <nav style={{background: theme.background, color: theme.text, height: '120px'}}>
//                                 <h2 style={{textAlign: 'center', color: theme.text, margin: '4px'}} 
//                                     className="ui centered header">Context and Hooks Test
//                                 </h2>
//                                 <p onClick={changeLogin} style={{textAlign: 'center'}}>{isLoggedIn ? 'Logged In': 'Logged Out'}</p>
//                                 <div className="ui three buttons">
//                                     <button className="ui button">Overview</button>
//                                     <button className="ui button">Contact</button>
//                                     <button className="ui button">Support</button>
//                                 </div>
//                             </nav>)
//                     }}</ThemeContext.Consumer>
//                 )
//             }}
//             </AuthContext.Consumer>
//         )
//     }
// }