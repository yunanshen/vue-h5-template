import axios from 'axios'


// create an axios instance
const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
    withCredentials: false, // send cookies when cross-domain requests
    timeout: 30000 // request timeout
  })

  
// request interceptor
service.interceptors.request.use(
    config => {
      // do something before request is sent
  
     // if (store.getters.token) {
        // let each request carry token
        // ['X-Token'] is a custom headers key
        // please modify it according to the actual situation
      //  config.headers['X-Token'] = getToken('JWT')
      //}
    //   config.headers['X-Token'] = getToken('JWT')
      return config
    },
    error => {
      // do something with request error
      // for debug
      return Promise.reject(error)
    }
  )
  // response interceptor
  service.interceptors.response.use(
    /**
     * If you want to get http information such as headers or status
     * Please return  response => response
    */
  
    /**
     * Determine the request status by custom code
     * Here is just an example
     * You can also judge the status by HTTP Status Code
     */
    response => {
      const res = response.data
      if(res.code==0)
      {
        //cas not login
        window.location.href=res.data;
        return ;
      }
      // if the custom code is not 1, it is judged as an error.
      if (res.code !== 1) {
        console.log('es' + res.message)
  
        // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
        if (res.code === 4) {
          // to re-login
        }
        return Promise.reject(res.message || 'error')
      } else {
        return res
      }
    },
    error => {
      console.log('err' + error) // for debug
      if(error.response.data) {
        const res = error.response.data
        if (res.code === 4) {
          // to re-login
        }else{
         
        }
      }else{
        
      }
  
      return Promise.reject(error)
    }
  )
  
  export default service