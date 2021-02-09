import styled from "styled-components";

export const ContainerBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px;
  padding-top: 200px;
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  justify-self: center;
  box-sizing: border-box;
  text-align: left;
  margin-top: 0;
  margin: 10px;

  padding-top: 0;
`;
export const TextBox = styled.div`
  height: 500px;
  width: 600px;
  display: flex;
  flex-direction: column;
  text-align: justify;
  margin: 10px;
`;

export const Title = styled.div`
  font-size: 40px;
  color: purple;
  transition: 1s;
  :hover {
    color: #277da1;
  }
`;

export const Text = styled.div`
  font-size: 22px;
  padding-top: 20px;
  color: gray;
`;

export const ProfileImageBox = styled.div`
  height: 400px;
  width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  justify-content: center;
  justify-self: center;
`;
export const ProfileImage = styled.div`
  background-image: url("https://i.ibb.co/XYn7WFx/Whats-App-Image-2021-02-09-at-17-21-11.jpg");
  background-position: center;
  border-radius: 50%;
  height: 300px;
  width: 300px;
  background-size: 98%;

  :hover {
    zoom: 130%;
  }
`;
