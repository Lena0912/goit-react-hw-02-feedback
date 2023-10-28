import styled from 'styled-components';

export const MainSection = styled.main`
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 200px auto 0 auto;
  border: 3px solid ${p => p.theme.colors.brd};
  border-radius: 10px;
  background-color: ${p => p.theme.colors.bgc};
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;
