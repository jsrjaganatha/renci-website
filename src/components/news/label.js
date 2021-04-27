import styled from 'styled-components'
import { BaseTag } from './tag'

export const Label = styled(BaseTag)(({ theme }) => `
  padding: ${ theme.spacing.small } ${ theme.spacing.small };
  border: 1px solid;
  background-color: ${ theme.color.renciBlue };
  color: ${ theme.color.white };
  line-height: ${ theme.spacing.extraSmall };
  text-transform: uppercase;
  font-size: 65%;
  font-weight: bold;
  letter-spacing: 1px;
  filter: brightness(1.0);
  cursor: default;
  &.news {
    background-color: ${ theme.color.renciBlue };
    border-color: ${ theme.color.renciBlue };
  }
  &.blog {
    background-color: ${ theme.color.extended.contessa };
    border-color: ${ theme.color.extended.contessa };
  }
  &.spotlight {
    background-color: ${ theme.color.white };
    color: ${ theme.color.renciBlue };
    border: 1px solid ${ theme.color.renciBlue };
  }
  &:hover {
    filter: brightness(1.2);
  }
`)
