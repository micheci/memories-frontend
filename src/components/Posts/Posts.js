import React from 'react'
import Post from "./Post/Post"

import useStyles from './styles';


const Posts=()=>{
    const classes=useStyles();
    return(
        <>
            <h1 className={classes.mainContainer} >Posts</h1>
            <Post className={classes.actionDiv}/>
            <Post/>
        </>
    )
}
export default Posts;