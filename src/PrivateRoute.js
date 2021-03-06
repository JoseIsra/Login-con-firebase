import React from 'react';
import { useDataLayerValue } from './Datalayer';
import { Route, Redirect } from 'react-router-dom';



export const PrivateRoute = ({children, ...rest}) => {
    const  user  = useDataLayerValue();

    return (
        <Route
        {...rest}
        render={
            ({location})=> 
                user ?(
                    children
                ):(
                    <Redirect 
                    to={{
                        pathname:'/signin',
                        state: {from:location}
                    }}
                    />
                )
        }
        />
    )
}
