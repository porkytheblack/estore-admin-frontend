import { Add, Publish } from "@material-ui/icons"
import { useCallback, useState } from "react"
import { useDropzone } from "react-dropzone"
import styled from "styled-components"

function DropzoneComponent() {
    const onDrop = useCallback(acceptedFiles=>{      
        acceptedFiles.forEach((file)=>{
            
            //no reader is required since the actual uploading is taken care of by the backend
            // const reader = new FileReader()

            // reader.onabort = () =>{
            //     console.log("File reader aborted")
            // }
            // reader.onerror = () =>{
            //     console.log("file reader failed")
            // }

            // reader.onload=()=>{
                
            //     const dataUrl = reader.result;
            //     console.log(file)
            //     setImage({
            //         url: dataUrl
            //     })
            // }

            // reader.readAsDataURL(file)
        })
        

    }, [])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

    return (
        <div {...getRootProps()}>
            {/* <Dzone>
                <input {...getInputProps()} />
            </Dzone> */}
            <UploadContainer {...getInputProps} active={isDragActive} className="flex flex-col items-center justify-center" >
                                <div className="w-28 h-28 flex items-center justify-center">
                                    {!isDragActive ? <Add style={{color: "#068eef", fontSize:"80px"}} /> : <Publish style={{color: "black", fontSize:"80px"}} />}
                                </div>
                                <span className="text-sm text-center" >Upload Image</span>
            </UploadContainer> 
        </div>
    )
}

export default DropzoneComponent

const Dzone = styled.div`
    width: 200px;
    height: 200px;
    :dragover{
        background-color: red;
    }
    background-color: gray;
    >input{
        width: 100%;
        height: 100%;
        background-color: transparent;
        
    }
`
const UploadContainer = styled.div`
    width: 125px;
    height: 125px;
    cursor: pointer;
    border: 2px dashed ${props=>props.active? "black" : "#068eef"}  ;   
    border-radius: 5px;
    >span{
        color: ${props=>props.active? "black" : "#068eef"};
    }
`
