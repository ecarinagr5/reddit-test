import React, { useEffect } from  'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  actionCreators as postActions,
  selector as postSelector,
} from '../../Redux/features/posts'

import './post.css';


const Post = () => {
    const dispatch = useDispatch();
    const { posts } = useSelector((state) => postSelector(state))
  

  useEffect(()=>{
    dispatch(postActions.allpost());
  }, [dispatch]);

    const data = posts.dataPost

    let idpost = window.location.pathname;
    idpost = idpost ? idpost.split('/'):null;
    idpost = idpost ? parseInt(idpost[2]):null;

    const result = data.find( ( val ) => val.id === idpost );

    return(
      <div className="container--post">
          <div>
            <h2>{ result.title }</h2>
            <p>{ result.body }</p>
            <p>{ result.userId }</p>
          </div>
          <div className="wrap-comments">
            <textarea id={ result.id } name={result.id } rows="4" cols="50" />
            <p className="btn-submit">enviar</p>
          </div>
      </div>
    )

}

export default Post;