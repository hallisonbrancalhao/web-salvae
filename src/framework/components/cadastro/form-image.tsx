import React, { useState, useRef } from 'react';
import Image from 'next/image';
import './styles.scss'

const InputFieldImage = ({ onImageUpload, label }) => {
    const [uploadedImage, setUploadedImage] = useState(null);
    const fileInputRef = useRef(null);

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    const handleImageChange = (e) => {
        const imageFile = e.target.files[0];
        setUploadedImage(imageFile);
        onImageUpload(imageFile);
    };

    return (
        <div className="container">
            <label htmlFor="image">
                {label}:
            </label>
            <div className="container-imagem">
                <input
                    type="file"
                    accept="image/*"
                    name="image"
                    id="image"
                    onChange={handleImageChange}
                    className="imagem"
                    ref={fileInputRef}
                />
                <button
                    type="button"
                    className="imagem-botao"
                    onClick={handleButtonClick}
                >
                    Escolher Arquivo
                </button>
            </div>
            {uploadedImage && (
                <div className="upload">
                    <Image
                        src={URL.createObjectURL(uploadedImage)}
                        alt="Selected"
                        className="upload-imagem"
                    />
                </div>
            )}
        </div>
    );
};

export default InputFieldImage;
