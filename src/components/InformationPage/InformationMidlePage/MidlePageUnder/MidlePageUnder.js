import "./MidlePageUnder.css";
import { MIDLE_UNDER_DATA } from "../../../../consts";

const MidlePageUnder = () => {
    return (
        <div className="midle-page-under">
            <h4 className="lesson">Տնային առաջադրանքներ</h4>
            {MIDLE_UNDER_DATA.map((el) => {
                return (
                    <div className="midle-under-data">
                        <h5>{el.name}</h5>
                        <img src={el.src}></img>
                        <h4>{el.task}</h4>
                    </div>
                )
            })}
        </div>
    )
}

export default MidlePageUnder;