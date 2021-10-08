import "./PageMatyan.css";
import { useState } from "react";
import TeacherSection from "../components/TeacherSections/TeacherSections";
import MatInformatiPage from "./MatInformatiPage/MatInformatiPage";

const PageMatyan = () => {
    const [style, setStyle] = useState(false);

    const onClick = () => {
      setStyle(prev => prev);
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
            <MatInformatiPage style={style} />
          </div>
      );
}

export default PageMatyan;
