import {post} from '@/utils/request'
import api from '../services/api'
export function loginAction(option){
  return {
    type:'LOGIN',
    payload:post(api.login,option)
  }
}