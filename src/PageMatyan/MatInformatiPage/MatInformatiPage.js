import "./MatInformatiPage.css";
import styled from "styled-components";
import { PARTS_TEACHER_DATA } from "../../consts";
import { useReducer, useState } from "react";




const ResponsiveDiv = styled.div`
    @media screen and (max-width: 1000px) {
        display:${props => (props.invalid ? "block": "none")};
        width:${props => (props.invalid ? "300px": "0")};
        height:${props => (props.invalid ? "400px": "0")};
        background: rgba(71, 71, 71, 0.14);
        position: absolute;
        margin-left: 31%;
        background: rgb(255 253 253);
        backdrop-filter: blur(166px);
        border-radius: 15px;
        margin-top: 18px;

        & .part{
            margin-left: 15px;
            font-family: Arial AMU;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 25px;
            letter-spacing: 0.055em;
            text-decoration-line: underline;
            color: #FFFFFF;
            margin-bottom: 12px;
        }
        & .part a{
            color:black;
        }
    }
    @media screen and (max-width: 560px) {
        display:${props => (props.invalid ? "block": "none")};
        width:${props => (props.invalid ? "300px": "0")};
        height:${props => (props.invalid ? "400px": "0")};
        position: initial;
        border-radius: 15px;
        backdrop-filter: blur(57px);
        margin-left: 7%;
        margin-top: 0px;
        margin-bottom:20px;
        -webkit-backdrop-filter: blur(57px);
        background: rgba(41, 41, 41, 0.50);
        opacity: 0.8;

        & .part a{
            color: #FFFFFF;
            opacity: 0.8;
            transition: 1s;
        }
        & .part a:hover{
            opacity: 1;
            transition: 1s;
        }
    } 
`;
const reducer = (state, action) => {
    if(action.type === "add"){
        return[
            ...state,
            state[state.length - 1]
        ]
    }
    return state
}

const MatInformatiPage = ({style}) => {
    const onAdd = () => {
        dispatch({
            type:"add",
        })
    }
    
    const [initialArray, dispatch] = useReducer(reducer,[
        <div className="opening-plan-das-box-mat" >
            <div className="plan-das-box-mat">
                <h3 className="first-text">Վեբ Դիզայնի դասընթաց։ Պրակտիկա</h3>
                <div className="icon-slac"></div>
            </div>
        </div>
    ]);

    return (
        <div className="information-page">
            <ResponsiveDiv invalid={style} className="ede">
                {PARTS_TEACHER_DATA.map(((part, index) => {
                    return <h3 key={`key${index}`} className="part"><a href="#">{part}</a></h3>
                }))}
            </ResponsiveDiv>

            <p className="remember-das" >Գրանցել դասընթաց +</p>
            {initialArray.map((box, i)=> {
                return (
                    <div className="--plan-das-continer--mat" key={i} onClick={onAdd}>{box}</div>
                )
            })}
        </div>
    )
}

export default MatInformatiPage;