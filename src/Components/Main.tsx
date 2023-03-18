import React from 'react'
import iconlocation from '../assets/icon-location.svg'
import iconwebsite from '../assets/icon-website.svg'
import icontwitter from '../assets/icon-twitter.svg'
import iconcompany from '../assets/icon-company.svg'
import Userinterface from '../Components/Userinterface'
import './Main.css';

export default function Main(props:{
    user: Userinterface | null;
    joined: string;
    toggle:boolean;
}) { const {user, joined, toggle} = props
  return (
    <div className={!toggle ? 'one' : 'one active'}>
    <div className={!toggle ? 'userCard' : 'userCard active'}>
        
       
    {user && 
    <> 
    <div className='nameandjoined'> 
    <img src={user.avatar_url}></img>
    <div className='namcomp'>
    <h3> {user.name} </h3>
    <div className='blue'>
      <p>{user.company}</p>
    </div>
    

    <p>joined: {joined}</p>
    </div>
    </div>


    <div className={!toggle ?'bio' : 'bio active'}>
    <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus corrupti ipsa eveniet placeat! Et, impedit, molestiae nihil, exercitationem accusamus eligendi maxime culpa nisi dolore quae pariatur repellat quo asperiores ea!</p>
    </div>
<div className={!toggle ? 'RFF' :'RFF active'}>
    <div className='r'>
       <div className='margininrepos'><p className={!toggle ?'pp': 'pp active'}> Repos</p></div>
        <h4 className={!toggle?'h4' : 'h4 active'}>{user.public_repos} </h4>
    </div>
    <div className='r'>
    <div className='margininrepos'><p className={!toggle ?'pp': 'pp active'}>followers</p>  </div>
        <h4 className={!toggle?'h4' : 'h4 active'}>{user.followers} </h4>
    </div>
    <div className='r'>
    <div className='margininrepos'><p className={!toggle ?'pp': 'pp active'}> following</p></div>
        <h4 className={!toggle?'h4' : 'h4 active'}>{user.following} </h4>
    </div>

    </div>

    <div className='Bottomsector'>
        <div className='LandB'>
      <div className='bottommain '>
     <img src={iconlocation}/>
     <div className={!toggle ? 'location' : 'location active'}>
      <p> {user.location}</p>
      </div>
     </div>
     <div className={!toggle?'bottommain' : 'bottommain active'}>

      <img src={iconwebsite} /><p>{user.blog}</p>
      </div>
        </div>
        <div className='TandC'>
      <div className={!toggle?'bottommain' : 'bottommain active'}>

     <img src={icontwitter}/> <p className='twitter'>{user.twitter_username ?user.twitter_username : 'Not Available ' }</p>
     </div>

     <div className={!toggle?'bottommain' : 'bottommain active'}>

     <img src={iconcompany}/> <p> {user.company}</p>

     </div>

    </div>
    </div>
    </>
   }
  </div> 
  </div> )
}
