import { Background, Icon, Icons, Title, TitleBox, Subtitle } from "./style.js";

const Home = () => {
  return (
    <div>
      <Background>
        <TitleBox>
          <Title> Hello </Title>
          <Subtitle>Welcome to my place!</Subtitle>
          <Subtitle>
            I am Ingrid and I am so happy for having you here!
          </Subtitle>
          <Icons>
            <Icon>
              <a
                href="https://www.instagram.com/ingridissima/?hl=pt-br"
                id="instagram"
              >
                <img
                  alt="icon"
                  src="https://img.icons8.com/nolan/44/instagram-new.png"
                />
              </a>
            </Icon>
            <Icon>
              <a href="https://www.linkedin.com/in/ingridbgr/" id="linkedin">
                <img
                  alt="icon"
                  src="https://img.icons8.com/nolan/44/linkedin.png"
                />
              </a>
            </Icon>
            <Icon>
              <a
                href="https://www.facebook.com/ingridbenites.rodrigues.9"
                id="facebook"
              >
                <img
                  alt="icon"
                  src="https://img.icons8.com/nolan/44/facebook.png"
                />
              </a>
            </Icon>
          </Icons>
        </TitleBox>
      </Background>
    </div>
  );
};

export default Home;
