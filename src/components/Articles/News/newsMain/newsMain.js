import React from 'react';
import NewsSlider from '../../../widgets/NewsSlider/slider'
import NewsList from '../../../widgets/NewsList/NewsList'

const NewsMain =()=> (

            <div>
                <NewsSlider
                    type="featured"
                    start = {0}
                    amount ={5}
                    settings ={{
                        dots:false
                    }}
                />
                <NewsList
                    type = "cardMain"
                    loadmore = {true}
                    start = {0}
                    amount ={3}
                />
            </div>
        
    
    )

export default NewsMain;