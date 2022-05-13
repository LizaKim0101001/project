import React from "react";
import Header from "../../components/header/header";
import ProfileBoard from "../../components/profile/profile-board";
import CardHeader from "../../components/card-header/card-header";

export default function Profile() {
    return(
        <>
            <Header/>
            <section className="board">
                <CardHeader/>
                <ProfileBoard/>
            </section>
        </>
    )
}