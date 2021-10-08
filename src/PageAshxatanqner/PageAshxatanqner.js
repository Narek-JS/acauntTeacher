import "./PageAshxatanqner.css";
import TeacherSection from "../components/TeacherSections/TeacherSections";
import AshxatanqInformPage from "./AshxatanqInformPage/AshxatanqInformPage";
import { useState } from "react";

const PageAshxatanqner = () => {

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
            <AshxatanqInformPage style={style}/>
        </div>
    )    
}

export default PageAshxatanqner;