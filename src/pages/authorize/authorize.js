import React from "react";
import Header from "../../components/header/header";
import AuthorizeModal from "../../components/authorize/authorize-modal";
import {observer} from "mobx-react";
const Authorize = observer(()=>{
    return(
        <>
            <Header/>
            <AuthorizeModal/>
        </>
    )
})

export default Authorize;