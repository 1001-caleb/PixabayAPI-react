import React from 'react'

const  Images = (props) =>{
    const {largeImageURL, likes, previewURL, tags, views} = props.images;

    return(
        <div className="col-12 col-sm-6 col-lg-3 mb-4">
            <div className="card border-dark mb-3">
                <img src={previewURL} alt={tags} className="card-img-top"/>
            </div>
            <div className="card-body">
                <p className='card-text'>{likes} Likes</p>
                <p className='card-text'>{views}views</p>
                <a href={largeImageURL} target="_blank" className='btn btn-primary btn-block'>Full image</a>
            </div>
        </div>
    )
}

export default  Images;