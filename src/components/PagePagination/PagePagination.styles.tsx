import styled from '@emotion/styled'

export const PagePaginationContainer = styled.div`
  margin: 0 auto;
  display: inline-block;
`

export const Pagination = styled.ul`
  display: inline-flex;
  padding-left: 0;
  list-style: none;
  border-radius: 0.25rem;

  .page-link {
    position: relative;
    display: block;
    padding: 0.5rem 0.75rem;
    margin-left: -1px;
    line-height: 1.25;
    color: ${({ theme }) => theme.pallete.primary.lightest};
    border: 1px solid ${({ theme }) => theme.pallete.gray.dark};
    text-decoration: none;

    :not(.disabled) span {
      color: ${({ theme }) => theme.pallete.primary.main};
    }
  }

  .page-item:first-of-type .page-link {
    margin-left: 0;
    border-top-left-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
  }
  
  .sr-only, .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0,0,0,0);
    white-space: nowrap;
    -webkit-clip-path: inset(50%);
    clip-path: inset(50%);
    border: 0;
  }

  .page-item.active .page-link {
    z-index: 1;
    color: #fff;
    background-color: ${({ theme }) => theme.pallete.primary.main};
    border-color: ${({ theme }) => theme.pallete.primary.main};
  }

  .page-item.disabled .page-link, .page-item .page-link.disabled {
    color: ${({ theme }) => theme.pallete.black.light};
    pointer-events: none;
    cursor: auto;
    background-color: ${({ theme }) => theme.pallete.gray.dark};
  }

  .page-link:not(:disabled):not(.disabled) {
    cursor: pointer;
  }
`