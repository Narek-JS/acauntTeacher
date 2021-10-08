import "./InfoPageInformacion.css";
import slac_under_I_M_A_G_E from "../../Images/slac-under.png";
import { INFO_BOXES_INFO, INFO_BOXES_TEXTS, PARTS_TEACHER_DATA } from "../../consts";
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

const setHachContiner = (i) => {
    if(INFO_BOXES_INFO.length !== 6){
        INFO_BOXES_INFO.push(
            <div className="info-opening-plan-das-box">
                <p>{INFO_BOXES_TEXTS[i]}</p>
                <img src={slac_under_I_M_A_G_E}></img>
            </div>
        );
        if(INFO_BOXES_INFO.length !== 6){
            setHachContiner(i + 1);
        }
    }else{
        return INFO_BOXES_INFO;
    }
}


const InfoPageInformacion = ({style}) => {

    return (
        <div className="info-page-info">
            <ResponsiveDiv invalid={style} className="ede">
                {PARTS_TEACHER_DATA.map(((part, index) => {
                    return <h3 key={`key${index}`} className="part"><a href="#">{part}</a></h3>
                }))}
            </ResponsiveDiv>
            {INFO_BOXES_INFO[0]}
            <div className="calendar-data">
                <h3>Ծննդյան ամսաթիվ</h3>
                <div>
                    <select className="cus-seclect-box">
                        <option>01</option>
                        <option>01</option>
                        <option>01</option>
                        <option>01</option>
                        <option>01</option>
                    </select>
                    <select className="cus-seclect-box">
                        <option>01</option>
                        <option>01</option>
                        <option>01</option>
                        <option>01</option>
                        <option>01</option>
                    </select>
                    <select className="cus-seclect-box">
                        <option>hunvar</option>
                        <option>petrvar</option>
                        <option>mart</option>
                        <option>april</option>
                        <option>mayis</option>
                    </select>
                </div>
            </div>
            {setHachContiner(0)}
            <div className="soc-hxumner">
                <h3>Սոց․ ցանցերի հղումներ</h3>
                <div className="info-soc-box"></div>
            </div>
            <table boler="1">
                <tr>
                    <td>N</td>
                    <td>լեզու</td>
                    <td>բավ</td>
                    <td>լավ</td>
                    <td>գեր</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>հայերեն</td>
                    <td></td>
                    <td></td>
                    <td>+</td>
                </tr>                
                <tr>
                    <td>2</td>
                    <td>ռուսերեն</td>
                    <td></td>
                    <td></td>
                    <td>+</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>անգլերեն</td> 
                    <td></td>
                    <td>+</td>
                    <td></td>
                </tr>
            </table>
            <h3 className="info-under-text">Սոց․ ցանցերի հղումներ + </h3>
            <div className="info-under-row"></div>
        </div>
    )
}
    
{/*       

     <table boler="1">
        <tr>
            <td>N</td>
            <td>լեզու</td>
            <td>բավ</td>
            <td>լավ</td>
            <td>գեր</td>
        </tr>
        <tr>
            <td>1</td>
            <td>հայերեն</td>
            <td></td>
            <td></td>
            <td>+</td>
        </tr>                
        <tr>
            <td>2</td>
            <td>ռուսերեն</td>
            <td></td>
            <td></td>
            <td>+</td>
        </tr>
        <tr>
            <td>3</td>
            <td>անգլերեն</td> 
            <td></td>
            <td>+</td>
            <td></td>
        </tr>
    </table> 




    table{
        margin: 30px 20px 10px 20px;
        width: 93%;
    }
    table, th, td{
        border: 1px solid white;
        border-collapse: collapse;
    }
    th, td{
        padding: 0.5px;
        height: 43px;
        text-align: center;
        font-size: 14px;
        line-height: 17px;
        text-align: center;
        letter-spacing: 0.055em;
        color: #FFFFFF;
    }
*/}
export default InfoPageInformacion; 