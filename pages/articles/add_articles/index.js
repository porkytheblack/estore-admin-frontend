import { useState } from "react"
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import 'react-quill/dist/quill.snow.css';
import styled from "styled-components";
import Add from "@material-ui/icons/Add";

function index() {

    const sections = [
        "Main Section",
        "other section",
        "other section"
    ]
    const tags = [
        "cool",
        "awesome",
        "must have",
        "genius"
    ]

    const [article_content, set_article_content] = useState("");


    const article_data = (title) =>{
        return(
            <CardContainer className="mb-5">
                <PInput className="flex items-start mb-2 w-full justify-start flex-col" >
                    <label htmlFor="">{title}</label>
                    <input type="text" className="w-full" name="" id="" />
                </PInput>
                <div className="flex flex-wrap w-full justify-around">
                    {tags.map((obj, i)=>{
                        return(
                            <Tag key={i} >
                                #{obj}
                            </Tag>
                        )
                    })}
                </div>
            </CardContainer>
        )
    }


    const section = (title, i) =>{
        return(
            <CardContainer className="mb-8" key={i}  >

                    <div className="w-full mb-4 items-center flex justify-start">
                        <PInput className="flex items-start w-1/2 justify-start flex-col" >
                            <label htmlFor="">{title == "Main Section"? "Main Title of article" : "Section Title" }</label>
                            <input type="text" className="w-full" name="" id="" />
                        </PInput>
                    </div> 
                    <div className="w-full flex flex-col items-start justify-start">
                        <PInput className="flex items-start w-full justify-start flex-col" >
                            <label htmlFor="">Article Content</label>
                            <ReactQuill className="w-full" placeholder="Happy writting 😃" value={article_content} onChange={set_article_content}/>
                        </PInput>
                    </div>   
                    <div className="w-full flex justify-start">
                        <h1 className="w-full flex justify-start text-lg font-bold text-black">Image</h1>
                        <div className="w-full items-start justify-start flex mt-5">
                            <UploadContainer className="flex flex-col items-center" >
                                    <div className="w-28 h-28 flex items-center justify-center">
                                        <Add style={{color: "#068eef", fontSize:"80px"}} />
                                    </div>
                                    <span className="text-sm text-center" >Upload Image</span>
                            </UploadContainer>
                        </div>
                          
                    </div>                
                </CardContainer>
        )
    }

    return (
        <Container className="flex flex-col">
            <Header className="flex w-full items-center justify-start pt-5 mb-5">
                Articles
            </Header>
            <div className="flex-col flex md:flex-row justify-between w-full">
                <div className="w-full md:order-1 order-2 md:w-1/4 flex-col pr-3 ">
                    {article_data("Tags")}
                    {article_data("Key Topics")}
                    {article_data("Related products")}
                </div>
                <div className="w-full md:order-2 order-1 md:w-3/4 flex flex-col">
                    {sections.map((title, i)=>{
                        return(
                            section(title, i)
                        )
                    })}
                </div>
            </div>
            
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
const Header = styled.div`
    font-size: 20px;
    font-weight: 900;

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

const Tag = styled.div`
    cursor: pointer;
    border-radius: 5px;
    color: white;
    font-size: 14px;
    padding: 3px 4px;
    background-color: #7d8d9e;
    margin-top: 5px;
    margin-left: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
`
