import styled from 'styled-components';

export const StyledRelativeSection = styled.section`
  position: relative;
`;

export const StyledAbsoluteContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export const StyledAppContent = styled.section`
  position: absolute;
  top: 66px;
  right: 0;
  bottom: 0;
  left: 240px;
  overflow-y: auto;
`;

export const StyledLayoutRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

export const OneThirdCol = styled.div`
  width: ${100 / 3}%;
`;

export const TwoThridCol = styled.div`
  width: ${(100 / 3) * 2}%;
`;

export const OneFullCol = styled.div`
  width: 100%;
`;
