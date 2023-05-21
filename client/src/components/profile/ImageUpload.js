import React from "react";
import { useState } from 'react';

function ImageUpload() {
    const [file, setFile] = useState()

    function getFile(e) {
        setFile(URL.createObjectURL(e.target.files[0]))
    }

    return (
        <div
            style={{
                position: "relative",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "180px",
                width: "180px",
            }}
        >
            <input
                type="file"
                onChange={getFile}
                accept="image/*"
                style={{
                    opacity: 0,
                    height: "180px",
                    width: "180px",
                    position: "absolute",
                    zIndex: 1,
                }}
            />
            <div
                style={{
                    height: "180px",
                    width: "180px",
                    border: "1px solid black",
                    position: "relative",
                    zIndex: 0,
                }}
            >
                {file && <img
                    src={file}
                    style={{
                        width: "100%",
                        height: "100%",
                    }}
                    alt="upload-img"
                />}
            </div>
        </div>
    )
}

export default ImageUpload