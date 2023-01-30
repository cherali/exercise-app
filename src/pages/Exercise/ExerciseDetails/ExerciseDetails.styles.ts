import styled from '@emotion/styled'

export const ExerciseDetailsContainer = styled.div`
  height: calc(100vh - 60px);
  width: 100%;
  display: flex;
  align-items: center;
`

export const ExerciseDetailsContentWrapper = styled.div(({ theme }) => `
  margin-top: -3rem;
  box-shadow: 0 0 15px -8px ${theme.pallete.gray.light} inset,0 0 30px -8px ${theme.pallete.gray.light} ;
  border-radius: 16px;
  display: block;
  width: 100%;
`)

export const ExerciseDetailsContent = styled.div`
  display: flex;
  gap: 1.5rem;
`

export const ExerciseDetailsImageContainer = styled.div`
  border-bottom-left-radius: 16px;
  border-top-left-radius: 16px;
  overflow: hidden;
`

export const ExerciseDetailsImage = styled.img`
  width: 350px;
  height: 350px;
`

export const ExerciseDetailsTextContainer = styled.div` 
  padding: 1.5rem 1rem;
  line-height: 3.2rem;

  p strong {
    color: ${({ theme }) => theme.pallete.black.darkest};
    font-size: 1.3rem;
    line-height: 1.4rem;
  }

`

export const ExerciseDetailsName = styled.h4`
  color: ${({ theme }) => theme.pallete.primary.main};
  font-weight: bold;
`

export const ExerciseDetailsTarget = styled.p`
  font-size: 1.4rem;
  line-height: 1.6rem;
`

export const ExerciseDetailsEquipment = styled.p`
  font-size: 1.4rem;
  line-height: 1.6rem;
  color: ${({ theme }) => theme.pallete.secondary.main};

`

export const ExerciseDetailsBodyPart = styled.p`
  color: ${({ theme }) => theme.pallete.secondary.main};
  font-size: 1.4rem;
  line-height: 1.6rem;

`

export const ExerciseDetailRow = styled.span`
  display: flex;
  align-items: center;
  font-size: 1.4rem;
`

export const ExerciseDetailLoadFailed = styled.div`
  text-align: center;
  padding: 1rem 0;
`

export const ExerciseDetailAddToFavoriteContainer = styled.div`
  display: flex;
  button {
    padding: 0;
    background-color: transparent;
    :hover {
      background-color: transparent;
    }
  }
  img {
    width: 32px;
    height: 32px;
  }
`