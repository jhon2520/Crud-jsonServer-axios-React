import React from "react";
import CrudApp from "./CrudApp";
import CrudApi from "./CrudApi";

const MyApp = ()=>{
    return(
        <>
            <h1>Ejercicios React</h1>
            <CrudApi/>
            {/* <CrudApp/> */}
        </>
    );
}

export{
    MyApp as default
}