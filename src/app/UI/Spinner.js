import React from "react";
import styled from "styled-components";

import CircularProgress from "@material-ui/core/CircularProgress";

const spinner = props => (
  <StyledSpinner large={props.large}>
    <CircularProgress />
  </StyledSpinner>
);

const StyledSpinner = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${props => props.large ? 'center' : 'initial'};

  > div {
    height: ${props => props.large ? '100px !important' : '20px !important' };  
    width: ${props => props.large ? '100px !important' : '20px !important' };  
    margin: "theme.spacing.unit * 2";
  }
`;

export default spinner;
