// Hooks
import { useState, useEffect } from "react";
// Axios
import axios from "axios";

/* exporting function from the file 
Instead of exporting the file*/
export const useFetch = (url) => {
const [data, setData] = useState(null)
const [loading, setLoading] = useState(false)
const [error, setError] = useState(null)

useEffect(() => {
    const controller = new AbortController()

    const fetchData = async () => {
       setLoading(true)
       try {
        const res = await axios.get(url, { signal: controller.signal })
        // data is loading and pending is now false
        // fetch complete
        setLoading(false)
        setData(res.data)
        // if data is complete 'null' > for error
        setError(null)
       } catch (err) {
            //abort message error
         if (err.name === 'AbortError') {
         console.log('Fetch was Aborted/Intercepted') 
         } else {
             //if error  > catching error and sending error message
            //if error NOT abort error > update state with error
             setLoading(false)
             setError('Could not fetch data')
         }
           }
       }
    

    //invoke function
    fetchData()

    // returning clean up function
    // abort if react dismounts before data is loaded
    // abort controller 
    return () => {
        controller.abort()
   }

    }, [url])

    // returning data
    return { data, loading, error }


}

 