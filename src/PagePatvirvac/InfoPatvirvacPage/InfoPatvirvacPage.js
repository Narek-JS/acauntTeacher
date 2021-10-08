import "./InfoPatvirvacPage.css";
import patvirvac_I_M_A_G_E from "../../Images/patvirvac-logo.png";
import ptvirvac_file_I_M_A_G_E from "../../Images/icon-file.png";
import patvirvac_slac_I_M_A_G_E from "../../Images/slac-right.png"
const InfoPatvirvacPage = ({style}) => {
    return (
        <div className="info-patvirvac">
            <div className="information-sections ert">
                <h2>պատվիրված աշխատանքներ</h2>
                <h2>Առաջարկներ</h2>
                <h2>Կատարված Պատվերներ</h2>
            </div>
            <div className="info-patvir-logo-div">
                <img src={patvirvac_I_M_A_G_E}></img>
                <p>Կարեն Գալստյան</p>
            </div>
            <p className="patvirvac-anraj-p">Անհարժեշտ է տալ կայքի դիզայնը ․․․</p>
            <div className="patvir-massege-page">
                <p className="massege-page-data">15․07․2021</p>
                <p className="massege-page-time">22:30</p>
                <div className="massege-piruz">
                    <p>«Gloab IT» ընկերությունում առկան են երեք ֆակուլտետներ, վեբ ծրագրավորման ծրագրավորման և մուլտիմեդիայի։ «ԳԼՈԲԱԼ ԻՏ» ՍՊԸ-ն հիմնադրվել է 2017թ.-ի հոկտեմբերի 19ին Գ. Քոսյանի կողմից: Մենք առաջարկում ենք ծրագրային</p>
                </div>
                <p className="massege-page-time-un">22:30</p>
                <div className="massege-blue">
                    <p> «Gloab IT» ընկերությունում առկան են երեք ֆակուլտետներ, վեբ ծրագրավորման ծրագրավորման և մուլտիմեդիայի։ «ԳԼՈԲԱԼ ԻՏ» ՍՊԸ-ն հիմնադրվել է 2017թ.-ի հոկտեմբերի 19ին Գ. Քոսյանի կողմից: Մենք առաջարկում ենք ծրագրային</p>
                </div>
            </div>
            <div className="patvirvac-under-div">
                <img className="patvirvac-under-file" src={ptvirvac_file_I_M_A_G_E}></img>
                <input></input>
                <img className="patvirvac-under-slac" src={patvirvac_slac_I_M_A_G_E}></img>
            </div>
        </div>
    )
}

export default InfoPatvirvacPage;