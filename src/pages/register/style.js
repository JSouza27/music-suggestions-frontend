import styled from 'styled-components';

export const Wrapper = styled.section`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100%;
`;

export const Container = styled.section`
  align-items: center;
  border: 0.5px solid #878787;
  border-radius: 10px;
  box-shadow: 0px 4px 64px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
  min-height: 40.06rem;
  padding: 1.37rem;
  width: 20.25rem;

  @media (min-width: 600px) {
    padding: 2.18rem;
    width: 31.56rem;
  }
`;

export const WelcomeTitle = styled.span`
  font-size: 1.18rem;
  font-weight: 300;
  line-height: 28.5px;
  margin-top: 0.5rem;
`;

export const SubTitle = styled.span`
  font-size: 1.56rem;
  font-weight: 500;
  line-height: 37px;
  margin-top: 0.56rem;
`;

export const Label = styled.span`
  font-size: 1rem;
  line-height: 24px;
  margin-bottom: 0.56rem;
`;

export const ContainerEmail = styled.div`
  display: flex;
  flex-direction: column;
  height: 5.75rem;
  margin-top: 2.63rem;
  width: 100%;
`;

export const Input = styled.input`
  border: 0.6px solid #282828;
  border-radius: 6px;
  color: #ABABAB;
  font-size: 0.87rem;
  font-weight: 300;
  line-height: 21px;
  outline: none;
  padding: 19px 0px 19px 17.8px;
`;

export const ContainerFirstName = styled(ContainerEmail)`
  margin-top: 1.5rem;
`;

export const ContainerLastName = styled(ContainerEmail)`
  margin-top: 1.5rem;
`;

export const ContainerPassword = styled(ContainerEmail)`
  margin-top: 1.5rem;
`;

export const Button = styled.button`
  background-color: #000000;
  border: none;
  border-radius: 6px;
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  height: 3.56rem;
  line-height: 24px;
  margin-top: 2.93rem;
  margin-bottom: 0.5rem;
  outline: none;
  width: 100%;
`;
