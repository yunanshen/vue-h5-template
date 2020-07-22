import Http from '@/utils/http'
const publicUrl = './menhu'



/**
 *获取新闻列表
 *@param {params}
 */

export const getNewsList = params => Http.get(`${publicUrl}/rest/category`, { params })

/**
 * 获取新闻详情
 * @param {params}
 */

export const getNewsDetails = params => Http.get(`${publicUrl}/rest/content`, { params })

/**
 *搜索 
 *@param {params}
 */

export const getSearchList = params => Http.post(`${publicUrl}/rest/content/search`, params, {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
})

/**
 *首页轮播 
 *@param {sys=350000}
 */

export const getSwriptList = params => Http.get(`${publicUrl}/rest`, { params })

/**
 * 获取投稿量
 * @param {}
 */

export const getContributionNum = () => Http.get(`${publicUrl}/rest/kp_tg`)

/**
 * 获取友情链接
 * @param {}
 */

export const getFriendShipLinkList = () => Http.get(`${publicUrl}/rest/link`)

/**
 *更新点击数量 
 * @param {id}
 */
export const upDateClickNum = params => Http.get(`${publicUrl}/rest/content/hits`, { params })