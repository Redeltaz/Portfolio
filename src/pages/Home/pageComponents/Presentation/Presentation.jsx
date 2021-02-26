import {useState} from 'react'
import './presentation.css'

export function Presentation(props){

        return(
            <div className="section presentation">
                <div className="presentationContent">
                    <div className="left">
                        <p className="presentationContent">{'<HelloWorld'} <br></br> 
                            {'fullName="Lucas Campistron"/>'} <br></br> 
                            {'passion="javascript"'}<br></br> {'/>'}
                        </p>
                    </div>
                    <div className="right">
                        <p className="leftTitle">Test présentation</p>
                        <p className="leftContent">Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit. Ut lobortis ornare metus, at pulvinar mi mollis quis. Mauris 
                        aliquet vehicula dolor, at iaculis ligula pellentesque eget. Quisque cursus mauris 
                        eget metus dignissim tristique. Ut ut libero et neque elementum ultrices nec sed turpis. 
                        Cras elementum, purus sit amet dictum interdum, dolor nibh dapibus velit, at blandit quam 
                        lorem vel lacus. Ut accumsan vitae eros ut porttitor</p>
                    </div>
                </div>
            </div>  
        ) 
}