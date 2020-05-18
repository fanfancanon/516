import {get} from '@/utils/request'
import api from '../services/api'
import { fileToObject } from 'antd/lib/upload/utils'
export function tableAction(option){
  return {
    type:'TABLE',
    payload:get(api.tabdata)
  }
}
export function tianjia(option){
  return {
    type:'TJ',
    payload:option
  }
}