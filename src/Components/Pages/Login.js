import React from "react";
import BaseDefault from "../../core/BaseDefault";

export default function Login_Page(){
    return(
        <BaseDefault
            styles="title-page"
            title="Login"
        >
            <div className="log-page">
                <div>
                <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSHs_OjPDNmk8I-gLZbx2PU9qIxSe5RXJQytuSLoKxVUhpSfmc-"/>
                <form>
                    <input placeholder="Enter Email Address.."/>
                    <input placeholder="Enter Email Address.."/>

                </form>
                </div>
            </div>

        </BaseDefault>
    )
}