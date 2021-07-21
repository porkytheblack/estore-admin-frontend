import Add from '@material-ui/icons/Add';
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import General from '../../../components/add_products/General';
import Options from '../../../components/add_products/Options';


function index() {

    const categories = [
        "General",
        "Options"
    ]

    //state
    const [active_category, set_active_category] = useState("General");
    const [active_link, set_active_link] = useState(true);
    const [product_description, set_product_description] = useState("");
    const button_container = (title, bg, clr) =>{
        return(
            <HeaderBtn  className="flex items-center justify-center" bg={bg} clr={clr} >
                <span>{title}</span>

            </HeaderBtn>
        )
    }
    //category container
    const category = (title, i) =>{
        return(
            <CategoryItem onClick={()=>set_active_category(title)} key={i} active_cat={active_category} t={title} active_lnk={`${
                active_link == title ? true : false
            }`} >
                    <span>{title}</span>
            </CategoryItem>
        )
    }

    


    return (
        <AddProductsContainer className="flex flex-col">
            <HeaderContainer className="flex flex-col md:flex-row" >
                <HeaderTitle className=" w-full flex justify-start md:w-1/4 text-xl" >
                    Add New Product
                </HeaderTitle>
                <SectionButtonsContainer className=" w-full md:w-3/4 flex flex-row items-start justify-end" >
                    {button_container("Add new product", "#068eef", "white")}
                </SectionButtonsContainer>
            </HeaderContainer>
            <SectionSubCategories className="flex w-full items-center flex-wrap" >
                    {
                        categories.map((title, i)=>{
                            return(
                                category(title, i)
                            )                            
                        })
                    }
            </SectionSubCategories>
            <ProductInputContainer className="flex flex-col md:flex-row">
                    { active_category == "General" ? <General/> : active_category == "Options" ? <Options/> : "Nothing here"}
            </ProductInputContainer>
        </AddProductsContainer>
    )
}

export default index

const AddProductsContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    max-height: 100%;
    background-color: #dfe3e7;
    padding: 0px 20px;
`
const HeaderContainer = styled.div`
    top: 0;
    width: 100%;
    display: flex;
    items: center;
    background-color: transparent;
    max-width: 1320px;
    padding-top: 24px;
    margin-bottom: 24px;
`
const HeaderTitle = styled.div`
    
    color: #7d8d9e;
    font-weight: 700;
`
const SectionButtonsContainer = styled.div`

    margin-top: 10px;
`
const HeaderBtn = styled.div`
    padding: 4px 4px;
    border-radius: 5px;
    height: 32px;
    cursor: pointer;
    background-color: ${props=>props.bg};
    >span{
        color: ${props=> props.clr};
    }
`

const SectionSubCategories  = styled.div`
    margin-top: 20px;
`

const CategoryItem = styled.div`
    margin-right: 16px;
    margin-bottom: 4px;
    padding: 0 0 2px;
    cursor: pointer;
    :hover>span{
        color: #068eef;
    }
    ${props=>{
        if(props.active_lnk && props.active_cat == props.t){
            return(
                "border-bottom: 3px solid #068eef; >span{color: #068eef;}"
            )
        }
    }}
`
const CardContainer = styled.div`
    width: 100%;
    bax-shadow: 0 5px 10px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 8%) inset;
    background-color: white;
    border-radius: 8px;
    padding: 16px;
`
const ProductInputContainer = styled.div`
    width: 100%;
`
