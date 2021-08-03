import Tilt from 'react-tilt';
import logo from './logo.png';
import './Logo.css';

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner pt4"> 
                    <img alt='logo' src={logo} /> 
                </div>
            </Tilt>
        </div>

    )
}

export default Logo;