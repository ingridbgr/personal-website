import { Card, Title, Text, Tech } from "./style";

const Portfolio = () => {
  return (
    <Card>
      <Title> Portfolio</Title>
      <Text>
        I choose some group projects to share here, I really enjoy being part of
        a team. Check it out what we develop together!
        <Tech>
          <a href="https://gitlab.com/ingridbgr/lig-4-capivaras-nomads">
            lIG-4 Game
          </a>
          <p>
            <a href="https://gitlab.com/deborabarros/kenziehub">
              A Social media for devs
            </a>
          </p>
          <p>
            <a href="https://gitlab.com/ingridbgr/personal-profile">
              This website repo!
            </a>
          </p>
        </Tech>
      </Text>
    </Card>
  );
};

export default Portfolio;
