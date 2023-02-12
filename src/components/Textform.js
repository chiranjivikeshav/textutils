
import React, { useState } from 'react';
export default function Textform(props) {

    const [text, setText] = useState("");
    // button for upppercase.............
    const handleUPclick = () => {
        let newtext = text.toUpperCase();
        setText(newtext)
    }
    // button for lowercase.............
    const handleLoclick = () => {
        let newtext = text.toLowerCase();
        setText(newtext)
    }
    // button for clear text..............
    const handleclearclick = () => {
        let newtext = "";
        setText(newtext)
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }





    // const [myStyle, setMyStyle] = useState({
    //     color: "white",
    //     backgroundColor: "black"
    // })
    // const [btntext, setBtnText] = useState("Enable Dark mode")
    // const toggleStyle = () => {
    //     if (myStyle.color == "white") {
    //         setMyStyle({
    //             color: "black",
    //             backgroundColor: "white"
    //         }
    //         )
    //         setBtnText("enable Dark mode")
    //     }
    //     else {
    //         setMyStyle({
    //             color: "white",
    //             backgroundColor: "black"
    //         }
    //         )
    //         setBtnText("enable Light mode")
    //     }
    // }




    return (
        <>
            <div className='container' style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h2 >{props.heading}</h2>

                <div className="mb-3">
                    <textarea className="form-control" value={text} style={{ backgroundColor: props.mode === 'light' ? 'white' : 'grey', color: props.mode === 'light' ? 'black' : 'white' }}
                        onChange={handleOnChange} id="myText" rows="8"></textarea>
                </div>

                <button className='btn btn-primary mx-5' onClick={handleUPclick}>convert to  UPPERCASE</button>
                <button className='btn btn-primary mx-5' onClick={handleLoclick}>convert to LOWERCASE</button>
                <button className='btn btn-primary mx-5' onClick={handleclearclick}>Clear Text</button>

            </div>

            <div className='container my-4' style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").length - 1} words and {text.length} charecters</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>

            {/* dark or light mode button */}
            {/* <div classNameName='container my-3'>
                <button type="button" className="btn btn-primary" onClick={toggleStyle}>{btntext}</button>
            </div> */}


            

        </>
    )
}
