import React from 'react';
import {Switch} from 'react-router-dom';

import Home from './components/Home/home';
import Layout from './hoc/Layout/layout';

import NewsArticle from './components/Articles/News/Post/index';
import VideoArticle from './components/Articles/Videos/Video/index';
import NewsMain from './components/Articles/News/newsMain/newsMain';
import VideoMain from './components/Articles/Videos/videoMain/videoMain'
import Signin from './components/singin/signin'
import Dashboard from './components/Dashboard/dashboard';

import PrivateRoutes from './components/AuthRoutes/privateRoutes';
import PublicRoutes from './components/AuthRoutes/publicRoutes';

const Routes =(props)=>{

    
        
        return (

            <Layout user={props.user}>
                <Switch>
                    <PublicRoutes {...props} restricted={false} path="/" exact component={Home}/>  
                     <PublicRoutes {...props} restricted={false} path ="/news" exact component={NewsMain}/>
                    <PublicRoutes {...props} restricted={false} path ="/articles/:id" exact component={NewsArticle}/>
                    <PublicRoutes {...props} restricted={false} path ="/videos/:id" exact component={VideoArticle}/>
                     <PublicRoutes {...props} restricted={false} path ="/videos" exact component={VideoMain}/>  
                     <PublicRoutes {...props} restricted={true} path ="/sign-in" exact component={Signin}/>
                     <PrivateRoutes {...props} path ="/dashboard" exact component={Dashboard}/>
                </Switch>
            </Layout>
        );
    
}

export default Routes;