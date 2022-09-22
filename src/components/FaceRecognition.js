import React from 'react';
import '../styles/Image.scss';

const FaceRecognition = ({ imageUrl, box }) => {
    return (
        <div className='faceRecognition'>
            <div className='faceRecognition__wrapper'>
                <img id='inputImage' src={imageUrl} alt="" className="faceRecognition__img" />
                <div className="bounding-box" style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
            </div>
        </div>
    )
}

export default FaceRecognition