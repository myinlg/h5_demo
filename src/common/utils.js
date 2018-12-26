/**
 * 解决H5下输入框被输入法遮盖的问题
 * @author Sailor 2018-09-06
 */
export const inputCompatible = new class {
  constructor() {
    this.eventFunc = function() {
      if (
        document.activeElement.tagName == 'INPUT' ||
        document.activeElement.tagName == 'TEXTAREA'
      ) {
        window.setTimeout(function() {
          console.log('inputEVENT');
          document.activeElement.scrollIntoViewIfNeeded();
        }, 0);
      }
    };
  }
  //添加事件
  addEvent() {
    window.addEventListener('resize', this.eventFunc);
  }
  //移除事件
  removeEvent() {
    window.removeEventListener('resize', this.eventFunc);
  }
}();
/**
 * 浏览器滚动条事件封装
 * @author Sailor 2018-09-06
 * @param {*} opt.el 滚动dom对象
 * @param {*} opt.distance 距离底部距离
 * @param {*} opt.callBackFunc 满足条件的回调函数
 * @param {*} opt.isToTop 用于固定按钮时使用
 */
export const ScrollObj = class ScrollObj {
  constructor(opt) {
    this.isBottom = false; //是否到底部状态
    this.scrollEle = opt.el || document; //滚动的dom对象
    this.callBackFunc = opt.callBackFunc; //回调函数
    this.eventFunc = () => {
      let scrollTop =
        this.scrollEle.scrollTop ||
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      let scrollHeight = this.scrollEle.scrollHeight;
      let clientHeight = this.scrollEle.clientHeight;
      //若是回到顶部按钮调用
      if (opt.isToTop) {
        scrollHeight = window.screen.height;
        clientHeight = 0;
      }
      this.isBottom = clientHeight + scrollTop + (opt.distance || 0) >= scrollHeight;
      this.callBackFunc(this.isBottom, scrollTop);
    };
  }
  addEvent() {
    this.scrollEle.addEventListener('scroll', this.eventFunc, true);
  }
  removeEvent() {
    this.scrollEle.removeEventListener('scroll', this.eventFunc, true);
  }
};

export const px2rem = px => {
  return px / 75 + 'rem';
};

/**
 * 设置title
 * @author Sailor
 */
export const setTitle = title => {
  let iframe = document.createElement('iframe');
  iframe.src = '';
  iframe.style.display = 'none';
  iframe.onload = () => {
    setTimeout(() => {
      iframe.remove();
    }, 9);
  };
  document.title = title;
  document.body.appendChild(iframe);
};

export const getCookie = name => {
  var arr,
    reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
  if ((arr = document.cookie.match(reg))) return unescape(arr[2]);
  else return '';
};

export const setCookie = (name, value) => {
  var Days = 30;
  var exp = new Date();
  exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 30);
  document.cookie = name + '=' + escape(value) + ';expires=' + exp.toGMTString();
};

export const getParameter = name => {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]);
  return null;
};

export const isPhoneNumber = phone => {
  let isPhone = false;
  if (phone != '') {
    let reg = /^1\d{10}$/;
    isPhone = reg.test(phone);
  }
  return isPhone;
};
/**
 * 手机号加密
 * @param {*} phone 手机号
 */
export const phoneEncrypt = phone => {
  return phone.toString().replace(/(\d{3})\d{4}(\d{4})/, '$1****$2');
};

export const goToTop = el => {
  window.scrollTo(0, 0);
  document.querySelector('#app').scrollTop = 0;
  let scroll = el || document.querySelector('#app>.content');
  // let scroll = document.querySelector('#app>.content');
  if (scroll) {
    scroll.scrollTop = 0;
  }
};
export const toDate = value => {
  if (value) {
    var date = new Date(value);
    var Y = date.getFullYear(),
      m = date.getMonth() + 1,
      d = date.getDate(),
      H = date.getHours(),
      i = date.getMinutes(),
      s = date.getSeconds();
    if (m < 10) {
      m = '0' + m;
    }
    if (d < 10) {
      d = '0' + d;
    }
    if (H < 10) {
      H = '0' + H;
    }
    if (i < 10) {
      i = '0' + i;
    }
    if (s < 10) {
      s = '0' + s;
    }
    var t = Y + '-' + m + '-' + d + ' ' + H + ':' + i + ':' + s;
    return t;
  } else {
    return '未知';
  }
};
/**
 * 过滤字符串中空格
 * @param {*} str
 */
export const trim = str => {
  return (str || '').replace(/\s+/g, '');
};
