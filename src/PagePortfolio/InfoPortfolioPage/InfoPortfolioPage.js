import "./InfoPortfolioPage.css";
import under_I_M_A_G_E from "../../Images/sfst.png";
const InfoPortfolioPage = ({style}) => {
    return (
        <div className="info-portfolio">
            <input placeholder="Պրոեկտի Անվանումը"></input><br></br>
            <input placeholder="Տեղադրել հղում (գոյության դեպքում)"></input>

            <div className="info-portfolio-for-div">
                <button>Նկար</button>
                <button>Աուդիո/վիդեո</button>
                <button>Կոդ</button>
                <button>Տեսքտ</button>
            </div>
            <div className="portfolio-section-file"><p>file</p></div>
            <div className="portfolio-under-div">
                <button>Հրապարակել</button>
                <div>
                    <p>Ավելացնել պրոեկտ</p>
                    <img src={under_I_M_A_G_E}></img>
                </div>
            </div>
        </div>
    )
}

export default InfoPortfolioPage