import React from 'react';
import styled from 'styled-components';

function UploadButton({ onClick }) {

    return (
        <StyledUploadButton onClick={onClick}>
            <input
                type="file"
                style={{ display: 'none' }}
                onChange={onClick}
            />
        </StyledUploadButton>
    )
}

const StyledUploadButton = styled.button`
    background: url('/images/free-icon-upload-big-arrow-81081.png') no-repeat center center;
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

export default UploadButton;