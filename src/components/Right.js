import './Right.css';

import Z1 from './Image/Z1.svg'
import V1 from './Image/V1.svg'
import S1 from './Image/S1.svg'
import G1 from './Image/G1.svg'


const Right = () => {

    return(
    <div className='Webpage'>
        <div className='HeaderFrame'>
          <img className='Z1'
          alt=""
          src={Z1}
          />

        <div className='Frame20'>
            <div className='Frame18'>
             <h1 className='ZIP'> ZIP</h1>
             <h1 className='Messanger'> Messanger</h1>
            </div>

            <div className='Frame19'>
               <span className='V1'>
               <img 
                alt=""
                src={V1}
               />
               </span> 
          
               <span className='S1'>
               <img 
                alt=""
                src={S1}
                />
               </span>
            
              <span className='G1'>
               <img 
                alt=""
                src={G1}
                />
               </span>
            </div>
        </div>
    </div>

        <div className='MessageFrame'>
             <div className='Frame15'>
                 <div className='Frame17'>
                   <h1 className='Message'> Message </h1>
                   <h1 className='Below'> Enter message below</h1>
                 </div>
                  
                 <div className='Rectangle'></div>
             </div>
         </div>
    
        <div className='ButtonFrame'>
            
             <button className='Button1' type="button"> 
               <h1 className='Send'>SEND</h1>
             </button>
           
             <button className='Button2' type="button">
                <h1 className='Cancel'> CANCEL</h1>
             </button>
        </div>    
    </div>
)}; 

export default Right;