import state from 'store/components/state'
import loadAllComponents from 'store/components/actions/loadAllComponents'
import makeRoutesFromComponents from 'store/components/actions/makeRoutesFromComponents'
import registerAllComponentsTypes from 'store/components/actions/registerAllComponentsTypes'
import getComponent from 'store/components/getters/getComponent'
import getComponentType from 'store/components/getters/getComponentType'
import registerComponentType from 'store/components/mutations/registerComponentType'


export default {
  state,
  actions: {
    loadAllComponents,
    makeRoutesFromComponents,
    registerAllComponentsTypes
  },
  getters: {
    getComponent,
    getComponentType
  },
  mutations: {
    registerComponentType,
  }
}
