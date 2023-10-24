import React, { useState, useRef } from 'react';
import './styles.scss';

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

    const convertImageToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(file);
        });
    };

    if (uploadedImage) {
        convertImageToBase64(uploadedImage)
            .then((base64Image) => {
                onImageUpload(base64Image); // Envie a imagem base64 para o componente pai
            })
            .catch((error) => {
                console.error('Erro ao converter imagem em base64:', error);
            });
    }

    return (
        <div className="container">
            <label htmlFor="image">{label}:</label>
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
                    <img
                        src={URL.createObjectURL(uploadedImage)}
                        alt="Selected"
                        className="botao-imagem"
                    />
                </div>
            )}
        </div>
    );
};

export default InputFieldImage;
