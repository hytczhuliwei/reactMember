/**
 * Created by liwei.zhu on 16/12/27.
 */
import 'whatwg-fetch';
import * as types from '../constants/ActionTypes'

// POST请求方法
const _post = ({ params }) => {
  // 接口地址
  // let _url = '../action/api.php'
  let _url = 'http://192.168.40.190/webportal/action/api.php'
  return fetch(_url, {
      method: 'POST',
      headers: {},
      body: params}
    ).then((response) => {
      if (response.ok) {
         return response.json()
      }
    }).then((json) => {
      return json
    }).catch((error) => {
      console.error(error)
    })
}
// 获取用户等级信息
export const getUserLevelAction = () => {
  // post请求参数
  let params = new FormData()
  params.append('action', 'getUserLevel')
  return (dispatch) =>{
    _post({ params })
      .then((json) => {
        if(json.code === '1'){
          // 成功获取到数据，更新store
          dispatch({type:types.SET_USER_LEVEL_INFO_ISLOAD, userLevelInfoIsLoad:true})
          return dispatch({type:types.FETCH_LEVELINFO, userLevelInfo:json.data})
        }
      })
    }
}
// 获取用户的泰豆
export const getUserTibeanAction = (type,page) => {
  // post请求参数
  let params = new FormData()
  params.append('action', 'getUserTibean')
  params.append('type', type)
  params.append('page', page)
  return (dispatch) =>{
    _post({ params })
      .then((json) => {
        if(json.code === '1' && json.data){
          // 成功获取数据
          return dispatch({type:types.SET_TIBEAN_DATA, tibeanData:json.data})
        }
        // 没有数据
        dispatch({type:types.SET_TIBEAN_NULL_FLAG, tibeanNullFlag:true})
        return dispatch({type:types.SET_TIBEAN_DATA, tibeanData:[]})
      })
    }
}
// 获取用户经验值
export const getUserExperienceAction = (page) => {
  // POST数据
  let params = new FormData()
  params.append('action', 'getUserExperience')
  params.append('page', page)
  return (dispatch) =>{
    _post({ params })
      .then((json) => {
        if(json.code === '1' && json.data){
          // 成功获取到数据
          return dispatch({type:types.SET_EXPERIENCE_DATA, experienceData:json.data})
        }
        // 没有数据
        return dispatch({type:types.SET_EXPERIENCE_DATA, experienceData:[]})
      })
    }
}
// 获取等级规则
export const getUserLevelRuleAction = () => {
  // POST数据
  let params = new FormData()
  params.append('action', 'getUserLevelRule')
  return (dispatch) =>{
    _post({ params })
      .then((json) => {
        if(json.code === '1' && json.data){
          // 成功获取到数据
          return dispatch({type:types.SET_LEVEL_RULE, levelRule:json.data.level})
        }
      })
    }
}
// 获取消费返泰豆规则
export const getUserAmountRuleAction = () => {
  // POST参数
  let params = new FormData()
  params.append('action', 'getUserAmountRule')
  return (dispatch) =>{
    _post({ params })
      .then((json) => {
        if(json.code === '1' && json.data){
          // 成功获取到数据
          return dispatch({type:types.SET_AMOUNT_RULE, amountRule:json.data.rule})
        }
      })
    }
}
