import {useEffect, useRef, useState} from 'react'
import {Route, BrowserRouter as Router, Link} from 'react-router-dom'
import {Projects} from '../../pages/Projects/Projects'
import {Home} from '../../pages/Home/Home'
import {Contact} from '../../pages/Contact/Contact'
import './navbar.css'

function NavElement(props) {

    const [hoverWidth, setHoverWidth] = useState({width: '0px', float: 'left'})
    const [elemStyle, setElemStyle] = useState({transform: 'translateY(-100px)', opacity: '0'})
    const [isFinished, setIsFinished] = useState(false)

    function inHoverStyle(){
        setIsFinished(false)
        setHoverWidth({width: '100%'})
        setTimeout(() => {
            setIsFinished(true)
        }, 600)
    }

    function outHoverStyle(){
        if(isFinished){
            setHoverWidth({width: '0px', float: 'right'})
        }else{
            setTimeout(() => {
                setHoverWidth({width: '0px', float: 'right'})
            }, 600)
        }
    }

    function changePage(){
        let allElem = document.querySelectorAll('.singleNav')
        allElem.forEach(elem => {
            elem.style.opacity = 0
            elem.style.transform = 'translateY(-100px)'
        })
    }

    useEffect(() => {
        if(props.isVisible){
            setTimeout(() => {
                setElemStyle({transform: 'translateY(0px)', opacity: '1'})
            }, props.timer)
        }else{
            setElemStyle({transform: 'translateY(-100px)', opacity: '0'})
        }
    }, [props.isVisible])

    return (
        <li style={elemStyle} className="singleNav">
            <p onMouseEnter={inHoverStyle} onMouseLeave={outHoverStyle} onClick={changePage}>{props.children}</p>
            <div className="underline" style={hoverWidth}></div>
        </li>
    )
}

export function Navbar () {
    const [firstStyle, setFirstStyle] = useState({height: '25px', transform: 'translateX(0px) rotate(0deg)', backgroundColor: 'white'})
    const [secondStyle, setSecondStyle] = useState({height: '50px', transform: 'scale(1)', backgroundColor: 'white'})
    const [thirdStyle, setThirdStyle] = useState({height: '35px', transform: 'translateX(0px) rotate(0deg)', backgroundColor: 'white'})
    const [navVisibility, setNavVisibility] = useState({height: '0px'})
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        if(isVisible){
            setNavVisibility({height: 'auto'})
        }else{
            setNavVisibility({height: '0px'})
        }
    }, [isVisible])

    function onHoverStyle(){
        if(!isVisible){
            setFirstStyle({height: '35px', backgroundColor: '#FC802D'})
            setSecondStyle({height: '20px', backgroundColor: '#FC802D'})
            setThirdStyle({height: '50px', backgroundColor: '#FC802D'})
        }
    }

    function outHoverStyle(){
        if(!isVisible){
            setFirstStyle({height: '25px', backgroundColor: 'white'})
            setSecondStyle({height: '50px', backgroundColor: 'white'})
            setThirdStyle({height: '35px', backgroundColor: 'white'})
        }
    }

    function visible(){
        if(!isVisible){
            setFirstStyle({height: '50px', transform: 'translateX(18px) rotate(0deg)', backgroundColor: '#FC802D'})
            setThirdStyle({height: '50px', transform: 'translateX(-18px) rotate(0deg)', backgroundColor: '#FC802D'})
            setTimeout(() => {
                setSecondStyle({transform: 'scale(0)'})
                setFirstStyle({height: '50px', transform: 'translateX(18px) rotate(45deg)', backgroundColor: '#FC802D'})
                setThirdStyle({height: '50px', transform: 'translateX(-18px) rotate(-45deg)', backgroundColor: '#FC802D'})
            }, 500)
            setIsVisible(true)
        }else{
            setFirstStyle({height: '50px', transform: 'translateX(18px) rotate(0deg)', backgroundColor: 'white'})
            setThirdStyle({height: '50px', transform: 'translateX(-18px) rotate(0deg)', backgroundColor: 'white'})
            setTimeout(() => {
                setSecondStyle({height:'50px', transform: 'scale(1)', backgroundColor: 'white'})
                setFirstStyle({height: '25px', transform: 'translateX(0px) rotate(0deg)', backgroundColor: 'white'})
                setThirdStyle({height: '35px', transform: 'translateX(0px) rotate(0deg)', backgroundColor: 'white'})
                setIsVisible(false)
            }, 500)
        }
    }

    return (
        <Router>
            <div className="navbar" style={navVisibility}>
                <nav>
                    <ul>
                        <Link to="/"><div onClick={visible}><NavElement timer={200} isVisible={isVisible}>Home</NavElement></div></Link>
                        <Link to="/projects"><div onClick={visible}><NavElement timer={600} isVisible={isVisible}>Projets</NavElement></div></Link>
                        <Link to="/contact"><div onClick={visible}><NavElement timer={1000} isVisible={isVisible}>Contact</NavElement></div></Link>
                    </ul>
                </nav>
                <div className="burger" onClick={visible} onMouseOver={onHoverStyle} onMouseOut={outHoverStyle}>
                    <div style={firstStyle}></div>
                    <div style={secondStyle}></div>
                    <div style={thirdStyle}></div>
                </div>
            </div>
            <Route path="/" exact component={Home} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" render={(props) => <Contact isVisible={true} />}/>
        </Router>
    )
}