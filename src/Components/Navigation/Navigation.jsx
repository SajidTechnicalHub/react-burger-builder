import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import Bacon from '../Ingredient/Bacon'
import Cheese from '../Ingredient/Cheese';
import Lattuce from '../Ingredient/Lettuce';
import Meat from '../Ingredient/Meat';
import top from '../Images/top.PNG';
import buttom from '../Images/buttom.PNG';



const Navigation = () => {
    const LessPointer = {
        
        padding: '7px 25px',
        border: '2px solid grey',
        textAlign: 'center',
        alignItems: 'center',
        color: 'white',
        backgroundColor: '#d39852',
        cursor: 'pointer',
      
}
    const LessNotAllowed = {
        
        padding: '7px 25px',
        border: '2px solid grey',
        textAlign: 'center',
        alignItems: 'center',
        color: 'white',
        backgroundColor: '#ad997f',
        cursor: 'not-allowed', 
    }
    
    const [lettuceCss, setLettuceCss] = useState(LessNotAllowed)
    const [baconCss, setBaconCss] = useState(LessNotAllowed)
    const [cheeseCss, setCheeseCss] = useState(LessNotAllowed)
    const [meatCss, setMeatCss] = useState(LessNotAllowed)
    const [count, setCount] = useState(3);
    const [lettuce, setLettuce] = useState([]);
    const [bacon, setBacon] = useState([]);
    const [cheese, setCheese] = useState([]);
    const [meat, setMeat] = useState([]);

    
    const LettuceMore = () => {
        setCount( count + 0.5);
        const data = {id: new Date().getTime().toString()};
        
        setLettuce(()=>{
            return [...lettuce, data]
        })

            setLettuceCss(LessPointer)
        
    }
    const LettuceLess = () => {
       
        if(lettuce.length!==0){
            setCount( count - 0.5);
            lettuce.length--;
        }
        if(lettuce.length===0){
            setLettuceCss(LessNotAllowed);
        }
        
        setLettuce(lettuce)
        
    }

    const BaconMore =()=>{
        setCount( count + 0.7);
        const data = {id: new Date().getTime().toString()};
        setBacon(()=>{
            return [...bacon, data]
        })
        setBaconCss(LessPointer);
    }
    const BaconLess =()=>{
        if(bacon.length!==0){
            setCount( count - 0.7);
            bacon.length--;
        }
        if(bacon.length===0){
            setBaconCss(LessNotAllowed);
        }
        
        setBacon(bacon)
    }
    const CheeseMore =()=>{
        setCount( count + 0.4);
        const data = {id: new Date().getTime().toString()};
        setCheese(()=>{
            return [...cheese, data]
        })
        setCheeseCss(LessPointer);
    }
    const CheeseLess =()=>{
        if(cheese.length!==0){
            setCount( count - 0.4);
            cheese.length--;
        }
        if(cheese.length===0){
            setCheeseCss(LessNotAllowed);
        }
        
        setCheese(cheese)
    }

    const MeatMore =()=>{
        setCount( count + 1.3);
        const data = {id: new Date().getTime().toString()};
        setMeat(()=>{
            return [...meat, data]
        })
        setMeatCss(LessPointer);
    }
    const MeatLess =()=>{
        if(meat.length!==0){
            setCount( count - 1.3);
            meat.length--;
        }
        if(meat.length===0){
            setMeatCss(LessNotAllowed);
        }
        
        setMeat(meat)
    }
    const LuttuceLessHoverEvent = () =>{
        if(lettuce.length===0){
            setLettuceCss(LessNotAllowed)
        }
    }
    const BaconLessHoverEvent = () =>{
        
        if(bacon.length===0 ){
            setBaconCss(LessNotAllowed)
        }
    }
    const CheeseLessHoverEvent = () =>{
        
        if(cheese.length===0 ){
            setCheeseCss(LessNotAllowed)
        }
    }
    const MeatLessHoverEvent = () =>{
        
        if(meat.length===0 ){
            setMeatCss(LessNotAllowed)
        }
    }
    return (
        <>
        
        
            <div className="container-fluid">
                <div className="d-flex justify-content-center align-content-start b-main-div ">
                    
                    <div className=" py-2 d-flex flex-column  align-items-center b-container mx-auto">
                        
                        <img src={top} alt="top" className="p-2" width="300px" height="90px"></img>
                        {
                            (lettuce.length===0 && bacon.length===0 && cheese.length===0 && meat.length===0) ?
                            <p className ="py-2">No Ingredient Added</p> : ''
                         }
                       
                        {  
                            
                            lettuce.map((elem, index)=>{
                                
                                return(
                                    <Lattuce key={elem.id}/>
                                );
                            })  
                            
                        }
                        {
                            
                            bacon.map((elem, index)=>{
                                
                                return(
                                    <Bacon key={elem.id}/>
                                );
                            })  
                            
                        }
                        {
                           
                            cheese.map((elem, index)=>{
                                
                                return(
                                    <Cheese key={elem.id}/>
                                );
                            })  
                            
                        }
                        {
                            
                            meat.map((elem, index)=>{
                                
                                return(
                                    <Meat key={elem.id}/>
                                );
                            })  
                            
                        }
                        
                        <img src={buttom} alt="buttom" width="300px" height="50px"></img>

                    </div>
                </div>

            </div>
            <footer>
            <div className="d-flex justify-content-center burger-footer ">
                    
                    <div className=" p-2 mt-1 align-items-center justify-content-center">
                        <p className="text-center">Current Price:<span className="font-weight-bold"> ${count.toFixed(2)}</span></p>
                        <div className="d-flex flex-row mt-3 justify-content-center justify-content-between align-items-center">
                            <span className=" font-weight-bold mr-auto ">Lettuce</span>
                            <span className="ml-5 mb-2 "><botton onMouseOver={LuttuceLessHoverEvent} style={lettuceCss} onClick={LettuceLess}>Less</botton></span>
                            <span className="ml-3 mb-2"><botton className="burger-more-btn" onClick={LettuceMore}>More</botton></span>
                        </div>
                        <div className="d-flex flex-row mt-3 justify-content-center align-items-center">
                            <div className=" font-weight-bold mr-auto">Bacon</div>
                            <div className="ml-5 mb-2 "><botton onMouseOver={BaconLessHoverEvent} style={baconCss} onClick={BaconLess}>Less</botton></div>
                            <div className="ml-3 mb-2"><botton className="burger-more-btn" onClick={BaconMore}>More</botton></div>
                        </div>
                        <div className="d-flex flex-row mt-3 justify-content-center align-items-center">
                            <div className=" font-weight-bold mr-auto">Cheese</div>
                            <div className="ml-5 mb-2 "><botton onMouseOver={CheeseLessHoverEvent} style={cheeseCss} onClick={CheeseLess}>Less</botton></div>
                            <div className="ml-3 mb-2"><botton className="burger-more-btn" onClick={CheeseMore}>More</botton></div>
                        </div>
                        <div className="d-flex flex-row mt-3 justify-content-center align-items-center">
                            <div className=" font-weight-bold mr-auto">Meat</div>
                            <div className="ml-5 mb-2"><botton onMouseOver={MeatLessHoverEvent} style={meatCss} onClick={MeatLess}>Less</botton></div>
                            <div className="ml-3 mb-2"><botton className="burger-more-btn" onClick={MeatMore}>More</botton></div>
                        </div>
                        <div className="d-flex flex-row mt-3 mb-2 justify-content-center align-items-center">
                            <div className=" ml-3">
                                
                                <NavLink exact activeClassName="" className={count===3 ? 'burger-signup-btn' : 'burger-signup-btn1'} to="/login">SIGN UP TO ORDER</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Navigation;
