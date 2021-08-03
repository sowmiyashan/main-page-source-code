import React, { useState, useRef, useEffect, useContext } from 'react';
import {
  ImageControlsContainer,
  FormItem,
  ImageContainerMain,
  ImageUploadContainer,
  ImageUploadHidden,
  ImageIconContainer,
  ImageIconSecondary,
  ImageIcon,
  ImageControlButtonsContainer,
  ImageControlButton,
  ImageControlButtonText,
} from './center';

import plus from './plus-alt2.svg';

export default function Step2(props) {
  const [fileData, setFileData] = useState({
    file: undefined,
    state: false,
  });

  useEffect(() => {
    if(props.file!=null){
      setFileData({ state: true, file: props.file });
    }
    if (!fileData.file && fileData.state === true) {
      setFileData({ state: false, file: undefined });
    }
  }, [fileData]);
  const hiddenFileInput = useRef(null);

  const handleImageClick = (event) => {
    hiddenFileInput.current.click();
  };
  const handleImageChange = (event) => {
    setFileData({ state: true, file: event.target.files[0] });
    if(props.parentCallback != null){
      props.parentCallback({ state: true, file: event.target.files[0] })
    }
  };
  const removeImage = (event) => {
    setFileData({ state: false, file: {} });
  };

  return (
    <FormItem>
      <ImageContainerMain>
        <ImageUploadContainer style={props.page != null ? {width:'500px', height:'200px'} : {}}>
          <ImageIconContainer>
            <ImageIconSecondary>
              {fileData.state ? (
                <img
                  style={{ height: '100px', width: '100px' }}
                  src={URL.createObjectURL(fileData.file)}
                  alt='none'
                />
              ) : (
                <ImageIcon src={plus} style={{ marginTop: '0.2rem ' }} />
              )}
            </ImageIconSecondary>
          </ImageIconContainer>

          <ImageUploadHidden
            onBlur={() => {
              if (!fileData.file) {
                setFileData({ state: false, file: {} });
              }
            }}
            ref={hiddenFileInput}
            type='file'
            onChange={handleImageChange}
            accept='image/gif, image/jpeg, image/png'
            name='logo'
          />
        </ImageUploadContainer>
        <ImageControlsContainer>
          <ImageControlButtonsContainer>
            {fileData.state ? (
              <div>
                <ImageControlButton onClick={handleImageClick}>
                  <ImageControlButtonText>Change</ImageControlButtonText>
                </ImageControlButton>

                <ImageControlButton button='next' onClick={removeImage}>
                  <ImageControlButtonText>Remove</ImageControlButtonText>
                </ImageControlButton>
              </div>
            ) : null}
          </ImageControlButtonsContainer>
        </ImageControlsContainer>
      </ImageContainerMain>
    </FormItem>
  );
}