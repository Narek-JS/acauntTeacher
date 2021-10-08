import "./DasInformatiPage.css";
import styled from "styled-components";
import { PARTS_TEACHER_DATA } from "../../consts";
import { useReducer } from "react";
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
}

const DasInformatiPage = ({style}) => {
    const onAdd = () => {
        dispatch({
            type:"add",
        })
    }
    
    const [initialArray, dispatch] = useReducer(reducer,[
        <div className="opening-plan-das-box" >
            <div className="plan-das-box">
                <div className="responsive-div">
                    <h3 className="first-text">Վեբ Դիզայնի դասընթաց։ Պրակտիկա</h3>
                    <div className="box-row"></div>
                    <div className="box-data-time">
                        <h3 className="box-data">04․07․2021</h3>
                        <h3 className="box-time">19:00</h3>
                    </div>
                    <div className="box-row"></div>
                </div>
                <button>Սկսել</button>
            </div>
            <h2 className="add">Կրկնորինակել հրավերը  +</h2>
        </div>
    ]);

    return (
        <div className="information-page">
            <ResponsiveDiv invalid={style} className="ede">
                {PARTS_TEACHER_DATA.map(((part, index) => {
                    return <h3 key={`key${index}`} className="part"><a href="#">{part}</a></h3>
                }))}
            </ResponsiveDiv>
            <div className="information-sections">
                <h2><a href="#">Ընթացիկ Գրաֆիկ</a></h2>
                <h2><a href="#">Կայացած Դասեր</a></h2>
                <h2><a href="#">Պլանավորված Դասեր</a></h2>
            </div>
            <h2 className="plan-das" >Պլանավորել դասընթաց +</h2>
            {initialArray.map((box, i)=> {
                return (
                    <div className="--plan-das-continer--" key={`key${i}`} onClick={onAdd}>{box}</div>
                )
            })}
        </div>
    )
}

export default DasInformatiPage;
