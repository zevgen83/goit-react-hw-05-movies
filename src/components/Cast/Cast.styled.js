import styled from 'styled-components';

export const CastList = styled.ul`
  display: flex;
  align-items: center;
  justify-items: center;
  flex-wrap: wrap;
  gap: 20px;
  padding-left: 20px;
  list-style: none;
`;

export const CastItem = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const CastPhoto = styled.img`
  display: block;
  width: 100px;
  height: 100%;
`;
