import styled from "styled-components"
import Link from "next/link"
import { useState } from "react"
import api_services from "../../services/api_services"
import { useRouter } from "next/dist/client/router"

function index() {
    const [email, set_email] = useState("")
    const [password, set_password] = useState("") 
    const router = useRouter();

    const signin = async()=>{
        let res = await api_services.create_token({
            email,
            password
        })
        res = await res.json();
        console.log(res)
        if(typeof(res) !== undefined){
            localStorage.setItem("token", JSON.stringify(res))
            router.push("/dashboard")
        }

    }
    return (
        <Container className="flex justify-between items-start">
            <div className="md:flex hidden  w-full md:w-1/4"></div>
            <div className="flex w-full flex-col md:w-3/4">
                <CardContainer className="p-4 flex flex-col">
                    <div className="w-full flex justify-start text-black font-bold text-2xl">
                        Sign In
                    </div>
                    <PInput className="flex items-start w-full md:w-3/4  justify-start flex-col" >
                            <label htmlFor="">Email </label>
                            <input value={email} onChange={(e)=>{set_email(e.target.value)}} type="text" className="w-full" name="" id="" />
                    </PInput>
                    
                    <PInput className="flex items-start w-full md:w-3/4   justify-start flex-col" >
                            <label htmlFor="">Password</label>
                            <input value={password} onChange={(e)=>{set_password(e.target.value)}} type="text" className="w-full" name="" id="" />
                    </PInput>
                        <Btn className="flex items-center justify-center" onClick={()=>{signin()}} >  Sign in </Btn>
                </CardContainer>
            </div>
        </Container>
    )
}

export default index

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #dfe3e7;
    padding: 100px 20px;
`
const CardContainer = styled.div`
    width: 100%;
    bax-shadow: 0 5px 10px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 8%) inset;
    background-color: white;
    border-radius: 8px;
    padding: 16px;
`
const PInput = styled.div`
    margin-top: 10px;
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
