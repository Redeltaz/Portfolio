import './presentation.css'

export function HelloWorld(){
    return(
        <div className="left">
            <p className="leftContent">
                {'<HelloWorld'} 
                <span className="arguments">
                    <p>fullName = "Lucas.C"</p>
                    <p>age = 19</p>
                    <p>passion = "javascript"</p>
                    <div>
                        <p>isMotivated = true</p>
                        <div className="blink"></div>
                    </div>
                </span>
                {'/>'}
            </p>
        </div>
    )
}

export function Presentation(){

        return(
            <div className="section presentation">
                <div className="presentationContent">
                    <HelloWorld />
                    <div className="right">
                        <div className="rightContent">
                            <h1>Salut !</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur 
                            adipiscing elit. Ut lobortis ornare metus, at pulvinar mi mollis quis. Mauris 
                            aliquet vehicula dolor, at iaculis ligula pellentesque eget. Quisque cursus mauris 
                            eget metus dignissim tristique. Ut ut libero et neque elementum ultrices nec sed turpis. 
                            Cras elementum, purus sit amet dictum interdum, dolor nibh dapibus velit, at blandit quam 
                            lorem vel lacus. Ut accumsan vitae eros ut porttitor</p>
                        </div>
                        <div className="rightLine"></div>
                    </div>
                </div>
            </div>  
        ) 
}