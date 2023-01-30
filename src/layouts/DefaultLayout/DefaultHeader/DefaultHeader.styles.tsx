import styled from '@emotion/styled'
import { Button } from 'components/Button'

export const DefaultHeaderContainer = styled.nav(({ theme }) => `
  height: 48px;
  background-color: ${theme.pallete.primary.main};
  box-shadow: 1px 0px 16px 0px ${theme.pallete.primary.darkest};

  .active {
    background-color: ${theme.pallete.primary.lightest};
  }

  > div {
    height: 100%;
  }

  position: fixed;
  z-index: 3000;
  top: 0;
  width: 100%;
`)

export const DefaultHeaderUL = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  height: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
`

export const DefaultHeaderLI = styled.li(({ theme }) => `
  float: left;
  border-right:1px solid ${theme.pallete.gray.light};
  height: 100%;
  text-align: center;
  display: inline-flex;
  align-items: center;

  :last-child {
    border-right: none;
  }

  a {
    display: block;
    color: white;
    text-align: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
  
   :hover {
    text-decoration: none;

      &:not(.active) {
        background-color: ${theme.pallete.primary.darkest};
      }
    }
  }
`)

export const DefaultHeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`

export const ChangeTheme = styled(Button)`
  height: 24px;
  width: 24px;
  padding: 0;
  background-color: transparent;
  :hover {
    background-color: transparent;
  }
`