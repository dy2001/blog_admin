var root = 'http://localhost:52229'
// 引用axios
var axios = require('axios')
var qs = require('qs')
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
function toType(obj) {
    return {}.toString
      .call(obj)
      .match(/\s([a-zA-Z]+)/)[1]
      .toLowerCase();
  }
  // 参数过滤函数
  function filterNull(o) {
    for (var key in o) {
      if (o[key] === null) {
        delete o[key];
      }
      if (toType(o[key]) === "string") {
        o[key] = o[key].trim();
      } else if (toType(o[key]) === "object") {
        o[key] = filterNull(o[key]);
      } else if (toType(o[key]) === "array") {
        o[key] = filterNull(o[key]);
      }
    }
    return o;
  }
function apiAxios (method, url, params, success) {
    if (params) {
        params = filterNull(params);
      }
    axios({
      method: method,
      url: url,
      data: method === 'POST' || method === 'PUT' ? qs.stringify(params) : null,
      params: method === 'GET' || method === 'DELETE' ? params : null,
  　　 headers:{
      "Authorization":"Bearer "+window.localStorage.getItem("my_token")
    },
      baseURL: root,
      withCredentials: false
    })
      .then(function (res) {
            success(res.data);
      })
  }

  export default {
    get: function (url, params, success, failure) {
      return apiAxios('GET', url, params, success, failure)
    },
    post: function (url, params, success, failure) {
      return apiAxios('POST', url, params, success, failure)
    },
    put: function (url, params, success, failure) {
      return apiAxios('PUT', url, params, success, failure)
    },
    delete: function (url, params, success, failure) {
      return apiAxios('DELETE', url, params, success, failure)
    }
  }