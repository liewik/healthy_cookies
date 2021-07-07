import React, {useCallback, useState} from 'react';

import MainStack from "./components/Navigate";
import Start from "./pages/Start";


export const MainContext = React.createContext({isAuth: false});

export default () => {
    const [isAuthenticated, setAuthenticated] = useState<boolean>(false);
    const goToMain = useCallback(() => setAuthenticated(true), []);


    return (
        <MainContext.Provider value={{isAuth: isAuthenticated}}>
            <MainContext.Consumer>
                {value => value.isAuth ? <MainStack/> : <Start goToMain={goToMain}/>}
            </MainContext.Consumer>
        </MainContext.Provider>
    );
}

