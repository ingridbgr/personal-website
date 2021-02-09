import Experience from "../../components/cards/experience.jsx";
import Porfolio from "../../components/cards/portfolio.jsx";
import Technologies from "../../components/cards/tecnologies.jsx";
import { ContentBox } from "./style.js";

const WorksAndXp = () => {
  return (
    <div>
      <ContentBox>
        <Experience />
        <Technologies />
        <Porfolio />
      </ContentBox>
    </div>
  );
};

export default WorksAndXp;
