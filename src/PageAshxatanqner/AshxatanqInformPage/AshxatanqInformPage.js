import "./AshxatanqInformPage.css";
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
const AshxatanqInformPage = ({style}) => {

    return (
        <div className="ashxatanq-inform-page">
            <ResponsiveDiv invalid={style} className="ede">
                {PARTS_TEACHER_DATA.map(((part, index) => {
                    return <h3 key={`key${index}`} className="part"><a href="#">{part}</a></h3>
                }))}
            </ResponsiveDiv>
            <div className="ashxat-top-text">
                <p className="top-text-1">Աշխատավարձի հաշվում</p>
                <p className="top-text-2">Դասախոսի դրամապանակ</p>
            </div>
            <h2 className="ashxat-arka-hrka-text">Առկա և հեռակա դասընթացներ</h2>
            <div className="arka-hrka-under-div">
                <p>Ուսանողների քանակը</p>
                <p>Ընդհանուր գումար</p>
                <p>Վերջնական գումար</p>
            </div>
            <div className="arka-hrka-un-under-div">
                <p>10 ուսանող</p>
                <p>300 000 դրամ</p>
                <p className="arka-hrka-un-under-text-yellow">90 000 դրամ</p>
            </div>
            <div className="arka-hrka-under-row"></div>
            <div className="arka-hrka-under-row-under-div">
                <p>Նախատեսված դասերը</p>
                <p>Անցկացված դասերը</p>
                <p>Չկայացած դասընթացների <br/>համար գանձվող գումար</p>
            </div>
            <div className="under-row-under-under-nums">
                <p>7</p>
                <p>10</p>
                <p className="under-row-under-under-nums-red">9500 դրամ</p>
            </div>
            <div className="amis-ashx-div">
                <h2>Ամսական աշխատավարձ</h2>
                <h2 className="amis-ashx-green">81 000 դրամ</h2>
            </div>
            <div className="arka-hrka-under-row"></div>
            <div className="ashx-big-text-top">
                <p>Դասախոսի աշխատավարձը, որոշվում է՝<br />
1․ Ամսեկան կատարվող վարձավճարի ընդհանուր գումարի 30 տոկոսվ<br/>
2․ Դասախոսի անհարգելի բացակայության դեպքում, որի հետևանքով չի կայացել դաս կամ դասեր, 
ապա դասախոսի աշխատավարձից հանվում է չկայացած դասերի համար գանձվող գումարը։
Ուսանողների կողմից կատարվող ամսեկան վճարումների ընդհանուր գումարի 23 տոկոսը գնում է 
որպես եկամտահարկ։<br/><br/>

Աշխատավարձի հաշվման պայմաններին գրավոր համաձայնություն են տվել դասախոսը, 
և կազմակերպության տնօրենը։<br/><br/>
 
Կազմակերպության ֆինանսները հսկվում են ՀՀ հարկային ծառայության կողմից։</p>
            </div>
            <div className="arka-hrka-under-row"></div>
            <div className="arka-hrka-under-row-duble"></div>
            <h2 className="ashx-anhat-das-text">Անհատական դասընթացներ</h2>
            <div className="arka-hrka-under-div">
                <p>Ուսանողների քանակը</p>
                <p>Ընդհանուր գումար</p>
                <p>Վերջնական գումար</p>
            </div>
            <div className="arka-hrka-un-under-div">
                <p>1 ուսանող</p>
                <p>100 000 դրամ</p>
                <p className="arka-hrka-un-under-text-yellow">50 000 դրամ</p>
            </div>
            <div className="arka-hrka-under-row"></div>
            <div className="arka-hrka-under-row-under-div">
                <p>Նախատեսված դասերը</p>
                <p>Անցկացված դասերը</p>
                <p>Չկայացած դասընթացների <br/>համար գանձվող գումար</p>
            </div>
            <div className="under-row-under-under-nums">
                <p>7</p>
                <p>10</p>
                <p className="under-row-under-under-nums-red">9500 դրամ</p>
            </div>
            <div className="amis-ashx-div">
                <h2>Ամսական աշխատավարձ</h2>
                <h2 className="amis-ashx-green">45 000 դրամ</h2>
            </div>
            <div className="ashx-big-text-top">
                <p>Դասախոսի աշխատավարձը, որոշվում է՝<br />
1․ Ամսեկան կատարվող վարձավճարի ընդհանուր գումարի 30 տոկոսվ<br/>
2․ Դասախոսի անհարգելի բացակայության դեպքում, որի հետևանքով չի կայացել դաս կամ դասեր, 
ապա դասախոսի աշխատավարձից հանվում է չկայացած դասերի համար գանձվող գումարը։
Ուսանողների կողմից կատարվող ամսեկան վճարումների ընդհանուր գումարի 23 տոկոսը գնում է 
որպես եկամտահարկ։<br/><br/>

Աշխատավարձի հաշվման պայմաններին գրավոր համաձայնություն են տվել դասախոսը, 
և կազմակերպության տնօրենը։<br/><br/>
 
Կազմակերպության ֆինանսները հսկվում են ՀՀ հարկային ծառայության կողմից։</p>
            </div>
            <div className="arka-hrka-under-row"></div>
            <div className="arka-hrka-under-row-duble"></div>
            <div className="amis-ashx-div">
                <h2>Ընդհանուր ամսական աշխատավարձ</h2>
                <h2 className="amis-ashx-green">126 000 դրամ</h2>
            </div>
        </div>
    )
}

export default AshxatanqInformPage;