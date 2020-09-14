import { environment } from './../../environments/environment';

export const baseUrl=environment.production?'http://':'http://localhost:3000'
export const productUrl=baseUrl+'/product'
export const cartUrl=baseUrl+'/cart'