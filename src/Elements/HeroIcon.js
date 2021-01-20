import styled from "styled-components";
import { motion } from "framer-motion";
export const HeroSection = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const HeroWrapper = styled(motion.div)`
  max-width: 1400px;
  width: 100%;
  text-align: center;
`;

export const Icon = styled(motion.div)`
  padding: 0;
  margin: 0px 10px;
  text-transform: capitalize;
  text-align: center;
  color: #fff;
  width: auto;
  display: inline-block;
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0);
  transition: all 1s;
  &:hover {
    background-color: #f99b1e;
    border: 1px solid #fefefe;
    border-radius: 10px;
    cursor: pointer;
  }

  &:hover img {
    transform: scale(1.1);
    transform: rotate(0deg);
    transition: 0.5s;
  }
  span {
    display: block;
    line-height: 30px;
    font-size: 1.2rem;
  }
`;

export const Img = styled.img`
  background: transparent;
  transform: rotate(2deg);
`;
