import React, { useReduser} from 'react';
import { TodoContext } from './TodoContext';

export const TodoState = ( { children } ) =>
{ 
  const [state,dispath]=useReduser(useReducer)
  return <TodoContext.Provider value {{ } }> { children } </TodoContext.Provider>; 
};