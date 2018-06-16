import React from 'react';
import styles from './videoList.css';
import {Link} from 'react-router-dom';
import Cadinfo from '../Cardinfo/cadinfo'

const VideosListTemplate = (props) => {
    return props.data.map((item, i ) =>{
        return <div className = {styles.videoListItem_wrapper1} key={i} >
            
                    <Link to={`/videos/${item.id}`} >
                        <div className={styles.videoListItem_wrapper}>
                            <div className={styles.left}
                                style={{
                                    background:`url(/images/videos/${item.image})`
                                }}
                            >
                                <div></div>
                            </div>
                            <div className = {styles.right}>
                                <Cadinfo 
                                teams={props.teams} 
                                team ={item.team} 
                                date={item.date}/>
                                <h2>{item.title}</h2>
                    
                            </div>
                    
                        </div>
                    </Link>
                </div>
    })
};

export default VideosListTemplate;