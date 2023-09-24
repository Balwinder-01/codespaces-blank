import React from "react";

const Avatar = ({ children,  backgroundColor,px,py,padding,color,borderRadius,fontSize,cursor}) => {
    const Style = {
    backgroundColor,
    padding:`${py}${px}`,
    color:color|| 'black',
    borderRadius,
    fontSize,
    textAlign:'center',
    cursor: cursor|| null
    };
    return(<div style={Style}>{children}</div>);
    
};

export default Avatar;
