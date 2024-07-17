import React from 'react'
import { useNavigate } from 'react-router-dom'


const SingleAssetPage = () => {
    const navigate = useNavigate()
    return (
        <div>
            <h2 onClick={() => navigate(-1)}>GO BACK</h2>
        </div>
    )
}

export default SingleAssetPage
