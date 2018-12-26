import axios from 'axios';
import qs from 'qs';
import Vue from 'vue';
import { getCookie, setCookie } from './utils';
axios.defaults.timeout = 20000; //响应时间
axios.defaults.headers.post['Content-Type'] = 'application/json'; //通信格式
axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 返回 401 清除token信息并跳转到登录页面
          common.unLogin();
          return;
      }
    }
    return Promise.reject(error); // 返回接口返回的错误信息
  }
);

const common = {
  //POST请求
  ajax(obj) {
    return new Promise((resolve, reject) => {
      // console.log('ajax obj == ', obj);
      obj.method = obj.method || 'POST';
      axios({
        method: obj.method,
        url: obj.method === 'GET' ? obj.url + '?' + qs.stringify(obj.data) : obj.url,
        data: obj.data,
        transformRequest: [
          function(data) {
            // Do whatever you want to transform the data
            let qsData = qs.stringify(data);
            // console.log("ajax qsData == ", qsData);
            return qsData;
            // return data
          },
        ],
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          platformCode: 'LiQun', // 集团
          // liqunToken: getCookie('liqunToken'),
          storeCode: '8m', //门店
          storeName: '%E9%87%91%E9%BC%8E%E5%B9%BF%E5%9C%BA', //门店
          // merchantCode: getCookie('merchantCode') || '', //商户
        },
      }).then(
        res => {
          if (res.data.code === 1000) {
            resolve(res.data);
          }
        },
        err => {
          Vue.$vux.toast.show({
            text: '网络异常',
            type: 'text',
          });
          resolve('');
        }
      );
    });
  },
  /**
   * param 将要转为URL参数字符串的对象
   * key URL参数字符串的前缀
   * encode true/false 是否进行URL编码,默认为true
   *
   * return URL参数字符串
   */
  urlEncode(param, key, encode) {
    if (param == null) return '';
    var paramStr = '';
    var t = typeof param;
    if (t == 'string' || t == 'number' || t == 'boolean') {
      paramStr += '&' + key + '=' + (encode == null || encode ? encodeURIComponent(param) : param);
    } else {
      for (var i in param) {
        var k = key == null ? i : key + (param instanceof Array ? '[' + i + ']' : '.' + i);
        paramStr += common.urlEncode(param[i], k, encode);
      }
    }
    return paramStr;
  },
};

export default common;
