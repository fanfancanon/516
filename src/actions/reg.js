import {post} from '@/utils/request'
import api from '../services/api'
export function regAction(option){
  return {
    type:'REG',
    payload:post(api.reg,option)
  }
}