import styled from "styled-components";
import { Link } from "react-router-dom";
import { Colors } from "../data/Variables";

export const ButtonOne = styled(Link)`
  background: ${({ primary }) => (primary ? "transparent" : `${Colors.light}`)};
  white-space: nowrap;
  outline: none;
  border: ${({ primary }) => (primary ? `1px solid ${Colors.light}` : "none")};
  font-weight: 500;
  border-color: ${({ primary }) => (primary ? "#fff" : "none")};
  min-width: 100px;
  max-width: 200px;
  cursor: pointer;
  text-transform: uppercase;
  text-decoration: none;
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ big }) => (big ? "16px 40px" : "14px 24px")};
  font-size: ${({ big }) => (big ? "20px" : "14px")};
  color: ${({ primary }) => (primary ? `${Colors.light}` : `${Colors.dark}`)};

  &:hover {
    background-color: ${({ primary }) =>
      primary ? `${Colors.light}` : `${Colors.green}`};
    color: ${({ primary }) => (primary ? "#000" : `${Colors.light}`)};
  }
`;

export const ButtonTwo = styled.button`
  background: ${({ primary }) => (primary ? "transparent" : `${Colors.light}`)};
  white-space: nowrap;
  outline: none;
  border: 1px solid #000;
  font-weight: 500;
  border-color: ${({ primary }) => (primary ? "#fff" : "none")};
  min-width: 100px;
  max-width: 200px;
  cursor: pointer;
  text-transform: uppercase;
  text-decoration: none;
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ big }) => (big ? "16px 40px" : "14px 24px")};
  font-size: ${({ big }) => (big ? "20px" : "14px")};
  color: ${({ primary }) => (primary ? `${Colors.light}` : `${Colors.dark}`)};

  &:hover {
    background-color: ${({ primary }) =>
      primary ? `${Colors.light}` : `${Colors.green}`};
    color: ${({ primary }) => (primary ? "#000" : `${Colors.light}`)};
  }
`;

export const ButtonThree = styled.a`
  background: ${({ primary }) => (primary ? "transparent" : `${Colors.light}`)};
  white-space: nowrap;
  outline: none;
  border: ${({ primary }) => (primary ? `1px solid ${Colors.light}` : "none")};
  font-weight: 500;
  border-color: ${({ primary }) => (primary ? "#fff" : "none")};
  min-width: 100px;
  max-width: 200px;
  cursor: pointer;
  text-transform: uppercase;
  text-decoration: none;
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ big }) => (big ? "16px 40px" : "14px 24px")};
  font-size: ${({ big }) => (big ? "20px" : "14px")};
  color: ${({ primary }) => (primary ? `${Colors.light}` : `${Colors.dark}`)};

  &:hover {
    background-color: ${({ primary }) =>
      primary ? `${Colors.light}` : `${Colors.green}`};
    color: ${({ primary }) => (primary ? "#000" : `${Colors.light}`)};
  }
`;
