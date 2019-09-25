import {postsComponent} from 'sun'
import {activitiesComponent} from 'sun'
import {registerComponentsSite} from 'sun'
import {consoleInit} from 'sun'


export default function (context) {

  context.commit('registerComponentType', postsComponent);
  context.commit('registerComponentType', activitiesComponent);

   registerComponentsSite(context);

  console.info('%cComponents registered', consoleInit, config.Log.InitExtended ? context.state.allComponents : '');
}
