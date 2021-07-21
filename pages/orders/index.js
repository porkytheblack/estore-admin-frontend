import styled from "styled-components"

function index() {

    const OrderItem = (order_id, username, email, amount)=>{
        return(
            <div className="w-full cursor-pointer hover:bg-gray-500 h-11 bg-white border-b-2 pl-5 pr-5 border-gray-500 flex items-center justify-between">
                <div className="w-1/3 h-full text-lg font-bold text-black flex items-center justify-start">
                    {order_id}
                </div>
                <div className="w-1/4 h-full text-md font-bold text-black flex items-center justify-start">
                    {username}
                </div>
                <div className="w-1/4 h-full text-md font-bold text-blue-500 flex items-center justify-start">
                    {email}
                </div>
                <div className="text-green-600 flex items-center justify-start">
                    {amount}
                </div>
            </div>
        )
    }

    return (
        <Container>
            <PageTitle className="flex justify-start" >
                Orders
            </PageTitle>
            <OptionTable className="w-full " >
                         <header className="text-white text-md pr-8 pl-8">
                         <div className="w-1/3 h-full text-lg font-bold text-white flex items-center justify-start">
                            Order Id
                        </div>
                        <div className="w-1/4 h-full text-lg font-bold text-white flex items-center justify-start">
                            Username
                        </div>
                        <div className="w-1/4 h-full text-lg font-bold text-white flex items-center justify-start">
                            User's Email
                        </div>
                        <div className="text-white text-lg font-bold flex items-center justify-center">
                            Price
                        </div>
                         </header>
                         {OrderItem("Agwhy6784h#$hdji", "don", "don@email.com", 50)}
                         {OrderItem("Agwhy6784h#$hdji", "don", "don@email.com", 50)}
                         {OrderItem("Agwhy6784h#$hdji", "don", "don@email.com", 50)}
                         {OrderItem("Agwhy6784h#$hdji", "don", "don@email.com", 50)}
                         {OrderItem("Agwhy6784h#$hdji", "don", "don@email.com", 50)}
                         {OrderItem("Agwhy6784h#$hdji", "don", "don@email.com", 50)}
                         {OrderItem("Agwhy6784h#$hdji", "don", "don@email.com", 50)}
            </OptionTable>
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
const PageTitle = styled.div`
    font-size: 20px;
    color: #1f2328;
    margin-bottom: 16px;
    padding-top: 20px;
`
const OptionTable = styled.div`
    >header{
        width: 100%;
        height: 32px;
        font-size: 14px;
        display: flex;
        justify-content: space-between;
        align-items: center
        color: white;
        background-color: #7d8d9e;
    }
`