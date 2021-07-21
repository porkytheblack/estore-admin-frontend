import styled from "styled-components"
import React, { useState } from 'react'
import AddIcon from '@material-ui/icons/Add';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { Search } from '@material-ui/icons';
import Link from 'next/link';
import ButtonContainer from "../../components/reusables/ButtonContainer";

function index() {
    const [show_filter, set_show_filter]  = useState(false)
    const check_box = ()=>{
        return(
            <CheckBox>
                <input className="w-full h-full" type="checkbox" name="" id="" />
            </CheckBox>
            
        )
    }
    const category = (title, color, amount) => {
        return(
            <div className="flex flex-row w-full items-center pr-3 justify-between">
                <span className={`text-md text-thin ${color == "blue" ? "text-blue-500" : "text-black"}`}>{title}</span>
                <span className={`text-md text-thin ${color == "blue" ? "text-blue-500" : "text-black"}`}>{amount}</span>
            </div>
        )
    }
    //filter header
    const FilterHeader = (title)=>{
        return(
            <div className="w-full text-md text-black text font-bold pl-3 pr-3 h-8 cursor-pointer flex items-center justify-between">
                {title}
                <KeyboardArrowDownIcon fontSize="small"  />
            </div>
        )
    }
    //filter sub category
    const filter_subcategory = (title) =>{
        return(
                <FilterSubCategoryStyles>
                    {title}
                    <input type="radio" name="" id="" />
                </FilterSubCategoryStyles>
        
        )
    }
    return (
        <Container>
            <PageTitle className="flex justify-start" >
                Articles
            </PageTitle>
            <FiltersContainer className="flex flex-col w-full justify-center" >
                <Link href="/articles/add_articles" >
                    <div className="w-full flex justify-start items-center">
                        <ButtonContainer Icon={AddIcon} icon_data={{size: "medium", color:"white"}} fontSize="14px" bgColor="#068eef" color="white" icon_position="left" button_title="Write New Article"   />
                    </div>
                </Link>
                <div className="w-full flex justify-between pt-2 items-center"> 
                    <div onClick={()=>{set_show_filter(!show_filter)}} >
                        <ButtonContainer Icon={KeyboardArrowDownIcon} color="black" icon_data={{size: "small", color: "black"}} fontSize="14px" bgColor="rgba(217,225,234,0.5)" icon_position="left" has_border={true} button_title="Filter" />
                    </div>
                    <FilterSearchBox>
                        <div className="w-11 h-full pt-1 flex mr-4 items-enter justify-end">
                            <Search fontSize="medium" className="m-l-4" />
                        </div>
                        
                        <SearchContainer  className="relative floating-input h-full  flex justify-start items-center group">
                            <input placeholder="Product's Name" autoComplete="off" type="text" />
                            <label  className="absolute  transform origin-left transition-all duration-100 ease-in-out -z-1" > Product's Name </label>
                        </SearchContainer>
                    </FilterSearchBox>
                </div>
                <div className="w-full flex flex-col lg:flex-row  items-center mt-10 justify-between">
                    {show_filter && <div className="flex flex-col items-center w-full lg:w-1/4">
                        <ContainerWithBottomBorder>
                            {category("All products", "black", 9)}
                            {category("On Store Front", "blue", 0)}
                            {category("Out Of Stock", "blue", 0)}
                            {category("In Stock", "blue", 0)}
                        </ContainerWithBottomBorder>
                        <ContainerWithBottomBorder>
                            {FilterHeader("Availability")}
                            {filter_subcategory("Something")}
                            {filter_subcategory("Something")}
                            {filter_subcategory("Something")}
                        </ContainerWithBottomBorder>
                    </div>}
                    <div className="flex w-full lg:w-3/4 h-full flex-col relative items-center pl-4 justify-between">
                        <div className="top-0 h-11 flex flex-col lg:flex-row w-full items-center justify-between">
                            <div className=" mt-4 w-full md:w-1/4 h-11 flex items-center justify-start">
                                <ButtonContainer Icon={KeyboardArrowDownIcon} color="black" icon_data={{size: "small", color: "black"}} fontSize="14px" bgColor="rgba(217,225,234,0.5)" icon_position="right" has_border={true} button_title={check_box()} />
                                <ButtonContainer Icon={KeyboardArrowDownIcon} color="black" icon_data={{size: "small", color: "black"}} fontSize="14px" bgColor="rgba(217,225,234,0.5)" icon_position="right" has_border={true} button_title="Bulk update" />
                                
                            </div>
                            <div className="w-full flex ml-4 mt-3 items-center justify-between md:w-3/4">
                                <div className="text-xs text-thin text-uppercase ml-6">
                                    CURRENTLY VIEWING: 
                                    <span className="text-red-500"> ALL PRODUCTS</span>
                                    <span className="text-blue-500 cursor-pointer"> REFRESH</span>
                                </div>
                                <div className="text-xs h-11 flex items-center  text-blue-500 cursor-pointer">
                                    NAME: A to Z 
                                <KeyboardArrowDownIcon fontSize="small" />
                                </div>
                            </div>
                            
                        </div>
                        

                    </div>
                </div>
                
                
                
            </FiltersContainer>
        </Container>
    )
}

export default index

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #dfe3e7;
    padding: 0px 20px;
`
const CardContainer = styled.div`
    width: 100%;
    bax-shadow: 0 5px 10px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 8%) inset;
    background-color: white;
    border-radius: 8px;
    padding: 16px;
`
const PageTitle = styled.div`
    font-size: 20px;
    color: #1f2328;
    margin-bottom: 16px;
    padding-top: 20px;
`
const FiltersContainer = styled.div`

`
const FilterSearchBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #abb5c0;
    color: #1f2328;
    box-shadow: 0px 1px 1px rgba(0, 0, 0 / 7%);
    height: 40px; 
    padding: 2px 9px 3px;
    border-radius: 5px;
    font-size: 14px;
    line-height: 19px;
    font-weight: 400;
    width: 90%;
    :focus-within{
        border: 1px solid #068EEF;
    }
`
const SearchContainer = styled.div`
    margin-left: 10px;
    width: 90%;
    :focus-within{
        >label{
            transform: scale(0.2, 0,2);
        }
    }

    >input{
        border: none;
        outline: none;
        color: black;
        font-size: 14px;
        position: relative;
        width: 100%;
        height: 100%;
        background-color: transparent;
    }
    >label{
        position: absolute;
        top: 12;
        font-size: 14px;
    }
`
const CheckBox = styled.div`
    margin: -2px 8px 0 6px;
    height: 17px;
    width: 17px;
`
const ContainerWithBottomBorder = styled.div`
    width: 100%;
    padding-bottom: 24px;
    margin-bottom: 5px;
    border-bottom: 1px solid #c5ccd3;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 40px;
`
const FilterSubCategoryStyles = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px 10px 8px;
    background-color: white;
    font-size: 14px;
    font-weight: 400;
    :hover{
        cursor: pointer;
        background-color: #d9e1ea;
    }
`
