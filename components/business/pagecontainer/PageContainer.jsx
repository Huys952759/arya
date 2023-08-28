import React from "react";
import { styled } from "styled-components"
import tw from "tailwind-styled-components"
import Header from "../header/Header";


export default function PageContainer({children}) {
    return (
        <ContainerTW>
            <Header></Header>
            {children}
        </ContainerTW>
    )
}


const ContainerTW = tw.main`
   min-h-screen 
   bg-white
`;
