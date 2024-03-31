import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import ResetButton from './ResetButton';
import UploadButton from './UploadButton';

function Uploader () {
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState();

    const fileInputRef = useRef();

    // 이미지 등록하는 함수
    const handleClick = (e) => {
        // file input 태그가 있다면 클릭하도록 함.
        console.log(e.target)
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    }

    // 이미지 파일을 업로드하는 함수
    const handleFileChange = (e) => {
        const imageValue = e.target.files[0];
        setImage(imageValue);
    }

    // 이미지 제거하는 함수
    const handleClearClick = () => {
        const inputNode = fileInputRef.current;
        if (!inputNode) return;

        inputNode.value = '';
        setImage(null)
    }

    useEffect(() => {
        if (!image) return;
        const nextPreview = URL.createObjectURL(image);
        setPreview(nextPreview);

        return () => {
            setPreview();
            URL.revokeObjectURL(nextPreview);
        }
    }, [image]);

    return (
        <StyledUploader preview={preview}>
            <Styledletter preview={preview}>
                커버 이미지 변경
                </Styledletter>
                <Buttons>
                    <UploadButton
                        onClick={handleClick}>
                    </UploadButton>
                    <input
                            type="file"
                            style={{ display: 'none'}}
                            ref={fileInputRef}
                            onChange={handleFileChange}
                        />
                    <ResetButton
                        onClick={handleClearClick}>
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
    background: ${({ preview }) => (preview ? `url(${preview})` : `#FAFAFA`)};
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-auto;
    position: relative;
`

const Styledletter = styled.span`
    display: ${({ preview }) => (preview ? 'none' : 'block' )};
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
