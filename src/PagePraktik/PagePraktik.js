import "./PagePraktik.css"; 
import TeacherSection from "../components/TeacherSections/TeacherSections";
import PraktikInformatin from "./praktikInformatin/PraktikInformatin";
import { useState } from "react";

const PagePraktik = () => {
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
          <PraktikInformatin style={style}/>
        </div>
    )
}

export default PagePraktik;