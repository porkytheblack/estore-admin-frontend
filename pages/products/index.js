import React from 'react'
import styled from "styled-components"
import ButtonContainer from '../../components/reusables/ButtonContainer'
import AddIcon from '@material-ui/icons/Add';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { Search } from '@material-ui/icons';


function index() {
    return (
        <ProductsPageContainer className="flex flex-col w-full justify-start" >
            <PageTitle className="flex justify-start" >
                Products
            </PageTitle>
            <FiltersContainer className="flex flex-col w-full justify-center" >
                <div className="w-full flex justify-start items-center">
                    <ButtonContainer Icon={AddIcon} icon_data={{size: "medium", color:"white"}} fontSize="14px" bgColor="#068eef" color="white" icon_position="left" button_title="Add New Product"   />
                </div>
                <div className="w-full flex justify-start pt-2 items-center">
                    <ButtonContainer Icon={KeyboardArrowDownIcon} color="black" icon_data={{size: "small", color: "black"}} fontSize="14px" bgColor="rgba(217,225,234,0.5)" icon_position="left" has_border={true} button_title="Filter" />
                    <FilterSearchBox style="flex flex-row items-center justify-start">
                        <div className="w-11 h-full">
                            <Search fontSize="medium" className="m-l-4 bg-green-300" />
                        </div>
                        
                        <SearchContainer  className="relative  flex justify-start items-center group">
                            <label htmlFor="filterInput" className="top-0 absolute -z-1" > Product's Name </label>
                            <input id="filterInput" type="text" />
                        </SearchContainer>
                    </FilterSearchBox>
                </div>
            </FiltersContainer>
        </ProductsPageContainer>
    )
}

export default index

const ProductsPageContainer = styled.div`
    padding: 0px 8px 80px;
    min-height: 100vh;
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
    border: 1px solid #abb5c0;
    color: #1f2328;
    box-shadow: 0px 1px 1px rgba(0, 0, 0 / 7%);
    height: 40px; m 
    padding: 2px 9px 3px;
    border-radius: 5px;
    font-size: 14px;
    line-height: 19px;
    font-weight: 400;
    width: 80%;
    :focus-within{
        border: 1px solid #068EEF;
    }
`
const SearchContainer = styled.div`
    margin-left: 10px;
    :focus-within{
        >label{
            transform: scale(0.2, 0,2);
        }
    }

    >input{
        border: none;
        outline: none;
        background-color: yellow;
        color: black;
        font-size: 14px;
        position: relative;
        width: 100%;
        height: 100%;
    }
    >label{
        position: absolute;
    }
`

