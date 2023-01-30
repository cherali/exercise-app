import styled from '@emotion/styled'

export const StyledSelect = styled.div`
  width: 100%;
  
  div[aria-hidden='true'] svg {
    path {
      color: ${({ theme }) => theme.pallete.primary.main};
    }
  }
`
