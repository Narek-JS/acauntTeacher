import "./PagePatvirvac.css";
import InfoPatvirvacPage from "./InfoPatvirvacPage/InfoPatvirvacPage";
import TeacherSection from "../components/TeacherSections/TeacherSections";
import { useState } from "react";

const PagePatvirvac = () => {
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
          <InfoPatvirvacPage style={style} />
        </div>
    );
}

export default PagePatvirvac;