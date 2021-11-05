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
 
    useEffect(()=>{
      dispatch(usersActions.list());
    }, [dispatch]);

    const dataSource = users.dataList

    const submitValue = () => {


      let keys = Object.keys(dataSource).filter(k=>dataSource[k].id === userid);
      console.log('idData',keys);
    }

    const onChangeHandler = event => {
        setUserid(event.target.value);
    };

  const userenabled = users.idEnabled

    return(
      <div className="wrap--post">
        <input
            type="text"
            name="id"
            onChange={onChangeHandler}
            value={userid}
          />

          <button onClick={ submitValue }>Enviar</button>
      </div>
    )

}

export default Login;