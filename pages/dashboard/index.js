import styled from "styled-components"
import back_drop from "../../public/db.jpg"
import Image from "next/image"
import {Bar, Doughnut} from 'react-chartjs-2';

function index() {

    const bg_data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets:[{
            label: "Revenue per month",
            data: [3000, 2000, 1200, 5000, 1000, 3000, 5000, 499, 1333, 1223, 234, 1263],
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgb(11,227,210)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,0,54,0.4)',
            hoverBorderColor: 'rgb(0,88,101)',
        }]
    }

    const dg_data = {
        labels: [
          'Shoes',
          'Jackets',
          'Pants',
          'watches'
      ],
      datasets: [{
        data: [300, 50,250, 100],
        backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
        '#ff66ee'
        ],
        hoverBackgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
        '#ff66ee'
        ]
      }]
      };

    const card_data = [
        {
            data: [
                {
                    title: "Visitors",
                    number: 40
                },
                {
                    title: "Product Views",
                    number: 65
                }
            ]
        },
        {
            data: [
                {
                    title: "Orders received",
                    number: 40,
                },
                {
                    title: "Revenue received",
                    number: 5000
                }
            ]
        },
        {
            data: [
                {
                    title: "Visitors with product reveiws",
                    number: 50,
                },
                {
                    title: "Added to cart",
                    number: 70
                },
                {
                    title: "Started checkouts",
                    number: 70
                },
                {
                    title: "Placed orders",
                    number: 70
                }
                
            ]
        }
    ]
    const data_card = (i, data)=>{
        return(
            <CardContainer key={i} className="flex items-center w-full flex-wrap mb-3 justify-between pt-5 pb-5 pl-3 pr-3">
                
                    {data.map(({title, number}, j)=>{
                        return(
                            <div key={j} className="flex flex-col items-center w-1/2 justify-start">
                                <div className="text-md items-center justify-start font-bolder text-center flex">
                                    {title}
                                </div>
                                <div className="text-md items-center justify-start font-bolder text-center flex ">
                                    {number}
                                </div>
                            </div>
                        )
                    })}
            </CardContainer>
        )
    }



    return (
        <Container className="flex items-start flex-col justify-start">
            <DashTop className="relative flex items-center juistify-start pl-4" >
                    <div className="font-bold text-black text-3xl">
                        Greetings Don! Welcome back
                    </div>
            </DashTop>
            
            <DataContainer className="h-full w-full pt-5 pl-5 flex justify-between">
                <div className="flex w-full md:w-1/3  flex-col items-center">
                {
                        card_data.map((obj, i)=>{
                            return(
                                data_card(i, obj.data)
                            )
                        })
                    }
                </div>
                <div className="flex w-full md:w-2/3 pl-3 flex-col items-center">
                    <CardContainer className="w-full mb-5 h-72 pb-3 mt-3 justify-start ">
                        <div className="text-lg w-full flex items-center justify-center text-bolder">
                            A breakdown of sales per category
                        </div>
                        <div>
                            <Doughnut
                                data={dg_data}
                                width={200}
                                height={200}
                                options={{maintainAspectRatio: false}}
                            />
                        </div>
                    </CardContainer>
                    <CardContainer className="w-full mb-5 pb-3 mt-3 justify-start ">
                        <div className="text-lg w-full flex items-center justify-center text-bolder">
                            Revenue per month
                        </div>
                        <div>
                            <Bar
                                data={bg_data}
                            />
                        </div>
                    </CardContainer>
                </div>
            </DataContainer>
        </Container>
    )
}

export default index

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #dfe3e7;
`
const CardContainer = styled.div`
    bax-shadow: 0 5px 10px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 8%) inset;
    background-color: white;
    border-radius: 8px;
    padding: 16px;
`
const DashTop = styled.div`    
    z-index: -0.2;
    height: 400px;
    width: 100%;
    overflow: hidden;
    background: linear-gradient(to right, rgba(6,142,239,0.4) 0%, rgba(6,142,239,0) 40%),linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 100%);
`

const DataContainer = styled.div`
    

`
