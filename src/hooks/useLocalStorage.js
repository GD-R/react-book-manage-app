import React, { useEffect, useState } from 'react'

const useLocalStorage = (key,initialValue) => {

    const [localValue,setLocalValue] = useState(() => {
       try { 
        
        const result = window.localStorage.getItem(key);
        return result? JSON.parse(result) : initialValue
    }
    catch(error) {
      return initialValue
    }
    });

    
    useEffect(() => {
       
     window.localStorage.setItem(key,JSON.stringify(localValue));
    }, [key,localValue])

  

  return [localValue,setLocalValue]

}

export default useLocalStorage
