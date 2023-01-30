import styled from '@emotion/styled'

export const ExerciseContainer = styled.div<{ isLoading: boolean }>(({ isLoading, theme }) => `
  display: grid;
  grid-template-columns: auto auto ;
  grid-gap: 8px 12px;
  backdrop-filter: blur(20px);

  a.disabled {
    pointer-events: none;
  }

  ${isLoading && `
    opacity: 0.4;
  `};

  ${!isLoading && `
    > div {
      :hover  {
        transform: scale(1.01);
        transition: all 350ms ease-in-out;
        box-shadow: 0px 0px 12px -2px ${theme.pallete.gray.light};
      }
    }  
  
  `};
`)

export const ExerciseCard = styled.div`
  width: 100%;
  overflow: hidden;

  a {
    padding: 0.5rem;
    display: inline-flex;
    gap: 1rem;
    width: 100%;
    :hover {
      text-decoration: none;
    }
  }

`

export const ExerciseCardImageContainer = styled.span`
`


export const ExerciseCardTextContainer = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-bottom: 1.5rem;

  span strong {
    color: ${({ theme }) => theme.pallete.black.darkest};
    font-size: 1rem;
    line-height: 1.1rem;
  }
`
export const ExerciseCardTextName = styled.span`
  font-size: 1.4rem;
  line-height: 1.5rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 85%;
  overflow: hidden;
  display: inline-block;
  color: ${({ theme }) => theme.pallete.primary.lightest};
`


export const ExerciseCardTextBodyPart = styled.span`
  font-size: 1.1rem;
  line-height: 1.1rem;
  color: ${({ theme }) => theme.pallete.secondary.main};
`

export const ExerciseCardTextTarget = styled.span`
  font-size: 1.1rem;
  line-height: 1.1rem;
  `
export const ExerciseCardTextEquipment = styled.span`
  font-size: 1.1rem;
  line-height: 1.1rem;
  color: ${({ theme }) => theme.pallete.secondary.main};
`

export const ExerciseCardImage = styled.img`
  width: 148px;
  height: 148px;
`

export const ExerciseRow = styled.span`
  display: flex;
  align-items: center;
`

export const PagePaginationContainer = styled.div`
  width: 100%;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  text-align: center;
`

export const NoData = styled.div`
  text-align: center;
  margin-top: 1rem;
  
  p {
    font-weight: bolder;
    font-size: 1.5rem;
  }
`