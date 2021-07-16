import React, { useState } from 'react';
import { connect } from 'react-redux';
import {setSidebarStatus} from "../../redux/actions/main"
import styled from "styled-components"
import MenuIcon from '@material-ui/icons/Menu';

const Topbar = (props) => {
    const {show_sidebar,setSidebarStatus} = props;

    return (
        <div className="w-full h-12 flex flex-row items-center justify-between bg-white   lg:bg-transparent ">
            {!show_sidebar && <NavButton className="flex md:hidden" onClick={()=>setSidebarStatus(true)} >
                <MenuIcon className="text-white h-10"/>
                <span className="text-white text-lg ">
                    MENU
                </span>
            </NavButton> }
        </div>
    );
}

const mapStateToProps = state =>{
    return{
        show_sidebar: state.main.show_sidebar
    }
}


const mapDispatchToProps = {
    setSidebarStatus
}
export default connect(mapStateToProps, mapDispatchToProps)(Topbar);

const NavButton = styled.div`
    width: 116.88px;
    height: 44px;
    align-items: center;
    justify-content: space-between;
    padding-left: 12px;
    padding-right: 20px;
    background-color: #068eef;
    color: white;
    cursor: pointer;
`


