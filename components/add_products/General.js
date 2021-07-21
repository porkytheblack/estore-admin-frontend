import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import 'react-quill/dist/quill.snow.css';
import SvgIcon from "../reusables/SvgIcon"
import Add from '@material-ui/icons/Add';
import api_services from '../../services/api_services';
import { useRouter } from 'next/dist/client/router';
import DropzoneComponent from '../reusables/DropzoneComponent';

function General() {

    const router = useRouter();

    const [product_name, set_product_name] = useState("");
    const [gender, set_gender] = useState("");
    const [price, set_price] = useState("");
    const [category, set_category] = useState("");
    const [sub_category, set_sub_category] = useState("")
    const [designer, set_designer] = useState("")
    const [brand, set_brand] = useState("")


    const img_names = [
        "Main Image",
        "Different Angle",
        "Close up",
        "In use"
    ]
    const [product_description, set_product_description] = useState("");
    const image_container = (img_name, i) =>{
        return (
            <ImageShowContainer key={i} className="flex mt-4 flex-col items-center justify-center" >
                <SvgIcon icon_name={img_name} />
                <span>{img_name}</span>
            </ImageShowContainer>
        )
    }
    const save_product = async ()=>{

        let res = await api_services.create_product({
            designer,
            brand,
            product_description,
            product_name,
            price,
            gender,
            category,
            sub_category,
            seller: JSON.parse(localStorage.token).username
        },
         JSON.parse(localStorage.token).token_id
        )
        res = res.json()
        if(typeof(res) !== undefined){
            router.push("/products")
        }else{
            //deal with the error
        }
    }
    return (
        
        <div className="flex flex-col w-full md:w-3/4 ">
                        <CardContainer className="flex flex-wrap items-center justify-between" >
                            <DropzoneComponent/>
                            {
                                img_names.map((img, i)=>{
                                    return(
                                        image_container(img, i)
                                    )
                                })
                            }                          
                        </CardContainer>
                        <CardContainer className="mt-4 flex flex-col w-full items-center justify-between">
                            <div className="flex flex-wrap items-center justify-between w-full">
                                <PInput className="flex items-start w-1/2 justify-start flex-col" >
                                    <label htmlFor="">Name</label>
                                    <input type="text" value={product_name} onChange={(e)=>{set_product_name(e.target.value)}} className="w-full" name="" id="" />
                                </PInput>
                                <PInput className="flex items-start justify-start flex-col" >
                                    <label htmlFor="">Price</label>
                                    <input type="text" value={price} onChange={(e)=>{set_price(e.target.value)}}  name="" id="" />
                                </PInput>
                                <PInput className="flex items-start justify-start flex-col" >
                                    <label htmlFor="">Category</label>
                                    <input value={category} onChange={(e)=>{
                                        set_category(e.target.category)
                                    }} type="text" name="" id="" />
                                </PInput>
                                <PInput className="flex items-start justify-start flex-col" >
                                    <label htmlFor="">Sub Category</label>
                                    <input value={sub_category} onChange={(e)=>{
                                        set_sub_category(e.target.value)
                                    }} type="text" name="" id="" />
                                </PInput>
                                <PInput className="flex items-start justify-start flex-col" >
                                    <label htmlFor="">Gender</label>
                                    <input value={gender} onChange={(e)=>{
                                        set_gender(e.target.value)
                                    }} type="text" name="" id="" />
                                </PInput>
                                <PInput className="flex items-start justify-start flex-col" >
                                    <label htmlFor="">Brand</label>
                                    <input value={brand} onChange={(e)=>{
                                        set_brand(e.target.value)
                                    }} type="text" name="" id="" />
                                </PInput>
                                <PInput className="flex items-start justify-start flex-col" >
                                    <label htmlFor="">Designer</label>
                                    <input value={designer} onChange={(e)=>{
                                        set_designer(e.target.value)
                                    }} type="text" name="" id="" />
                                </PInput>
                            </div>
                            <ProductDescription className="w-full pt-8 mb-8 h-full">
                                <span>
                                    Product Description
                                </span>
                                <ReactQuill placeholder="What makes this product so greate? use this area to describe your product" value={product_description} onChange={set_product_description} />
                            </ProductDescription>
                            <div className="flex items-center justify-center w-full">
                                <Btn className="flex items-center justify-center" onClick={()=>{save_product()}} >  Save Product </Btn>
                            </div>
                            
                        </CardContainer>
                    </div>
    )
}

export default General

const CardContainer = styled.div`
    width: 100%;
    bax-shadow: 0 5px 10px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 8%) inset;
    background-color: white;
    border-radius: 8px;
    padding: 16px;
`
const UploadContainer = styled.div`
    width: 125px;
    height: 125px;
    cursor: pointer;
    border: 2px dashed #068eef;
    border-radius: 5px;
    >span{
        color: #068eef;
    }
`
const ProductInputContainer = styled.div`
    width: 100%;
`
const ImageShowContainer = styled.div`
    width: 125px;
    height: 125px;
    border: 2px solid #7d8d9e;
    border-radius: 5px;
    >span{
        color: #7d8d9e;
        font-size: 14px;
    }
`
const PInput = styled.div`
    >label{
        font-size: 14px;
        font-weight: 600;
        text-align: left;
        width: 100%;

    }
    >input{
        height: 40px;
        border: 1px solid #abb5c0;
        border-radius: 5px;
        font-size: 14px;
        padding-left: 5px;
        :focus{
            outline: none;
            border: 3px solid #068eef;
        }
    }
`
const ProductDescription = styled.div`
    >span{
        font-size: 14px;
        font-weight: 600;
        text-align: left;
        width: 100%;
    }
`
const Btn = styled.div`
    margin-top: 20px;
    padding: 10px 4px;
    background-color: #068eef;
    color: white;
    font-size: 20px;
    cursor: pointer;
    font-weight: 900;
    border-radius: 6px;
    width: 200px;
`
