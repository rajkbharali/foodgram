import { useEffect, useState } from "react"

const useOnlineChecker = () => {
    const [onlineChecker, setOnlineChecker] = useState(true)
    
    useEffect(() => {
        window.addEventListener("offline", ()=>{
            setOnlineChecker(false)
        })
        window.addEventListener("online", ()=>{
            setOnlineChecker(true)
        })
    },[])
    
    return onlineChecker
}

export default useOnlineChecker