import "./InformationPage.css";
import InformationMidlePage from "./InformationMidlePage/InformationMidlePage";
import InformationUnderPage from "./InformationUnderPage/InformationUnderPage";
import { PARTS_TEACHER_DATA } from "../../consts";

import styled from "styled-components";

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

const InformationPage = (props) => {
    const { style } = props;
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
            <InformationMidlePage />
            <InformationUnderPage />
        </div>
    )
}

export default InformationPage;