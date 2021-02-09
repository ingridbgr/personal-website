import styled from "styled-components";

export const Background = styled.div`
  background-image: url("https://img5.goodfon.com/original/3840x2400/1/d6/4k-ultra-hd-background-starry-sky-milky-way-stars-space-astr.jpg");
  background-position: bottom;
  background-size: 100%;
  height: 850px;
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 100px;
  padding-top: 315px;
  justify-content: center;
  justify-self: center;
  background-color: rgba(0, 0, 0, 0.4);
  box-sizing: border-box;
`;

export const Title = styled.div`
  font-size: 60px;
  color: white;
  transition: 1s;
  :hover {
    color: #6930c3;
  }
`;

export const Subtitle = styled.div`
  font-size: 30px;
  padding-top: 50px;
  color: gray;
`;
export const Icon = styled.button`
  margin: 30px;
  background-color: transparent;
  box-shadow: none;
  border: none;
  transition: 1s;
  :hover {
    background: #6930c3;
    border-radius: 30px;
  }
`;
export const Icons = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
  margin: 40px;
`;
