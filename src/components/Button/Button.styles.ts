import styled from '@emotion/styled';
import { ButtonColor, ButtonSize } from './Button'

const PADDINGSIZE: Record<ButtonSize, string> = {
  medium: '8px 16px',
}


export const StyledButton = styled.button<{ color: ButtonColor, size: ButtonSize }>(({ theme, color, size }) => `
  background-color: ${theme.pallete[color].main};
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  padding: ${PADDINGSIZE[size]};

  :hover {
    transition: background-color 300ms ease ;
    background-color: ${theme.pallete[color].light};
  }

  :disabled {
    background-color: ${theme.pallete.gray.light};
    cursor: inherit;
  }
`)
