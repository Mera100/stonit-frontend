import React from 'react'
import CloseButton from 'react-bootstrap/CloseButton'

const LocationInfoBox = ({info, onCloseClick}) => {
    return (
        <div className="location-info">
            <CloseButton onClick={onCloseClick} variant="white"/>
            <h2><strong>{info.title}</strong></h2>
            <p>{info.content}</p>
        </div>
    )
}

export default LocationInfoBox