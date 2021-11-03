import React, { useEffect } from  'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  actionCreators as postActions,
  selector as postSelector,
} from '../../Redux/features/posts'

import Card from '../../Components/Card/index';
import './home.css';
import postImg from '../../Assets/images/post-img.jpeg';
import iconperson from '../../Assets/images/icon-person.svg';


const Home = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => postSelector(state))

  useEffect(()=>{
    dispatch(postActions.allpost());
  }, [dispatch]);

    const data = posts.dataPost


    let gridCard = data.map((post,index) => {
      return (
           <>
            <Card 
              key={ index }
              data={ post }
              img={ postImg }
              photo={ iconperson  }
            />
           </>
      )
    })

    return(
      <div className="wrap--post">
      { gridCard }
      </div>
    )

}

export default Home;