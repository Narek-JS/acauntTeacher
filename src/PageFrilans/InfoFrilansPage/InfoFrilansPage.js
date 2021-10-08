import "./InfoFrilansPage.css";
import { FRILANS_TOP_LOGOS } from "../../consts";
import file_I_M_A_G_E from "../../Images/icon-file.png";

const InfoFrilansPage = ({style}) => {
    return(
        <div className="info-frilans">
            <div className="frinlans-top-div">
                <div className="frinlans-top-div-in-div">
                    <div className="frinlans-top-ddiv-left-div">
                        <img src={file_I_M_A_G_E}></img>
                        <p>Դիտել օրինակը</p>
                    </div>
                    <div className="frinlans-top-ddiv-right-div">
                        {FRILANS_TOP_LOGOS}
                    </div>
                </div>
                <p className="frilans-patmeq-text">Պատմեք ձեր աշխատանքի մասին</p>
            </div>
            <p className="frilans-kapvelu-mij">Նշեք ձեզ հետ կապբվելու միջոցները</p>
            <div className="frilans-wotcap-div">
                <input className="input-wotcap" placeholder="հեռ․ համար / էլ․ հասցե"></input>
            </div>
            <div className="frilans-wotcap-under-text">
                <p>Ավելացնել նոր կապի միջոց</p>
                <button>+</button>
            </div>
            <p className="frilans-kapvelu-mij">Պատվիրված աշխատանքի գնահատումը</p>
            <div className="frilans-ashx-gnah-div">
                <p>Ժամահաշվարկով</p>
                <p>Այլ եղանակով</p>
            </div>
        </div>
    )
}
export default InfoFrilansPage;