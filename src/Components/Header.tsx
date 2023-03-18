import iconmoon from '../assets/icon-moon.svg';
import iconsun from '../assets/icon-sun.svg';

import './Header.css';

export default function Header(props:{
  toggle: boolean;
  toggleChange:() => void;
}) {
  const {toggle, toggleChange} = props;
  return (
    <header className={!toggle? 'Header' : 'Header active'}>

    <h1> Devfinder </h1>
    {!toggle ?
      <div className='toggle'
      onClick={toggleChange}>
      <p>DARK </p>
      <img src={iconmoon}/>
    </div> :
   
   <div className='toggle active'
   onClick={toggleChange}>

   <p>Light </p>
   <img src={iconsun}/>
 </div> 
  }
   
   </header>  )
}
