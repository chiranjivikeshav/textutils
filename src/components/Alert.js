import React from 'react'
function Alert(props) {
    // const colorchange = ()=>{
    //     if(props.Mode==="black"){
    //         return "rgb(153, 215, 234)"
    //     }
    //     else{
    //         return "black"
    //     }
    // }

    return (


        props.alert && <div className={`alert alert-${props.alert.typ}  alert-dismissible fade show`}
            style={{
                backgroundColor: 'rgb(153, 215, 234)', color: 'black', width: '100%', height: '60px',
                justifyContent: 'center', display: 'flex'
            }}
            role="alert">
            <strong>{props.alert.typ}</strong>: {props.alert.msg}


        </div>



    )
};
export default Alert

