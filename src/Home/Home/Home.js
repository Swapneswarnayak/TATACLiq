import React from 'react';
import "../Footer/footer.css"
// import Carousel from 'react-bootstrap/Carousel';
import UncontrolledExample from  "../carousel/Carousel"
// import Footer from '../Footer/Footer';
import {useState,useEffect} from "react";
import Carousela from "../Minicarousel/Minicarousel"
import "../Minicarousel/carousel.css"

import  "./home.css"
import Footer from '../Footer/Footer';
function Home(props) {
     const [state,setState]=useState([]);
     const[data,setData]=useState([]);
     const[data1,setData1]=useState([]);
     const[data2,setData2]=useState([]);
     useEffect(()=>{
      getData()
     },[]);
    const getData=()=>{
      fetch("https://himangshumahato82.github.io/HomePage-Data/db.json")
      .then((res)=>res.json())
      .then((data)=>{
        // console.log(data.Data)
        setState(data.Data.Deals);
        setData(data.Data.Dealsa);
        setData1(data.Data.womena)
        setData2(data.Data.Womenb)
        
      })
    }
    
  
    return (
        <div style={{backgroundColor:"hsl(0,0%,93%)"}}>
      
        <div>
        <UncontrolledExample/>
    
        </div>
             
            <div className='smallimg'>
             <div>
             <img src="https://assets.tatacliq.com/medias/sys_master/images/44967774945310.jpg" alt="" />
             </div>
             <div>             <img src="https://assets.tatacliq.com/medias/sys_master/images/44967775272990.jpg" alt="" />
             </div>
             <div>             <img src="https://assets.tatacliq.com/medias/sys_master/images/44967775141918.jpg" alt="" />
             </div>
             <div>             <img src="https://assets.tatacliq.com/medias/sys_master/images/44967775338526.jpg" alt="" />
             </div>
             <div>             <img src="https://assets.tatacliq.com/medias/sys_master/images/44967775076382.jpg" alt="" />
             </div>
             <div>             <img src="https://assets.tatacliq.com/medias/sys_master/images/44967775535134.jpg" alt="" />
             </div>
             <div>             <img src="https://assets.tatacliq.com/medias/sys_master/images/44967775404062.jpg" alt="" />
             </div>
             <div>             <img src="https://assets.tatacliq.com/medias/sys_master/images/44967775469598.jpg" alt="" />
             </div>
             <div>             <img src="https://assets.tatacliq.com/medias/sys_master/images/44967775731742.jpg" alt="" />
             </div>
             <div>             <img src="https://assets.tatacliq.com/medias/sys_master/images/44967775600670.jpg" alt="" />
             </div>
             <div>             <img src="https://assets.tatacliq.com/medias/sys_master/images/44967775797278.jpg" alt="" />
             </div>
            </div>

            <div className='smalla'>
            <img src="https://assets.tatacliq.com/medias/sys_master/images/44916799242270.jpg" alt="" />
            </div>
            <div className='smallb'>
             <img src="https://assets.tatacliq.com/medias/sys_master/images/44978564562974.gif" alt="" />
            </div>
            <div className='smallc'>
              <img src="https://assets.tatacliq.com/medias/sys_master/images/45008629202974.jpg" alt="" />
            </div>
            <div className='smalld'>
               <img src="https://assets.tatacliq.com/medias/sys_master/images/45005581877278.jpg" alt="" />
            </div>
            
               
            <div className='brenda'>
             <div> 
             <img src="https://assets.tatacliq.com/medias/sys_master/images/44988478095390.jpg" alt="" />
             </div>
             <div>             <img src="https://assets.tatacliq.com/medias/sys_master/images/45008614490142.jpg" alt="" />
             </div>
             <div>             <img src="https://assets.tatacliq.com/medias/sys_master/images/45006404386846.jpg" alt="" />
             </div>
             <div>             <img src="https://assets.tatacliq.com/medias/sys_master/images/45008614064158.jpg" alt="" />
             </div>

            </div>
            <div className='brendb'>
            <img src="https://assets.tatacliq.com/medias/sys_master/images/44963661512734.jpg" alt="" />
            </div>
            
            
          
            <div>
            
            <Carousela
            show={4}
              >
            
            { 
              state.map((elem)=>{
                return(
                 
                <div className='mapA'>
               
            
                <img src={elem.img} alt="" />
               
                
                
                </div>
                )
              })
            }
          
            </Carousela>
            </div>

            <div className='smalle'>
            <img src="https://assets.tatacliq.com/medias/sys_master/images/44961171275806.gif" alt="" />
            </div>

            <div>
            <Carousela
            show={4}
              >
            {
              data.map((ele)=>{
                return(
                <div className='mapB'>
                
                <img src={ele.img} alt="" />
                </div>
                )
              })
            }
            </Carousela>
            </div>
            <div className='brende'>
            <img src="https://assets.tatacliq.com/medias/sys_master/images/44969008300062.jpg" alt="" />
           </div>
           <div className='brendf'>
           <div> 
             <img src="https://assets.tatacliq.com/medias/sys_master/images/45005575290910.jpg" alt="" />
             </div>
             <div>             <img src="https://assets.tatacliq.com/medias/sys_master/images/45008616325150.jpg" alt="" />
             </div>
             <div>             <img src="https://assets.tatacliq.com/medias/sys_master/images/45008616882206.jpg" alt="" />
             </div>
             <div>             <img src="https://assets.tatacliq.com/medias/sys_master/images/45001348251678.jpg" alt="" />
             </div>

          </div>
          <div className='brendg'>
             <img src="https://assets.tatacliq.com/medias/sys_master/images/44981103984670.jpg" alt="" />
             </div>
             <div className='brendh'>
             <img src="https://assets.tatacliq.com/medias/sys_master/images/44963661578270.jpg" alt="" />
            </div>
            <div className='brendi'>
            <div>
            <img src="https://assets.tatacliq.com/medias/sys_master/images/45005576503326.jpg" alt="" />
            </div>
            <div>
            <img src="https://assets.tatacliq.com/medias/sys_master/images/45005576437790.jpg" alt="" />
            </div>
           </div>
           <div className='brendj'>
           <div>
           <img src="https://assets.tatacliq.com/medias/sys_master/images/45006401798174.jpg" alt="" />
           </div>
           <div>
           <img src="https://assets.tatacliq.com/medias/sys_master/images/45005576568862.jpg" alt="" />
           </div>
          </div>
          <div className='brendk'>
          <div>
          <img src="https://assets.tatacliq.com/medias/sys_master/images/45001490104350.jpg" alt="" />
          </div>
          <div>
          <img src="https://assets.tatacliq.com/medias/sys_master/images/44935128219678.jpg" alt="" />
          </div>
         </div>
         <div className='brendl'>
         <img src="https://assets.tatacliq.com/medias/sys_master/images/44967779074078.jpg" alt="" />
        </div>
        <div >

        <Carousela
        show={4}
          >
        {
          state.map((elem)=>{
            return(
            <div className='mapC'>
            
            <img src={elem.img} alt="" />
            </div>
            )
          })
        }
        </Carousela>
          </div>
            <div className='brendn'>
            <img src="https://assets.tatacliq.com/medias/sys_master/images/44965321244702.jpg" alt="" />
            </div>
              <div className='brendo'>
              <div>
              <img src="https://assets.tatacliq.com/medias/sys_master/images/44965317214238.jpg" alt="" />
              </div>
              <div>
              <img src="https://assets.tatacliq.com/medias/sys_master/images/44899875127326.jpg" alt="" />
              </div>
              
               </div>
                 <div>
                 <Carousela
                 show={4}
                   >
                 {
                  data1.map((el)=>{
                    return(
                    <div className='mapD'>
                    
                    <img src={el.img} alt="" />
                    </div>
                    )
                  })
                }
    
                </Carousela>
                   </div>
                   <div style={{paddingBottom:"20%"}}>
                   <Carousela
                   show={4}
                     >
                   {
                    data2.map((e)=>{
                      return(
                      <div className='mapD' >
                      
                      <img src={e.img} alt="" />
                      </div>
                      )
                    })
                  }
                  </Carousela>
      
                  </div>
                
                    {/* <Footer/> */}
                  
             </div>
    );
}

export default Home;