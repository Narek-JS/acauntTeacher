import Data from "./Data/Data";
import Sections from "./Sections/Sections";
import "./TeacherSections.css";

const TeacherSection = () => {
    return (
        <div className="teacherSection">
            <Data />
            <Sections />
        </div>
    )
}

export default TeacherSection;