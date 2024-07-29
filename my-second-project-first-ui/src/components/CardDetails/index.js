import React from "react";
import styled from "styled-components";
import { truncateWithEllipsis } from "../../utils";

const StyledCardDetailsWrapper = styled.div`
  /* background-color: lightgreen; */

  h4 {
    margin: 16px 0px 0px 0px;
    font-size: 14px;
    font-weight: 500;
  }

  p {
    margin: 4px 0px 2px 0px;
    font-size: 14px;
    color: gray;
    font-weight: 300;
    /* text-overflow: ellipsis; */
    /* white-space: nowrap; */
    /* overflow: hidden; */
  }

  span {
    font-size: 14px;
    font-weight: 500;
  }
`;

const CardDetails = ({ propertyName, hostedBy, price }) => {
  // console.log(propertyName, hostedBy, price)

  return (
    <StyledCardDetailsWrapper>
      <h4>{truncateWithEllipsis(propertyName, 34)}</h4>
      <p>{hostedBy}</p>
      <span>{price}</span>
    </StyledCardDetailsWrapper>
  );
};

export default CardDetails;
