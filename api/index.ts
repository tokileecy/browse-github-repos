import axios, { AxiosInstance } from 'axios'
import qs from 'qs'
import type { ListReposOptions } from './types'

const GITHUB_URL = 'https://api.github.com'

export class Api {
  jwt: string
  apiInstance: AxiosInstance

  constructor() {
    this.jwt = ''

    this.apiInstance = axios.create({
      baseURL: GITHUB_URL,
      timeout: 10000,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      paramsSerializer: function (params) {
        return qs.stringify(params)
      },
    })
  }

  listRepos = (params: ListReposOptions) => {
    return this.apiInstance.get('/search/repositories', {
      headers: {
        'Content-Type': 'application/vnd.github+json',
      },
      params,
    })
  }
}

export * from './types'

export default new Api()
