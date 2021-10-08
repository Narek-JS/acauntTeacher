import "./Sections.css";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { PARTS_TEACHER_DATA } from "../../../consts";

const Sections = () => {
    return (
        <div className="sections">
            {PARTS_TEACHER_DATA.map(((part, index) => {
               return (
                   <Link to={`/${part}`}>
                        <h3 key={`key${index}`} className="part" >{part}</h3>
                   </Link>
                )
            }))}
        </div>
    )
}

export default Sections;