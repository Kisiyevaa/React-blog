import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function BlogCard({ id, img_url, title, description }) {
    return (
        <div className='blog-card mb-4'>
            <div className="img-wrapper">
                <img src={img_url} alt="Photo" />
            </div>
            <div className="content">
                <h1>{title}</h1>
                <p>{description}</p>
                <Link
                    to={`/blog/${id}`}
                    className='btn btn-outline-warning '
                >
                    Continue Reading
                </Link>
            </div>
        </div>
    )
}

export default BlogCard