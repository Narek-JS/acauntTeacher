import "./PageFrilans.css";
import InfoFrilansPage from "./InfoFrilansPage/InfoFrilansPage";
import TeacherSection from "../components/TeacherSections/TeacherSections";
import { useState } from "react";


const PageFrilans = () => {
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
          <InfoFrilansPage style={style} />
        </div>
    );
}
export default PageFrilans;
