/* eslint-disable react/prop-types */
import React from 'react';

const NewsItem = (props) => {


    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
        <div className='my-3'>
            <div className="card">
                <div style={{
                    display: 'flex', justifyContent: 'flex-end', position: 'absolute ', right: '0'
                }} >

                    <span className=' badge rounded-pill bg-danger'>{source}</span>
                </div>
                <img src={imageUrl ? imageUrl : "https://cdn.vox-cdn.com/thumbor/wstfsrofvl63X0j3i47OjHD6ivc=/0x0:2700x1800/1200x628/filters:focal(1372x1006:1373x1007)/cdn.vox-cdn.com/uploads/chorus_asset/file/25623065/247270_Apple_watch_series_10_AKrales_0370.jpg"} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}  </h5>
                    <p className="card-text">{description}...</p>
                    <p className='card-text'><small className='text-muted'>By {!author ? "unknown" : author} on {new Date(date).toGMTString()} </small></p>
                    <a rel='noreferer' href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        </div >
    );
}


export default NewsItem;
