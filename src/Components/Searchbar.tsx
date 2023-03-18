import './Searchbar.css'
import searchicon from '../assets/icon-search.svg'
    export default function Searchbar(props : {
    handleChange : (event: any) => void;
    change : () => void;
    inputText : string;
    toggle: boolean;
    
        }) {
    const {handleChange, change, inputText,toggle} = props;

  return (
    <div className={!toggle ? 'searchSector' :'searchSector active'}>
    <div className={!toggle ? 'Search' : 'Search active'}>
        <img src={searchicon} className='searchicon'/>

        {!toggle ?
          <input className='input' type ='text' value={inputText}
          onChange={handleChange}
          placeholder='Search github username...'
          >
          </input> :
            <input className='input active'type ='text' value={inputText}
            onChange={handleChange}
            placeholder='Search github username...'
            >
            </input> 
          }
    
      <button onClick={change}>
         Search 
         </button>  
           
    </div>
    </div>
  )
}
