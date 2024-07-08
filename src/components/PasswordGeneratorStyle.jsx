import styled from "styled-components";

export const Section = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Wrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
`;

export const Flex = styled.div`
  display: flex;
  @media (max-width: 1023px) and (min-width: 320px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  font-family: var(--fontTitle);
  font-size: 2.5rem;
  margin-bottom: 3rem;
  text-align: center;
  user-select: none;
`;

export const PasswordBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  gap: 1rem;
`;

export const PasswordValue = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 100%;
  padding: 1rem;
  border: 0.1rem solid #ccc;
  border-radius: 0.5rem;
  font-family: var(--fontText);
  font-size: var(--fontSize14);
`;

export const Error = styled.span`
  color: red;
  font-family: var(--fontText);
  font-size: var(--fontSize12);
`;

export const Label = styled.label`
  padding: 0.5rem 0rem;
`;

export const Span = styled.span`
  font-family: var(--fontText);
  font-size: var(--fontSize14);
  user-select: none;
  margin-left: 1rem;
`;

export const Button = styled.button`
  background-color: var(--colorMain);
  display: flex;
  color: #ffffff;
  border: 0.1rem solid;
  padding: 1rem;
  border-radius: 1rem;
  font-family: var(--fontText);
  font-size: var(--fontSize14);
  user-select: none;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  width: 100%;

  &:hover {
    background-color: var(--colorHover);
  }

  &:active {
    background-color: var(--colorActive);
  }
`;

export const SubTitle = styled.h2`
  font-family: var(--fontSubtitle);
  font-size: var(--fontSize18);
  padding-left: 1rem;
  user-select: none;
`;

export const TextPassword = styled.span`
  font-family: var(--fontText);
  font-size: var(--fontSize14);
  cursor: pointer;
  user-select: none;
  margin: 0.5rem;
  padding: 0.5rem;
  display: inline-block;
  width: fit-content;

  &:active {
    color: white;
    background-color: var(--colorActive);
    border-radius: 2rem;
  }
`;

export const Block = styled.div`
  border: 0.1rem solid #ccc;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
`;
