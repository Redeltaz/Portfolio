import {Component, useRef, useState} from 'react'
import {Route, BrowserRouter as Router, Link} from 'react-router-dom'
import {About} from '../../pages/About/About'
import {Home} from '../../pages/Home/Home'
import {Contact} from '../../pages/Contact/Contact'
import './navbar.css'

function NavElement(props) {

    const [hoverWidth, setHoverWidth] = useState({width: '0px', float: 'left'})
    const [isFinished, setIsFinished] = useState(false)
    const elem = useRef(null)

    function inHoverStyle(){
        setIsFinished(false)
        setHoverWidth({width: `${elem.current.offsetWidth}px`})
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

    return (
        <li>
            <p onMouseEnter={inHoverStyle} onMouseLeave={outHoverStyle} ref={elem}>{props.children}</p>
            <div className="underline" style={hoverWidth}></div>
        </li>
    )
}

export class Navbar extends Component {

    render (){
        return <Router>
            <div className="navbar">
                {/* <nav>
                    <ul>
                        <Link to="/"><NavElement>Home</NavElement></Link>
                        <Link to="/about"><NavElement>About</NavElement></Link>
                        <Link to="/contact"><NavElement>Contact</NavElement></Link>
                    </ul>
                </nav> */}
            </div>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
        </Router>
    }
}