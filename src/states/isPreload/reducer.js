/**
 * @TODO: Define reducer for the isPreLoad state
 */
import { ActionType } from './action';

function isPreloadReducer(isPreLoad = true, action = {}){
  switch (action.type){
  case ActionType.SET_IS_PRELOAD:
    console.log('nilai actionpayload', action.payload.isPreload);
    return action.payload.isPreload ;
  default:
    return isPreLoad;
  }
}

export default isPreloadReducer;