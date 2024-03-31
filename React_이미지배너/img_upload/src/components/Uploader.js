import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import ResetButton from './ResetButton';
import UploadButton from './UploadButton';

function Uploader () {

    return (
        <StyledUploader>
            커버 이미지 변경
                <Buttons>
                    <UploadButton>
                    </UploadButton>
                    <ResetButton>
                    </ResetButton>
                </Buttons>
        </StyledUploader>
    )
}

const StyledUploader = styled.div`
    width: 70%;
    height: 60%;
    border: grey solid thin;
    border-radius: 8px;
    background: #FAFAFA;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-auto;
    position: relative;
`

const Buttons = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    position: absolute;
    bottom: 10px;
    left: -10px;
    z-index: 1;
`

export default Uploader;
