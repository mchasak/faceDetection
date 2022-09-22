import React from 'react';
import '../styles/ImageLinkForm.scss';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div className='imageLinkForm'>
           <p className="ImageLinkForm">
                {'This Magic Brain will detect faces in your picture. Give it a try.'}
           </p>
           <div className='imageLinkForm__form'>
                <input type="text" className="imageLinkForm__input" onChange={onInputChange}/>
                <button className="imageLinkForm__btn" onClick={onButtonSubmit}>Detect</button>
           </div>
        </div>
    )
}

export default ImageLinkForm; 