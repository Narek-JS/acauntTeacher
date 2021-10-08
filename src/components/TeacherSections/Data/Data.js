import "./Data.css";
import dath_i_m_a_g_e from "../../../Images/dath.png";
import bell_i_m_a_g_e from "../../../Images/bell.png";
import { STARS_IMAGES_ARRAY } from "../../../consts";
const Data = () => {
    return (
        <div className="data">
            <div className="bracket">{"{}"}</div>
            <div className="teacherData">
                <div className="Teacher-images">
                    <img src={dath_i_m_a_g_e} alt={"dath"} className="dath"></img>
                </div>
                <div className="stars">{STARS_IMAGES_ARRAY}</div>
                <h1 className="teacher-name">Ռոբերտ Ավագյան</h1>
                <h3 className="teacher-status">Դասախոս (UX/UI)</h3>
                <img src={bell_i_m_a_g_e} alt={"bell"} className="bell"></img>
                <div className="teacher-data-row"></div>
            </div>
        </div>
    )
}

export default Data;