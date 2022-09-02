import { useEffect,useState } from 'react'
import './SmartLoader.css'

function Loader(){
    return(<div class="kinetic"></div>)
}
function SmartLoader (){
    const [enough, setEnough] = useState(false);
    useEffect(()=>{
        setTimeout(()=>{
            setEnough(true)
        },120*1000)
    },[])
    if(enough)
        return null
    else
        return(
            <Loader></Loader>
        )
}

export default SmartLoader