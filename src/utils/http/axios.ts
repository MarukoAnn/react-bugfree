import axios, {
  AxiosError,
  AxiosInstance,
  AxiosPromise,
  AxiosResponse,
  AxiosRequestConfig,
} from 'axios'
import axiosRetry from 'axios-retry'
import store from '@/store'
const { useMobxLoginStore } = store
// import history from '@/router/history';
import { customHistory } from '@/router/history'
// import useUitlsHook from '@/hooks/useUitlsHook'
// const { navigation } = useUitlsHook();
// const { navigation } = useUitlsHook();
// import authUtils from '@/utils/auth'
// import { useUserStore } from '@/store/module/user'
// import { setToken, getToken } from '@/utils/tokenKey'

// const userStore = useUserStore()
// // 环境的切换
// axios.defaults.baseURL = import.meta.env.VITE_BASE_API
export interface IDataWithError<T> {
  data: T
  code: number
  msg: string
}

class HttpService {
  private http!: AxiosInstance

  constructor() {
    this.http = axios.create({
      // baseURL: authUtils.getBaseUrl(),
      timeout: 600000,
    })
    // setToken(userStore.token) // 设置cookie
    // useMobxLoginStore.setToken(useMobxLoginStore.token) // 设置cookie
    axiosRetry(this.http, {
      retries: 3, // 失败重试的次数
      shouldResetTimeout: true, // 定义是否在重试之间重置超时
      // 重复请求延时
      retryDelay: (retryCount: number) => {
        return retryCount * 1000
      },
      retryCondition: (error: AxiosError) => {
        if (error.message.includes('Timeout')) {
          return true
        }
        return !error.response || error.response.status !== 401
      },
    })
    this.addInterceptors()
  }

  private addInterceptors() {
    //  1、拦截请求
    this.http.interceptors.request.use((config: any) => {
      // 1、添加token
      // console.log(userStore.token)
      const { token } = useMobxLoginStore
      //  获取token后做啥
      // if (token) {

      // }
      config.headers = {
        'Content-Type': 'application/json;charset=UTF-8', // 传参方式json
        // CookieJson: token || '', // 这里自定义配置，这里传的是token
        Authorization: `Bearer ${token}`,
      }
      console.log('getToken:', token)
      // 2、验证请求状态码
      config.validateStatus = (status: number) => {
        switch (status) {
          case 401:
            // const instance = alert('用户信息过期, 请重新登陆')
            setTimeout(() => {
              customHistory.push('/login')
            }, 1000)
            break
          default:
            console.warn('Invalid status')
            break
        }
        return status >= 200 && status < 400
      }
      return config
    })
    // 2、相应拦截
    this.http.interceptors.response.use(
      (response: AxiosResponse) => {
        return response
      },
      (error: AxiosError) => {
        return Promise.reject(error)
      }
    )
  }

  private async handleErrorWrapper<T>(
    p: AxiosPromise
  ): Promise<IDataWithError<T>> {
    return p
      .then((response) => {
        return response.data
      })
      .catch((error: AxiosError) => {
        return { ...error.request?.data }
      })
  }

  get<T>(url: string, config?: AxiosRequestConfig) {
    return this.handleErrorWrapper<T>(this.http.get(url, config))
  }

  post<T>(url: string, param: unknown, config?: AxiosRequestConfig) {
    return this.handleErrorWrapper<T>(this.http.post(url, param, config))
  }

  postDownload<T>(url: string, param: unknown) {
    return this.handleErrorWrapper<T>(
      this.http.post(url, param, { responseType: 'arraybuffer' })
    )
  }

  put<T>(url: string, param: unknown, config?: AxiosRequestConfig) {
    return this.handleErrorWrapper<T>(this.http.put(url, param, config))
  }

  delete<T>(url: string, param: unknown, config?: AxiosRequestConfig) {
    return this.handleErrorWrapper<T>(
      this.http.delete(url, { data: param, ...config })
    )
  }
}

const httpService = new HttpService()

export default httpService
