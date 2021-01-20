import styled from "styled-components";

export const CartWrapper = styled.div`
  width: auto;
  right: 0;
  top: 10vh;
  position: fixed;
  transition: 0.5s ease;
  z-index: 999;
`;

export const ShowCart = styled.button`
  margin-right: 20px;
  padding: 10px;
  font-size: 3rem;
  color: #fcba26;
  cursor: pointer;
  padding-right: 10px;
  border: 2px solid #6c757d;
  border-radius: 20px;
  & span {
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s, opacity 0.5s linear;
  }

  &:hover {
    padding-right: 30px;
    transition: 0.5s;
    border-color: #0e86ca;
  }

  &:hover span {
    visibility: visible;
    transition: 0.5s;
    opacity: 1;
  }
`;

export const CartClicked = styled.div`
  width: 65vh;
  height: 85vh;
  right: 0;
  top: 7vh;
  position: fixed;
  background-color: #21211f;
  transition: 0.5s ease;
  background-color: #6c757d;
  z-index: 999;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 30px;
  text-align: center;
  border-radius: 30px;
`;

export const CartBar = styled.div`
  height: auto;
  width: 100%;
  padding: 10px;
  margin: 10px;
  font-size: 2rem;
  background-color: #343a40;
  border-radius: 30px;

  & p {
    font-weight: bold;
    color: white;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
  }
`;

export const Close = styled.button`
  display: block;
  font-size: 2rem;
  padding: 10px 15px;
  text-align: center;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
  border: 3px solid grey;
  border-radius: 15px;
  padding-right: 10px;

  & span {
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s, opacity 0.5s linear;
  }

  &:hover {
    transform: scale(0.95);
    border-color: #0e86ca;
    padding-right: 30px;
  }
  &:hover span {
    visibility: visible;
    transition: 0.5s;
    opacity: 1;
  }
`;

export const ListWrapper = styled.div`
  border: 2px solid #343a40;
  border-radius: 20px;
  height: 80%;
  background-color: grey;
  width: 100%;
  overflow: auto;
  font-size: 1.5rem;
  color: #e3e3e3;

  & .clear-cart {
    padding: 10px 20px;
    margin: 10px;
    border: 2px solid #343a40;
    border-radius: 20px;
    font-size: 1.5rem;
    color: #fcba26;
    font-weight: 650;
    cursor: pointer;
    transition: all 0.5s;
  }
  & .clear-cart:hover {
    transform: scale(0.95);
    border-color: #0e86ca;
  }
`;

export const Ul = styled.ul`
  list-style: none;

  & li:first-child {
    color: #bababa;
  }
`;

export const Li = styled.li`
  padding: 15px;
  display: flex;
  flex-direction: row;
`;

export const Name = styled.span`
  flex-grow: 2;
  text-align: left;
`;

export const Amount = styled.label`
  flex-grow: 2;
`;

export const Price = styled.label`
  flex-grow: 1;
  margin-right: 20px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AmountWrapper = styled.div`
  width: 70%;
  display: flex;
  && input {
    padding: 15px 10px;
    margin-right: 5px;
    width: 40%;
    font-size: 1.5rem;
    border: 1px solid #343a40;
    border-radius: 30px;
    cursor: pointer;
    box-sizing: border-box;
  }

  && button {
    padding: 15px 10px;
    width: 40%;
    font-size: 1.5rem;
    border: 1px solid #343a40;
    border-radius: 30px;
    cursor: pointer;
    box-sizing: border-box;
  }
`;

export const Del = styled.button`
  font-size: 1.7rem;
  color: red;
  border: 2px solid #343a40;
  border-radius: 20px;
  padding: 5px 15px;
  cursor: pointer;
  transition: all 0.5s;

  &:hover {
    transform: scale(0.92);
    border-color: #0e86ca;
  }
`;
