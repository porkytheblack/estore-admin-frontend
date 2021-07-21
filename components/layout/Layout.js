import styled from 'styled-components';
import Footer from './Footer';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import { connect } from 'react-redux';
import { useRouter } from 'next/dist/client/router';

const Layout = (props) => {

    const {children, show_sidebar} = props;
    const router = useRouter();



    return (
        <BodyContainer className="bg-{#dfe3e7} m-0 pb-0 flex flex-row">
            {(router.pathname !== "/" && router.pathname !== "/signup" && router.pathname !== "/signin" )  && <SideBarContainer show={show_sidebar} className=" sidebar flex flex-column" >
                <Sidebar/>
            </SideBarContainer> }               
            <LayoutContainer className="flex relative flex-col">
                {show_sidebar && <BodyCover className="md:hidden flex" />}
                        {(router.pathname !== "/" && router.pathname !== "/signup" && router.pathname !== "/signin" )  && <  Topbar/>}
                        {children}
                        <Footer/> 
            </LayoutContainer>
        </BodyContainer>
    );
}

const mapStateToProps = state =>{
    return ({
        show_sidebar: state.main.show_sidebar
    })
}

export default connect(mapStateToProps)(Layout);



const BodyContainer  = styled.div`
    max-width: 100%;
    min-height: 100vh;
`
const LayoutContainer = styled.div`
    width: 100%;
    min-height: 100vh;
`
const SideBarContainer  = styled.div`
    min-height: 100vh;
    max-height: 100%;
    position: sticky;
    @media (max-width: 768px){
        min-width: 270px;
        max-width: 270px;
        margin-left: ${props=> props.show ? "0px" : "-270px"};
    }
    @media (min-width: 768px){
        min-width: 200px;
        max-width: 200px;
        margin-left: 0px;
    }
    background-color: #1f2328;
    z-index: 11;
`
const BodyCover = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    margin: 0px;
    background-color: black;
    opacity: 0.5;
    z-index: 10;
`