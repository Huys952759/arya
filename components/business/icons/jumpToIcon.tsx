import React from "react";
import styled from "styled-components";
import tw from "tailwind-styled-components";

export default function JumpToIcon({ mode = 'bgDark' }: {mode?: 'bgDark' | 'bgWhite'}) {
    return (
        <ContainerTW mode={mode}>
            <svg t="1693108581756" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4003" width="200" height="200">
                <path d="M708.266667 401.066667V597.333333h85.333333V256h-341.333333v85.333333h196.266666L256 733.866667l59.733333 59.733333 392.533334-392.533333z" fill={mode === 'bgDark' ? 'white': 'black'} p-id="4004"></path>
            </svg>
        </ContainerTW>
    )
}

const ContainerSC = styled('div')`
    width: 82px;
    height: 82px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    .icon {
        width: 36px;
        height: 36px;
    }
`

interface ContainerProps {
    mode: 'bgDark' | 'bgWhite'
}

const ContainerTW = tw(ContainerSC) <ContainerProps>`
   ${p => p.mode === 'bgDark' ? 'bg-black' : 'bg-white'} 
`

