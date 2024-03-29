import styled from '@emotion/styled';

const HeaderContainer = styled.div<{ $isScrolled: boolean }>`
transition-duration: 150ms;

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
padding: 10px;

`

const Logo = styled.a`

`

export {HeaderContainer , Logo}