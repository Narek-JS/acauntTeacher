import "./PageInformacia.css";
import InfoPageInformacion from "./InfoPageInformacion/InfoPageInformacion";
import TeacherSection from "../components/TeacherSections/TeacherSections";
import { useState } from "react";

const PageInformacia = () => {
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
          <InfoPageInformacion style={style} />
        </div>
    );
}
export default PageInformacia;