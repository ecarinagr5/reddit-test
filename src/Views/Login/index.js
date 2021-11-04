import React, { useEffect,useState } from  'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  actionCreators as postActions,
  selector as postSelector,
} from '../../Redux/features/posts'

import Card from '../../Components/Card/index';
import './login.css';
import { Button } from 'antd';



const Login = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => postSelector(state))

  useEffect(()=>{
    dispatch(postActions.allpost());
  }, [dispatch]);


    return(
      <div className="wrap--post">
          <input type="text" placeholder="id" />
          <input
            type="button"
            value="Enviar"
          />
      </div>
    )

}

export default Login;