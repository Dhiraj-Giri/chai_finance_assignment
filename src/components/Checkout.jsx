import React from 'react'
import styled from 'styled-components'
import { BiArrowBack,BiPlus } from "react-icons/bi";
import Button from '@mui/material/Button';
import "./Checkout_style.css"

const Main = styled.div`
border: 1px solid black;
width: 90%;
height: 670px;
margin: auto;
`
const IconDiv = styled.div`
width: 10%;
height: 50px;
font-size: 40px;
text-align: left;
padding-left: 10px;
`
const TextDiv = styled.div`
width: 50%;
height: 70px;
text-align: left;
padding-left: 10px;
`

const ProdDiv = styled.div`
width: 100%;
height: 120px;
display: flex;
justify-content: space-between;
`

const PaymentBar = styled.div`
width: 100%;
height: 50px;
display: flex;
justify-content: space-between;

`
const TotalAmount = styled.div`
width: 100%;
height: 100px;
justify-content: space-between;
`
const Data = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
margin-top: -2%;
`
const PayNow = styled.div`
height: 50px;
width: 100%;
`
const Slider = styled.div`
width: 100%;
height: 200px;
`



export const Checkout = () => {
  return (
    <Main>
        <IconDiv className='IconDiv'>
            <BiArrowBack/>
        </IconDiv>
        <TextDiv className='TextDiv'>
            <h1>CheckOut</h1>
        </TextDiv>
        <ProdDiv className='ProdDiv'>
            <div style={{textAlign:"left",paddingLeft:"10px"}}>
            <h3>Metal Earings</h3>
            <h3 style={{marginTop : "-10px",color:"grey"}}>Special Design</h3>
            <h3 style={{marginTop : "-10px"}}>$12 <span style={{color:"blue"}}> In Stock</span> </h3>

            </div>
            <div className='image' style={{height:"100%",width:"15%",paddingRight:"10px"}}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZDZ1v7H3foUlkxByUdxpPEARzBxb5sZL_ug&usqp=CAU" alt="" />
            </div>
        </ProdDiv>
        <PaymentBar className='PaymentBar'>
            <div style={{paddingLeft:"10px"}}>
                <h3>Payment</h3>
            </div>
            <div style={{paddingTop:"5px",paddingRight:"10px"}}><BiPlus style={{fontSize:"20px",marginTop:"10px"}}/><strong>Add Card</strong></div>
        </PaymentBar>
        <Slider>
            
            
        </Slider>
        <TotalAmount className='TotalAmount'>
            <Data className='Data'>
                <div className='text'><p> Order </p></div>
                <div className='price'><p>28.00$ </p></div>
            </Data>
            <Data className='Data'>
                <div className='text'><p> Delivery </p></div>
                <div className='price'><p>7.20$ </p></div>
            </Data>
            <Data className='Data'>
                <div className='text'><p> Summary </p></div>
                <div className='price'><p>35.20$ </p></div>
            </Data>
        </TotalAmount>
        <PayNow className='PayNow'>
        <Button variant="contained">Contained</Button>
        </PayNow>
    </Main>
  )
}
