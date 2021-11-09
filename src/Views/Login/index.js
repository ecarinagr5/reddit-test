import React, { useEffect,useState } from  'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  actionCreators as usersActions,
  selector as usersSelector,
} from '../../Redux/features/users'
import './login.css';


const Login = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => usersSelector(state))
  const [ userid, setUserid ] = useState('');
  const [ msgError, setmsgError] = useState(0);

    useEffect(()=>{
      dispatch(usersActions.list());
    }, [dispatch]);

    const dataSource = users.dataList

    const submitValue = () => {
      let currentId =  parseInt(userid)
      let user = dataSource.find(item => item.id === currentId );
      if( user ) {
        dispatch(usersActions.save(user));
      }
      else {
        setmsgError(1)
      }
    }

    const onChangeHandler = event => {
        setUserid(event.target.value);
    };

    console.log('u',users)
    return(
      <div className="wrap--post">
        <input
            type="text"
            name="id"
            onChange={onChangeHandler}
            value={userid}
          />

          <button onClick={ submitValue }>Enviar</button>
          { msgError ? <p> El usuario no existe</p>  : ''}
      </div>
    )

}

export default Login;