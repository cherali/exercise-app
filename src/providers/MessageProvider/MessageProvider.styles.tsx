import styled from '@emotion/styled'

export const MessageProviderContainer = styled.div`
  .toast-container {
    border-radius: 4px;
    position: relative;
    display: flex;
    margin-bottom: 0.5rem;
    padding: 0.5rem;
    justify-content: space-between;
    overflow: hidden;
    cursor: pointer;

    &[class*='-theme--dark']{
      * {
        color: ${({ theme }) => theme.pallete.black.main};
      }
    }

   
    &.message-default {
      background-color: ${({ theme }) => theme.pallete.white.main};
      color: ${({ theme }) => theme.pallete.black.main};
    }

    button {
      align-self: center;
      margin-top: -4px;
      color: ${({ theme }) => theme.pallete.gray.dark};
    }
  }
`
