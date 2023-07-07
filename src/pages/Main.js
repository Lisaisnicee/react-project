import logo from "../assets/img/logo.svg";
import "../styles/css/App.css";
import Information from "../component/information";
import { Link } from 'react-router-dom'

const Main = () => {
    return ( 
    <>
        <div className="App">
            <header className="App-header">
            <Link to="/about">Page About</Link>

            <img src={logo} className="App-logo" alt="logo" />

            <Information
                nom="Elmaleh"
                prenom="Yanis"
                age={40}
                photo={logo}
                adresse="123 rue lorem"
                tel="0611111111"
                permis="Moto"
                siteweb="google.com"
            />
            </header>
        </div>
    </>
     );
}
 
export default Main;

