import styled from 'styled-components/macro';

// ---------------  Image Upload  ---------------

export const FormItem = styled.div`
  margin-bottom: 1.75rem;
`;
export const ImageContainerMain = styled.div`
  display: flex;
  margin-top: 1rem;
  margin-bottom: -1.5rem;
`;

export const ImageUploadContainer = styled.div`
  width: 112px;
  height: 112px;
  margin-right: 1.5rem;

  background-color: #f5f7fa;
  border: 1px dashed #dadce1;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.25s ease;
  position: relative;
  &:hover {
    background: #eef2f7;
  }
`;

export const ImageUploadHidden = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;
  opacity: 0;
  padding: 0;
  width: 100%;
  z-index: 10;
  cursor: pointer;
  &::file-selector-button {
    cursor: pointer;
  }
`;
export const ImageIconContainer = styled.div`
  text-align: center;
  cursor: pointer;
`;
export const ImageIconSecondary = styled.div`
  font-size: 1.2rem;
  color: #949bac;
  cursor: pointer;
`;
export const ImageIcon = styled.img`
  display: inline-block;
  width: 1em;
  height: 1em;
  stroke-width: 0;
  stroke: currentColor;
  fill: currentColor;
  font-size: 1.2rem;
  color: #949bac;
  cursor: pointer;
  filter: invert(64%) sepia(25%) saturate(183%) hue-rotate(184deg)
    brightness(94%) contrast(84%);
`;

export const ImageControlsContainer = styled.div`
/* display: -webkit-box; */
/* display: -webkit-flex; */
display: -ms-flexbox;
display: flex;
/* -webkit-flex-direction: column; */
-ms-flex-direction: column;
/* flex-direction: column; */
/* -webkit-box-pack: justify; */
/* -webkit-justify-content: space-between; */
-ms-flex-pack: justify;
justify-content: space-between;
/* -webkit-align-items: flex-end; */
-webkit-box-align: flex-end;
-ms-flex-align: flex-end;
align-items: flex-end;
`;
export const ImageControlDetailsContainer = styled.div``;
export const ImageControlTitle = styled.div``;
export const ImageControlDescription = styled.p`
  padding-top: 4px;
  font-size: 0.875rem;
  color: #51596c;
  max-width: 320px;
  margin: 0;
`;

export const ImageControlButtonsContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ImageControlButtonText = styled.span``;

export const ImageControlButton = styled.label`
  height: 2.2rem;
  font-size: 0.875rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  font-weight: 500;
  background-color: rgba(79, 70, 229, var(--tw-bg-opacity));
  border: 1px solid #ced0d5;
  border-width: 1px;
  border-radius: 0.375rem;
  color: #1f2430;
  cursor: pointer;
  margin: 0 1rem 0 0;
  display: inline-flex !important;
  align-items: center !important;
  justify-content: space-between !important;
  background-color: ${(props) =>
    props.button === 'next' ? '#4440db' : 'white'};
  text-align: center;
  vertical-align: middle;
  display: flex;

  &:hover {
    border: 1px solid #b8bbc2;
    background-color: ${(props) =>
      props.button === 'next' ? '#4440db' : 'white'};
    color: ${(props) => (props.button === 'next' ? 'white' : '#4440db')};
  }
`;

export const ImageControlButtonIcon = styled.img`
  display: inline-block;
  width: 1.9rem;
  height: 1.9rem;
  stroke-width: 0;
  padding-right: 0.625rem !important;
  stroke: currentColor;
  fill: currentColor;
  font-size: 1.2rem;
  cursor: pointer;
  filter: invert(25%) sepia(83%) saturate(5900%) hue-rotate(242deg)
    brightness(91%) contrast(91%);
`;