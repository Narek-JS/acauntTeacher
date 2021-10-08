import "./PageHachaxeliutyun.css";
import TeacherSection from "../components/TeacherSections/TeacherSections";
import InforHachaxeliutyun from "./InforHachaxeliutyun/InforHachaxeliutyun";
import { useState } from "react";

const PageHachaxeliutyun = () => {
    const [style, setStyle] = useState(false);

    const onClick = () => {
      setStyle(!style);
    }
    return (
        <div className="container">
            <div className="teacher-section-tree-rows">
            <TeacherSection />
            <div className="tree-rows" onClick={onClick}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            </div>
            <InforHachaxeliutyun style={style} />
      </div>
    )
}

export default PageHachaxeliutyun;