import React, { useEffect, useState, useMemo, useCallback,useContext } from 'react'
import {useLocation} from 'react-router-dom'
const FormInput = (props:{display:string,taskText:string}) =>{
    const show = props.display
return (
    <input style = {{display : show}} value = {props.taskText}/>


    
)

}   
export default FormInput