import React from 'react'
import styled from 'styled-components'

function ButtonContainer({Icon, icon_data, fontSize, bgColor, color, icon_position, hover_color, button_title, has_border}) {
    return (
        <MyButton has_border={has_border} className="flex items-center justify-around" hover_color={hover_color} bgColor={bgColor} color={color} >
            {icon_position == "left" && <Icon fontSize={icon_data.size} style={{color: icon_data.color}} /> }
            <BtnTitle fontSize={fontSize} color={icon_data.color} >
                {button_title}
            </BtnTitle>
            {icon_position == "right" && <Icon fontSize={icon_data.size} style={{color: icon_data.color}} /> }
        </MyButton>
    )
}

export default ButtonContainer


const MyButton = styled.div`
    border-radius: 10px;
    padding: 9px 12px;
    margin-left: 20px;
    border: ${props=>props.has_border?"1px solid black": ""};
    background-color: ${props => props.has_border ? "white" : props.bgColor};
    color: ${props =>props.color};

    :hover{
        opacity: 1;
        background-color: ${props =>props.bgColor};
    }
    cursor: pointer;
`
const BtnTitle  = styled.div`
    font-size: ${props =>props.fontSize};
    color: ${props =>props.color};
    font-weight: 900;
`