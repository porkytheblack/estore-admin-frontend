import Add from "@material-ui/icons/Add"
import styled from "styled-components"

function Options() {
    const optionInput = (title, price_variation)=>{
        return(
            <div className="w-full h-11 bg-white border-b-2 pl-5 pr-5 border-gray-500 flex items-center justify-between">
                <Inp>
                    <input type="text" name="" value={title} id="" />
                </Inp>
                <Inp>
                <select name="" id="">
                    <option value="+">+</option>
                    <option value="+">-</option>
                </select>
                </Inp>
                <Inp>
                    <input type="number" name="" value={price_variation} id="" />
                </Inp>
            </div>
        )
    }
    return (
        <CardContainer className="p-5 w-full md:w-3/4 mt-4">
            <div className="flex justify-start mb-4 itms-center w-full">
                <Btn className="flex items-center justify-center" title="add button" > Add Option </Btn>
                <Btn className="flex items-center justify-center ml-4" title="delete button" > Delete Option </Btn>
            </div>
            <OptionContainer className="flex flex-row w-full items-center justify-center">
                <OptionCat className="w-1/4 flex flex-col items-start justify-start h-full " ></OptionCat>
                <OptionDetails className="w-3/4 flex flex-col items-start justify-start h-full" >
                    <div className="flex w-full mb-5 justify-start items-start">
                        <OptionInput className="flex flex-col items-start justify-start"  >
                            <label>Option Name</label>
                            <input type="text" name="" id="" />
                        </OptionInput>
                    </div>
                    <div className="w-full flex items-start mb-4 justify-start">
                         <Btn className="flex items-center justify-center cursor-pointer " title="delete button" > <Add/> Add new value </Btn>
                    </div>
                    <OptionTable className="w-full " >
                         <header className="text-white text-md pr-8 pl-8">
                             <span>Option value</span>
                             <span>Price modifier</span>
                         </header>
                         {optionInput("Medium", 5.0)}
                    </OptionTable>
                </OptionDetails>
            </OptionContainer>
        </CardContainer>
    )
}

export default Options


const CardContainer = styled.div`
    width: 100%;
    bax-shadow: 0 5px 10px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 8%) inset;
    background-color: white;
    border-radius: 8px;
    padding: 16px;
`
const Btn = styled.div`
    background-color: ${({title})=>  title == "add button" ? "#068eef": "white"   };
    cursor: pointer;
    padding: 5px 3px;
    color: ${({title})=>  title == "add button" ? "white": "black"   };
    border-radius: 6px;
    ${({title})=>{
        if(title == "delete button"){
            return(
                "border: 1px solid black; :hover{bakground-color: #abb5c0 ; box-shadow: 0 3px 6px 0 rgb(0 0 0 / 15%), 0 0 0 1px #abb5c0 inset;}"
            )
        }
    }}
`

const OptionContainer = styled.div`
    height: 500px;
    overflow: scroll;
`
const OptionCat = styled.div`
    background-color: #c5ccd3;
`
const OptionDetails = styled.div`
    background-color: #eceef0;
    padding: 12px 12px 20px 12px;
`
const OptionInput = styled.div`
    >label{
        font-size: 16px;
        color: #1f2328;
        margin-bottom: 5px;

    }
    >input{
        font-size: 12px;
        line-height: 18px;
        display: inline-block;
        box-sizing: border-box;
        min-width: 40px;
        height: 28px;
        padding: 3px 6px;
        border: 1px solid #abb5c0;
        border-radius: 5px;
        outline: 0;
        background-color: #f9f9fa;
        color: #1f2328;
        vertical-align: middle;
        transition: background-color .1s linear, color .1s linear, border-color .1s linear, box-shadow .1s linear;
        box-shadow: 0 1px 1px rgb(0 0 0 / 7%) inset;
        :focus{
            background-color: white;
            border: 2px solid #068eef;
        }
    }
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
const Inp = styled.div`
    >input{
        background-color: #f9f9fa;
        border: 1px solid #abb5c0;
        border-radius: 5px;
        padding: 3px 6px;
        font-size: 12px;
        :focus{
            background-color: white;
            border: 2px solid #068eef;
        }
    }
    >select{
        background-color: #f9f9fa;
        border: 1px solid #abb5c0I
        padding: 3px 6px;
        font-size: 20px;
        :focus{
            background-color: white;
            border: 2px solid #068eef;
        }
    }
`