import buildPath from "services/buildPath.js";
import Vue from "vue";
import {setToken} from "services/token";
import {store} from "store";
import config from "services/config"

export function makeLogin (state,data) {
  state.token = data.token;

  if(state.user==null)
    state.user = data.user;
  else
    Object.assign(state.user,data.user);

  if(data.permanent) {
    setToken(data.token);
  }

}

export function makeLogout (state) {
  state.token = null;
  state.user = null;
  store.state.categories.root = null;
  store.state.categories.all = null;
}

export function setUserInfo (state,data) {
  Vue.set(state.user,'photo',buildPath(config.UploadedImages,data.photo));
  Vue.set(state.user,'avatar',buildPath(config.UploadedImages,data.avatar));
  Vue.set(state.user,'link',data.link);
}
