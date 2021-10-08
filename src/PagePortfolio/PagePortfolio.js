import "./PagePortfolio.css";
import InfoPortfolioPage from "./InfoPortfolioPage/InfoPortfolioPage";
import TeacherSection from "../components/TeacherSections/TeacherSections";
import { useState } from "react";

const PagePortfolio = () => {
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
          <InfoPortfolioPage style={style} />
        </div>
    );
}
export default PagePortfolio;