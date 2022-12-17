import React from 'react'
import { useState } from "react";
import ImageUploading from "react-images-uploading";
import { Alert, Button, ButtonGroup } from "@mui/material";

function MultipleImgUpload(props) {
   
        const {
          maxNumber = 5,
          acceptType = ["jpeg", "jpg", "png"],
          maxFileSize = 5000000
        } = props;
        const [images, setImages] = useState([]);
      
        const onChange = (imageList, addUpdateIndex) => {
          setImages(imageList);
        };
        const onError = () => {
          setImages([]);
        };
        const printjson = () => {
          document.getElementById("jsonprint").innerHTML = JSON.stringify(
            images,
            null,
            6
          ).replace(/\n( *)/g, function (match, p1) {
            return "<br>" + "&nbsp;".repeat(p1.length);
          });
          console.log(images);
        };
        
    return (
        <div>
        <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        onError={onError}
        maxNumber={maxNumber}
        acceptType={acceptType}
        maxFileSize={maxFileSize}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
          errors
        }) => (
          <>
            {errors && (
              <Alert color="danger text-start">
                <ul>
                  {errors.maxNumber && (
                    <li>Number of selected images exceed maxNumber</li>
                  )}
                  {errors.acceptType && (
                    <li>Your selected file type is not allow</li>
                  )}
                  {errors.maxFileSize && (
                    <li>Selected file size exceed maxFileSize</li>
                  )}
                </ul>
              </Alert>
            )}

            <div className="upload__image-wrapper">
              <div
                className="upload-container"
                {...dragProps}
                onClick={onImageUpload}
                style={
                  isDragging
                    ? { backgroundColor: "#afafaf", color: "white" }
                    : undefined
                }
              >
              Drop files here or &nbsp; <span className='custm-green'> browse</span>
              </div>

              <div className="p-2 d-flex m-2" >
              {imageList.map((image, index) => (
                <div key={index} className="image-item">
                  <img src={image['data_url']} alt="" width="100" />
                  {
                //     <div className="image-item__btn-wrapper">
                //     <Button onClick={() => onImageUpdate(index)}>Update</Button>
                //     <Button onClick={() => onImageRemove(index)}>Remove</Button>
                //   </div>
                  }
                  
                </div>
              ))}
            </div>
            </div>
          </>
        )}
      </ImageUploading>
        </div>
    )
}

export default MultipleImgUpload