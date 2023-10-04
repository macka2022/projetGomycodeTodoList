import axios from "axios"
import { useEffect, useState } from "react"

const useRecuperation = (url) => {
    const [isLoading , setIsLoading] = useState(true)
    const [erreur , setErreur] =useState(null)
    const [donnee, setDonnee]= useState(null)
    useEffect(()  => {
        axios.get(url)
        .then(response => {
           setDonnee(response.data )
            setIsLoading(false)
            console.log(response)
            console.log("hbfbfn")
        })
        .catch(err =>{
           console.log("Erreur ce produit"+err)
             setErreur(err.message)
        })
    },[url])
    return {donnee, isLoading , erreur}
}
export default useRecuperation