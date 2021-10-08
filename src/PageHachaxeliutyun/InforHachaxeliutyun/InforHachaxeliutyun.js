import "./InforHachaxeliutyun.css";
import styled from "styled-components";
import { 
        PARTS_TEACHER_DATA,
        TEXT_HACH_TOP_ARRAY,
        TEXT_HACH_MIDLE_ARRAY,
        HACH_SECTION_DATA_PAGE
    } from "../../consts";

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
const setHachContiner = () => {
    if(HACH_SECTION_DATA_PAGE.length !== 10){
        HACH_SECTION_DATA_PAGE.push(HACH_SECTION_DATA_PAGE[0]);
        if(HACH_SECTION_DATA_PAGE.length !== 10){
            setHachContiner();
        }
    }else{
        return HACH_SECTION_DATA_PAGE
    }
}
const InforHachaxeliutyun = ({ style }) => {
    return (
        <div className="inf-hachaxel-continer">
            <ResponsiveDiv invalid={style} className="ede">
                {PARTS_TEACHER_DATA.map(((part, index) => {
                    return <h3 key={`key${index}`} className="part"><a href="#">{part}</a></h3>
                }))}
            </ResponsiveDiv>
            <div className="top-tex-sectiom">
                {TEXT_HACH_TOP_ARRAY}
            </div>
            <div className="slac-under-xumb">
                <h3>Խումբ 1</h3>
                <div></div>
            </div>
            <div className="midle-tex-sectiom">
                {TEXT_HACH_MIDLE_ARRAY}
            </div>
            {setHachContiner()}
            <table boler="1">
                <tr>
                    <td><p>Դասընթացների անցկացումը ըստ դասերի քանակի, օրերի, ժամերի</p></td>
                    <td>Նախատեսված դասեր</td>
                    <td>Անցկացրած դասեր</td>
                    <td>Չկայացած դասեր</td>
                </tr>
                <tr>
                    <td>6...666...6</td>
                </tr>                
                <tr>
                    <td>Դասերի քանակ</td>
                    <td>10</td>
                    <td>7</td>
                    <td>3 (2 հարգելի)</td>
                </tr>
                <tr>
                    <td>Օրային հաշվարկ</td>
                    <td>10 օր</td>
                    <td>7 օր</td>
                    <td>3 օր (2 հարգելի)</td>
                </tr>
                <tr>
                    <td>Ժամային հաշվարկ</td>
                    <td>20 ժամ</td>
                    <td>14 ժամ</td>
                    <td>6 ժամ (2 հարգելի)</td>
                </tr>
            </table>
            <div className="hach-under-tag1 shf">
                <div></div>
                <h2>ներկա</h2>
            </div>
            <div className="hach-under-tag2 shf">
                <div></div>
                <h2>ներկա</h2>
            </div>
            <div className="hach-under-tag3 shf">
                <div></div>
                <h2>ներկա</h2>
            </div>
        </div>
    )
}

export default InforHachaxeliutyun;