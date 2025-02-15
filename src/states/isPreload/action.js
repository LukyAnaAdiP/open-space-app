/**
 * @TODO: Define all the actions (creator) for the isPreLoad state
 */
import api from '../../utils/api';
import { setAuthUserActionCreator } from '../authUser/action';

const ActionType = {
  SET_IS_PRELOAD: 'SET_IS_PRELOAD',
};

function setIsPreloadActionCreator(isPreload) {
  console.log('type dari preload', typeof(isPreload));
  return {
    type: ActionType.SET_IS_PRELOAD,
    payload: {
      isPreload,
    }
  };
}

function asyncPreloadProcess(){
  return async (dispatch) => {
    console.log('Preload process dimulai...');
    try {
      const authUser = await api.getOwnProfile();
      console.log('User berhasil dimuat:', authUser);
      dispatch(setAuthUserActionCreator(authUser));
    } catch (error){
      console.error('Terjadi kesalahan saat memuat user:', error);
      console.error(error);
      dispatch(setAuthUserActionCreator(null));
    } finally {
      console.log('Mengubah isPreload menjadi false');
      dispatch(setIsPreloadActionCreator(false));
    }
  };
}

export {
  ActionType,
  setIsPreloadActionCreator,
  asyncPreloadProcess
};
