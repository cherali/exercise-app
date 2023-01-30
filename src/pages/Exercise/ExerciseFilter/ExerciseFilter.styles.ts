import styled from '@emotion/styled';

export const StyledExerciseFilter = styled.div(({ theme }) => `
  margin: 1rem 0;
`)

export const ExerciseFilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ExerciseFilterContent = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  flex: 4;
`

export const SelectContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 8px;
  flex: 1;
  white-space: nowrap;
  
  p {
    font-weight: bolder;
  }
`

export const ItemPerPageContainer = styled.div`
  flex: 3;
  align-self: center;
  display: flex;
  justify-content: flex-end;
`

export const ItemPerPage = styled.div`
  width: 100px;
`


