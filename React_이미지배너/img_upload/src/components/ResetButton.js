import React from 'react';
import styled from 'styled-components';

function ResetButton() {

    return (
        <StyledResetButton></StyledResetButton>
    )
}

const StyledResetButton = styled.button`
    background: url('/images/free-icon-redo-arrow-symbol-44650.png') no-repeat center center;
    background-size: cover;
    border: none;
    padding: 0;
    width: 50px;
    height: 50px;
    cursor: pointer;

    opacity: 0;
    transition: opacity 0.1s ease;

    &:hover {
        opacity: 1;
    }
`;

export default ResetButton;