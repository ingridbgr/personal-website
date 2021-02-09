import {
  ContainerBox,
  ContentBox,
  Title,
  Text,
  TextBox,
  ProfileImage,
  ProfileImageBox,
} from "./style.js";

const AboutMe = () => {
  return (
    <div>
      <ContainerBox>
        <ContentBox>
          <ProfileImageBox>
            <ProfileImage />
          </ProfileImageBox>
          <TextBox>
            <Title> About me </Title>
            <Text>
              I am Ingrid, I am 24 years old and I just started my path as a
              developer. I began in my professional career as a Teacher,
              teaching I learned a lot about people, about myself and about the
              world. I always loved tecnology but never felt that I could fit in
              a techology profession. However, during my master's degree I found
              myself in technology studies, I developed solutions to introduce
              technology in schools and became a robotic teacher. Since then I
              decided to change my profession and go deeper in technology
              studies. Teaching robotics I could see how difficult it is to
              motivate girls to study tech and code, these girls are just like
              me, in the past - they love tech but cannot picture themselves as
              programmers. So, I decided that I will be the reference for these
              girls and all the other girls who are deciding now which path they
              will choose. I do not want that the girls have to wander as much
              as I did to find a way, I want to inspire others to follow their
              dreams while I follow mine.
            </Text>
          </TextBox>
        </ContentBox>
      </ContainerBox>
    </div>
  );
};

export default AboutMe;
