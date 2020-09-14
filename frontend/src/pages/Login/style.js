import styled from 'vue-styled-components';

export const Page = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormTitle = styled.h1`
  margin: 20px 0;
  font-weight: normal;
  font-size: 18px;
  color: rgba(255, 255, 255, 0.8);
`;

export const CustomForm = styled.form`
  width: 100%;
`;

export const FormArea = styled.div`
  background-color: rgba(116, 113, 113, 0.1);
  border-radius: 5px;
  padding: 20px;
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ffffff;
`;

export const CustomInput = styled.input`
  padding: 10px;
  border-radius: 3px;
  height: 40px;
  width: 100%;
  border: none;
  margin: 10px 0;
  font-size: 14px;
  font-family: "Roboto", sans-serif;
  background-color: rgba(177, 177, 177, 0.1);
  color: #ffffff;
  text-align: center;

  &::placeholder {
    font-weight: bold;
    font-style: italic;
  }
`;

export const CustomButton = styled.button`
  width: 100%;
  height: 40px;
  background-color: #622aa8;
  color: #ffffff;
  font-weight: bold;
  font-size: 14px;
  border: none;
  transition: 0.1s;

  &:active {
    background-color: #2b0957;
    font-size: 13px;
    transition: 0.1s;
  }
`;
