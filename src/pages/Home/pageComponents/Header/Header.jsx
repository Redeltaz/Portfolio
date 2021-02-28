import {useState, useEffect} from 'react'
import {useInView} from 'react-intersection-observer'
import './header.css'

export function Header(props){
    const [nameCss, setNameCss] = useState({transform: 'translateY(-200px)', opacity: '0'})
    const [jobCss, setJobCss] = useState({transform: 'translateY(150px)', opacity: '0'})
    const [lineWidth, setLineWidth] = useState({width: '0'})
    const [squareOpacity, setsquareOpacity] = useState({opacity: '0', transform: 'rotate(225deg)'})

    const [ref, inView] = useInView({
        threshold: 1
    })

    useEffect(() => {
        if(inView){
            requestAnimationFrame(() => {
                setNameCss({transform: 'translateY(0px)', opacity: '1'})
                setJobCss({transform: 'translateY(0px)', opacity: '1'})
            })

            setTimeout(() => {
                if(window.screen.width >= 600){
                    setLineWidth({width: '100%'})
                }else{
                    setLineWidth({width: '80%'})
                }
                
                setsquareOpacity({opacity: '1', transform: 'rotate(45deg)'})
            }, 1300)
        }else{
            setNameCss({transform: 'translateY(-200px)', opacity: '0'})
            setJobCss({transform: 'translateY(150px)', opacity: '0'})
            setLineWidth({width: '0'})
            setsquareOpacity({opacity: '0', transform: 'rotate(225deg)'})
        }
    }, [inView])
    
    return (
        <header ref={ref} className="section">
            <div className="headerContent">
                <p style={nameCss}>LUCAS CAMPISTRON</p>
                <div className="middleLine" >
                    <div className="line" style={lineWidth}></div>
                    <div className="square" style={squareOpacity}></div>
                </div>
                <p style={jobCss}>Fullstack Javascript Developper</p>
            </div>
        </header>
    )
}