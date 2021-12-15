import styled from 'styled-components';

export const Container = styled.section`
  background-color: #fff;
  border: none;
  border-radius: 10px;
  box-shadow: 0px 15px 25px -25px rgba(30,30,60,0.25);
  display: flex;
  height: 5rem;
  margin: 0.56rem 0;
  width: 100%;
`;

export const Image = styled.div`
  border: none;
  border-radius: 10px;
  height: 5rem;
  overflow: hidden;
  width: 5rem;

  & .img {
    
    width: 100%;
  }
`;

export const Title = styled.span`
  font-size: 0.87rem;
  font-weight: 600;
  line-height: 1.31rem;
  margin-left: 1.12rem;
`;
