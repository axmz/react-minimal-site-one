import React from 'react'
import './styles.scss'
import PostOne from '../../components/postone/postone'
import PostTwo from '../../components/posttwo/posttwo'
import PostThree from '../../components/postthree/postthree'

const Home = () => {

    return (
        <div className="pagehome">
            <PostOne/>
            <PostTwo/>
            <PostThree/>
        </div>
    )
}

export default Home