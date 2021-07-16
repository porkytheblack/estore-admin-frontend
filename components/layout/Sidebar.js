import React, { useState } from 'react'
import { connect } from 'react-redux';
import {setSidebarStatus} from "../../redux/actions/main"
import styled from 'styled-components';
import Image from 'next/image' 
import logo_pic from "../../public/logo-white-blue.png"
import CloseIcon from '@material-ui/icons/Close';
import Link from "next/link"
import SearchIcon from '@material-ui/icons/Search';

function Sidebar({setSidebarStatus, show_sidebar}) {

    const [active_link, set_active_link] = useState({
        title: "",
        active: false
    })
    const [fcs, set_fcs] = useState(false);

    const sidebar_options = [
        {
            title: "Store management",
            categories:[
                {
                    title: "My Sales",
                    links: [
                        "Orders",
                        "Abandoned Carts",
                        "Customers",
                        "Search"
                    ]
                },
                {
                    title: "Catalog",
                    links: [
                        "Products",
                        "Categories",
                        "Gift Cards",
                        "Search"
                    ]
                },
                {
                    title: "Reports",
                    links:[
                        "Reports"
                    ]
                }
            ]
        },
        {
            title: "Configuration",
            categories: [
                {
                title: "Payment",
                links: []
            },
            {
                title: "Shipping & Pickup",
                links:[

                ]
            }
        ]
        },
        {
            title: "My profile",
            categories: [
                {
                    title: "Profile",
                    links:[

                    ]
                }
            ]
        }
    ]

    const renderList  = (data, i) =>{
        return(
            <div key={i} className="flex flex-col justify-center">
                <CategoryTitle>
                    <p>
                        {data.title}
                    </p>
                </CategoryTitle>
                {data.categories.map((obj, a)=>{
                    return(
                        <SubCategory  key={a} >
                        <h1 className={`${active_link.active && active_link.title == obj.title ? "bg-blue-600" : ""}` } onClick={()=>{set_active_link({
                            title: obj.title,
                            active: true
                        })}} >
                            <Link href="/">
                                {obj.title}
                            </Link>
                        </h1>
                        {active_link.title == obj.title && active_link.active && obj.links.map((link, d)=>{
                            if(link !== "Search"){
                                return(
                                    <Link key={d} href="/" >
                                    <LinkItem>
                                        {link}
                                    </LinkItem>
                                    </Link>
                                )
                            }else{
                                return(
                                    <SearchBox fcs={fcs} >
                                        <SearchIcon className={`text-md ${fcs?"text-black": "text-white"} `} fontSize="small"/>
                                        <input onFocus={()=>set_fcs(true)} onBlur={()=>set_fcs(false)}  placeholder={`Search ${obj.links[0]}`}/>
                                    </SearchBox>
                                )
                            }
                                                        
                        })}
                        
                        </SubCategory>
                    )
                    
                })}
                
            </div>
        )
    }

    return (
        <div className="h-full w-full relative">
            {show_sidebar && <div className="-right-10 absolute flex md:hidden">
                <CloseButton show={show_sidebar} onClick={()=>{setSidebarStatus(false)}} >
                    <CloseIcon style={{color: "white", fontSize: 15}}/>
                </CloseButton>
            </div>}
            <div className="w-full h-full flex flex-col bg-{#1f2328} ">
                <LogoContainer>
                    <Image className="obj" height={70} width={220} src={logo_pic} alt="logo image" />
                </LogoContainer>
                {sidebar_options.map((obj, i)=>{
                    return renderList(obj, i)
                })}
                
            </div>
        </div>
        
    )
} 

const mapDispatchToProps = {
    setSidebarStatus
}

const mapStateToProps = state =>{
    return({
        show_sidebar: state.main.show_sidebar
    })

}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)

const LogoContainer = styled.div`
    padding: 19px 0px 19px 20px;

`
const CloseButton = styled.div`
    width: 40px;
    height: 40px;
    background-color: #068eef;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    display: ${props=> props.show ? 'flex' : 'hidden'}
    
`

const CategoryTitle = styled.div`
    height: 19px;
    width: 100%;
    padding-top: 4p;
    padding-bottom: 3px;
    >p{
        font-weight: 500;
        color: #9faebe;
        font-size: 11px;
    }    
    padding-left: 20px;
    padding-right: 20px;
`
const SubCategory = styled.div`
    width: 100%;
    display: flex;
    justify-content: start;
    flex-direction: column;
    background-color: #313539;
    >h1{
        color: #dfe3e7;
        font-size: 13px;
        font-weight: 500;
        background-color: #1f2328;
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 6px 20px 7px;
        cursor: pointer;
        :hover{
            background-color: #068eef;
        }
    }
`
const LinkItem = styled.div`
    padding: 6px 24px 6px 32px;
    font-size: 13px;
    color: #dfe3e7;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    cursor: pointer;
    :hover{
        color: #068EEF;
    }
`

const SearchBox = styled.div`
    margin: 6px 24px 6px 32px;
    display: flex;
    align-items: center;
    padding-left: 10px;
    justify-content: start;
    >input{
        padding: 4px 8px;
        background-color: transparent;
        height: 24px;
        width: 118px;
        outline: none;
        :focus{
            outline: none;
        }
        font-size: 14px;
        margin-left: 10px;
    }
    background-color: ${props=>props.fcs?"white":"#1f2328"};
`

//#068eef #313539