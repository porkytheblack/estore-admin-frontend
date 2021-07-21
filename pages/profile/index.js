import { ExitToApp, PersonOutline } from "@material-ui/icons"
import styled from "styled-components"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useRouter } from "next/dist/client/router"

function index() {
    const [user_data, set_user_data] = useState({})
    const router = useRouter()

    const signout = ()=>{
        localStorage.removeItem("token")
        router.push("/signin")

    }
    
    useEffect(() => {
        const unsubscribe = async() =>{
            const token_id = JSON.parse(localStorage.getItem("token")).token_id
            console.log(token_id)
            const res = await fetch("http://localhost:8080/api/users", {
                method:"GET",
                headers: {
                    token_id
                }
            })
            const user = await res.json()
            set_user_data(user)
        }
        unsubscribe()
        console.log(user_data)
        return unsubscribe
    }, [])
    return (
        <Container>
            <div className="flex w-full items-center pt-5 mb-5 justify-center">
                <PersonOutline style={{color: "#068eef", fontSize: 70}} />
            </div>
            <InfoContainer className="flex flex-col mb-8 items-start justify-start" >
                <div className="flex w-full items-center justify-start mb-5 text-2xl font-bold text-black ">
                    Profile name and credentials
                </div>
                <div className="flex w-full flex-col justify-start">
                    <Detail className="flex justify-between items-center">
                        <span>
                            Company Name
                        </span>
                        <input value={user_data.username} type="text" name="" id="" />
                    </Detail>
                    <Detail className="flex justify-between items-center">
                        <span>
                            Your Username
                        </span>
                        <input value={user_data.username} type="text" name="" id="" />
                    </Detail>
                    <Detail className="flex justify-between items-center">
                        <span>
                            Your Email
                        </span>
                        <input value={user_data.email} type="text" name="" id="" />
                    </Detail>
                </div>
            </InfoContainer>

            <InfoContainer className="flex flex-col mb-8 items-start justify-start" >
                <div className="flex w-full items-center justify-start mb-5 text-2xl font-bold text-black ">
                    Password
                </div>
                <div className="flex w-full flex-col justify-start">
                    <Detail className="flex justify-between items-center">
                        <span>
                            Old Password
                        </span>
                        <input type="text" name="" id="" />
                    </Detail>
                    <Detail className="flex justify-between items-center">
                        <span>
                            New Password
                        </span>
                        <input type="text" name="" id="" />
                    </Detail>
                    <Detail className="flex justify-between items-center">
                        <span>
                            Retype password
                        </span>
                        <input type="text" name="" id="" />
                    </Detail>
                </div>
            </InfoContainer>
            <Btn className="flex items-center justify-around " onClick={()=>signout()} > <ExitToApp style={{color:"white", fontSize: 20}} />  Sign Out </Btn>
           
        </Container>
    )
}

// export async function getStaticProps(){
//     const token_id = JSON.parse(localStorage.getItem("token")).token_id
//     const res = await fetch("http://localhost:8080/users", {
//         method:"GET",
//         headers: {
//             token_id
//         }
//     })
//     user_data = await res.json()

//     return{
//         props: user_data
//     }
// }

export default index



const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: white;
    padding: 0px 20px;
`
const InfoContainer = styled.div`
    background-color: #dfe3e7;
    padding: 16px;

`
const Detail = styled.div`
    width: 400px;
    margin-top: 10px;
    >span{
        font-size: 16px;
    }
    >input{
        outline: none;
        background: #f9f9fa;
        font-size: 12px;
        border: 1px solid #abb5c0;
        border-radius: 5px;
        width: 200px;
        padding: 3px 6px;
        box-shadow: 0 1px 1px rgb(0 0 0 / 7%) inset;
        :focus{
            border: 2px solid #068eef;
            background-color: white;
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
