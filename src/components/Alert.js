import React from 'react'

function Alert(props) {
  // function to capitilize the first letter of the word success
  const capitilize = (word)=>{
  const lower = word.toLowerCase();
  return lower.charAt(0).toUpperCase() + lower.slice(1);
}  
return (
  // making the div for giving the height to the alert bar so that layout will not shift from its position
    // &&if the props.alert is null then only we will go forward thats the reason we have used the &&
  <div style={{height : '50px'}}>

    {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitilize(props.alert.type)}</strong>:{props.alert.msg}
        {/* //we are making the props for the type and the msg  */}
    </div>}
  </div>
    
  )
}

export default Alert