import { useState } from 'react'
import axios from 'axios'

 const useFetch = (url) => {

    const [response, setRespose]= useState ()
    const [hasError, setHasError]= useState (false)

    const getApi =() => {
        axios.get(url)
        .then(res=> {
            setRespose(res.data)
        })
        .catch(err=> {
            console.log(err)
            setHasError (true)
        } )

    }

    return[response, getApi, hasError]


}
export default useFetch