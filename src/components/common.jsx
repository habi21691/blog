import styled from "styled-components";

export const BoxContainer = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  justify-content: center;
 
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 2.5px rgba(15, 15, 15, 0.19);
  align-items: center;
  justify-content: center;
`;

export const MutedLink = styled.a`
  font-size: 11px;
  color: rgba(88, 24, 69);
  font-weight: 500;
  text-decoration: none;
`;

export const BoldLink = styled.a`
  font-size: 11px;
  color: rgb(88, 24, 69);
  font-weight: 500;
  text-decoration: none;
  margin: 0 4px;
`;

export const Input = styled.input`
  width: 100%;
  height: 42px;
  outline: none;
  // border: 1px solid rgba(200, 200, 200, 0.3);
  padding: 0px 10px;
  border:1px solid rgba(234 88 12)
  border-bottom: 1.4px solid transparent;
  transition: all 200ms ease-in-out;
  font-size: 12px;
  &::placeholder {
    color: rgba(107,107,107);
  }
  &:not(:last-of-type) {
    // border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
  }
  &:focus {
    outline: none;
    border-bottom: 2px solid rgb(241, 196, 15);
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 11px 40%;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: rgb(241, 196, 15);
  background: linear-gradient(
    58deg,
    rgba(255, 172, 28) 20%,
    rgba(255, 172, 28) 100%
  );
  &:hover {
    filter: brightness(1.03);
  }
`;