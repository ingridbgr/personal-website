import styled from "styled-components";

export const Card = styled.div`
  height: 500px;
  width: 400px;
  display: flex;
  flex-direction: column;
  text-align: justify;
  padding: 50px;
  margin: 50px;
  justify-self: center;
  box-sizing: content-box;
  border: navy double 4px;
  transition: 2s;
  :hover {
    background: #d3d3d3;
    color: #4a4e69;
  }
`;

export const Title = styled.div`
  text-align: center;
  font-size: 30px;
  color: purple;
`;

export const Text = styled.div`
  font-size: 20px;
  padding-top: 50px;
  color: gray;
`;
export const Tech = styled.div`
  font-size: 20px;
  padding-top: 50px;
  color: gray;
  text-align: center;
`;
