import TeacherSection from "../TeacherSections/TeacherSections";
import InformationPage from "../InformationPage/InformationPage";
import './Teacher.css';
import { useState } from "react";


function Teacher() {
  const [style, setStyle] = useState(false);

  const onClick = () => {
    setStyle(!style);
  }
  return (
    <>
      <div className="container">
        <div className="teacher-section-tree-rows">
          <TeacherSection style={style}/>
          <div className="tree-rows" onClick={onClick}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <InformationPage style={style} />
      </div>

    </>
  );
}

export default Teacher;
