import styled from "styled-components";
export const Section = styled.section`
  position: absolute;
  margin-bottom: 0;
  margin-left: 0;
  width: 100%;

  height: 600px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const CopyrightContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(${(props) => props.background}) no-repeat center center/cover;
  background-size: 100% 100%;
  padding-top: 150px;
  padding-bottom: 100px;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const H1 = styled.h1`
  color: lightgrey;
`;
