import axios from 'axios'
import { useState, useEffect } from 'react'
import { apiUrl } from '../../../Config'
import { useParams } from 'react-router-dom'
import { Container } from 'reactstrap'

import Log from '/src/assets/images/log.png'


function BlogItem() {
    const { id } = useParams()
    const [item, setItem] = useState({})
    useEffect(() => {
        axios.get(`${apiUrl}/blogs/${id}`)
            .then(res => setItem(res.data))
    }, [])
    const { img_url, title, description } = item

    return (
        <Container>
            <div className='py-3'>
                <div>
                    <img src={Log} alt="" />
                </div>
            </div>
            <div >
            <div >
                        <h1 className='text-danger fst-italic my-4 text-center'>
                            {title}
                        </h1>
                    </div>
                <div >
                <div className='text-center' >
                        <img
                            src={img_url}
                            alt="img"
                            className='rounded w-75'
                        />
                    </div>          
                    <div className='text-center ' >
                        <p className='mt-4 fs-5 fw-medium'>
                            {description}
                        </p>
                    </div>

                </div>
            </div>
        </Container>
    )

}

export default BlogItem