import "./PagesDasntacner.css";
import { useState } from "react";
import TeacherSection from "../components/TeacherSections/TeacherSections";
import DasInformatiPage from "./DasInformatiPage/DasInformatiPage";

const PagesDasntacner = () => {
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
          <DasInformatiPage style={style} />
        </div>
    );
}

export default PagesDasntacner;