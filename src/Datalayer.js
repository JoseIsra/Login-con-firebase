import React ,{useContext, useEffect ,useState} from 'react'
import appFirebase from './firebase'


export const DataLayerContext = React.createContext();



export const Datalayer = ({children}) => {

    const [theUser, setTheUser] = useState(null);

    useEffect(()=>{
        appFirebase.auth().onAuthStateChanged((user) => {
            setTheUser(user)
            })
        },[])

    return(
    <DataLayerContext.Provider  value={theUser}>
        {children}
    </DataLayerContext.Provider>

    )
}


export const useDataLayerValue = ()=> useContext(DataLayerContext);
