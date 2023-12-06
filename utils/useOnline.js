import { useState,useEffect } from "react";

const useOnline = () =>{
    const [isOnline,setIsOnline] = useState(true);
    
    useEffect(()=>{
        const handleOnline = () =>{
            setIsOnline(true);
        }
        const handleOffline = () =>{
            setIsOnline(false);
        }
        
        window.addEventListener("online",handleOnline);
        window.addEventListener("online",handleOffline);

        window.addEventListener("offline",()=>{
            setIsOnline(false);
        })

        return () => {
            window.removeEventListener("remove",handleOnline);
            window.removeEventListener("remove",handleOffline);
        }
    })

    return isOnline;
}

export default useOnline;