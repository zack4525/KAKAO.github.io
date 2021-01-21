/**
 * Kakao Javascript SDK for Kakao Open Platform Service - v1.39.11
 *
 * Copyright 2017 Kakao Corp.
 *
 *  
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 *
 *
 * OSS Notice | KakaoSDK-Javascript
 *
 * This application is Copyright © Kakao Corp. All rights reserved.
 * The following sets forth attribution notices for third party software that may be contained in this application.
 * If you have any questions or concerns, please contact us at opensource@kakaocorp.com
 *
 *
 *  crypto-js@3.3.0
 *
 * https://github.com/brix/crypto-js
 *
 * Copyright 2009-2013 Jeff Mott
 * Copyright 2013-2016 Evan Vosberg
 *
 * MIT License
 *
 *
 *  easyXDM
 *
 * https://github.com/oyvindkinsey/easyXDM/
 *
 * Copyright 2009-2011 Øyvind Sean Kinsey, oyvind@kinsey.no
 *
 * MIT License
 *
 *
 *  ES6-Promise
 *
 * https://github.com/stefanpenner/es6-promise
 *
 * Copyright 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors
 *
 * MIT License
 *
 *
 *  Underscore
 *
 * https://github.com/jashkenas/underscore
 *
 * Copyright 2009-2017 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 *
 * MIT License
 *
 *
 *  Web2App Library
 *
 * https://github.com/kakao/web2app
 *
 * Copyright 2015 Kakao Corp. http://www.kakaocorp.com
 *
 * MIT License
 *
 *
 * ``````````
 * MIT License
 *
 * Copyright (c) <year> <copyright holders>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * ``````````
 */
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function (f) {
  if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === "object" && typeof module !== "undefined") {
    module.exports = f();
  } else if (typeof define === "function" && define.amd) {
    define([], f);
  } else {
    var g;if (typeof window !== "undefined") {
      g = window;
    } else if (typeof global !== "undefined") {
      g = global;
    } else if (typeof self !== "undefined") {
      g = self;
    } else {
      g = this;
    }g.Kakao = f();
  }
})(function () {
  var define, module, exports;return function () {
    function r(e, n, t) {
      function o(i, f) {
        if (!n[i]) {
          if (!e[i]) {
            var c = "function" == typeof require && require;if (!f && c) return c(i, !0);if (u) return u(i, !0);var a = new Error("Cannot find module '" + i + "'");throw a.code = "MODULE_NOT_FOUND", a;
          }var p = n[i] = { exports: {} };e[i][0].call(p.exports, function (r) {
            var n = e[i][1][r];return o(n || r);
          }, p, p.exports, r, e, n, t);
        }return n[i].exports;
      }for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) {
        o(t[i]);
      }return o;
    }return r;
  }()({ 1: [function (require, module, exports) {
      var process = module.exports = {};


      var cachedSetTimeout;
      var cachedClearTimeout;

      function defaultSetTimout() {
        throw new Error('setTimeout has not been defined');
      }
      function defaultClearTimeout() {
        throw new Error('clearTimeout has not been defined');
      }
      (function () {
        try {
          if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
          } else {
            cachedSetTimeout = defaultSetTimout;
          }
        } catch (e) {
          cachedSetTimeout = defaultSetTimout;
        }
        try {
          if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
          } else {
            cachedClearTimeout = defaultClearTimeout;
          }
        } catch (e) {
          cachedClearTimeout = defaultClearTimeout;
        }
      })();
      function runTimeout(fun) {
        if (cachedSetTimeout === setTimeout) {
          return setTimeout(fun, 0);
        }
        if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
          cachedSetTimeout = setTimeout;
          return setTimeout(fun, 0);
        }
        try {
          return cachedSetTimeout(fun, 0);
        } catch (e) {
          try {
            return cachedSetTimeout.call(null, fun, 0);
          } catch (e) {
            return cachedSetTimeout.call(this, fun, 0);
          }
        }
      }
      function runClearTimeout(marker) {
        if (cachedClearTimeout === clearTimeout) {
          return clearTimeout(marker);
        }
        if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
          cachedClearTimeout = clearTimeout;
          return clearTimeout(marker);
        }
        try {
          return cachedClearTimeout(marker);
        } catch (e) {
          try {
            return cachedClearTimeout.call(null, marker);
          } catch (e) {
            return cachedClearTimeout.call(this, marker);
          }
        }
      }
      var queue = [];
      var draining = false;
      var currentQueue;
      var queueIndex = -1;

      function cleanUpNextTick() {
        if (!draining || !currentQueue) {
          return;
        }
        draining = false;
        if (currentQueue.length) {
          queue = currentQueue.concat(queue);
        } else {
          queueIndex = -1;
        }
        if (queue.length) {
          drainQueue();
        }
      }

      function drainQueue() {
        if (draining) {
          return;
        }
        var timeout = runTimeout(cleanUpNextTick);
        draining = true;

        var len = queue.length;
        while (len) {
          currentQueue = queue;
          queue = [];
          while (++queueIndex < len) {
            if (currentQueue) {
              currentQueue[queueIndex].run();
            }
          }
          queueIndex = -1;
          len = queue.length;
        }
        currentQueue = null;
        draining = false;
        runClearTimeout(timeout);
      }

      process.nextTick = function (fun) {
        var args = new Array(arguments.length - 1);
        if (arguments.length > 1) {
          for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
          }
        }
        queue.push(new Item(fun, args));
        if (queue.length === 1 && !draining) {
          runTimeout(drainQueue);
        }
      };

      function Item(fun, array) {
        this.fun = fun;
        this.array = array;
      }
      Item.prototype.run = function () {
        this.fun.apply(null, this.array);
      };
      process.title = 'browser';
      process.browser = true;
      process.env = {};
      process.argv = [];
      process.version = ''; 
      process.versions = {};

      function noop() {}

      process.on = noop;
      process.addListener = noop;
      process.once = noop;
      process.off = noop;
      process.removeListener = noop;
      process.removeAllListeners = noop;
      process.emit = noop;
      process.prependListener = noop;
      process.prependOnceListener = noop;

      process.listeners = function (name) {
        return [];
      };

      process.binding = function (name) {
        throw new Error('process.binding is not supported');
      };

      process.cwd = function () {
        return '/';
      };
      process.chdir = function (dir) {
        throw new Error('process.chdir is not supported');
      };
      process.umask = function () {
        return 0;
      };
    }, {}], 2: [function (require, module, exports) {
      (function (setImmediate, clearImmediate) {
        var nextTick = require('process/browser.js').nextTick;
        var apply = Function.prototype.apply;
        var slice = Array.prototype.slice;
        var immediateIds = {};
        var nextImmediateId = 0;


        exports.setTimeout = function () {
          return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
        };
        exports.setInterval = function () {
          return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
        };
        exports.clearTimeout = exports.clearInterval = function (timeout) {
          timeout.close();
        };

        function Timeout(id, clearFn) {
          this._id = id;
          this._clearFn = clearFn;
        }
        Timeout.prototype.unref = Timeout.prototype.ref = function () {};
        Timeout.prototype.close = function () {
          this._clearFn.call(window, this._id);
        };

        exports.enroll = function (item, msecs) {
          clearTimeout(item._idleTimeoutId);
          item._idleTimeout = msecs;
        };

        exports.unenroll = function (item) {
          clearTimeout(item._idleTimeoutId);
          item._idleTimeout = -1;
        };

        exports._unrefActive = exports.active = function (item) {
          clearTimeout(item._idleTimeoutId);

          var msecs = item._idleTimeout;
          if (msecs >= 0) {
            item._idleTimeoutId = setTimeout(function onTimeout() {
              if (item._onTimeout) item._onTimeout();
            }, msecs);
          }
        };

        exports.setImmediate = typeof setImmediate === "function" ? setImmediate : function (fn) {
          var id = nextImmediateId++;
          var args = arguments.length < 2 ? false : slice.call(arguments, 1);

          immediateIds[id] = true;

          nextTick(function onNextTick() {
            if (immediateIds[id]) {
              if (args) {
                fn.apply(null, args);
              } else {
                fn.call(null);
              }
              exports.clearImmediate(id);
            }
          });

          return id;
        };

        exports.clearImmediate = typeof clearImmediate === "function" ? clearImmediate : function (id) {
          delete immediateIds[id];
        };
      }).call(this, require("timers").setImmediate, require("timers").clearImmediate);
    }, { "process/browser.js": 1, "timers": 2 }], 3: [function (require, module, exports) {
      module.exports = function () {
        var authSecret = require('../Auth/secret');

        function accessToken() {
          return "Bearer " + authSecret.getAccessToken();
        }

        function appKey() {
          return "KakaoAK " + authSecret.getAppKey();
        }

        return {
          accessToken: accessToken,
          appKey: appKey,
          tokenOrKey: authSecret.getAccessToken() ? accessToken : appKey
        };
      }();
    }, { "../Auth/secret": 16 }], 4: [function (require, module, exports) {
      module.exports = function () {
        var _k = require('../common');

        var API = {};
        var cleanups = [];

        _k.initSubModules(API, [require('./request')(cleanups)]);

        API.cleanup = function () {
          _k.emptyCleanups(cleanups);
        };

        return API;
      }();
    }, { "../common": 40, "./request": 5 }], 5: [function (require, module, exports) {
      module.exports = function (cleanups) {
        require('../../vendor/es6-promise');
        var _easyXDM = require('../../vendor/easyXDM');
        var _ = require('../util');
        var _k = require('../common');

        var rules = require('./rules');
        var authType = require('./authType');

        var proxyForRequest = null;
        function request(settings) {
          settings = _k.processRules(settings, rules.request, 'API.request');

          var url = settings.url;
          var urlRule = rules.api[url].data;
          if (urlRule) {
            settings.data = _k.processRules(settings.data, urlRule, "API.request - " + url);
          }

          if (!proxyForRequest) {
            proxyForRequest = getProxy();

            cleanups.push(function () {
              proxyForRequest.destroy();
              proxyForRequest = null;
            });
          }

          return new Promise(function (resolve, reject) {
            getConfig(settings).then(function (config) {
              proxyForRequest.request(config, function (res) {
                settings.success(res);
                settings.always(res);

                resolve(res);
              }, function (xdmError) {
                var error = parseXdmError(xdmError);
                settings.fail(error);
                settings.always(error);

                reject(error);
              });
            }, function (error) {
              reject(error);
            });
          });
        }

        function getProxy() {
          return _k.guardCreateEasyXDM(function () {
            return new _easyXDM.Rpc({
              remote: _k.URL.apiRemote
            }, {
              remote: {
                request: {}
              }
            });
          });
        }

        function parseXdmError(xdmError) {
          try {
            _k.logDebug(xdmError);

            return JSON.stringify(xdmError.message.responseText);
          } catch (e) {
            return {
              code: -777,
              msg: 'Unknown error'
            };
          }
        }

        function getConfig(settings) {
          var url = settings.url;

          var urlSpec = rules.api[url];

          var stringifiedData = {};
          _.each(settings.data, function (value, key) {
            stringifiedData[key] = _.isString(value) ? value : JSON.stringify(value);
          });

          var config = {
            url: url,
            method: urlSpec.method,
            headers: {
              KA: _k.KAKAO_AGENT,
              Authorization: (urlSpec.authType || authType.accessToken)(),
              'Cache-Control': 'no-cache',
              Pragma: 'no-cache' 
            },
            data: stringifiedData
          };

          return new Promise(function (resolve, reject) {
            if (isFileRequired(url) || settings.data.file) {
              var files = settings.files || settings.data.file;
              if (!files) {
                throw new _k.KakaoError("'files' parameter should be set for " + url);
              }

              getFileConfig(files).then(function (fileConfig) {
                var searchParams = [];
                for (var prop in stringifiedData) {
                  if (prop !== 'file') {
                    searchParams.push(prop + "=" + encodeURIComponent(stringifiedData[prop]));
                  }
                }

                if (searchParams.length > 0) {
                  config.url += "?" + searchParams.join('&');
                }

                config.file = fileConfig;
                resolve(config);
              }, function (error) {
                reject(error);
              });
            } else {
              resolve(config);
            }
          });
        }

        function isFileRequired(url) {
          return url === '/v1/api/story/upload/multi' || url === '/v2/api/talk/message/image/upload';
        }

        function getFileConfig(files) {
          var serializePromises = _.map(files, function (file) {
            return _k.serializeFile(file).then(function (serialized) {
              return {
                name: file.name,
                type: file.type,
                str: serialized
              };
            });
          });

          return new Promise(function (resolve, reject) {
            Promise.all(serializePromises).then(function (serializedFiles) {
              resolve({
                paramName: 'file',
                data: serializedFiles
              });
            }, function (error) {
              reject(error);
            });
          });
        }

        return {
          request: request
        };
      };
    }, { "../../vendor/easyXDM": 47, "../../vendor/es6-promise": 48, "../common": 40, "../util": 44, "./authType": 3, "./rules": 6 }], 6: [function (require, module, exports) {
      module.exports = function () {
        var _ = require('../util');
        var authType = require('./authType');

        var postApiCommonParams = {
          permission: _.isOneOf(['A', 'F', 'M']),
          enable_share: _.isBoolean,
          android_exec_param: _.isString,
          ios_exec_param: _.isString,
          android_market_param: _.isString,
          ios_market_param: _.isString
        };

        var secureResource = {
          secure_resource: _.isBoolean
        };

        var forceSecureResource = function forceSecureResource(settings) {
          if (settings.secure_resource === false) {
            if (console) {
              console.warn('KakaoWarning: The secure_resource parameter is deprecated.');
            }
            settings.secure_resource = true;
          }
        };

        function storyActivityContentValidator(obj) {
          if (!_.isString(obj)) {
            return false;
          }

          if (obj.length === 0 || obj.length > 2048) {
            throw new _k.KakaoError('content length should be between 0 and 2048');
          }

          return true;
        }

        function kageImageUrlListValidator(obj) {
          if (!_.isArray(obj)) {
            return false;
          }

          return _.every(obj, function (path) {
            if (!_.isString(path)) {
              return false;
            }

            if (_.isURL(path)) {
              throw new _k.KakaoError("url in image_url_list should be a kage url, obtained from '/v1/api/story/upload/multi'.");
            }

            return true;
          });
        }

        function hasHeaderBackgroundImage(obj) {
          if (obj.header_image_url || obj.header_image_width || obj.header_image_height) {
            delete obj.header_image_url;
            delete obj.header_image_width;
            delete obj.header_image_height;

            if (console) {
              var params = ['header_image_url', 'header_image_width', 'header_image_height'];
              console.warn("KakaoWarning: The parameters (" + params.join(', ') + ") for header background image are deprecated.");
            }
          }

          return true;
        }

        var rules = {
          request: {
            required: {
              url: function url(_url) {
                return _.isOneOf(_.keys(rules.api))(_url);
              }
            },
            optional: {
              data: _.isObject,
              files: function files(obj) {
                return _.passesOneOf([_.isArray, _.isFileList])(obj) && _.every(obj, _.passesOneOf([_.isFile, _.isBlob]));
              },

              file: _.isFile,
              success: _.isFunction,
              fail: _.isFunction,
              always: _.isFunction
            },
            defaults: {
              data: {},
              success: _.emptyFunc,
              fail: _.emptyFunc,
              always: _.emptyFunc
            }
          },
          api: {
            '/v1/user/signup': {
              method: 'post',
              data: {
                optional: {
                  properties: _.isObject
                }
              }
            },
            '/v1/user/unlink': {
              method: 'post'
            },
            '/v2/user/me': {
              method: 'get',
              data: {
                optional: _.extend({
                  property_keys: _.isArray
                }, secureResource)
              }
            },
            '/v1/user/logout': {
              method: 'post',
              data: {}
            },
            '/v1/user/update_profile': {
              method: 'post',
              data: {
                required: { properties: _.isObject }
              }
            },

            '/v1/api/talk/profile': {
              method: 'get',
              data: {
                optional: secureResource,
                after: forceSecureResource
              }
            },
            '/v2/api/talk/memo/send': {
              method: 'post',
              data: {
                required: {
                  template_id: _.isNumber
                },
                optional: {
                  template_args: _.isObject
                }
              }
            },
            '/v2/api/talk/memo/scrap/send': {
              method: 'post',
              data: {
                required: {
                  request_url: _.isString
                },
                optional: {
                  template_id: _.isNumber,
                  template_args: _.isObject
                }
              }
            },
            '/v2/api/talk/memo/default/send': {
              method: 'post',
              data: {
                required: {
                  template_object: function template_object(obj) {
                    return _.isObject(obj) && hasHeaderBackgroundImage(obj);
                  }
                }
              }
            },

            '/v1/api/story/profile': {
              method: 'get',
              data: {
                optional: secureResource
              }
            },
            '/v1/api/story/isstoryuser': {
              method: 'get'
            },
            '/v1/api/story/mystory': {
              method: 'get',
              data: {
                required: {
                  id: _.isString
                }
              }
            },
            '/v1/api/story/mystories': {
              method: 'get',
              data: {
                optional: {
                  last_id: _.isString
                }
              }
            },
            '/v1/api/story/linkinfo': {
              method: 'get',
              data: {
                required: {
                  url: _.isString
                }
              }
            },
            '/v1/api/story/post/note': {
              method: 'post',
              data: {
                required: {
                  content: storyActivityContentValidator
                },
                optional: postApiCommonParams
              }
            },
            '/v1/api/story/post/photo': {
              method: 'post',
              data: {
                required: {
                  image_url_list: kageImageUrlListValidator
                },
                optional: _.extend({
                  content: storyActivityContentValidator
                }, postApiCommonParams)
              }
            },
            '/v1/api/story/post/link': {
              method: 'post',
              data: {
                required: {
                  link_info: _.isObject
                },
                optional: _.extend({
                  content: storyActivityContentValidator
                }, postApiCommonParams)
              }
            },
            '/v1/api/story/upload/multi': {
              method: 'post',
              data: {}
            },
            '/v1/api/story/delete/mystory': {
              method: 'delete',
              data: {
                required: {
                  id: _.isString
                }
              }
            },

            '/v1/emoticon/my_items': {
              method: 'get',
              data: {},
              authType: authType.appKey
            },
            '/v1/emoticon/item_resources': {
              method: 'get',
              data: {
                required: {
                  id: _.isString
                }
              },
              authType: authType.appKey
            },
            '/v2/emoticon/items': {
              method: 'get',
              authType: authType.tokenOrKey
            },
            '/v2/emoticon/item': {
              method: 'get',
              data: {
                required: {
                  id: _.passesOneOf([_.isNumber, _.isString])
                }
              },
              authType: authType.tokenOrKey
            },
            '/v2/emoticon/item_resources': {
              method: 'get',
              authType: authType.tokenOrKey
            },
            '/v2/emoticon/item_resource': {
              method: 'get',
              data: {
                required: {
                  id: _.passesOneOf([_.isNumber, _.isString])
                }
              },
              authType: authType.tokenOrKey
            },

            '/v2/api/kakaolink/talk/template/validate': {
              method: 'get',
              data: {
                required: {
                  link_ver: _.isString,
                  template_id: _.isNumber
                },
                optional: {
                  template_args: _.isObject
                }
              },
              authType: authType.appKey
            },
            '/v2/api/kakaolink/talk/template/scrap': {
              method: 'get',
              data: {
                required: {
                  link_ver: _.isString,
                  request_url: _.isString
                },
                optional: {
                  template_id: _.isNumber,
                  template_args: _.isObject
                }
              },
              authType: authType.appKey
            },
            '/v2/api/kakaolink/talk/template/default': {
              method: 'get',
              data: {
                required: {
                  link_ver: _.isString,
                  template_object: _.isObject
                }
              },
              authType: authType.appKey
            },
            '/v1/user/access_token_info': {
              method: 'get',
              data: {}
            },
            '/v2/api/talk/message/image/upload': {
              method: 'post',
              data: {
                required: {
                  file: _.isObject
                }
              },
              authType: authType.appKey
            },
            '/v2/api/talk/message/image/delete': {
              method: 'delete',
              data: {
                required: {
                  image_url: _.isString
                }
              },
              authType: authType.appKey
            },
            '/v2/api/talk/message/image/scrap': {
              method: 'post',
              data: {
                required: {
                  image_url: _.isString
                }
              },
              authType: authType.appKey
            },
            '/v1/vision/face/detect': {
              method: 'post',
              data: {
                optional: {
                  file: _.isObject,
                  image_url: _.isString,
                  threshold: _.isNumber
                }
              },
              authType: authType.appKey
            },
            '/v1/vision/product/detect': {
              method: 'post',
              data: {
                optional: {
                  file: _.isObject,
                  image_url: _.isString,
                  threshold: _.isNumber
                }
              },
              authType: authType.appKey
            },
            '/v1/vision/thumbnail/crop': {
              method: 'post',
              data: {
                required: {
                  width: _.isInteger,
                  height: _.isInteger
                },
                optional: {
                  file: _.isObject,
                  image_url: _.isString
                }
              },
              authType: authType.appKey
            },
            '/v1/vision/thumbnail/detect': {
              method: 'post',
              data: {
                required: {
                  width: _.isInteger,
                  height: _.isInteger
                },
                optional: {
                  file: _.isObject,
                  image_url: _.isString
                }
              },
              authType: authType.appKey
            },
            '/v1/vision/multitag/generate': {
              method: 'post',
              data: {
                optional: {
                  file: _.isObject,
                  image_url: _.isString
                }
              },
              authType: authType.appKey
            },
            '/v1/vision/adult/detect': {
              method: 'post',
              data: {
                optional: {
                  file: _.isObject,
                  image_url: _.isString
                }
              },
              authType: authType.appKey
            },
            '/v1/vision/text/detect': {
              method: 'post',
              data: {
                optional: {
                  file: _.isObject
                }
              },
              authType: authType.appKey
            },
            '/v1/vision/text/recognize': {
              method: 'post',
              data: {
                optional: {
                  file: _.isObject,
                  boxes: _.passesOneOf([_.isString, _.isArray])
                }
              },
              authType: authType.appKey
            },
            '/v1/translation/translate': {
              method: 'post',
              data: {
                required: {
                  query: _.isString,
                  src_lang: _.isString,
                  target_lang: _.isString
                }
              },
              authType: authType.appKey
            },
            '/v1/user/service/terms': {
              method: 'get'
            },
            '/v1/user/shipping_address': {
              method: 'get',
              data: {
                optional: {
                  address_id: _.isNumber,
                  from_updated_at: _.isNumber,
                  page_size: _.isNumber
                }
              }
            },
            '/v1/api/talk/plusfriends': {
              method: 'get',
              data: {
                optional: {
                  plus_friend_public_ids: _.isArray
                }
              }
            },
            '/v1/friends': {
              method: 'get',
              data: {
                optional: _.extend({
                  offset: _.isNumber,
                  limit: _.isNumber,
                  order: _.isString,
                  friend_order: _.isString
                }, secureResource),
                after: forceSecureResource
              }
            },
            '/v1/api/talk/friends': {
              method: 'get',
              data: {
                optional: _.extend({
                  offset: _.isNumber,
                  limit: _.isNumber,
                  order: _.isString
                }, secureResource),
                after: forceSecureResource
              }
            },
            '/v1/api/talk/friends/message/send': {
              method: 'post',
              data: {
                required: {
                  template_id: _.isNumber,
                  receiver_uuids: _.isArray,
                  receiver_id_type: _.isString
                },
                optional: {
                  template_args: _.isObject
                },
                defaults: function defaults() {
                  return {
                    receiver_id_type: 'uuid'
                  };
                }
              }
            },
            '/v1/api/talk/friends/message/scrap/send': {
              method: 'post',
              data: {
                required: {
                  request_url: _.isString,
                  receiver_uuids: _.isArray,
                  receiver_id_type: _.isString
                },
                optional: {
                  template_id: _.isNumber,
                  template_args: _.isObject
                },
                defaults: function defaults() {
                  return {
                    receiver_id_type: 'uuid'
                  };
                }
              }
            },
            '/v1/api/talk/friends/message/default/send': {
              method: 'post',
              data: {
                required: {
                  template_object: function template_object(obj) {
                    return _.isObject(obj) && hasHeaderBackgroundImage(obj);
                  },

                  receiver_uuids: _.isArray,
                  receiver_id_type: _.isString
                },
                defaults: function defaults() {
                  return {
                    receiver_id_type: 'uuid'
                  };
                }
              }
            }
          }
        };

        return rules;
      }();
    }, { "../util": 44, "./authType": 3 }], 7: [function (require, module, exports) {
      module.exports = function () {
        function checkAuthorize(url, onResponse) {
          request({
            method: 'GET',
            url: url
          }, onResponse);
        }

        function getToken(url, data, onResponse) {
          request({
            method: 'POST',
            url: url,
            data: data
          }, onResponse);
        }

        function request(req, onResponse) {
          var url = req.url,
              method = req.method,
              data = req.data;


          var xhr = new XMLHttpRequest();
          if (typeof xhr.withCredentials !== 'undefined') {
            xhr.open(method, url);
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            xhr.onreadystatechange = function () {
              if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                onResponse(xhr);
              }
            };

            xhr.send(data);
          } else {
            var xdr = new XDomainRequest();
            xdr.open(method.toLowerCase(), url);
            xdr.onload = function () {
              onResponse({
                status: xdr.responseText ? 200 : 'error',
                response: xdr.responseText
              });
            };

            setTimeout(function () {
              xdr.send(data);
            }, 0);
          }
        }

        return {
          checkAuthorize: checkAuthorize
        };
      }();
    }, {}], 8: [function (require, module, exports) {
      module.exports = function () {
        var _ = require('../util');
        var _k = require('../common');

        function openLoginPopup(url) {
          var LOGIN_POPUP_NAME = '_blank';
          return _k.windowOpen(url, LOGIN_POPUP_NAME, getLoginPopupFeatures());
        }

        function getLoginPopupFeatures() {
          var popupWidth = 480;
          var popupHeight = 700;

          var sLeft = window.screenLeft ? window.screenLeft : window.screenX ? window.screenX : 0;
          var sTop = window.screenTop ? window.screenTop : window.screenY ? window.screenY : 0;
          var popupLeft = screen.width / 2 - popupWidth / 2 + sLeft;
          var popupTop = screen.height / 2 - popupHeight / 2 + sTop;

          return ["width=" + popupWidth, "height=" + popupHeight, "left=" + popupLeft, "top=" + popupTop, 'scrollbars=yes', 'resizable=1'].join(',');
        }

        function makeAuthUrl(params) {
          return _k.URL.authorize + "?" + _.buildQueryString(params);
        }

        function makeAuthParams(settings) {
          var params = {
            client_id: _k.RUNTIME.appKey
          };

          if (settings.approvalType) {
            params['approval_type'] = settings.approvalType;
          }
          if (settings.scope) {
            params['scope'] = settings.scope;
          }
          if (settings.state) {
            params['state'] = settings.state;
          }

          return params;
        }

        function makeAuthExtraParams(settings) {
          var params = {};

          if (settings.plusFriendPublicId) {
            params['extra.plus_friend_public_id'] = settings.plusFriendPublicId;
          }
          if (settings.channelPublicId) {
            params['channel_public_id'] = settings.channelPublicId;
          }
          if (settings.serviceTerms) {
            params['extra.service_terms'] = settings.serviceTerms;
          }
          if (settings.autoLogin) {
            params['auto_login'] = settings.autoLogin;
          }
          if (settings.deviceType) {
            params['device_type'] = settings.deviceType;
          }

          return params;
        }

        function runAuthCallback(settings, resp) {
          _k.logDebug(resp);

          if (resp.error) {
            settings.fail(resp);
            settings.always(resp);
          } else {
            settings.success(resp);
            settings.always(resp);
          }
        }

        return {
          openLoginPopup: openLoginPopup,
          makeAuthUrl: makeAuthUrl,
          makeAuthParams: makeAuthParams,
          makeAuthExtraParams: makeAuthExtraParams,
          runAuthCallback: runAuthCallback
        };
      }();
    }, { "../common": 40, "../util": 44 }], 9: [function (require, module, exports) {
      module.exports = function () {
        var _k = require('../common');

        var Auth = {};
        var cleanups = [];

        _k.initSubModules(Auth, [require('./oauth'), require('./login')(cleanups), require('./secret')]);

        Auth.cleanup = function () {
          _k.emptyCleanups(cleanups);
        };

        return Auth;
      }();
    }, { "../common": 40, "./login": 11, "./oauth": 12, "./secret": 16 }], 10: [function (require, module, exports) {
      module.exports = function () {
        var _k = require('../common');

        var LOGIN_POPUP_NAME = '_blank';
        var POPUP_FEATURES = 'width=380, height=520, scrollbars=yes';
        var isIntentSupportAndroidWebView = /Version\/4.0/i.test(_k.UA.ua) || /; wv\)/i.test(_k.UA.ua);
        var isSupportWebView = /naver\(inapp|fb_iab|daumapps|instagram|ebay/g.test(_k.UA.ua);
        var _loginPopupWindow;

        return {
          isSupport: function isSupport() {
            var MIN_SUPPORT_VER_TO_APP_INTENT_FOR_ANDROID_CHROME = 30;
            if (_k.UA.os.ios) {
              var iOSBrowser = /safari|FxiOS|CriOS/.test(_k.UA.ua);
              var iOSWebView = !/KAKAOTALK/i.test(_k.UA.ua);
              return iOSBrowser || iOSWebView;
            } else if (_k.UA.os.android) {
              return _k.UA.browser.chrome && !/opr\//i.test(_k.UA.ua) && _k.UA.browser.version.major >= MIN_SUPPORT_VER_TO_APP_INTENT_FOR_ANDROID_CHROME && (!isIntentSupportAndroidWebView || isIntentSupportAndroidWebView && isSupportWebView);
            } else {
              return false;
            }
          },
          login: function login(stateToken, fallbackWebURL, authParams, redirectUri) {
            if (!this.isSupport()) {
              return;
            }
            if (_k.UA.os.ios) {
              var iOSTalkLoginScheme = createIOSTalkLoginScheme(stateToken, authParams);
              if (!redirectUri) {
                _loginPopupWindow = _k.windowOpen(_k.URL.universalKakaoLink + encodeURIComponent(iOSTalkLoginScheme) + '&web=' + encodeURIComponent(fallbackWebURL), LOGIN_POPUP_NAME, POPUP_FEATURES);
              } else {
                location.href = _k.URL.universalKakaoLink + encodeURIComponent(iOSTalkLoginScheme) + '&web=' + encodeURIComponent(fallbackWebURL);
              }
            } else if (_k.UA.os.android) {
              var androidTalkLoginIntent = createAndroidLoginIntent(stateToken, fallbackWebURL, authParams);
              if (!redirectUri) {
                if (isSupportNativeFallbackURL() && (!isIntentSupportAndroidWebView || isIntentSupportAndroidWebView && isSupportWebView)) {
                  _loginPopupWindow = _k.windowOpen(androidTalkLoginIntent, LOGIN_POPUP_NAME, POPUP_FEATURES);
                } else {
                  _loginPopupWindow = _k.windowOpen('', LOGIN_POPUP_NAME, POPUP_FEATURES);
                  if (_loginPopupWindow) {
                    _loginPopupWindow.addEventListener('unload', moveFallback);
                    _loginPopupWindow.location.href = androidTalkLoginIntent;
                  }
                }
              } else {
                location.href = androidTalkLoginIntent;
              }
            }
            return _loginPopupWindow;

            function isSupportNativeFallbackURL() {
              var MIN_SUPPORT_CHROME_VER = 40;
              return _k.UA.browser.version.major > MIN_SUPPORT_CHROME_VER;
            }

            function moveFallback() {
              setTimeout(function () {
                if (_loginPopupWindow && _loginPopupWindow.location) {
                  _loginPopupWindow.location.href = fallbackWebURL;
                }
              }, 10);
            }
          },
          hasWebLoginWindow: function hasWebLoginWindow() {
            try {
              if (_loginPopupWindow && _loginPopupWindow.location && _loginPopupWindow.location.href != "about:blank") {
                if (_k.UA.os.android) {
                  return !!_loginPopupWindow.location.href;
                } else {
                  return true;
                }
              }
              return false;
            } catch (CrossDomainAccessDomException) {
              return true;
            }
          }
        };

        function createIOSTalkLoginScheme(stateToken, authParams) {
          authParams.state = stateToken;
          return [_k.URL.talkLoginScheme, '?', 'client_id=' + _k.RUNTIME.appKey, '&', 'redirect_uri=' + _k.URL.redirectUri, '&', 'params=' + encodeURIComponent(JSON.stringify(authParams))].join('');
        }

        function createAndroidLoginIntent(stateToken, fallbackWebUrl, authParams) {
          return ['intent:#Intent', 'action=com.kakao.talk.intent.action.CAPRI_LOGGED_IN_ACTIVITY', 'launchFlags=0x08880000', 'S.com.kakao.sdk.talk.appKey=' + _k.RUNTIME.appKey, 'S.com.kakao.sdk.talk.redirectUri=' + _k.URL.talkLoginRedirectUri, 'S.com.kakao.sdk.talk.state=' + stateToken, 'S.com.kakao.sdk.talk.kaHeader=' + _k.KAKAO_AGENT, 'S.com.kakao.sdk.talk.extraparams=' + encodeURIComponent(JSON.stringify(authParams)), 'S.browser_fallback_url=' + encodeURIComponent(fallbackWebUrl), 'end;'].join(';');
        }
      }();
    }, { "../common": 40 }], 11: [function (require, module, exports) {
      module.exports = function (cleanups) {
        var _ = require('../util');
        var _k = require('../common');
        var _eventObserver = require('../eventObserver');
        var _webViewChecker = require('../webviewchecker')();
        var origin = require('../browserProxy.js').getOrigin();
        var poller = require('../poller')(1000, 600); 

        var rules = require('./rules');
        var authCommon = require('./common');
        var proxy = require('./proxy');
        var secret = require('./secret');
        var pkce = require('./pkce');
        var kakaotalk = require('./kakaotalk');

        var RESERVED_REDIRECT_URI = 'kakaojs';


        function createLoginButton(settings) {
          settings = _k.processRules(settings, rules.createLoginButton, 'Auth.createLoginButton');

          var container$ = _.getElement(settings.container);
          if (!container$) {
            throw new _k.KakaoError('container is required for Kakao login button: pass in element or id');
          }

          var buttonSize = settings.size === 'medium' ? '02' : settings.size === 'small' ? '03' : '01';
          var buttonUrl = _k.URL.authDomain + "/public/widget/login/" + settings.lang + "/" + settings.lang + "_" + buttonSize + "_medium";

          var buttonImage = buttonUrl + ".png";
          var hoverButtonImage = buttonUrl + "_press.png";

          container$.innerHTML = "<img\n      id=\"kakao-login-btn\"\n      src=" + buttonImage + "\n      onmouseover=this.src='" + hoverButtonImage + "'\n      onmouseout=this.src='" + buttonImage + "'\n      style=\"cursor: pointer\"\n    />";
          container$.onclick = function () {
            doLogin(settings);
          };
        }

        function login(settings) {
          settings = _k.processRules(settings, rules.login, 'Auth.login');
          doLogin(settings);
        }

        function doLogin(settings) {
          var stateToken = _.getRandomString() + _.getRandomString();

          if (kakaotalk.isSupport() && settings.throughTalk) {
            loginThroughTalk(settings, stateToken);
          } else if (settings.redirectUri) {
            location.href = redirectLoginThroughWeb(settings);
          } else if (_webViewChecker.isNewerAndroidKakaoTalkWebView()) {
            var params = _.extend({}, authCommon.makeAuthParams(settings), authCommon.makeAuthExtraParams(settings), getPKCEParams(), {
              redirect_uri: _k.URL.talkLoginRedirectUri,
              response_type: 'code',
              state: stateToken,
              ka: _k.KAKAO_AGENT,
              origin: origin
            });

            var loginUrl = authCommon.makeAuthUrl(params);
            loginThroughTalk(settings, stateToken, loginUrl);
          } else {
            if (!(_k.UA.browser.msie && parseInt(_k.UA.browser.version.major) <= 9)) {
              addLoginEvent(settings, stateToken);
            }

            var _loginUrl = loginThroughWeb(settings, stateToken);
            authCommon.openLoginPopup(_loginUrl);
          }

          _eventObserver.dispatch('LOGIN_START');
        }

        function addLoginEvent(settings) {
          var messageHandler = function messageHandler(_ref) {
            var origin = _ref.origin,
                data = _ref.data;

            if (/\.kakao\.com$/.test(origin) && data && typeof data === 'string') {
              var arr = data.split(' ');
              if (arr[1] === 'postResponse') {
                var resp = JSON.parse(decodeURIComponent(arr[2]));
                handleAuthResponse(settings, resp);

                _.removeEvent(window, 'message', messageHandler);
              }
            }
          };
          _.addEvent(window, 'message', messageHandler);

          cleanups.push(function () {
            _.removeEvent(window, 'message', messageHandler);
          });
        }

        function loginForm(settings) {
          settings = _k.processRules(settings, rules.login, 'Auth.loginForm');

          var stateToken = _.getRandomString() + _.getRandomString();
          var reauthQueryString = '&auth_type=reauthenticate';

          if (settings.redirectUri) {
            location.href = "" + redirectLoginThroughWeb(settings) + reauthQueryString;
          } else {
            var loginUrl = "" + loginThroughWeb(settings, stateToken) + reauthQueryString;
            authCommon.openLoginPopup(loginUrl);
          }
        }

        function autoLogin(settings) {
          settings = _k.processRules(settings, rules.autoLogin, 'Auth.autoLogin');

          if (_webViewChecker.isIOSKakaoTalkWebView() || _webViewChecker.isAndroidKakaoTalkWebView()) {
            var stateToken = _.getRandomString() + _.getRandomString();
            var params = _.extend({}, authCommon.makeAuthParams(settings), getPKCEParams(), {
              redirect_uri: _k.URL.talkLoginRedirectUri,
              response_type: 'code',
              state: stateToken,
              ka: _k.KAKAO_AGENT,
              origin: origin,
              auto_login: 'true'
            });

            var loginUrl = authCommon.makeAuthUrl(params);
            loginThroughTalk(settings, stateToken, loginUrl);
          } else {
            authCommon.runAuthCallback(settings, {
              error: 'auto_login',
              error_description: 'Auto-login is only supported by KakaoTalk InAppBrowser',
              error_code: '400',
              status: 'error'
            });
          }

          _eventObserver.dispatch('LOGIN_START');
        }

        var popupForTalk = null;
        var closePopup = function closePopup() {
          popupForTalk && popupForTalk.close && popupForTalk.close();
          popupForTalk = null;
        };

        var proxyForTalk = null;
        var prevCode = null;
        function loginThroughTalk(settings, stateToken, talkLoginUrl) {
          if (proxyForTalk) {
            proxyForTalk.destroy();
            proxyForTalk = null;
          }

          proxyForTalk = proxy.getProxy({}, function (response) {
            if (response.status === 'error' && (response.error_code === '500' || response.error_code === '600')) {
              poller.stop();

              handleAuthResponse(settings, {
                error: response.error,
                error_description: response.error_description
              });
            }

            if (response.status) {
              if (response.status === 'ok') {
                poller.stop();

                if (prevCode === response.code) {
                  return;
                } else {
                  prevCode = response.code;
                }

                proxyForTalk.getAccessToken(response.code, _k.RUNTIME.appKey, _k.UA.os.ios && !talkLoginUrl ? _k.URL.redirectUri : _k.URL.talkLoginRedirectUri, settings.approvalType);

                closePopup();
              } else {
                if (_k.UA.os.ios && popupForTalk.location.href === 'about:blank') {
                  closePopup();
                }
              }
            } else {
              handleAuthResponse(settings, response);
            }
          });

          cleanups.push(function () {
            if (!proxyForTalk) {
              proxyForTalk.destroy();
              proxyForTalk = null;
            }
          });

          var fallbackUrl = '';
          if (talkLoginUrl) {
            if (settings.redirectUri) {
              location.href = talkLoginUrl;
            } else {
              authCommon.openLoginPopup(talkLoginUrl);
            }
          } else {
            fallbackUrl = settings.redirectUri ? redirectLoginThroughWeb(settings) : loginThroughWeb(settings, stateToken, _k.UA.os.ios ? _k.URL.redirectUri : _k.URL.talkLoginRedirectUri);

            var params = _.extend({}, authCommon.makeAuthParams(settings), authCommon.makeAuthExtraParams(settings), getPKCEParams(false));

            setTimeout(function () {
              popupForTalk = kakaotalk.login(stateToken, fallbackUrl, params, settings.redirectUri);
            }, 500);
          }

          poller.start(function () {
            if (stateToken) {
              proxyForTalk.getCode(stateToken, _k.RUNTIME.appKey);
            }
          }, function () {
            handleAuthResponse(settings, {
              error: 'timeout',
              description: 'Account login timed out. Please login again.',
              error_description: 'Account login timed out. Please login again.'
            });

            if (settings.redirectUri) {
              location.href = fallbackUrl;
            } else {
              authCommon.openLoginPopup(fallbackUrl);
            }
          });
        }

        var proxyForWeb = null;
        var savedSettingsForWeb = {};
        function loginThroughWeb(settings, stateToken, fallbackUrl) {
          if (proxyForWeb) {
            proxyForWeb.destroy();
            proxyForWeb = null;
          }

          proxyForWeb = proxy.getProxy({}, function (response) {
            var savedSettings = getSavedSettingsWithResponseState(response, savedSettingsForWeb);
            handleAuthResponse(savedSettings, response);
          });

          cleanups.push(function () {
            if (!proxyForWeb) {
              proxyForWeb.destroy();
              proxyForWeb = null;
            }
          });

          savedSettingsForWeb[stateToken] = settings;

          var redirectUri = settings.redirectUri ? settings.redirectUri : fallbackUrl ? fallbackUrl : RESERVED_REDIRECT_URI;
          var params = _.extend({}, authCommon.makeAuthParams(settings), authCommon.makeAuthExtraParams(settings), getPKCEParams(), {
            redirect_uri: redirectUri,
            response_type: 'code',
            state: stateToken,
            proxy: "easyXDM_Kakao_" + proxyForWeb.channel + "_provider",
            ka: _k.KAKAO_AGENT,
            origin: origin
          });

          return authCommon.makeAuthUrl(params);
        }

        function redirectLoginThroughWeb(settings) {
          var params = _.extend({}, authCommon.makeAuthParams(settings), authCommon.makeAuthExtraParams(settings), getPKCEParams(), {
            redirect_uri: settings.redirectUri,
            response_type: 'code',
            ka: _k.KAKAO_AGENT,
            origin: origin
          });

          return authCommon.makeAuthUrl(params);
        }

        function getPKCEParams() {
          var genCodeVerifier = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

          if (genCodeVerifier) {
            pkce.generateCodeVerifier();
          }

          return {
            code_challenge: pkce.getCodeChallenge(),
            code_challenge_method: 'S256'
          };
        }

        function getSavedSettingsWithResponseState(response, settings) {
          if (!_.has(settings, response.stateToken)) {
            throw new _k.KakaoError('security error: #CST2');
          }

          var savedSettings = settings[response.stateToken];
          delete settings[response.stateToken];
          delete response.stateToken;

          return savedSettings;
        }

        function handleAuthResponse(settings, resp) {
          if (resp.error) {
            if (resp.error !== 'access_denied') {
              secret.setAccessToken(null);
            }
          } else {
            secret.setAccessToken(resp.access_token, settings.persistAccessToken);
            _eventObserver.dispatch('LOGIN');
          }

          authCommon.runAuthCallback(settings, resp);
        }

        function logout(callback) {
          callback = callback || _.emptyFunc;
          _k.validate(callback, _.isFunction, 'Auth.logout');

          Kakao.API.request({
            url: '/v1/user/logout',
            always: function always() {
              secret.setAccessToken(null);
              _eventObserver.dispatch('LOGOUT');
              callback(true);
            }
          });
        }

        var proxyForAccessToken = null;
        function issueAccessToken(settings) {
          settings = _k.processRules(settings, rules.issueAccessToken, 'Auth.issueAccessToken');

          if (!proxyForAccessToken) {
            proxyForAccessToken = proxy.getProxy({}, function (response) {
              handleAuthResponse(settings, response);
            });

            cleanups.push(function () {
              proxyForAccessToken.destroy();
              proxyForAccessToken = null;
            });
          }

          proxyForAccessToken.getAccessToken(settings.code, _k.RUNTIME.appKey, settings.redirectUri);
        }

        var proxyForStoryChannel = null;
        var savedSettingsForStoryChannel = {};
        function selectStoryChannel(settings) {
          settings = _k.processRules(settings, rules.selectStoryChannel, 'Auth.selectStoryChannel');

          if (!proxyForStoryChannel) {
            proxyForStoryChannel = proxy.getProxy({}, function (response) {
              var savedSettings = getSavedSettingsWithResponseState(response, savedSettingsForStoryChannel);
              authCommon.runAuthCallback(savedSettings, response);
            });

            cleanups.push(function () {
              proxyForStoryChannel.destroy();
              proxyForStoryChannel = null;
            });
          }

          var stateToken = _.getRandomString();
          savedSettingsForStoryChannel[stateToken] = settings;

          var params = _.extend({}, authCommon.makeAuthParams(settings), {
            state: stateToken,
            proxy: "easyXDM_Kakao_" + proxyForStoryChannel.channel + "_provider",
            token: settings.extendedToken || ''
          });

          authCommon.openLoginPopup(_k.URL.storySelectChannel + "?" + _.buildQueryString(params));
        }

        return {
          createLoginButton: createLoginButton,
          login: login,
          loginForm: loginForm,
          autoLogin: autoLogin,
          logout: logout,
          issueAccessToken: issueAccessToken,
          selectStoryChannel: selectStoryChannel
        };
      };
    }, { "../browserProxy.js": 39, "../common": 40, "../eventObserver": 41, "../poller": 43, "../util": 44, "../webviewchecker": 45, "./common": 8, "./kakaotalk": 10, "./pkce": 13, "./proxy": 14, "./rules": 15, "./secret": 16 }], 12: [function (require, module, exports) {
      module.exports = function () {
        var _ = require('../util');
        var _k = require('../common');
        var _eventObserver = require('../eventObserver');
        var poller = require('../poller')(1000, 600); 

        var rules = require('./rules');
        var authCommon = require('./common');
        var ajax = require('./ajax');

        function authorize(settings) {
          settings = _k.processRules(settings, rules.authorize, 'Auth.authorize');

          if (settings.autoLogin && !/KAKAOTALK/i.test(_k.UA.ua)) {
            handleResponse(settings, {
              error: 'auto_login',
              error_description: 'NOT_SUPPORTED_BROWSER'
            });
            return false;
          }

          var isEasyLogin = isSupport() && settings.throughTalk && !settings.autoLogin && !settings.reauthenticate;
          var authTranId = getTranId();

          var baseAuthParams = _.extend({}, authCommon.makeAuthParams(settings), authCommon.makeAuthExtraParams(settings), {
            redirect_uri: settings.redirectUri || _k.URL.redirectUri,
            response_type: 'code',
            auth_tran_id: authTranId
          });

          var webAuthParams = _.extend({}, baseAuthParams, {
            ka: _k.KAKAO_AGENT,
            is_popup: settings.isPopup
          });
          var webAuthUrl = authCommon.makeAuthUrl(webAuthParams);

          var loginUrl = isEasyLogin ? makeEasyLoginUrl(settings, baseAuthParams, webAuthUrl) : settings.reauthenticate ? webAuthUrl + "&auth_type=reauthenticate" : webAuthUrl;

          var popup = null;
          if (settings.isPopup) {
            popup = authCommon.openLoginPopup(loginUrl);
          } else {
            location.href = loginUrl;
          }

          if (isEasyLogin || settings.isPopup) {
            poller.start(function () {
              if (authTranId) {
                var params = {
                  client_id: _k.RUNTIME.appKey,
                  auth_tran_id: authTranId
                };

                ajax.checkAuthorize(_k.URL.authDomain + "/apiweb/code.json?" + _.buildQueryString(params), function (httpResp) {
                  var isValidResp = onResponse(settings, httpResp);
                  if (isValidResp) {
                    poller.stop();
                    popup && popup.close && popup.close();
                  }

                  if (!isEasyLogin && popup && popup.closed) {
                    poller.stop();
                  }
                });
              }
            }, function () {
              handleResponse(settings, {
                error: 'timeout',
                error_description: 'LOGIN_TIMEOUT'
              });
            });
          }

          _eventObserver.dispatch('LOGIN_START');
        }

        function isSupport() {
          return _k.UA.os.ios || _k.UA.os.android ? !/KAKAOTALK/i.test(_k.UA.ua) : false;
        }

        function getTranId() {
          var tranId = Math.random().toString(36).slice(2) + _k.RUNTIME.appKey + Date.now().toString(36);
          return tranId.slice(0, 60);
        }

        function onResponse(settings, httpResp) {
          if (httpResp.status === 200 && httpResp.response) {
            var resp = JSON.parse(httpResp.response);

            if (resp.status === 'ok' && resp.code) {
              handleResponse(settings, {
                code: resp.code
              });
              return true;
            } else if (resp.status === 'error' && (resp.error_code === '500' || resp.error_code === '600')) {
              handleResponse(settings, {
                error: resp.error,
                error_description: resp.error_description
              });
              return true;
            }
          }

          return false;
        }

        function handleResponse(settings, respObj) {
          if (settings.state) {
            respObj.state = settings.state;
          }

          if (settings.redirectUri) {
            location.href = settings.redirectUri + "?" + _.buildQueryString(respObj);
          } else {
            authCommon.runAuthCallback(settings, respObj);
          }
        }

        function makeEasyLoginUrl(settings, baseAuthParams, fallbackUrl) {
          var easyLoginAuthParams = _.extend({}, baseAuthParams, {
            is_popup: true
          });

          var getAndroidLoginIntent = function getAndroidLoginIntent() {
            var intent = ['intent:#Intent', 'action=com.kakao.talk.intent.action.CAPRI_LOGGED_IN_ACTIVITY', 'launchFlags=0x08880000', "S.com.kakao.sdk.talk.appKey=" + _k.RUNTIME.appKey, "S.com.kakao.sdk.talk.redirectUri=" + easyLoginAuthParams.redirect_uri, "S.com.kakao.sdk.talk.kaHeader=" + _k.KAKAO_AGENT, "S.com.kakao.sdk.talk.extraparams=" + encodeURIComponent(JSON.stringify(easyLoginAuthParams))];

            if (settings.state) {
              intent.push("S.com.kakao.sdk.talk.state=" + settings.state);
            }

            return intent.concat(["S.browser_fallback_url=" + encodeURIComponent(fallbackUrl), 'end;']).join(';');
          };

          var getIosLoginUniversalLink = function getIosLoginUniversalLink() {
            var iosLoginUrl = authCommon.makeAuthUrl(easyLoginAuthParams);
            var iosFallbackUrl = settings.isPopup ? iosLoginUrl : fallbackUrl;

            var iosEasyLoginUrl = iosLoginUrl + "&ka=" + encodeURIComponent(_k.KAKAO_AGENT);
            var talkWebviewUrl = _k.URL.talkInappScheme + "?url=" + encodeURIComponent(iosEasyLoginUrl);

            return "" + _k.URL.universalKakaoLink + encodeURIComponent(talkWebviewUrl) + "&web=" + encodeURIComponent(iosFallbackUrl);
          };

          return _k.UA.os.android ? getAndroidLoginIntent() : getIosLoginUniversalLink();
        }

        return {
          authorize: authorize
        };
      }();
    }, { "../common": 40, "../eventObserver": 41, "../poller": 43, "../util": 44, "./ajax": 7, "./common": 8, "./rules": 15 }], 13: [function (require, module, exports) {
      module.exports = function () {
        var _crypto = require('../../vendor/crypto-js');

        var codeVerifier = null;

        function getCodeVerifier() {
          return codeVerifier;
        }

        function generateCodeVerifier() {
          var randomArray = _crypto.lib.WordArray.random(48);
          codeVerifier = base64URLEncode(randomArray); 
        }

        function getCodeChallenge() {
          return base64URLEncode(_crypto.SHA256(codeVerifier));
        }

        function base64URLEncode(hash) {
          return hash.toString(_crypto.enc.Base64).replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
        }

        return {
          getCodeVerifier: getCodeVerifier,
          generateCodeVerifier: generateCodeVerifier,
          getCodeChallenge: getCodeChallenge
        };
      }();
    }, { "../../vendor/crypto-js": 46 }], 14: [function (require, module, exports) {
      module.exports = function () {
        var _ = require('../util');
        var _k = require('../common');
        var _easyXDM = require('../../vendor/easyXDM');

        var pkce = require('./pkce');

        function getProxy(config, onResponse) {
          _.extend(config, {
            remote: _k.URL.loginWidget,
            channel: _.getRandomString()
          });

          return _k.guardCreateEasyXDM(function () {
            var proxy = new _easyXDM.Rpc(config, {
              local: {
                postResponse: onResponse,
                getKakaoAgent: function getKakaoAgent() {
                  return _k.KAKAO_AGENT;
                },
                getCodeVerifier: pkce.getCodeVerifier
              },
              remote: {
                getCode: {},
                getAccessToken: {},
                setClient: {},
                setStateToken: {},
                deleteAuthCookie: {}
              }
            });

            proxy.channel = config.channel;
            return proxy;
          });
        }

        return {
          getProxy: getProxy
        };
      }();
    }, { "../../vendor/easyXDM": 47, "../common": 40, "../util": 44, "./pkce": 13 }], 15: [function (require, module, exports) {
      module.exports = function () {
        var _ = require('../util');

        var defaultCallbacks = {
          success: _.emptyFunc,
          fail: _.emptyFunc,
          always: _.emptyFunc
        };

        var loginDefaultSettings = _.extend({
          throughTalk: true,
          persistAccessToken: true,
          persistRefreshToken: false 
        }, defaultCallbacks);

        var loginCommonSettings = {
          success: _.isFunction,
          fail: _.isFunction,
          always: _.isFunction,
          persistAccessToken: _.isBoolean,
          persistRefreshToken: _.isBoolean,
          approvalType: _.isOneOf(['project']),
          scope: _.isString,
          throughTalk: _.isBoolean,
          plusFriendPublicId: _.isString,
          channelPublicId: _.isString,
          serviceTerms: _.isString,
          redirectUri: _.isString,
          state: _.isString,
          deviceType: _.isOneOf(['watch', 'tv'])
        };

        return {
          createLoginButton: {
            required: {
              container: _.passesOneOf([_.isElement, _.isString])
            },
            optional: _.extend({
              lang: _.isOneOf(['en', 'kr']),
              size: _.isOneOf(['small', 'medium', 'large'])
            }, loginCommonSettings),
            defaults: _.extend({
              lang: 'kr',
              size: 'medium'
            }, loginDefaultSettings)
          },
          login: {
            optional: loginCommonSettings,
            defaults: loginDefaultSettings
          },
          authorize: {
            optional: {
              redirectUri: _.isString,
              approvalType: _.isOneOf(['project']),
              scope: _.isString,
              throughTalk: _.isBoolean,
              plusFriendPublicId: _.isString,
              channelPublicId: _.isString,
              serviceTerms: _.isString,
              isPopup: _.isBoolean,
              state: _.isString,
              autoLogin: _.isBoolean,
              deviceType: _.isOneOf(['watch', 'tv']),
              reauthenticate: _.isBoolean,
              success: _.isFunction,
              fail: _.isFunction,
              always: _.isFunction
            },
            defaults: {
              throughTalk: true,
              isPopup: false,
              reauthenticate: false,
              success: _.emptyFunc,
              fail: _.emptyFunc,
              always: _.emptyFunc
            }
          },
          autoLogin: {
            optional: {
              success: _.isFunction,
              fail: _.isFunction,
              always: _.isFunction
            },
            defaults: defaultCallbacks
          },
          issueAccessToken: {
            required: {
              code: _.isString,
              redirectUri: _.isString
            },
            optional: {
              success: _.isFunction,
              fail: _.isFunction,
              always: _.isFunction
            },
            defaults: defaultCallbacks
          },
          selectStoryChannel: {
            optional: {
              extendedToken: _.isString,
              success: _.isFunction,
              fail: _.isFunction,
              always: _.isFunction
            },
            defaults: defaultCallbacks
          }
        };
      }();
    }, { "../util": 44 }], 16: [function (require, module, exports) {
      module.exports = function () {
        var _ = require('../util');
        var _k = require('../common');
        var _crypto = require('../../vendor/crypto-js');

        function getAppKey() {
          return _k.RUNTIME.appKey;
        }

        function getAccessToken() {
          if (!_k.RUNTIME.accessToken) {
            _k.RUNTIME.accessToken = retrieveItem(getAccessTokenKey());
          }

          return _k.RUNTIME.accessToken;
        }

        function setAccessToken(token, persist) {
          _k.RUNTIME.accessToken = token;
          if (token === null || persist === false) {
            removeItem(getAccessTokenKey());
          } else {
            storeItem(getAccessTokenKey(), token);
          }
        }

        function getRefreshToken() {
          console.log('unsupported operation: Auth.getRefreshToken()');
          return '';
        }

        function setRefreshToken(token) {
          console.log('unsupported operation: Auth.setRefreshToken()');
        }

        function getStatusInfo(callback) {
          _k.validate(callback, _.isFunction, 'Auth.getStatusInfo');

          if (!getAccessToken()) {
            callback({
              status: 'not_connected'
            });
          } else {
            Kakao.API.request({
              url: '/v2/user/me',
              success: function success(res) {
                callback({
                  status: 'connected',
                  user: res
                });
              },
              fail: function fail() {
                callback({
                  status: 'not_connected'
                });
              }
            });
          }
        }

        function storeItem(key, value) {
          var item = encrypt(value, getAppKey());
          _.localStorage.setItem(key, item);
        }

        function retrieveItem(key) {
          var item = _.localStorage.getItem(key);
          return item ? decrypt(item, getAppKey()) : null;
        }

        function removeItem(key) {
          _.localStorage.removeItem(key);
        }

        var tokenStorageKeys = {};
        function getAccessTokenKey() {
          if (!tokenStorageKeys.accessTokenKey) {
            tokenStorageKeys.accessTokenKey = 'kakao_' + hash('kat' + getAppKey());
          }

          return tokenStorageKeys.accessTokenKey;
        }

        function hash(msg) {
          return _crypto.MD5(msg).toString();
        }

        function encrypt(msg, passphrase) {
          return _crypto.AES.encrypt(msg, passphrase).toString();
        }

        function decrypt(encrypted, passphrase) {
          return _crypto.AES.decrypt(encrypted, passphrase).toString(_crypto.enc.Utf8);
        }

        return {
          getAppKey: getAppKey,
          getAccessToken: getAccessToken,
          setAccessToken: setAccessToken,
          getRefreshToken: getRefreshToken,
          setRefreshToken: setRefreshToken,
          getStatusInfo: getStatusInfo
        };
      }();
    }, { "../../vendor/crypto-js": 46, "../common": 40, "../util": 44 }], 17: [function (require, module, exports) {
      module.exports = function () {
        var _ = require('../util');
        var _k = require('../common');
        var origin = require('../browserProxy').getOrigin();

        function createAnchorImage(settings, imgSrc, imgTitle) {
          var a$ = document.createElement('a');
          a$.setAttribute('href', '#');

          var img$ = document.createElement('img');
          img$.setAttribute('src', imgSrc);
          img$.setAttribute('title', imgTitle);
          img$.setAttribute('alt', imgTitle);

          if (settings.supportMultipleDensities) {
            img$.setAttribute('srcset', [imgSrc.replace('.png', '_2X.png 2x'), imgSrc.replace('.png', '_3X.png 3x')].join(', '));
          }

          a$.appendChild(img$);
          return a$;
        }

        function makeChannelParams(apiVer) {
          return _.buildQueryString({
            api_ver: apiVer,
            kakao_agent: _k.KAKAO_AGENT,
            app_key: _k.RUNTIME.appKey,
            referer: origin + location.pathname + location.search
          });
        }

        return {
          createAnchorImage: createAnchorImage,
          makeChannelParams: makeChannelParams
        };
      }();
    }, { "../browserProxy": 39, "../common": 40, "../util": 44 }], 18: [function (require, module, exports) {
      module.exports = function () {
        var _k = require('../common');

        var Channel = {};
        var cleanups = [];

        _k.initSubModules(Channel, [require('./request')(cleanups)]);

        Channel.cleanup = function () {
          _k.emptyCleanups(cleanups);
        };

        return Channel;
      }();
    }, { "../common": 40, "./request": 19 }], 19: [function (require, module, exports) {
      module.exports = function (cleanups) {
        var _ = require('../util');
        var _k = require('../common');

        var rules = require('./rules');
        var channelCommon = require('./common');

        var API_VER = '1.1';
        var ADD_CHANNEL_POPUP_NAME = 'channel_add_social_plugin';
        var CHAT_POPUP_NAME = 'channel_chat_social_plugin';
        var POPUP_FEATURES = 'width=350, height=510';

        function createAddChannelButton(settings) {
          var container$ = _.getElement(settings.container);
          if (!container$) {
            throw new _k.KakaoError('container is required for Channel.createAddChannelButton: pass in element or id');
          } else {
            _k.applyAttributes(settings, container$, {
              channelPublicId: 'data-channel-public-id',
              size: 'data-size',
              supportMultipleDensities: 'data-support-multiple-densities'
            });
          }

          settings = _k.processRules(settings, rules.createAddChannelButton, 'Channel.createAddChannelButton');

          var imgSrc = getAddChannelImgSrc(settings);
          var anchor$ = channelCommon.createAnchorImage(settings, imgSrc, '카카오톡 채널 추가 버튼');
          container$.appendChild(anchor$);

          var clickHandler = function clickHandler(e) {
            e.preventDefault();
            openAddChannelPopup(settings);
          };

          _.addEvent(anchor$, 'click', clickHandler);
          cleanups.push(function () {
            _.removeEvent(anchor$, 'click', clickHandler);
            container$.removeChild(anchor$);
          });
        }

        function addChannel(settings) {
          settings = _k.processRules(settings, rules.addChannel, 'Channel.addChannel');
          openAddChannelPopup(settings);
        }

        function getAddChannelImgSrc(settings) {
          var filename = "friendadd_" + settings.size + "_yellow_rect.png";
          return _k.URL.channelIcon + "/channel/" + filename;
        }

        function openAddChannelPopup(settings) {
          var addChannelUrl = _k.URL.channel + "/" + settings.channelPublicId + "/friend";
          if (Kakao.isInitialized()) {
            addChannelUrl += "?" + channelCommon.makeChannelParams(API_VER);
          }

          _k.windowOpen(addChannelUrl, ADD_CHANNEL_POPUP_NAME, POPUP_FEATURES);
        }

        function createChatButton(settings) {
          var container$ = _.getElement(settings.container);
          if (!container$) {
            throw new _k.KakaoError('container is required for Channel.createChatButton: pass in element or id');
          } else {
            _k.applyAttributes(settings, container$, {
              channelPublicId: 'data-channel-public-id',
              size: 'data-size',
              color: 'data-color',
              shape: 'data-shape',
              title: 'data-title',
              supportMultipleDensities: 'data-support-multiple-densities'
            });
          }

          settings = _k.processRules(settings, rules.createChatButton, 'Channel.createChatButton');

          var imgSrc = getChatImgSrc(settings);
          var anchor$ = channelCommon.createAnchorImage(settings, imgSrc, '카카오톡 채널 1:1 채팅 버튼');
          container$.appendChild(anchor$);

          var clickHandler = function clickHandler(e) {
            e.preventDefault();
            openChatPopup(settings);
          };

          _.addEvent(anchor$, 'click', clickHandler);
          cleanups.push(function () {
            _.removeEvent(anchor$, 'click', clickHandler);
            container$.removeChild(anchor$);
          });
        }

        function chat(settings) {
          settings = _k.processRules(settings, rules.chat, 'Channel.chat');
          openChatPopup(settings);
        }

        function getChatImgSrc(settings) {
          var filename = settings.title + "_" + settings.size + "_" + settings.color + "_" + settings.shape + ".png";
          return _k.URL.channelIcon + "/channel/" + filename;
        }

        function openChatPopup(settings) {
          var chatUrl = _k.URL.channel + "/" + settings.channelPublicId + "/chat";
          if (Kakao.isInitialized()) {
            chatUrl += "?" + channelCommon.makeChannelParams(API_VER);
          }

          _k.windowOpen(chatUrl, CHAT_POPUP_NAME, POPUP_FEATURES);
        }

        return {
          createAddChannelButton: createAddChannelButton,
          addChannel: addChannel,
          createChatButton: createChatButton,
          chat: chat
        };
      };
    }, { "../common": 40, "../util": 44, "./common": 17, "./rules": 20 }], 20: [function (require, module, exports) {
      module.exports = function () {
        var _ = require('../util');

        var sizes = ['small', 'large'];
        var colors = ['yellow', 'mono'];
        var shapes = ['pc', 'mobile'];
        var titles = ['consult', 'question'];

        return {
          createAddChannelButton: {
            required: {
              container: _.passesOneOf([_.isElement, _.isString]),
              channelPublicId: _.isString
            },
            optional: {
              size: _.isOneOf(sizes),
              supportMultipleDensities: _.isBoolean
            },
            defaults: {
              size: sizes[0],
              supportMultipleDensities: false
            }
          },
          addChannel: {
            required: {
              channelPublicId: _.isString
            }
          },

          createChatButton: {
            required: {
              container: _.passesOneOf([_.isElement, _.isString]),
              channelPublicId: _.isString
            },
            optional: {
              size: _.isOneOf(sizes),
              color: _.isOneOf(colors),
              shape: _.isOneOf(shapes),
              title: _.isOneOf(titles),
              supportMultipleDensities: _.isBoolean
            },
            defaults: {
              size: sizes[0],
              color: colors[0],
              shape: shapes[0],
              title: titles[0],
              supportMultipleDensities: false
            }
          },
          chat: {
            required: {
              channelPublicId: _.isString
            }
          }
        };
      }();
    }, { "../util": 44 }], 21: [function (require, module, exports) {
      module.exports = function () {
        var _ = require('../util');

        function capitalize(str) {
          return str.charAt(0).toUpperCase() + str.slice(1);
        }

        function stringifyLCBA(lcba) {
          return _.isObject(lcba) ? JSON.stringify(lcba) : lcba;
        }

        function requestAPI(url, data) {
          return Kakao.API.request({
            url: url,
            data: data
          });
        }

        return {
          capitalize: capitalize,
          stringifyLCBA: stringifyLCBA,
          requestAPI: requestAPI
        };
      }();
    }, { "../util": 44 }], 22: [function (require, module, exports) {
      module.exports = function () {
        var _k = require('../common');
        var rules = require('./rules');
        var linkCommon = require('./common');


        function uploadImage(settings) {
          settings = _k.processRules(settings, rules.uploadImage, 'Link.uploadImage');

          return linkCommon.requestAPI('/v2/api/talk/message/image/upload', {
            file: settings.file
          });
        }

        function deleteImage(settings) {
          settings = _k.processRules(settings, rules.deleteImage, 'Link.deleteImage');

          return linkCommon.requestAPI('/v2/api/talk/message/image/delete', {
            image_url: settings.imageUrl
          });
        }

        function scrapImage(settings) {
          settings = _k.processRules(settings, rules.scrapImage, 'Link.scrapImage');

          return linkCommon.requestAPI('/v2/api/talk/message/image/scrap', {
            image_url: settings.imageUrl
          });
        }

        return {
          uploadImage: uploadImage,
          deleteImage: deleteImage,
          scrapImage: scrapImage
        };
      }();
    }, { "../common": 40, "./common": 21, "./rules": 27 }], 23: [function (require, module, exports) {
      module.exports = function () {
        var _k = require('../common');

        var Link = {};
        var cleanups = [];

        _k.initSubModules(Link, [require('./linker')(cleanups), require('./imageAPI')]);

        Link.cleanup = function () {
          _k.emptyCleanups(cleanups);
        };

        return Link;
      }();
    }, { "../common": 40, "./imageAPI": 22, "./linker": 25 }], 24: [function (require, module, exports) {
      module.exports = function () {
        var _ = require('../util');
        var _k = require('../common');

        var linkCommon = require('./common');
        var propGenerator = require('./propGenerator');

        var linkScheme = function () {
          var phase = 'release';
          return _k.UA.os.ios && (phase === 'alpha' || phase === 'sandbox') ? 'alphalink' : 'kakaolink';
        }();

        var KakaoLink = function KakaoLink(settings, validatedResp) {
          _classCallCheck(this, KakaoLink);

          this.appkey = _k.RUNTIME.appKey;
          this.appver = '1.0';
          this.linkver = '4.0';
          this.extras = _.extend({
            KA: _k.KAKAO_AGENT
          }, settings.extras);

          if (settings.serverCallbackArgs) {
            this.extras.lcba = linkCommon.stringifyLCBA(settings.serverCallbackArgs);
          }

          this.template_json = validatedResp.template_msg;
          this.template_args = validatedResp.template_args;
          this.template_id = validatedResp.template_id;
        };

        function makeKakaoLink(settings, validatedResp) {
          var kakaoLink = new KakaoLink(settings, validatedResp);

          if (JSON.stringify(kakaoLink).length > 10000) {
            throw new _k.KakaoError('Failed to send message because it exceeds the message size limit. Please contact the app administrator.');
          }

          return linkScheme + "://send?" + _.buildQueryString(kakaoLink);
        }

        var DefaultLink = function DefaultLink(settings) {
          var _this = this;

          _classCallCheck(this, DefaultLink);

          this.link_ver = '4.0';
          this.template_object = {
            object_type: settings.objectType,
            button_title: settings.buttonTitle || ''
          };

          _.each(settings, function (setting, key) {
            var prop = propGenerator.create(setting, key, 'defaultObject');
            if (prop) {
              _this.template_object[key] = prop;
            }
          });
        };

        var defaultLinks = {
          FeedLink: DefaultLink,
          CommerceLink: DefaultLink
        };

        defaultLinks['ListLink'] = function (_DefaultLink) {
          _inherits(ListLink, _DefaultLink);

          function ListLink(settings) {
            _classCallCheck(this, ListLink);

            var _this2 = _possibleConstructorReturn(this, (ListLink.__proto__ || Object.getPrototypeOf(ListLink)).call(this, settings));

            var tpl = _this2.template_object;
            tpl.header_title = settings.headerTitle || '';
            tpl.header_link = tpl.headerLink || {};
            delete tpl.headerLink;

            if (console && (settings.headerImageUrl || settings.headerImageWidth || settings.headerImageHeight)) {
              var params = ['headerImageUrl', 'headerImageWidth', 'headerImageHeight'];
              console.warn("KakaoWarning: The parameters (" + params.join(', ') + ") for header background image are deprecated.");
            }
            return _this2;
          }

          return ListLink;
        }(DefaultLink);

        defaultLinks['LocationLink'] = function (_DefaultLink2) {
          _inherits(LocationLink, _DefaultLink2);

          function LocationLink(settings) {
            _classCallCheck(this, LocationLink);

            var _this3 = _possibleConstructorReturn(this, (LocationLink.__proto__ || Object.getPrototypeOf(LocationLink)).call(this, settings));

            var tpl = _this3.template_object;
            tpl.address = settings.address || '';
            tpl.address_title = settings.addressTitle || '';
            return _this3;
          }

          return LocationLink;
        }(DefaultLink);

        defaultLinks['TextLink'] = function (_DefaultLink3) {
          _inherits(TextLink, _DefaultLink3);

          function TextLink(settings) {
            _classCallCheck(this, TextLink);

            var _this4 = _possibleConstructorReturn(this, (TextLink.__proto__ || Object.getPrototypeOf(TextLink)).call(this, settings));

            _this4.template_object.text = settings.text || '';
            return _this4;
          }

          return TextLink;
        }(DefaultLink);

        var ScrapLink = function ScrapLink(settings) {
          _classCallCheck(this, ScrapLink);

          this.link_ver = '4.0';
          this.request_url = settings.requestUrl;
          if (settings.templateId) {
            this.template_id = settings.templateId;
          }
          if (settings.templateArgs) {
            this.template_args = settings.templateArgs;
          }
        };

        var CustomLink = function CustomLink(settings) {
          _classCallCheck(this, CustomLink);

          this.link_ver = '4.0';
          this.template_id = settings.templateId;
          this.template_args = settings.templateArgs;
        };

        function makeDefaultLink(settings) {
          var clazz = defaultLinks[linkCommon.capitalize(settings.objectType) + "Link"];
          return new clazz(settings);
        }

        function makeScrapLink(settings) {
          return new ScrapLink(settings);
        }

        function makeCustomLink(settings) {
          return new CustomLink(settings);
        }

        return {
          makeKakaoLink: makeKakaoLink,
          makeDefaultLink: makeDefaultLink,
          makeScrapLink: makeScrapLink,
          makeCustomLink: makeCustomLink
        };
      }();
    }, { "../common": 40, "../util": 44, "./common": 21, "./propGenerator": 26 }], 25: [function (require, module, exports) {
      module.exports = function (cleanups) {
        var _ = require('../util');
        var _k = require('../common');

        var rules = require('./rules');
        var linkCommon = require('./common');
        var linkGenerator = require('./linkGenerator');
        var webSender = require('./webSender');
        var talkSender = require('./talkSender');



        function createDefaultButton(settings) {
          if (!settings.objectType || !_.isOneOf(rules.defaultObjectTypes)(settings.objectType)) {
            throw new _k.KakaoError("objectType should be one of (" + rules.defaultObjectTypes.join(', ') + ")");
          }

          var rule = rules["create" + linkCommon.capitalize(settings.objectType) + "Button"];
          settings = _k.processRules(settings, rule, 'Link.createDefaultButton');

          addClickEvent(settings, 'default');
        }

        function sendDefault(settings) {
          if (!settings.objectType || !_.isOneOf(rules.defaultObjectTypes)(settings.objectType)) {
            throw new _k.KakaoError("objectType should be one of (" + rules.defaultObjectTypes.join(', ') + ")");
          }

          var rule = rules["send" + linkCommon.capitalize(settings.objectType)];
          settings = _k.processRules(settings, rule, 'Link.sendDefault');

          doSend(settings, 'default');
        }

        function createScrapButton(settings) {
          settings = _k.processRules(settings, rules.createScrapButton, 'Link.createScrapButton');
          addClickEvent(settings, 'scrap');
        }

        function sendScrap(settings) {
          settings = _k.processRules(settings, rules.sendScrap, 'Link.sendScrap');
          doSend(settings, 'scrap');
        }

        function createCustomButton(settings) {
          settings = _k.processRules(settings, rules.createCustomButton, 'Link.createCustomButton');
          addClickEvent(settings, 'custom');
        }

        function sendCustom(settings) {
          settings = _k.processRules(settings, rules.sendCustom, 'Link.sendCustom');
          doSend(settings, 'custom');
        }

        function addClickEvent(settings, linkType) {
          var container$ = _.getElement(settings.container);
          if (!container$) {
            throw new _k.KakaoError('container is required for KakaoTalk Link: pass in element or id');
          }

          var clickHandler = function clickHandler(e) {
            e.preventDefault();
            e.stopPropagation();

            doSend(settings, linkType);
          };

          _.addEvent(container$, 'click', clickHandler);
          cleanups.push(function () {
            _.removeEvent(container$, 'click', clickHandler);
          });
        }

        var linkTypeMapper = {
          default: {
            makeLinkFunc: linkGenerator.makeDefaultLink,
            requestUrl: '/v2/api/kakaolink/talk/template/default'
          },
          scrap: {
            makeLinkFunc: linkGenerator.makeScrapLink,
            requestUrl: '/v2/api/kakaolink/talk/template/scrap'
          },
          custom: {
            makeLinkFunc: linkGenerator.makeCustomLink,
            requestUrl: '/v2/api/kakaolink/talk/template/validate'
          }
        };

        function doSend(settings, linkType) {
          var _linkTypeMapper$linkT = linkTypeMapper[linkType],
              makeLinkFunc = _linkTypeMapper$linkT.makeLinkFunc,
              requestUrl = _linkTypeMapper$linkT.requestUrl;

          var linkObj = makeLinkFunc(settings);

          var isIpad = _k.UA.os.ios && _k.UA.platform === 'tablet';
          if (!settings.throughTalk || _k.UA.platform !== 'mobile' && !isIpad) {
            webSender.send(settings, linkType, linkObj);
          } else {
            talkSender.send(settings, requestUrl, linkObj);
          }
        }

        return {
          createDefaultButton: createDefaultButton,
          createDefault: createDefaultButton,
          sendDefault: sendDefault,
          createScrapButton: createScrapButton,
          createScrap: createScrapButton,
          sendScrap: sendScrap,
          createCustomButton: createCustomButton,
          createCustom: createCustomButton,
          sendCustom: sendCustom
        };
      };
    }, { "../common": 40, "../util": 44, "./common": 21, "./linkGenerator": 24, "./rules": 27, "./talkSender": 28, "./webSender": 29 }], 26: [function (require, module, exports) {
      module.exports = function () {
        var _ = require('../util');
        var _k = require('../common');

        var ACTION_TYPE = {
          WEB: 'web',
          INWEB: 'inweb',
          APP: 'app'
        };
        var commonOptional = {
          displayType: _.isOneOf(['both', 'sender', 'receiver'])
        };

        function imageSizeValidator(sizeValue) {
          var parsed = parseInt(sizeValue, 10);

          if (isNaN(parsed) || parsed < 80) {
            throw new _k.KakaoError('Illegal argument for image: width/height should be a number larger than 80');
          }

          return true;
        }

        function parseImageSize(image) {
          image.width = parseInt(image.width, 10);
          image.height = parseInt(image.height, 10);
        }

        function buttonObjValidator(buttonObj) {
          var buttonObjKey = _.keys(buttonObj)[0];
          if (buttonObjKey === 'webButton') {
            _k.processRules(buttonObj.webButton, rules[buttonObjKey], "parameter webButton in Link.createTalkLink");
          } else {
            _k.processRules(buttonObj.appButton, rules[buttonObjKey], "parameter appButton in Link.createTalkLink");
          }
          return true;
        }

        function getHorizontalButtonObj(setting) {
          var leftButtonKey = _.keys(setting[0]);
          var rightButtonKey = _.keys(setting[1]);
          var leftButton = setting[0][leftButtonKey];
          var rightButton = setting[1][rightButtonKey];
          return {
            "objtype": "horizontal",
            "subs": [{
              "objtype": "button",
              "text": leftButton.text,
              "action": getAction(leftButton.type, leftButton)
            }, {
              "objtype": "button",
              "text": rightButton.text,
              "action": getAction(rightButton.type, rightButton)
            }],
            "disptype": "both"
          };
        }

        function getLabelObj(setting) {
          return {
            "objtype": "label",
            "text": setting.text,
            "disptype": setting.displayType
          };
        }

        function getImageObj(actionType, setting) {
          return {
            "objtype": "image",
            "src": setting.src,
            "width": setting.width,
            "height": setting.height,
            "action": getAction(actionType, setting),
            "disptype": setting.displayType
          };
        }

        function getButtonObj(actionType, setting) {
          return {
            "objtype": "button",
            "text": setting.text,
            "action": getAction(actionType, setting),
            "disptype": setting.displayType
          };
        }

        function getLinkObj(actionType, setting) {
          return {
            "objtype": "link",
            "text": setting.text,
            "action": getAction(actionType, setting),
            "disptype": setting.displayType
          };
        }

        function getAction(actionType, setting) {
          switch (actionType) {
            case "web":
              return getWebAction();
            case "app":
              return getAppAction();
            default:
              return undefined; 
          }

          function getWebAction() {
            return {
              "type": setting.type, 
              "url": setting.url ? formatUrl(setting.url) : undefined,
              "auth": setting.auth 
            };

            function formatUrl(maybeUrl) {
              if (maybeUrl.indexOf("://") > -1) {
                return maybeUrl;
              } else {
                return "http://" + maybeUrl;
              }
            }
          }

          function getAppAction() {
            return {
              "type": "app",
              "url": setting.webUrl,
              "actioninfo": getAppActionInfos(setting.execParams, setting.marketParams)
            };

            function getAppActionInfos(execParams, marketParams) {
              var baseInfos = {
                android: {
                  "os": "android"
                },
                iphone: {
                  "os": "ios",
                  "devicetype": "phone"
                },
                ipad: {
                  "os": "ios",
                  "devicetype": "pad"
                }
              };

              if (execParams) {
                execParams = _k.processRules(execParams, ruleAppParams, 'execParams in Kakao.Link');
              }

              if (marketParams) {
                marketParams = _k.processRules(marketParams, ruleAppParams, 'marketParams in Kakao.Link');
              }

              var actionInfos = [];
              _.each(baseInfos, function (baseInfo, platform) {
                var info = _.extend({}, baseInfo);

                if (execParams && execParams[platform]) {
                  info.execparam = _.buildQueryString(execParams[platform], false);
                }

                if (marketParams && marketParams[platform]) {
                  info.marketparam = _.buildQueryString(marketParams[platform], false);
                }

                if (info.execparam || info.marketparam) {
                  actionInfos.push(info);
                }
              });
              return actionInfos;
            }
          }
        }

        function getButton(setting) {
          return {
            "title": setting.title,
            "link": getLink(setting.link)
          };
        }

        function getButtons(settings) {
          return _.map(settings, function (setting) {
            return {
              "title": setting.title,
              "link": getLink(setting.link)
            };
          });
        }

        function getSocial(setting) {
          return {
            "like_count": setting.likeCount,
            "comment_count": setting.commentCount,
            "shared_count": setting.sharedCount,
            "view_count": setting.viewCount,
            "subscriber_count": setting.subscriberCount
          };
        }

        function getContent(setting) {
          return {
            "title": setting.title,
            "image_url": setting.imageUrl,
            "link": getLink(setting.link),
            "image_width": setting.imageWidth,
            "image_height": setting.imageHeight,
            "description": setting.description
          };
        }

        function getContents(settings) {
          if (settings.length < 2) {
            throw new _k.KakaoError('Illegal argument for contents: min count(2)');
          }
          return _.map(settings, function (setting) {
            return {
              "title": setting.title,
              "image_url": setting.imageUrl,
              "link": getLink(setting.link),
              "image_width": setting.imageWidth,
              "image_height": setting.imageHeight,
              "description": setting.description
            };
          });
        }

        function getLink(setting) {
          return {
            'web_url': setting.webUrl,
            'mobile_web_url': setting.mobileWebUrl,
            'android_execution_params': setting.androidExecParams,
            'ios_execution_params': setting.iosExecParams
          };
        }

        function getCommerce(setting) {
          return {
            "regular_price": setting.regularPrice,
            "discount_price": setting.discountPrice,
            "discount_rate": setting.discountRate,
            "fixed_discount_price": setting.fixedDiscountPrice,
            "product_name": setting.productName
          };
        }

        function contentValidator(obj) {
          _k.processRules(obj, rules['content'], "parameter content in Link.sendDefault");
          return true;
        }

        function linkValidator(linkObj) {
          _k.processRules(linkObj, rules['link'], "parameter link in Link.sendDefault");
          return true;
        }

        function buttonValidator(buttonObj) {
          _k.processRules(buttonObj, rules['button'], "parameter button in Link.sendDefault");
          return true;
        }

        var rules = {
          label: {
            required: {
              text: _.isString
            },
            optional: commonOptional,
            builder: getLabelObj
          },
          image: {
            required: {
              src: _.isString,
              width: imageSizeValidator,
              height: imageSizeValidator
            },
            optional: commonOptional,
            before: parseImageSize,
            builder: _.partial(getImageObj, null)
          },
          webImage: {
            required: {
              src: _.isString,
              width: imageSizeValidator,
              height: imageSizeValidator
            },
            optional: _.extend({
              url: _.isString,
              auth: _.isBoolean,
              type: _.isOneOf([ACTION_TYPE.WEB, ACTION_TYPE.INWEB])
            }, commonOptional),
            defaults: {
              type: ACTION_TYPE.WEB
            },
            before: parseImageSize,
            builder: _.partial(getImageObj, "web")
          },
          webButton: {
            optional: _.extend({
              text: _.isString,
              url: _.isString,
              auth: _.isBoolean,
              type: _.isOneOf(['web', 'inweb'])
            }, commonOptional),
            defaults: {
              type: 'web'
            },
            builder: _.partial(getButtonObj, "web")
          },
          appButton: {
            optional: _.extend({
              text: _.isString,
              webUrl: _.isString,
              execParams: _.isObject,
              marketParams: _.isObject,
              type: _.isString
            }, commonOptional),
            defaults: {
              type: 'app'
            },
            builder: _.partial(getButtonObj, "app")
          },
          webLink: {
            required: { text: _.isString },
            optional: _.extend({
              url: _.isString,
              auth: _.isBoolean,
              type: _.isOneOf(['web', 'inweb'])
            }, commonOptional),
            defaults: {
              type: 'web'
            },
            builder: _.partial(getLinkObj, "web")
          },
          appLink: {
            required: { text: _.isString },
            optional: _.extend({
              webUrl: _.isString,
              execParams: _.isObject,
              marketParams: _.isObject
            }, commonOptional),
            builder: _.partial(getLinkObj, "app")
          },
          horizontalButton: {
            required: {
              0: buttonObjValidator,
              1: buttonObjValidator
            },
            builder: getHorizontalButtonObj
          },
          content: {
            required: {
              title: _.isString,
              imageUrl: _.isString,
              link: linkValidator
            },
            optional: {
              imageWidth: _.isNumber,
              imageHeight: _.isNumber,
              description: _.isString
            },
            builder: getContent
          },
          contents: {
            optional: {
              0: contentValidator,
              1: contentValidator,
              2: contentValidator
            },
            builder: getContents
          },
          commerce: {
            required: {
              regularPrice: _.isNumber
            },
            optional: {
              discountPrice: _.isNumber,
              discountRate: _.isNumber,
              fixedDiscountPrice: _.isNumber,
              productName: _.isString
            },
            builder: getCommerce
          },
          social: {
            optional: {
              likeCount: _.isNumber,
              commentCount: _.isNumber,
              sharedCount: _.isNumber,
              viewCount: _.isNumber,
              subscriberCount: _.isNumber
            },
            builder: getSocial
          },
          button: {
            required: {
              title: _.isString,
              link: linkValidator
            },
            builder: getButton
          },
          buttons: {
            optional: {
              0: buttonValidator,
              1: buttonValidator
            },
            builder: getButtons
          },
          headerLink: {
            optional: {
              webUrl: _.isString,
              mobileWebUrl: _.isString,
              androidExecParams: _.isString,
              iosExecParams: _.isString
            },
            builder: getLink
          },
          link: {
            optional: {
              webUrl: _.isString,
              mobileWebUrl: _.isString,
              androidExecParams: _.isString,
              iosExecParams: _.isString
            },
            builder: getLink
          }
        };

        var ruleAppParams = {
          optional: { iphone: _.isObject, ipad: _.isObject, android: _.isObject }
        };

        return {
          create: function create(setting, key, callerMsg) {
            var linkObjectRule = rules[key];
            if (linkObjectRule) {
              setting = _k.processRules(setting, linkObjectRule, "parameter '" + key + "' in " + (callerMsg || "Link"));
              return linkObjectRule.builder(setting);
            }
          }
        };
      }();
    }, { "../common": 40, "../util": 44 }], 27: [function (require, module, exports) {
      module.exports = function () {
        var _ = require('../util');

        var commonLinkOptional = {
          success: _.isFunction,
          fail: _.isFunction,
          always: _.isFunction,
          callback: _.isFunction,
          installTalk: _.isBoolean,
          throughTalk: _.isBoolean,
          extras: _.isObject,
          serverCallbackArgs: _.passesOneOf([_.isJSONString, _.isObject])
        };

        var commonLinkDefaults = {
          success: _.emptyFunc,
          fail: _.emptyFunc,
          always: _.emptyFunc,
          installTalk: false,
          throughTalk: true
        };

        var sendFeed = {
          required: {
            objectType: function objectType(type) {
              return type === 'feed';
            },
            content: _.isObject
          },
          optional: _.extend({
            social: _.isObject,
            buttonTitle: _.isString,
            buttons: _.isArray
          }, commonLinkOptional),
          defaults: commonLinkDefaults
        };

        var sendList = {
          required: {
            objectType: function objectType(type) {
              return type === 'list';
            },
            headerTitle: _.isString,
            headerLink: _.isObject,
            contents: _.isArray
          },
          optional: _.extend({
            buttonTitle: _.isString,
            buttons: _.isArray,
            headerImageUrl: _.isString,
            headerImageWidth: _.isNumber,
            headerImageHeight: _.isNumber
          }, commonLinkOptional),
          defaults: commonLinkDefaults
        };

        var sendCommerce = {
          required: {
            objectType: function objectType(type) {
              return type === 'commerce';
            },
            content: _.isObject,
            commerce: _.isObject
          },
          optional: _.extend({
            buttonTitle: _.isString,
            buttons: _.isArray
          }, commonLinkOptional),
          defaults: commonLinkDefaults
        };

        var sendLocation = {
          required: {
            objectType: function objectType(type) {
              return type === 'location';
            },
            content: _.isObject,
            address: _.isString
          },
          optional: _.extend({
            addressTitle: _.isString,
            social: _.isObject,
            buttonTitle: _.isString,
            buttons: _.isArray
          }, commonLinkOptional),
          defaults: commonLinkDefaults
        };

        var sendText = {
          required: {
            objectType: function objectType(type) {
              return type === 'text';
            },
            text: _.isString,
            link: _.isObject
          },
          optional: _.extend({
            buttonTitle: _.isString,
            buttons: _.isArray
          }, commonLinkOptional),
          defaults: commonLinkDefaults
        };

        var sendScrap = {
          required: {
            requestUrl: _.isString
          },
          optional: _.extend({
            templateId: _.isNumber,
            templateArgs: _.isObject
          }, commonLinkOptional),
          defaults: _.extend({
            templateArgs: {}
          }, commonLinkDefaults)
        };

        var sendCustom = {
          required: {
            templateId: _.isNumber
          },
          optional: _.extend({
            templateArgs: _.isObject
          }, commonLinkOptional),
          defaults: _.extend({
            templateArgs: {}
          }, commonLinkDefaults)
        };

        function extendRuleForContainer(rule) {
          return _.defaults({
            required: _.extend({
              container: _.passesOneOf([_.isElement, _.isString])
            }, rule.required)
          }, rule);
        }

        return {
          defaultObjectTypes: ['feed', 'list', 'commerce', 'location', 'text'],

          sendFeed: sendFeed,
          createFeedButton: extendRuleForContainer(sendFeed),
          sendList: sendList,
          createListButton: extendRuleForContainer(sendList),
          sendCommerce: sendCommerce,
          createCommerceButton: extendRuleForContainer(sendCommerce),
          sendLocation: sendLocation,
          createLocationButton: extendRuleForContainer(sendLocation),
          sendText: sendText,
          createTextButton: extendRuleForContainer(sendText),
          sendScrap: sendScrap,
          createScrapButton: extendRuleForContainer(sendScrap),
          sendCustom: sendCustom,
          createCustomButton: extendRuleForContainer(sendCustom),

          uploadImage: {
            required: {
              file: _.isObject
            }
          },
          deleteImage: {
            required: {
              imageUrl: _.isString
            }
          },
          scrapImage: {
            required: {
              imageUrl: _.isString
            }
          }
        };
      }();
    }, { "../util": 44 }], 28: [function (require, module, exports) {
      module.exports = function () {
        var web2app = require('../../vendor/web2app');
        var _ = require('../util');
        var _k = require('../common');
        var _webViewChecker = require('../webviewchecker')();
        var poller = require('../poller')(100, 100); 

        var linkCommon = require('./common');
        var linkGenerator = require('./linkGenerator');

        var KAKAOTALK_ANDROID_PACAKGE_NAME = 'com.kakao.talk';
        var KAKAOTALK_IOS_APP_ID = '362057947';

        function send(settings, requestUrl, linkObj) {
          var onResponse = null;
          if (_k.UA.browser.iphone && /version/.test(_k.UA.ua.toLowerCase())) {
            var response = null;
            onResponse = function onResponse(res) {
              response = res;
            };

            poller.start(function () {
              if (response !== null) {
                poller.stop();
                handleValidatedResp(response, settings);
              }
            }, function () {
              var error = {
                error: 'timeout',
                error_description: 'LINK_TIMEOUT'
              };
              settings.fail(error);
              settings.always(error);
            });
          } else {
            onResponse = handleValidatedResp;
          }

          return linkCommon.requestAPI(requestUrl, linkObj).then(function (validatedResp) {
            onResponse(validatedResp, settings);
          }, function (error) {
            settings.fail(error);
            settings.always(error);
          });
        }

        function handleValidatedResp(validatedResp, settings) {
          var linkScheme = linkGenerator.makeKakaoLink(settings, validatedResp);
          callWeb2app(linkScheme, settings.fail, settings.installTalk);

          var msg = {
            template_msg: validatedResp.template_msg || {},
            warning_msg: validatedResp.warning_msg || {},
            argument_msg: validatedResp.argument_msg || {}
          };
          settings.success(msg);
          settings.always(msg);
        }

        function callWeb2app(linkScheme, unsupportedCallback, shouldInstallTalk) {
          var androidIntent = ["intent:" + linkScheme + "#Intent", 'launchFlags=0x14008000', (shouldInstallTalk === true ? 'package=com.kakao.talk;' : '') + "end;"].join(';');

          var web2appOptions = {
            urlScheme: linkScheme,
            intentURI: androidIntent,
            appName: 'KakaoTalk',
            storeURL: _k.getInstallUrl(KAKAOTALK_ANDROID_PACAKGE_NAME, KAKAOTALK_IOS_APP_ID),
            onUnsupportedEnvironment: function onUnsupportedEnvironment() {
              unsupportedCallback(linkScheme);
            }
          };

          if (!shouldInstallTalk || _webViewChecker.isIOSKakaoTalkWebView() || _webViewChecker.isAndroidWebView()) {
            web2appOptions.onAppMissing = _.emptyFunc;
          }

          if (_webViewChecker.isIOSKakaoTalkWebView()) {
            web2appOptions.universalLink = undefined;
          }

          try {
            web2app(web2appOptions);
          } catch (error) {
            _k.logDebug(error);
          }
        }

        return {
          send: send
        };
      }();
    }, { "../../vendor/web2app": 50, "../common": 40, "../poller": 43, "../util": 44, "../webviewchecker": 45, "./common": 21, "./linkGenerator": 24 }], 29: [function (require, module, exports) {
      module.exports = function () {
        var _ = require('../util');
        var _k = require('../common');

        var linkCommon = require('./common');

        var LINK_POPUP_NAME = 'kakao_link_web_sharer';
        var LINK_POPUP_FEATURES = 'location=no,resizable=no,status=no,scrollbars=no,width=460,height=608';
        var LINK_URL_LIMIT = 2084;

        function send(settings, linkType, linkObj) {
          var webLinkParams = {
            app_key: _k.RUNTIME.appKey,
            ka: _k.KAKAO_AGENT,
            validation_action: linkType,
            validation_params: JSON.stringify(linkObj)
          };

          if (settings.serverCallbackArgs) {
            webLinkParams.lcba = linkCommon.stringifyLCBA(settings.serverCallbackArgs);
          }

          var webLinkUrl = _k.URL.sharerDomain + "/talk/friends/picker/easylink?" + _.buildQueryString(webLinkParams);

          var linkPopup = null;
          if (!(_k.UA.browser.msie || _k.UA.browser.spartan) && webLinkUrl.length < LINK_URL_LIMIT) {
            linkPopup = _k.windowOpen(webLinkUrl, LINK_POPUP_NAME, LINK_POPUP_FEATURES);
            linkPopup.focus();
          } else {
            linkPopup = openPopupAndSubmitForm(webLinkParams);
          }

          if (settings.callback) {
            handleCallback(linkPopup, settings.callback);
          }
        }

        function openPopupAndSubmitForm(params) {
          var popup = _k.UA.browser.msie ? {} : _k.windowOpen('', LINK_POPUP_NAME, LINK_POPUP_FEATURES);
          if (popup.focus) {
            popup.focus();
          }

          var form = document.createElement('form');
          form.setAttribute('accept-charset', 'utf-8');
          form.setAttribute('method', 'post');
          form.setAttribute('action', _k.URL.sharerDomain + "/talk/friends/picker/link");
          form.setAttribute('target', LINK_POPUP_NAME);
          form.setAttribute('style', 'display:none');

          for (var key in params) {
            if (params.hasOwnProperty(key)) {
              var input = document.createElement('input');
              input.type = 'hidden';
              input.name = key;
              input.value = _.isString(params[key]) ? params[key] : JSON.stringify(params[key]);
              form.appendChild(input);
            }
          }

          document.body.appendChild(form);
          form.submit();
          document.body.removeChild(form);

          return popup;
        }

        function handleCallback(popup, callback) {
          if (_k.UA.browser.msie) {
            if (console) {
              console.warn('KakaoWarning: The callback parameter does not support the IE browser.');
            }
            return;
          }

          var linkCallback = function linkCallback(e) {
            if (e.data === 'sent' && e.origin === _k.URL.sharerDomain) {
              callback();
            }
          };

          _.addEvent(window, 'message', linkCallback);
          var interval = setInterval(function () {
            if (popup.closed) {
              clearInterval(interval);
              _.removeEvent(window, 'message', linkCallback);
            }
          }, 1000);
        }

        return {
          send: send
        };
      }();
    }, { "../common": 40, "../util": 44, "./common": 21 }], 30: [function (require, module, exports) {
      module.exports = function () {
        var _k = require('../common');

        var Navi = {};

        _k.initSubModules(Navi, [require('./request')]);

        return Navi;
      }();
    }, { "../common": 40, "./request": 31 }], 31: [function (require, module, exports) {
      module.exports = function () {
        var web2app = require('../../vendor/web2app');
        var _ = require('../util');
        var _k = require('../common');

        var rules = require('./rules');

        function start(settings) {
          settings = _k.processRules(settings, rules.start, 'Navi.start');

          var naviStartParams = _.buildQueryString(makeNaviStartParams(settings));
          var naviScheme = _k.URL.naviStartScheme + "?" + naviStartParams;
          var fallbackUrl = _k.URL.naviWeb + "?" + naviStartParams;

          callWeb2app(naviScheme, fallbackUrl);
        }

        function makeNaviStartParams(settings) {
          var destination = {
            name: settings.name,
            x: settings.x,
            y: settings.y,
            rpflag: settings.rpflag,
            cid: settings.cid,
            guide_id: settings.guideId
          };
          var option = {
            coord_type: settings.coordType,
            vehicle_type: settings.vehicleType,
            rpoption: settings.rpOption,
            route_info: settings.routeInfo,
            s_x: settings.sX,
            s_y: settings.sY,
            s_angle: settings.sAngle,
            return_uri: settings.returnUri
          };

          var params = makeNaviParams();
          params.param = {
            destination: destination,
            option: option,
            via_list: settings.viaPoints
          };

          return params;
        }

        function share(settings) {
          settings = _k.processRules(settings, rules.share, 'Navi.share');

          var naviShareParams = _.buildQueryString(makeNaviShareParams(settings));
          var naviScheme = _k.URL.naviShareScheme + "?" + naviShareParams;
          var fallbackUrl = _k.URL.naviWeb + "?" + naviShareParams;

          callWeb2app(naviScheme, fallbackUrl);
        }

        function makeNaviShareParams(settings) {
          var destination = {
            name: settings.name,
            x: settings.x,
            y: settings.y,
            rpflag: settings.rpflag,
            cid: settings.cid,
            guide_id: settings.guideId
          };
          var option = {
            coord_type: settings.coordType
          };

          var params = makeNaviParams();
          params.param = {
            destination: destination,
            option: option
          };
          params.scheme_type = 'sharePoi';

          return params;
        }

        function makeNaviParams() {
          return {
            appkey: _k.RUNTIME.appKey,
            apiver: '1.0',
            extras: {
              KA: _k.KAKAO_AGENT
            }
          };
        }

        function callWeb2app(naviScheme, fallbackUrl) {
          var androidIntent = ["intent:" + naviScheme + "#Intent", 'package=com.locnall.KimGiSa', "S.browser_fallback_url=" + encodeURIComponent(fallbackUrl), 'end;'].join(';');

          var web2appOptions = {
            urlScheme: naviScheme,
            intentURI: androidIntent,
            storeURL: fallbackUrl,
            universalLink: fallbackUrl
          };

          try {
            web2app(web2appOptions);
          } catch (error) {
            _k.logDebug(error);
          }
        }

        return {
          start: start,
          share: share
        };
      }();
    }, { "../../vendor/web2app": 50, "../common": 40, "../util": 44, "./rules": 32 }], 32: [function (require, module, exports) {
      module.exports = function () {
        var _ = require('../util');
        var _k = require('../common');

        var coordTypes = ['wgs84', 'katec'];
        var vehicleTypes = [1, 2, 3, 4, 5, 6, 7];
        var rpOptions = [1, 2, 3, 4, 5, 6, 8, 100];

        var viaPointRule = {
          required: {
            name: _.isString,
            x: _.isNumber,
            y: _.isNumber
          },
          optional: {
            rpflag: _.isString,
            cid: _.isString
          }
        };

        return {
          start: {
            required: {
              name: _.isString,
              x: _.isNumber,
              y: _.isNumber
            },
            optional: {
              coordType: _.isOneOf(coordTypes),
              vehicleType: _.isOneOf(vehicleTypes),
              rpOption: _.isOneOf(rpOptions),
              routeInfo: _.isBoolean,
              sX: _.isNumber,
              sY: _.isNumber,
              sAngle: _.isNumber,
              returnUri: _.isString,
              rpflag: _.isString,
              cid: _.isString,
              guideId: _.isNumber,
              viaPoints: function viaPoints(points) {
                if (!_.isArray(points)) {
                  return false;
                } else if (points.length > 3) {
                  throw new _k.KakaoError('Invalid parameter keys: via points should not be exceed 3. at Navi.start');
                } else {
                  _.each(points, function (point) {
                    return _k.processRules(point, viaPointRule, 'Navi.start');
                  });
                  return true;
                }
              }
            },
            defaults: {
              coordType: 'katec',
              vehicleType: 1,
              rpOption: 100,
              routeInfo: false
            }
          },
          share: {
            required: {
              name: _.isString,
              x: _.isNumber,
              y: _.isNumber
            },
            optional: {
              coordType: _.isOneOf(coordTypes),
              rpflag: _.isString,
              cid: _.isString,
              guideId: _.isNumber
            },
            defaults: {
              coordType: 'katec'
            }
          }
        };
      }();
    }, { "../common": 40, "../util": 44 }], 33: [function (require, module, exports) {
      module.exports = function () {
        var _k = require('../common');

        var PlusFriend = {};
        var cleanups = [];

        _k.initSubModules(PlusFriend, [require('./request')(cleanups)]);

        PlusFriend.cleanup = function () {
          _k.emptyCleanups(cleanups);
        };

        return PlusFriend;
      }();
    }, { "../common": 40, "./request": 34 }], 34: [function (require, module, exports) {
      module.exports = function (cleanups) {
        var _ = require('../util');
        var _k = require('../common');

        var rules = require('./rules');
        var channelCommon = require('../Channel/common');

        var API_VER = '1.0';
        var ADD_FRIEND_POPUP_NAME = 'plus_friend_add_social_plugin';
        var CHAT_POPUP_NAME = 'plus_friend_chat_social_plugin';
        var POPUP_FEATURES = 'width=350, height=510';

        var DEPRECATION_WARNING = 'KakaoWarning: Kakao.PlusFriend is deprecated. Please use Kakao.Channel instead.';

        function createAddFriendButton(settings) {
          if (console) {
            console.warn(DEPRECATION_WARNING);
          }

          var container$ = _.getElement(settings.container);
          if (!container$) {
            throw new _k.KakaoError('container is required for PlusFriend.createAddFriendButton: pass in element or id');
          } else {
            _k.applyAttributes(settings, container$, {
              plusFriendId: 'data-plusfriend-id',
              size: 'data-size',
              color: 'data-color',
              shape: 'data-shape',
              supportMultipleDensities: 'data-support-multiple-densities'
            });
          }

          settings = _k.processRules(settings, rules.createAddFriendButton, 'PlusFriend.createAddFriendButton');

          var imgSrc = getAddFriendImgSrc(settings);
          var anchor$ = channelCommon.createAnchorImage(settings, imgSrc, '플러스친구 친구 추가 버튼');
          container$.appendChild(anchor$);

          var clickHandler = function clickHandler(e) {
            e.preventDefault();
            openAddFriendPopup(settings);
          };

          _.addEvent(anchor$, 'click', clickHandler);
          cleanups.push(function () {
            _.removeEvent(anchor$, 'click', clickHandler);
            container$.removeChild(anchor$);
          });
        }

        function addFriend(settings) {
          if (console) {
            console.warn(DEPRECATION_WARNING);
          }

          settings = _k.processRules(settings, rules.addFriend, 'PlusFriend.addFriend');
          openAddFriendPopup(settings);
        }

        function getAddFriendImgSrc(settings) {
          var filename = "friendadd_" + settings.size + "_" + settings.color + "_" + settings.shape + ".png";
          return _k.URL.channelIcon + "/plusfriend/" + filename;
        }

        function openAddFriendPopup(settings) {
          var addFriendUrl = _k.URL.channel + "/" + settings.plusFriendId + "/friend";
          if (Kakao.isInitialized()) {
            addFriendUrl += "?" + channelCommon.makeChannelParams(API_VER);
          }

          _k.windowOpen(addFriendUrl, ADD_FRIEND_POPUP_NAME, POPUP_FEATURES);
        }

        function createChatButton(settings) {
          if (console) {
            console.warn(DEPRECATION_WARNING);
          }

          var container$ = _.getElement(settings.container);
          if (!container$) {
            throw new _k.KakaoError('container is required for PlusFriend.createChatButton: pass in element or id');
          } else {
            _k.applyAttributes(settings, container$, {
              plusFriendId: 'data-plusfriend-id',
              size: 'data-size',
              color: 'data-color',
              shape: 'data-shape',
              title: 'data-title',
              supportMultipleDensities: 'data-support-multiple-densities'
            });
          }

          settings = _k.processRules(settings, rules.createChatButton, 'PlusFriend.createChatButton');

          var imgSrc = getChatImgSrc(settings);
          var anchor$ = channelCommon.createAnchorImage(settings, imgSrc, '플러스친구 1:1 채팅 버튼');
          container$.appendChild(anchor$);

          var clickHandler = function clickHandler(e) {
            e.preventDefault();
            openChatPopup(settings);
          };

          _.addEvent(anchor$, 'click', clickHandler);
          cleanups.push(function () {
            _.removeEvent(anchor$, 'click', clickHandler);
            container$.removeChild(anchor$);
          });
        }

        function chat(settings) {
          if (console) {
            console.warn(DEPRECATION_WARNING);
          }

          settings = _k.processRules(settings, rules.chat, 'PlusFriend.chat');
          openChatPopup(settings);
        }

        function getChatImgSrc(settings) {
          var filename = settings.title + "_" + settings.size + "_" + settings.color + "_" + settings.shape + ".png";
          return _k.URL.channelIcon + "/plusfriend/" + filename;
        }

        function openChatPopup(settings) {
          var chatUrl = _k.URL.channel + "/" + settings.plusFriendId + "/chat";
          if (Kakao.isInitialized()) {
            chatUrl += "?" + channelCommon.makeChannelParams(API_VER);
          }

          _k.windowOpen(chatUrl, CHAT_POPUP_NAME, POPUP_FEATURES);
        }

        return {
          createAddFriendButton: createAddFriendButton,
          addFriend: addFriend,
          createChatButton: createChatButton,
          chat: chat
        };
      };
    }, { "../Channel/common": 17, "../common": 40, "../util": 44, "./rules": 35 }], 35: [function (require, module, exports) {
      module.exports = function () {
        var _ = require('../util');

        return {
          createAddFriendButton: {
            required: {
              container: _.passesOneOf([_.isElement, _.isString]),
              plusFriendId: _.isString
            },
            optional: {
              size: _.isOneOf(['small', 'large']),
              color: _.isOneOf(['yellow', 'black']),
              shape: _.isOneOf(['rect', 'round']),
              supportMultipleDensities: _.isBoolean
            },
            defaults: {
              size: 'small',
              color: 'yellow',
              shape: 'rect',
              supportMultipleDensities: false
            }
          },
          addFriend: {
            required: {
              plusFriendId: _.isString
            }
          },

          createChatButton: {
            required: {
              container: _.passesOneOf([_.isElement, _.isString]),
              plusFriendId: _.isString
            },
            optional: {
              size: _.isOneOf(['small', 'large']),
              color: _.isOneOf(['yellow', 'mono']),
              shape: _.isOneOf(['pc', 'mobile']),
              title: _.isOneOf(['consult', 'question']),
              supportMultipleDensities: _.isBoolean
            },
            defaults: {
              size: 'small',
              color: 'yellow',
              shape: 'pc',
              title: 'consult',
              supportMultipleDensities: false
            }
          },
          chat: {
            required: {
              plusFriendId: _.isString
            }
          }
        };
      }();
    }, { "../util": 44 }], 36: [function (require, module, exports) {
      module.exports = function () {
        var _k = require('../common');

        var Story = {};
        var cleanups = [];

        _k.initSubModules(Story, [require('./request')(cleanups)]);

        Story.cleanup = function () {
          _k.emptyCleanups(cleanups);
        };

        return Story;
      }();
    }, { "../common": 40, "./request": 37 }], 37: [function (require, module, exports) {
      module.exports = function (cleanups) {
        var web2app = require('../../vendor/web2app');
        var _ = require('../util');
        var _k = require('../common');

        var rules = require('./rules');

        function createShareButton(settings) {
          var container$ = _.getElement(settings.container);
          if (!container$) {
            throw new _k.KakaoError('container is required for Story.createShareButton: pass in element or id');
          } else {
            _k.applyAttributes(settings, container$, {
              url: 'data-url'
            });
          }

          settings = _k.processRules(settings, rules.createShareButton, 'Story.createShareButton');

          var anchor$ = createAnchorImage(_k.URL.storyIcon, '카카오스토리 웹 공유 버튼');
          container$.appendChild(anchor$);

          var clickHandler = function clickHandler(e) {
            e.preventDefault();
            openSharePopup(settings);
          };

          _.addEvent(anchor$, 'click', clickHandler);
          cleanups.push(function () {
            _.removeEvent(anchor$, 'click', clickHandler);
            container$.removeChild(anchor$);
          });
        }

        function createAnchorImage(imgSrc, imgTitle) {
          var a$ = document.createElement('a');
          a$.setAttribute('href', '#');

          var img$ = document.createElement('img');
          img$.setAttribute('src', imgSrc);
          img$.setAttribute('title', imgTitle);
          img$.setAttribute('alt', imgTitle);

          a$.appendChild(img$);
          return a$;
        }

        function share(settings) {
          settings = _k.processRules(settings, rules.share, 'Story.share');
          openSharePopup(settings);
        }

        function openSharePopup(settings) {
          var params = _.extend({
            url: settings.url
          }, makeStoryParams());

          if (settings.text) {
            params.text = settings.text;
          }

          _k.windowOpen(_k.URL.storyShare + "?" + _.buildQueryString(params), 'kakaostory_social_plugin', 'width=670, height=800, scrollbars=yes');
        }

        function open(settings) {
          settings = _k.processRules(settings, rules.open, 'Story.open');

          var storyPostScheme = makeStoryPostScheme(settings);
          var androidIntent = ["intent:" + storyPostScheme + "#Intent", (settings.install ? 'package=com.kakao.story;' : '') + "end;"].join(';');

          var web2appOptions = {
            urlScheme: storyPostScheme,
            intentURI: androidIntent,
            appName: 'KakaoStory',
            storeURL: _k.getInstallUrl('com.kakao.story', '486244601'),
            onUnsupportedEnvironment: function onUnsupportedEnvironment() {
              settings.fail && settings.fail();
            }
          };

          try {
            web2app(web2appOptions);
          } catch (error) {
            _k.logDebug(error);
          }
        }

        function makeStoryPostScheme(settings) {
          var domain = location.hostname || '';

          var params = _.extend({
            apiver: '1.0',
            appver: _k.VERSION,
            appid: domain,
            appname: domain,
            post: settings.text ? settings.text + "\n" + settings.url : settings.url
          }, makeStoryParams());

          if (settings.urlInfo) {
            params.urlinfo = JSON.stringify(settings.urlInfo);
            params.appname = settings.urlInfo.name || params.appname;
          }

          return _k.URL.storyPostScheme + "?" + _.buildQueryString(params);
        }

        function createFollowButton(settings) {
          var container$ = _.getElement(settings.container);
          if (!container$) {
            throw new _k.KakaoError('container is required for Story.createFollowButton: pass in element or id');
          } else {
            _k.applyAttributes(settings, container$, {
              id: 'data-id',
              showFollowerCount: 'data-show-follower-count',
              type: 'data-type'
            });
          }

          settings = _k.processRules(settings, rules.createFollowButton, 'Story.createFollowButton');

          var _createStoryFollowIfr = createStoryFollowIframe(settings),
              iframe$ = _createStoryFollowIfr.iframe$,
              messageHandler = _createStoryFollowIfr.messageHandler;

          container$.appendChild(iframe$);

          _.addEvent(window, 'message', messageHandler);
          cleanups.push(function () {
            _.removeEvent(window, 'message', messageHandler);
            container$.removeChild(iframe$);
          });
        }

        var _storyFollowIframeId = 0;
        function createStoryFollowIframe(settings) {
          var iframeId = _storyFollowIframeId++;
          var iframeWidth = settings.showFollowerCount && settings.type === 'horizontal' ? 85 : 59;
          var iframeHeight = settings.showFollowerCount && settings.type === 'vertical' ? 46 : 20;

          var iframe$ = document.createElement('iframe');
          iframe$.src = makeStoryFollowUrl(settings, iframeId);
          iframe$.setAttribute('frameborder', '0');
          iframe$.setAttribute('marginwidth', '0');
          iframe$.setAttribute('marginheight', '0');
          iframe$.setAttribute('scrolling', 'no');
          iframe$.setAttribute('style', "width:" + iframeWidth + "px; height:" + iframeHeight + "px;");

          var messageHandler = function messageHandler(e) {
            if (e.data && /\.kakao\.com$/.test(e.origin) && typeof e.data === 'string') {
              var _e$data$split$map = e.data.split(',').map(function (e) {
                return parseInt(e, 10);
              }),
                  _e$data$split$map2 = _slicedToArray(_e$data$split$map, 3),
                  originIframeId = _e$data$split$map2[0],
                  afterWidth = _e$data$split$map2[1],
                  afterHeight = _e$data$split$map2[2];

              if (originIframeId === iframeId) {
                if (iframeWidth !== afterWidth) {
                  iframeWidth = afterWidth;
                  iframe$.style.width = iframeWidth + "px";
                }
                if (iframeHeight !== afterHeight) {
                  iframeHeight = afterHeight;
                  iframe$.style.height = iframeHeight + "px";
                }
              }
            }
          };

          return { iframe$: iframe$, messageHandler: messageHandler };
        }

        function makeStoryFollowUrl(settings, iframeId) {
          var params = _.extend({
            id: settings.id,
            type: settings.type,
            hideFollower: !settings.showFollowerCount,
            frameId: iframeId
          }, makeStoryParams());

          return _k.URL.storyChannelFollow + "?" + _.buildQueryString(params);
        }

        function makeStoryParams() {
          var params = {
            kakao_agent: _k.KAKAO_AGENT
          };

          if (Kakao.isInitialized()) {
            params.app_key = _k.RUNTIME.appKey;
          }

          return params;
        }

        return {
          createShareButton: createShareButton,
          share: share,
          open: open,
          createFollowButton: createFollowButton
        };
      };
    }, { "../../vendor/web2app": 50, "../common": 40, "../util": 44, "./rules": 38 }], 38: [function (require, module, exports) {
      module.exports = function () {
        var _ = require('../util');
        var _k = require('../common');

        var urlInfoRule = {
          required: {
            title: _.isString
          },
          optional: {
            desc: _.isString,
            name: _.isString,
            images: _.isArray, 
            type: _.isString
          },
          defaults: {
            type: 'website'
          },
          after: function after(settings) {
            if (settings.images) {
              settings.imageurl = settings.images;
              delete settings.images;
            }
          }
        };

        return {
          createShareButton: {
            required: {
              container: _.passesOneOf([_.isElement, _.isString])
            },
            optional: {
              url: _.isString,
              text: _.isString
            },
            defaults: {
              url: location.href
            }
          },
          share: {
            optional: {
              url: _.isString,
              text: _.isString
            },
            defaults: {
              url: location.href
            }
          },

          open: {
            optional: {
              url: _.isString,
              text: _.isString,
              urlInfo: function urlInfo(obj) {
                return _.isObject(obj) && !!_k.processRules(obj, urlInfoRule, 'Story.open');
              },

              install: _.isBoolean
            },
            defaults: {
              url: location.href,
              install: false
            }
          },

          createFollowButton: {
            required: {
              container: _.passesOneOf([_.isElement, _.isString]),
              id: _.isString
            },
            optional: {
              showFollowerCount: _.isBoolean,
              type: _.isOneOf(['horizontal', 'vertical'])
            },
            defaults: {
              showFollowerCount: true,
              type: 'horizontal'
            },
            after: function after(settings) {
              if (settings.id[0] !== '@') {
                settings.id = "@" + settings.id;
              }
            }
          }
        };
      }();
    }, { "../common": 40, "../util": 44 }], 39: [function (require, module, exports) {
      module.exports = function () {
        var userAgent = require('../vendor/userAgent')();

        return {
          getOrigin: function getOrigin() {
            var _location = location,
                protocol = _location.protocol,
                hostname = _location.hostname,
                port = _location.port;

            return protocol + "//" + hostname + (port ? ':' + port : '');
          },
          getNavigator: function getNavigator() {
            return navigator;
          },
          getUA: function getUA() {
            return userAgent;
          }
        };
      }();
    }, { "../vendor/userAgent": 49 }], 40: [function (require, module, exports) {
      module.exports = function () {
        var _ = require('./util');
        var browserProxy = require('./browserProxy');

        var origin = browserProxy.getOrigin();
        var navigator = browserProxy.getNavigator();

        var _k = {};

        _k.VERSION = '1.39.11';

        _k.KAKAO_AGENT = ["sdk/" + _k.VERSION, 'os/javascript', 'sdk_type/javascript', "lang/" + (navigator.userLanguage || navigator.language), "device/" + navigator.platform.replace(/ /g, '_'), "origin/" + encodeURIComponent(origin)].join(' ');

        _k.UA = browserProxy.getUA();

        _k.URL = {
          authDomain: 'https://kauth.kakao.com',
          authorize: 'https://kauth.kakao.com' + '/oauth/authorize',
          loginWidget: 'https://kauth.kakao.com' + '/public/widget/login/kakaoLoginWidget.html',
          redirectUri: 'JS-SDK',
          universalKakaoLink: 'https://talk-apps.kakao.com' + '/scheme/',
          talkLoginScheme: 'kakaokompassauth://authorize',
          talkLoginRedirectUri: 'https://kapi.kakao.com/cors/afterlogin.html',
          talkInappScheme: 'kakaotalk://inappbrowser',
          apiRemote: 'https://kapi.kakao.com' + '/cors/',
          sharerDomain: 'https://sharer.kakao.com',
          channel: 'https://pf.kakao.com',
          channelIcon: 'https://developers.kakao.com' + '/assets/img/about/logos',
          storySelectChannel: 'https://kauth.kakao.com' + '/story/select_channel',
          storyShare: 'https://story.kakao.com' + '/s/share',
          storyChannelFollow: 'https://story.kakao.com' + '/s/follow',
          storyIcon: 'https://developers.kakao.com' + '/sdk/js/resources/story/icon_small.png',
          storyPostScheme: 'storylink://posting',
          naviStartScheme: 'kakaonavi-sdk://' + 'navigate',
          naviShareScheme: 'kakaonavi-sdk://' + 'sharePoi',
          naviWeb: 'https://kakaonavi-wguide.kakao.com/openapi'
        };

        _k.RUNTIME = {
          appKey: '',
          accessToken: ''
        };

        _k.DUMMY_KEY = 'YOUR APP KEY';

        function KakaoError(message) {
          Error.prototype.constructor.apply(this, arguments);
          this.name = 'KakaoError';
          this.message = message;
        };
        KakaoError.prototype = new Error();

        _k.KakaoError = KakaoError;

        _k.isDebug = function () {
          return false;
        };

        _k.logDebug = function (obj) {
          if (_k.isDebug() && window.console) {
            console.log(JSON.stringify(obj));
          }
        };

        _k.initSubModules = function (M, subModules) {
          _.each(subModules, function (subModule) {
            for (var key in subModule) {
              M[key] = M[key] || subModule[key];
            }
          });
        };

        _k.emptyCleanups = function (cleanups) {
          _.each(cleanups, function (fn) {
            fn();
          });
          cleanups.length = 0;
        };

        _k.validate = function (target, validator, callerMsg) {
          if (validator(target) !== true) {
            throw new KakaoError("Illegal argument for " + callerMsg);
          }
        };

        _k.processRules = function (params, rules, callerMsg) {
          params = params || {};

          if (rules.before) {
            rules.before(params);
          }

          if (_.isFunction(rules.defaults)) {
            _.defaults(params, rules.defaults(params));
          } else {
            _.defaults(params, rules.defaults);
          }

          var required = rules.required || {};

          var missingRequiredKeys = _.difference(_.keys(required), _.keys(params));
          if (missingRequiredKeys.length) {
            throw new KakaoError("Missing required keys: " + missingRequiredKeys.join(',') + " at " + callerMsg);
          }

          var optional = rules.optional || {};
          var allowed = _.extend({}, required, optional);

          var invalidKeys = _.difference(_.keys(params), _.keys(allowed));
          if (invalidKeys.length) {
            throw new KakaoError("Invalid parameter keys: " + invalidKeys.join(',') + " at " + callerMsg);
          }

          _.each(params, function (value, key) {
            var validator = allowed[key];
            _k.validate(value, validator, "\"" + key + "\" in " + callerMsg);
          });

          if (rules.after) {
            rules.after(params);
          }

          return params;
        };

        _k.getInstallUrl = function (androidAppId, iOSAppId) {
          if (_k.UA.os.android) {
            var referrer = {
              appkey: _k.RUNTIME.appKey,
              KA: _k.KAKAO_AGENT
            };

            return "market://details?id=" + androidAppId + "&referrer=" + JSON.stringify(referrer);
          } else if (_k.UA.os.ios) {
            return "https://itunes.apple.com/app/id" + iOSAppId;
          } else {
            return location.href;
          }
        };

        _k.guardCreateEasyXDM = function (createEasyXDM) {
          try {
            return createEasyXDM();
          } catch (ex) {
            if (ex instanceof TypeError) {
              throw new KakaoError('kakao.js should be loaded from a web server');
            } else {
              throw new KakaoError("EasyXDM - " + ex.message);
            }
          }
        };

        _k.serializeFile = function (file) {
          return new Promise(function (resolve, reject) {
            if (typeof FileReader === 'undefined') {
              reject(new KakaoError('File API is not supported for this browser.'));
            }

            var fileReader = new FileReader();

            fileReader.onload = function (e) {
              try {
                resolve(_.arrayBufferToString(e.target.result));
              } catch (e) {
                reject(e);
              }
            };

            fileReader.onerror = function (e) {
              reject(new KakaoError("Cannot read file: " + file.name));
            };

            fileReader.readAsArrayBuffer(file);
          });
        };

        _k.popupWindows = {};
        _k.windowOpen = function (url, name, feature) {
          var popupWindow = _k.popupWindows[name];
          if (popupWindow && popupWindow.close && !popupWindow.closed) {
            popupWindow.close();
          }

          _k.popupWindows[name] = window.open(url, name, feature);
          return _k.popupWindows[name];
        };

        _k.applyAttributes = function (settings, container$, mapper) {
          _.keys(mapper).forEach(function (key) {
            var attr = container$.getAttribute(mapper[key]);

            if (attr !== null) {
              settings[key] = attr === 'true' || attr === 'false' ? attr === 'true' : attr;
            }
          });
        };

        return _k;
      }();
    }, { "./browserProxy": 39, "./util": 44 }], 41: [function (require, module, exports) {
      module.exports = function () {
        var _ = require('./util');
        var _eventObservers = {};

        return {
          subscribe: function subscribe(eventName, observer) {
            if (!_eventObservers[eventName]) {
              _eventObservers[eventName] = [];
            }

            _eventObservers[eventName].push(observer);
          },
          unsubscribe: function unsubscribe(eventName, observer) {
            var observers = _eventObservers[eventName];
            for (var i = 0; i < l.length; i++) {
              if (observers[m] === observer) {
                observers.splice(m, 1);
                break;
              }
            }
          },
          dispatch: function dispatch(eventName) {
            var observers = _eventObservers[eventName];
            if (observers && observers.length) {
              _.each(observers, function (observer) {
                observer();
              });
            }
          }
        };
      }();
    }, { "./util": 44 }], 42: [function (require, module, exports) {
      module.exports = function (root) {
        root.Kakao = root.Kakao || {};
        var Kakao = root.Kakao;

        var _ = require('./util');
        var _k = require('./common');

        Kakao.VERSION = _k.VERSION;

        Kakao.Story = require('./Story');

        Kakao.init = function (appKey) {
          if (_k.RUNTIME.appKey) {
            throw new _k.KakaoError('Kakao.init: Already initialized');
          }

          if (!_.isString(appKey) || appKey === _k.DUMMY_KEY) {
            throw new _k.KakaoError('Kakao.init: App key must be provided');
          }

          _k.RUNTIME.appKey = appKey;

          Kakao.Auth = require('./Auth');

          Kakao.API = require('./API');

          Kakao.Link = require('./Link');

          Kakao.Navi = require('./Navi');

          Kakao.Channel = require('./Channel');
          Kakao.PlusFriend = require('./PlusFriend');
        };

        Kakao.isInitialized = function () {
          return !!_k.RUNTIME.appKey;
        };

        Kakao.cleanup = function () {
          Kakao.Auth && Kakao.Auth.cleanup();
          Kakao.API && Kakao.API.cleanup();
          Kakao.Link && Kakao.Link.cleanup();
          Kakao.Story && Kakao.Story.cleanup();
          Kakao.PlusFriend && Kakao.PlusFriend.cleanup();
          Kakao.Channel && Kakao.Channel.cleanup();

          _.nullify(_k.RUNTIME);
        };

        if (window.kakaoAsyncInit) {
          window.kakaoAsyncInit();
        }

        return Kakao;
      }(window);
    }, { "./API": 4, "./Auth": 9, "./Channel": 18, "./Link": 23, "./Navi": 30, "./PlusFriend": 33, "./Story": 36, "./common": 40, "./util": 44 }], 43: [function (require, module, exports) {
      module.exports = function (interval, maxCount) {
        var count = 0;
        var stopped = false;
        var timeout = null;

        function start(pollFunc, failFunc) {
          count = 0;
          stopped = false;

          doPolling(pollFunc, failFunc);
        }

        function doPolling(pollFunc, failFunc) {
          if (stopped) {
            return;
          }

          timeout = setTimeout(function () {
            if (++count > maxCount) {
              failFunc();
            } else {
              pollFunc();
              doPolling(pollFunc, failFunc);
            }
          }, interval);
        }

        function stop() {
          stopped = true;
          clearTimeout(timeout);
        }

        return {
          start: start,
          stop: stop
        };
      };
    }, {}], 44: [function (require, module, exports) {

      module.exports = function () {
        var _ = {};

        var breaker = {};
        var ArrayProto = Array.prototype;
        var ObjProto = Object.prototype;
        var slice = ArrayProto.slice;
        var concat = ArrayProto.concat;
        var toString = ObjProto.toString;
        var hasOwnProperty = ObjProto.hasOwnProperty;
        var nativeForEach = ArrayProto.forEach;
        var nativeMap = ArrayProto.map;
        var nativeFilter = ArrayProto.filter;
        var nativeEvery = ArrayProto.every;
        var nativeSome = ArrayProto.some;
        var nativeIndexOf = ArrayProto.indexOf;
        var nativeIsArray = Array.isArray;
        var nativeKeys = Object.keys;

        var each = _.each = function (obj, iterator, context) {
          if (obj == null) return obj;
          if (nativeForEach && obj.forEach === nativeForEach) {
            obj.forEach(iterator, context);
          } else if (obj.length === +obj.length) {
            for (var i = 0, length = obj.length; i < length; i++) {
              if (iterator.call(context, obj[i], i, obj) === breaker) return;
            }
          } else {
            var keys = _.keys(obj);
            for (var i = 0, length = keys.length; i < length; i++) {
              if (iterator.call(context, obj[keys[i]], keys[i], obj) === breaker) return;
            }
          }
          return obj;
        };

        _.map = function (obj, iterator, context) {
          var results = [];
          if (obj == null) return results;
          if (nativeMap && obj.map === nativeMap) return obj.map(iterator, context);
          each(obj, function (value, index, list) {
            results.push(iterator.call(context, value, index, list));
          });
          return results;
        };

        _.filter = function (obj, predicate, context) {
          var results = [];
          if (obj == null) return results;
          if (nativeFilter && obj.filter === nativeFilter) return obj.filter(predicate, context);
          each(obj, function (value, index, list) {
            if (predicate.call(context, value, index, list)) results.push(value);
          });
          return results;
        };

        _.every = function (obj, predicate, context) {
          predicate || (predicate = _.identity);
          var result = true;
          if (obj == null) return result;
          if (nativeEvery && obj.every === nativeEvery) return obj.every(predicate, context);
          each(obj, function (value, index, list) {
            if (!(result = result && predicate.call(context, value, index, list))) return breaker;
          });
          return !!result;
        };

        var any = _.any = function (obj, predicate, context) {
          predicate || (predicate = _.identity);
          var result = false;
          if (obj == null) return result;
          if (nativeSome && obj.some === nativeSome) return obj.some(predicate, context);
          each(obj, function (value, index, list) {
            if (result || (result = predicate.call(context, value, index, list))) return breaker;
          });
          return !!result;
        };

        _.contains = function (obj, target) {
          if (obj == null) return false;
          if (nativeIndexOf && obj.indexOf === nativeIndexOf) return obj.indexOf(target) != -1;
          return any(obj, function (value) {
            return value === target;
          });
        };

        _.difference = function (array) {
          var rest = concat.apply(ArrayProto, slice.call(arguments, 1));
          return _.filter(array, function (value) {
            return !_.contains(rest, value);
          });
        };

        _.partial = function (func) {
          var boundArgs = slice.call(arguments, 1);
          return function () {
            var position = 0;
            var args = boundArgs.slice();
            for (var i = 0, length = args.length; i < length; i++) {
              if (args[i] === _) args[i] = arguments[position++];
            }
            while (position < arguments.length) {
              args.push(arguments[position++]);
            }return func.apply(this, args);
          };
        };

        _.after = function (times, func) {
          return function () {
            if (--times < 1) {
              return func.apply(this, arguments);
            }
          };
        };

        _.keys = function (obj) {
          if (!_.isObject(obj)) return [];
          if (nativeKeys) return nativeKeys(obj);
          var keys = [];
          for (var key in obj) {
            if (_.has(obj, key)) keys.push(key);
          }return keys;
        };

        _.extend = function (obj) {
          each(slice.call(arguments, 1), function (source) {
            if (source) {
              for (var prop in source) {
                obj[prop] = source[prop];
              }
            }
          });
          return obj;
        };

        _.defaults = function (obj) {
          each(slice.call(arguments, 1), function (source) {
            if (source) {
              for (var prop in source) {
                if (obj[prop] === void 0) obj[prop] = source[prop];
              }
            }
          });
          return obj;
        };

        _.isElement = function (obj) {
          return !!(obj && obj.nodeType === 1);
        };

        _.isArray = nativeIsArray || function (obj) {
          return toString.call(obj) == '[object Array]';
        };

        _.isObject = function (obj) {
          return obj === Object(obj);
        };

        each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Blob', 'File', 'FileList'], function (name) {
          _['is' + name] = function (obj) {
            return toString.call(obj) == '[object ' + name + ']';
          };
        });

        _.isBoolean = function (obj) {
          return obj === true || obj === false || toString.call(obj) == '[object Boolean]';
        };

        _.has = function (obj, key) {
          return hasOwnProperty.call(obj, key);
        };

        _.identity = function (value) {
          return value;
        };


        _.isInteger = function (obj) {
          return _.isNumber(obj) && obj % 1 === 0;
        };

        _.emptyFunc = function () {};

        _.getElement = function (selector) {
          if (_.isElement(selector)) {
            return selector;
          } else if (_.isString(selector)) {
            return document.querySelector(selector);
          } else {
            return null;
          }
        };

        _.addEvent = function (element, event, func) {
          if (element.addEventListener) {
            element.addEventListener(event, func, false);
          } else if (element.attachEvent) {
            element.attachEvent("on" + event, func);
          }
        };

        _.removeEvent = function (element, event, func) {
          if (element.removeEventListener) {
            element.removeEventListener(event, func, false);
          } else if (element.detachEvent) {
            element.detachEvent('on' + event, func);
          }
        };

        _.buildQueryString = function (params, encode) {
          var ret = [];
          for (var key in params) {
            if (!params.hasOwnProperty(key)) continue;

            var value = params[key];
            if (_.isObject(value)) {
              value = JSON.stringify(value);
            }

            var queryKey = encode === false ? key : encodeURIComponent(key);
            var queryValue = encode === false ? value : encodeURIComponent(value);

            ret.push(queryKey + '=' + queryValue);
          }

          return ret.join('&');
        };

        _.getRandomString = function () {
          return Math.random().toString(36).slice(2);
        };

        _.nullify = function (obj) {
          _.each(obj, function (value, key) {
            obj[key] = null;
          });
        };

        _.isOneOf = function (elements) {
          return _.partial(_.contains, elements);
        };

        _.passesOneOf = function (validators) {
          if (!_.isArray(validators)) throw new Error('validators should be an Array');

          return function (obj) {
            return _.any(validators, function (validator) {
              return validator(obj);
            });
          };
        };

        _.isURL = function (obj) {
          var urlPattern = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/;

          return urlPattern.test(obj);
        };

        _.arrayBufferToString = function (buffer) {
          var stringResult = "";
          var arrayBufferView = new Uint8Array(buffer);
          var length = arrayBufferView.length;
          var CHUNK_SIZE = Math.pow(2, 16);

          var offset, readLength, sub;
          for (offset = 0; offset < length; offset += CHUNK_SIZE) {
            readLength = Math.min(CHUNK_SIZE, length - offset);
            sub = arrayBufferView.subarray(offset, offset + readLength);
            stringResult += String.fromCharCode.apply(null, sub);
          }
          return stringResult;
        };

        _.isJSONString = function (str) {
          try {
            JSON.parse(str);
          } catch (e) {
            return false;
          }
          return true;
        };

        _.localStorage = function () {
          var shim = {
            _data: {},
            setItem: function setItem(id, val) {
              return this._data[id] = String(val);
            },
            getItem: function getItem(id) {
              return this._data.hasOwnProperty(id) ? this._data[id] : null;
            },
            removeItem: function removeItem(id) {
              return delete this._data[id];
            },
            clear: function clear() {
              return this._data = {};
            }
          };

          try {
            if ("localStorage" in window) {
              window.localStorage.setItem("store", "");
              window.localStorage.removeItem("store");
              return window.localStorage;
            } else {
              return shim;
            }
          } catch (e) {
            return shim;
          }
        }();

        return _;
      }();
    }, {}], 45: [function (require, module, exports) {
      module.exports = function () {
        var UA = require('../vendor/userAgent.js')();

        return {
          isAndroidWebView: function isAndroidWebView() {
            return UA.os.android && (olderAndroidWebView() || oldAndroidWebView() || newerAndroidWebView());
          },
          isIOSKakaoTalkWebView: function isIOSKakaoTalkWebView() {
            return UA.os.ios && /KAKAOTALK/i.test(UA.ua);
          },
          isAndroidKakaoTalkWebView: function isAndroidKakaoTalkWebView() {
            return UA.os.android && /KAKAOTALK/i.test(UA.ua);
          },
          isNewerAndroidKakaoTalkWebView: function isNewerAndroidKakaoTalkWebView() {
            return UA.os.android && /KAKAOTALK/i.test(UA.ua) && UA.browser.chrome && UA.browser.version.major >= 71;
          }
        };

        function newerAndroidWebView() {
          return (/Version\/\d+\.\d+/i.test(UA.ua) && (/Chrome\/\d+\.\d+\.\d+\.\d+ Mobile/i.test(UA.ua) || /; wv\)/i.test(UA.ua))
          );
        }

        function oldAndroidWebView() {
          return UA.os.version.major == 4 && UA.os.version.minor < 4 && /Version\/\d+.\d+|/i.test(UA.ua);
        }

        function olderAndroidWebView() {
          return UA.os.version.major == 2 && /Version\/\d+.\d+|/i.test(UA.ua);
        }
      };
    }, { "../vendor/userAgent.js": 49 }], 46: [function (require, module, exports) {
      !function (t, e) {
        "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? module.exports = exports = e() : "function" == typeof define && define.amd ? define([], e) : t.CryptoJS = e();
      }(this, function () {
        var l,
            r,
            t,
            e,
            i,
            f,
            n,
            o,
            s,
            a,
            c,
            h,
            u,
            d,
            p,
            _,
            v,
            y,
            g,
            B,
            w,
            k,
            S,
            m,
            x,
            b,
            H,
            z,
            A,
            C,
            D,
            R,
            E,
            M,
            F,
            P,
            W,
            O,
            U,
            I,
            K,
            X,
            L,
            j,
            N,
            T,
            Z,
            q,
            G,
            J,
            $,
            Q,
            V,
            Y,
            tt,
            et,
            rt,
            it,
            nt,
            ot,
            st,
            at,
            ct,
            ht,
            lt,
            ft,
            ut,
            dt,
            pt,
            _t,
            vt,
            yt,
            gt,
            Bt,
            wt,
            kt,
            St,
            mt,
            xt,
            bt,
            Ht,
            zt,
            At,
            Ct,
            Dt,
            Rt,
            Et,
            Mt,
            Ft,
            Pt = Pt || (l = Math, r = Object.create || function (t) {
          var e;return Wt.prototype = t, e = new Wt(), Wt.prototype = null, e;
        }, e = (t = {}).lib = {}, i = e.Base = { extend: function extend(t) {
            var e = r(this);return t && e.mixIn(t), e.hasOwnProperty("init") && this.init !== e.init || (e.init = function () {
              e.$super.init.apply(this, arguments);
            }), (e.init.prototype = e).$super = this, e;
          }, create: function create() {
            var t = this.extend();return t.init.apply(t, arguments), t;
          }, init: function init() {}, mixIn: function mixIn(t) {
            for (var e in t) {
              t.hasOwnProperty(e) && (this[e] = t[e]);
            }t.hasOwnProperty("toString") && (this.toString = t.toString);
          }, clone: function clone() {
            return this.init.prototype.extend(this);
          } }, f = e.WordArray = i.extend({ init: function init(t, e) {
            t = this.words = t || [], this.sigBytes = null != e ? e : 4 * t.length;
          }, toString: function toString(t) {
            return (t || o).stringify(this);
          }, concat: function concat(t) {
            var e = this.words,
                r = t.words,
                i = this.sigBytes,
                n = t.sigBytes;if (this.clamp(), i % 4) for (var o = 0; o < n; o++) {
              var s = r[o >>> 2] >>> 24 - o % 4 * 8 & 255;e[i + o >>> 2] |= s << 24 - (i + o) % 4 * 8;
            } else for (o = 0; o < n; o += 4) {
              e[i + o >>> 2] = r[o >>> 2];
            }return this.sigBytes += n, this;
          }, clamp: function clamp() {
            var t = this.words,
                e = this.sigBytes;t[e >>> 2] &= 4294967295 << 32 - e % 4 * 8, t.length = l.ceil(e / 4);
          }, clone: function clone() {
            var t = i.clone.call(this);return t.words = this.words.slice(0), t;
          }, random: function random(t) {
            function e(e) {
              e = e;var r = 987654321,
                  i = 4294967295;return function () {
                var t = ((r = 36969 * (65535 & r) + (r >> 16) & i) << 16) + (e = 18e3 * (65535 & e) + (e >> 16) & i) & i;return t /= 4294967296, (t += .5) * (.5 < l.random() ? 1 : -1);
              };
            }for (var r, i = [], n = 0; n < t; n += 4) {
              var o = e(4294967296 * (r || l.random()));r = 987654071 * o(), i.push(4294967296 * o() | 0);
            }return new f.init(i, t);
          } }), n = t.enc = {}, o = n.Hex = { stringify: function stringify(t) {
            for (var e = t.words, r = t.sigBytes, i = [], n = 0; n < r; n++) {
              var o = e[n >>> 2] >>> 24 - n % 4 * 8 & 255;i.push((o >>> 4).toString(16)), i.push((15 & o).toString(16));
            }return i.join("");
          }, parse: function parse(t) {
            for (var e = t.length, r = [], i = 0; i < e; i += 2) {
              r[i >>> 3] |= parseInt(t.substr(i, 2), 16) << 24 - i % 8 * 4;
            }return new f.init(r, e / 2);
          } }, s = n.Latin1 = { stringify: function stringify(t) {
            for (var e = t.words, r = t.sigBytes, i = [], n = 0; n < r; n++) {
              var o = e[n >>> 2] >>> 24 - n % 4 * 8 & 255;i.push(String.fromCharCode(o));
            }return i.join("");
          }, parse: function parse(t) {
            for (var e = t.length, r = [], i = 0; i < e; i++) {
              r[i >>> 2] |= (255 & t.charCodeAt(i)) << 24 - i % 4 * 8;
            }return new f.init(r, e);
          } }, a = n.Utf8 = { stringify: function stringify(t) {
            try {
              return decodeURIComponent(escape(s.stringify(t)));
            } catch (t) {
              throw new Error("Malformed UTF-8 data");
            }
          }, parse: function parse(t) {
            return s.parse(unescape(encodeURIComponent(t)));
          } }, c = e.BufferedBlockAlgorithm = i.extend({ reset: function reset() {
            this._data = new f.init(), this._nDataBytes = 0;
          }, _append: function _append(t) {
            "string" == typeof t && (t = a.parse(t)), this._data.concat(t), this._nDataBytes += t.sigBytes;
          }, _process: function _process(t) {
            var e = this._data,
                r = e.words,
                i = e.sigBytes,
                n = this.blockSize,
                o = i / (4 * n),
                s = (o = t ? l.ceil(o) : l.max((0 | o) - this._minBufferSize, 0)) * n,
                a = l.min(4 * s, i);if (s) {
              for (var c = 0; c < s; c += n) {
                this._doProcessBlock(r, c);
              }var h = r.splice(0, s);e.sigBytes -= a;
            }return new f.init(h, a);
          }, clone: function clone() {
            var t = i.clone.call(this);return t._data = this._data.clone(), t;
          }, _minBufferSize: 0 }), e.Hasher = c.extend({ cfg: i.extend(), init: function init(t) {
            this.cfg = this.cfg.extend(t), this.reset();
          }, reset: function reset() {
            c.reset.call(this), this._doReset();
          }, update: function update(t) {
            return this._append(t), this._process(), this;
          }, finalize: function finalize(t) {
            return t && this._append(t), this._doFinalize();
          }, blockSize: 16, _createHelper: function _createHelper(r) {
            return function (t, e) {
              return new r.init(e).finalize(t);
            };
          }, _createHmacHelper: function _createHmacHelper(r) {
            return function (t, e) {
              return new h.HMAC.init(r, e).finalize(t);
            };
          } }), h = t.algo = {}, t);function Wt() {}function Ot(t, e, r) {
          return t ^ e ^ r;
        }function Ut(t, e, r) {
          return t & e | ~t & r;
        }function It(t, e, r) {
          return (t | ~e) ^ r;
        }function Kt(t, e, r) {
          return t & r | e & ~r;
        }function Xt(t, e, r) {
          return t ^ (e | ~r);
        }function Lt(t, e) {
          return t << e | t >>> 32 - e;
        }function jt(t, e, r, i) {
          var n = this._iv;if (n) {
            var o = n.slice(0);this._iv = void 0;
          } else o = this._prevBlock;i.encryptBlock(o, 0);for (var s = 0; s < r; s++) {
            t[e + s] ^= o[s];
          }
        }function Nt(t) {
          if (255 == (t >> 24 & 255)) {
            var e = t >> 16 & 255,
                r = t >> 8 & 255,
                i = 255 & t;255 === e ? (e = 0, 255 === r ? (r = 0, 255 === i ? i = 0 : ++i) : ++r) : ++e, t = 0, t += e << 16, t += r << 8, t += i;
          } else t += 1 << 24;return t;
        }function Tt() {
          for (var t = this._X, e = this._C, r = 0; r < 8; r++) {
            mt[r] = e[r];
          }e[0] = e[0] + 1295307597 + this._b | 0, e[1] = e[1] + 3545052371 + (e[0] >>> 0 < mt[0] >>> 0 ? 1 : 0) | 0, e[2] = e[2] + 886263092 + (e[1] >>> 0 < mt[1] >>> 0 ? 1 : 0) | 0, e[3] = e[3] + 1295307597 + (e[2] >>> 0 < mt[2] >>> 0 ? 1 : 0) | 0, e[4] = e[4] + 3545052371 + (e[3] >>> 0 < mt[3] >>> 0 ? 1 : 0) | 0, e[5] = e[5] + 886263092 + (e[4] >>> 0 < mt[4] >>> 0 ? 1 : 0) | 0, e[6] = e[6] + 1295307597 + (e[5] >>> 0 < mt[5] >>> 0 ? 1 : 0) | 0, e[7] = e[7] + 3545052371 + (e[6] >>> 0 < mt[6] >>> 0 ? 1 : 0) | 0, this._b = e[7] >>> 0 < mt[7] >>> 0 ? 1 : 0;for (r = 0; r < 8; r++) {
            var i = t[r] + e[r],
                n = 65535 & i,
                o = i >>> 16,
                s = ((n * n >>> 17) + n * o >>> 15) + o * o,
                a = ((4294901760 & i) * i | 0) + ((65535 & i) * i | 0);xt[r] = s ^ a;
          }t[0] = xt[0] + (xt[7] << 16 | xt[7] >>> 16) + (xt[6] << 16 | xt[6] >>> 16) | 0, t[1] = xt[1] + (xt[0] << 8 | xt[0] >>> 24) + xt[7] | 0, t[2] = xt[2] + (xt[1] << 16 | xt[1] >>> 16) + (xt[0] << 16 | xt[0] >>> 16) | 0, t[3] = xt[3] + (xt[2] << 8 | xt[2] >>> 24) + xt[1] | 0, t[4] = xt[4] + (xt[3] << 16 | xt[3] >>> 16) + (xt[2] << 16 | xt[2] >>> 16) | 0, t[5] = xt[5] + (xt[4] << 8 | xt[4] >>> 24) + xt[3] | 0, t[6] = xt[6] + (xt[5] << 16 | xt[5] >>> 16) + (xt[4] << 16 | xt[4] >>> 16) | 0, t[7] = xt[7] + (xt[6] << 8 | xt[6] >>> 24) + xt[5] | 0;
        }function Zt() {
          for (var t = this._X, e = this._C, r = 0; r < 8; r++) {
            Et[r] = e[r];
          }e[0] = e[0] + 1295307597 + this._b | 0, e[1] = e[1] + 3545052371 + (e[0] >>> 0 < Et[0] >>> 0 ? 1 : 0) | 0, e[2] = e[2] + 886263092 + (e[1] >>> 0 < Et[1] >>> 0 ? 1 : 0) | 0, e[3] = e[3] + 1295307597 + (e[2] >>> 0 < Et[2] >>> 0 ? 1 : 0) | 0, e[4] = e[4] + 3545052371 + (e[3] >>> 0 < Et[3] >>> 0 ? 1 : 0) | 0, e[5] = e[5] + 886263092 + (e[4] >>> 0 < Et[4] >>> 0 ? 1 : 0) | 0, e[6] = e[6] + 1295307597 + (e[5] >>> 0 < Et[5] >>> 0 ? 1 : 0) | 0, e[7] = e[7] + 3545052371 + (e[6] >>> 0 < Et[6] >>> 0 ? 1 : 0) | 0, this._b = e[7] >>> 0 < Et[7] >>> 0 ? 1 : 0;for (r = 0; r < 8; r++) {
            var i = t[r] + e[r],
                n = 65535 & i,
                o = i >>> 16,
                s = ((n * n >>> 17) + n * o >>> 15) + o * o,
                a = ((4294901760 & i) * i | 0) + ((65535 & i) * i | 0);Mt[r] = s ^ a;
          }t[0] = Mt[0] + (Mt[7] << 16 | Mt[7] >>> 16) + (Mt[6] << 16 | Mt[6] >>> 16) | 0, t[1] = Mt[1] + (Mt[0] << 8 | Mt[0] >>> 24) + Mt[7] | 0, t[2] = Mt[2] + (Mt[1] << 16 | Mt[1] >>> 16) + (Mt[0] << 16 | Mt[0] >>> 16) | 0, t[3] = Mt[3] + (Mt[2] << 8 | Mt[2] >>> 24) + Mt[1] | 0, t[4] = Mt[4] + (Mt[3] << 16 | Mt[3] >>> 16) + (Mt[2] << 16 | Mt[2] >>> 16) | 0, t[5] = Mt[5] + (Mt[4] << 8 | Mt[4] >>> 24) + Mt[3] | 0, t[6] = Mt[6] + (Mt[5] << 16 | Mt[5] >>> 16) + (Mt[4] << 16 | Mt[4] >>> 16) | 0, t[7] = Mt[7] + (Mt[6] << 8 | Mt[6] >>> 24) + Mt[5] | 0;
        }return u = Pt.lib.WordArray, Pt.enc.Base64 = { stringify: function stringify(t) {
            var e = t.words,
                r = t.sigBytes,
                i = this._map;t.clamp();for (var n = [], o = 0; o < r; o += 3) {
              for (var s = (e[o >>> 2] >>> 24 - o % 4 * 8 & 255) << 16 | (e[o + 1 >>> 2] >>> 24 - (o + 1) % 4 * 8 & 255) << 8 | e[o + 2 >>> 2] >>> 24 - (o + 2) % 4 * 8 & 255, a = 0; a < 4 && o + .75 * a < r; a++) {
                n.push(i.charAt(s >>> 6 * (3 - a) & 63));
              }
            }var c = i.charAt(64);if (c) for (; n.length % 4;) {
              n.push(c);
            }return n.join("");
          }, parse: function parse(t) {
            var e = t.length,
                r = this._map,
                i = this._reverseMap;if (!i) {
              i = this._reverseMap = [];for (var n = 0; n < r.length; n++) {
                i[r.charCodeAt(n)] = n;
              }
            }var o = r.charAt(64);if (o) {
              var s = t.indexOf(o);-1 !== s && (e = s);
            }return function (t, e, r) {
              for (var i = [], n = 0, o = 0; o < e; o++) {
                if (o % 4) {
                  var s = r[t.charCodeAt(o - 1)] << o % 4 * 2,
                      a = r[t.charCodeAt(o)] >>> 6 - o % 4 * 2;i[n >>> 2] |= (s | a) << 24 - n % 4 * 8, n++;
                }
              }return u.create(i, n);
            }(t, e, i);
          }, _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" }, function (l) {
          var t = Pt,
              e = t.lib,
              r = e.WordArray,
              i = e.Hasher,
              n = t.algo,
              H = [];!function () {
            for (var t = 0; t < 64; t++) {
              H[t] = 4294967296 * l.abs(l.sin(t + 1)) | 0;
            }
          }();var o = n.MD5 = i.extend({ _doReset: function _doReset() {
              this._hash = new r.init([1732584193, 4023233417, 2562383102, 271733878]);
            }, _doProcessBlock: function _doProcessBlock(t, e) {
              for (var r = 0; r < 16; r++) {
                var i = e + r,
                    n = t[i];t[i] = 16711935 & (n << 8 | n >>> 24) | 4278255360 & (n << 24 | n >>> 8);
              }var o = this._hash.words,
                  s = t[e + 0],
                  a = t[e + 1],
                  c = t[e + 2],
                  h = t[e + 3],
                  l = t[e + 4],
                  f = t[e + 5],
                  u = t[e + 6],
                  d = t[e + 7],
                  p = t[e + 8],
                  _ = t[e + 9],
                  v = t[e + 10],
                  y = t[e + 11],
                  g = t[e + 12],
                  B = t[e + 13],
                  w = t[e + 14],
                  k = t[e + 15],
                  S = o[0],
                  m = o[1],
                  x = o[2],
                  b = o[3];S = z(S, m, x, b, s, 7, H[0]), b = z(b, S, m, x, a, 12, H[1]), x = z(x, b, S, m, c, 17, H[2]), m = z(m, x, b, S, h, 22, H[3]), S = z(S, m, x, b, l, 7, H[4]), b = z(b, S, m, x, f, 12, H[5]), x = z(x, b, S, m, u, 17, H[6]), m = z(m, x, b, S, d, 22, H[7]), S = z(S, m, x, b, p, 7, H[8]), b = z(b, S, m, x, _, 12, H[9]), x = z(x, b, S, m, v, 17, H[10]), m = z(m, x, b, S, y, 22, H[11]), S = z(S, m, x, b, g, 7, H[12]), b = z(b, S, m, x, B, 12, H[13]), x = z(x, b, S, m, w, 17, H[14]), S = A(S, m = z(m, x, b, S, k, 22, H[15]), x, b, a, 5, H[16]), b = A(b, S, m, x, u, 9, H[17]), x = A(x, b, S, m, y, 14, H[18]), m = A(m, x, b, S, s, 20, H[19]), S = A(S, m, x, b, f, 5, H[20]), b = A(b, S, m, x, v, 9, H[21]), x = A(x, b, S, m, k, 14, H[22]), m = A(m, x, b, S, l, 20, H[23]), S = A(S, m, x, b, _, 5, H[24]), b = A(b, S, m, x, w, 9, H[25]), x = A(x, b, S, m, h, 14, H[26]), m = A(m, x, b, S, p, 20, H[27]), S = A(S, m, x, b, B, 5, H[28]), b = A(b, S, m, x, c, 9, H[29]), x = A(x, b, S, m, d, 14, H[30]), S = C(S, m = A(m, x, b, S, g, 20, H[31]), x, b, f, 4, H[32]), b = C(b, S, m, x, p, 11, H[33]), x = C(x, b, S, m, y, 16, H[34]), m = C(m, x, b, S, w, 23, H[35]), S = C(S, m, x, b, a, 4, H[36]), b = C(b, S, m, x, l, 11, H[37]), x = C(x, b, S, m, d, 16, H[38]), m = C(m, x, b, S, v, 23, H[39]), S = C(S, m, x, b, B, 4, H[40]), b = C(b, S, m, x, s, 11, H[41]), x = C(x, b, S, m, h, 16, H[42]), m = C(m, x, b, S, u, 23, H[43]), S = C(S, m, x, b, _, 4, H[44]), b = C(b, S, m, x, g, 11, H[45]), x = C(x, b, S, m, k, 16, H[46]), S = D(S, m = C(m, x, b, S, c, 23, H[47]), x, b, s, 6, H[48]), b = D(b, S, m, x, d, 10, H[49]), x = D(x, b, S, m, w, 15, H[50]), m = D(m, x, b, S, f, 21, H[51]), S = D(S, m, x, b, g, 6, H[52]), b = D(b, S, m, x, h, 10, H[53]), x = D(x, b, S, m, v, 15, H[54]), m = D(m, x, b, S, a, 21, H[55]), S = D(S, m, x, b, p, 6, H[56]), b = D(b, S, m, x, k, 10, H[57]), x = D(x, b, S, m, u, 15, H[58]), m = D(m, x, b, S, B, 21, H[59]), S = D(S, m, x, b, l, 6, H[60]), b = D(b, S, m, x, y, 10, H[61]), x = D(x, b, S, m, c, 15, H[62]), m = D(m, x, b, S, _, 21, H[63]), o[0] = o[0] + S | 0, o[1] = o[1] + m | 0, o[2] = o[2] + x | 0, o[3] = o[3] + b | 0;
            }, _doFinalize: function _doFinalize() {
              var t = this._data,
                  e = t.words,
                  r = 8 * this._nDataBytes,
                  i = 8 * t.sigBytes;e[i >>> 5] |= 128 << 24 - i % 32;var n = l.floor(r / 4294967296),
                  o = r;e[15 + (64 + i >>> 9 << 4)] = 16711935 & (n << 8 | n >>> 24) | 4278255360 & (n << 24 | n >>> 8), e[14 + (64 + i >>> 9 << 4)] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8), t.sigBytes = 4 * (e.length + 1), this._process();for (var s = this._hash, a = s.words, c = 0; c < 4; c++) {
                var h = a[c];a[c] = 16711935 & (h << 8 | h >>> 24) | 4278255360 & (h << 24 | h >>> 8);
              }return s;
            }, clone: function clone() {
              var t = i.clone.call(this);return t._hash = this._hash.clone(), t;
            } });function z(t, e, r, i, n, o, s) {
            var a = t + (e & r | ~e & i) + n + s;return (a << o | a >>> 32 - o) + e;
          }function A(t, e, r, i, n, o, s) {
            var a = t + (e & i | r & ~i) + n + s;return (a << o | a >>> 32 - o) + e;
          }function C(t, e, r, i, n, o, s) {
            var a = t + (e ^ r ^ i) + n + s;return (a << o | a >>> 32 - o) + e;
          }function D(t, e, r, i, n, o, s) {
            var a = t + (r ^ (e | ~i)) + n + s;return (a << o | a >>> 32 - o) + e;
          }t.MD5 = i._createHelper(o), t.HmacMD5 = i._createHmacHelper(o);
        }(Math), p = (d = Pt).lib, _ = p.WordArray, v = p.Hasher, y = d.algo, g = [], B = y.SHA1 = v.extend({ _doReset: function _doReset() {
            this._hash = new _.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
          }, _doProcessBlock: function _doProcessBlock(t, e) {
            for (var r = this._hash.words, i = r[0], n = r[1], o = r[2], s = r[3], a = r[4], c = 0; c < 80; c++) {
              if (c < 16) g[c] = 0 | t[e + c];else {
                var h = g[c - 3] ^ g[c - 8] ^ g[c - 14] ^ g[c - 16];g[c] = h << 1 | h >>> 31;
              }var l = (i << 5 | i >>> 27) + a + g[c];l += c < 20 ? 1518500249 + (n & o | ~n & s) : c < 40 ? 1859775393 + (n ^ o ^ s) : c < 60 ? (n & o | n & s | o & s) - 1894007588 : (n ^ o ^ s) - 899497514, a = s, s = o, o = n << 30 | n >>> 2, n = i, i = l;
            }r[0] = r[0] + i | 0, r[1] = r[1] + n | 0, r[2] = r[2] + o | 0, r[3] = r[3] + s | 0, r[4] = r[4] + a | 0;
          }, _doFinalize: function _doFinalize() {
            var t = this._data,
                e = t.words,
                r = 8 * this._nDataBytes,
                i = 8 * t.sigBytes;return e[i >>> 5] |= 128 << 24 - i % 32, e[14 + (64 + i >>> 9 << 4)] = Math.floor(r / 4294967296), e[15 + (64 + i >>> 9 << 4)] = r, t.sigBytes = 4 * e.length, this._process(), this._hash;
          }, clone: function clone() {
            var t = v.clone.call(this);return t._hash = this._hash.clone(), t;
          } }), d.SHA1 = v._createHelper(B), d.HmacSHA1 = v._createHmacHelper(B), function (n) {
          var t = Pt,
              e = t.lib,
              r = e.WordArray,
              i = e.Hasher,
              o = t.algo,
              s = [],
              B = [];!function () {
            function t(t) {
              for (var e = n.sqrt(t), r = 2; r <= e; r++) {
                if (!(t % r)) return;
              }return 1;
            }function e(t) {
              return 4294967296 * (t - (0 | t)) | 0;
            }for (var r = 2, i = 0; i < 64;) {
              t(r) && (i < 8 && (s[i] = e(n.pow(r, .5))), B[i] = e(n.pow(r, 1 / 3)), i++), r++;
            }
          }();var w = [],
              a = o.SHA256 = i.extend({ _doReset: function _doReset() {
              this._hash = new r.init(s.slice(0));
            }, _doProcessBlock: function _doProcessBlock(t, e) {
              for (var r = this._hash.words, i = r[0], n = r[1], o = r[2], s = r[3], a = r[4], c = r[5], h = r[6], l = r[7], f = 0; f < 64; f++) {
                if (f < 16) w[f] = 0 | t[e + f];else {
                  var u = w[f - 15],
                      d = (u << 25 | u >>> 7) ^ (u << 14 | u >>> 18) ^ u >>> 3,
                      p = w[f - 2],
                      _ = (p << 15 | p >>> 17) ^ (p << 13 | p >>> 19) ^ p >>> 10;w[f] = d + w[f - 7] + _ + w[f - 16];
                }var v = i & n ^ i & o ^ n & o,
                    y = (i << 30 | i >>> 2) ^ (i << 19 | i >>> 13) ^ (i << 10 | i >>> 22),
                    g = l + ((a << 26 | a >>> 6) ^ (a << 21 | a >>> 11) ^ (a << 7 | a >>> 25)) + (a & c ^ ~a & h) + B[f] + w[f];l = h, h = c, c = a, a = s + g | 0, s = o, o = n, n = i, i = g + (y + v) | 0;
              }r[0] = r[0] + i | 0, r[1] = r[1] + n | 0, r[2] = r[2] + o | 0, r[3] = r[3] + s | 0, r[4] = r[4] + a | 0, r[5] = r[5] + c | 0, r[6] = r[6] + h | 0, r[7] = r[7] + l | 0;
            }, _doFinalize: function _doFinalize() {
              var t = this._data,
                  e = t.words,
                  r = 8 * this._nDataBytes,
                  i = 8 * t.sigBytes;return e[i >>> 5] |= 128 << 24 - i % 32, e[14 + (64 + i >>> 9 << 4)] = n.floor(r / 4294967296), e[15 + (64 + i >>> 9 << 4)] = r, t.sigBytes = 4 * e.length, this._process(), this._hash;
            }, clone: function clone() {
              var t = i.clone.call(this);return t._hash = this._hash.clone(), t;
            } });t.SHA256 = i._createHelper(a), t.HmacSHA256 = i._createHmacHelper(a);
        }(Math), function () {
          var n = Pt.lib.WordArray,
              t = Pt.enc;t.Utf16 = t.Utf16BE = { stringify: function stringify(t) {
              for (var e = t.words, r = t.sigBytes, i = [], n = 0; n < r; n += 2) {
                var o = e[n >>> 2] >>> 16 - n % 4 * 8 & 65535;i.push(String.fromCharCode(o));
              }return i.join("");
            }, parse: function parse(t) {
              for (var e = t.length, r = [], i = 0; i < e; i++) {
                r[i >>> 1] |= t.charCodeAt(i) << 16 - i % 2 * 16;
              }return n.create(r, 2 * e);
            } };function s(t) {
            return t << 8 & 4278255360 | t >>> 8 & 16711935;
          }t.Utf16LE = { stringify: function stringify(t) {
              for (var e = t.words, r = t.sigBytes, i = [], n = 0; n < r; n += 2) {
                var o = s(e[n >>> 2] >>> 16 - n % 4 * 8 & 65535);i.push(String.fromCharCode(o));
              }return i.join("");
            }, parse: function parse(t) {
              for (var e = t.length, r = [], i = 0; i < e; i++) {
                r[i >>> 1] |= s(t.charCodeAt(i) << 16 - i % 2 * 16);
              }return n.create(r, 2 * e);
            } };
        }(), function () {
          if ("function" == typeof ArrayBuffer) {
            var t = Pt.lib.WordArray,
                n = t.init;(t.init = function (t) {
              if (t instanceof ArrayBuffer && (t = new Uint8Array(t)), (t instanceof Int8Array || "undefined" != typeof Uint8ClampedArray && t instanceof Uint8ClampedArray || t instanceof Int16Array || t instanceof Uint16Array || t instanceof Int32Array || t instanceof Uint32Array || t instanceof Float32Array || t instanceof Float64Array) && (t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength)), t instanceof Uint8Array) {
                for (var e = t.byteLength, r = [], i = 0; i < e; i++) {
                  r[i >>> 2] |= t[i] << 24 - i % 4 * 8;
                }n.call(this, r, e);
              } else n.apply(this, arguments);
            }).prototype = t;
          }
        }(), Math, k = (w = Pt).lib, S = k.WordArray, m = k.Hasher, x = w.algo, b = S.create([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13]), H = S.create([5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11]), z = S.create([11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6]), A = S.create([8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]), C = S.create([0, 1518500249, 1859775393, 2400959708, 2840853838]), D = S.create([1352829926, 1548603684, 1836072691, 2053994217, 0]), R = x.RIPEMD160 = m.extend({ _doReset: function _doReset() {
            this._hash = S.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
          }, _doProcessBlock: function _doProcessBlock(t, e) {
            for (var r = 0; r < 16; r++) {
              var i = e + r,
                  n = t[i];t[i] = 16711935 & (n << 8 | n >>> 24) | 4278255360 & (n << 24 | n >>> 8);
            }var o,
                s,
                a,
                c,
                h,
                l,
                f,
                u,
                d,
                p,
                _,
                v = this._hash.words,
                y = C.words,
                g = D.words,
                B = b.words,
                w = H.words,
                k = z.words,
                S = A.words;l = o = v[0], f = s = v[1], u = a = v[2], d = c = v[3], p = h = v[4];for (r = 0; r < 80; r += 1) {
              _ = o + t[e + B[r]] | 0, _ += r < 16 ? Ot(s, a, c) + y[0] : r < 32 ? Ut(s, a, c) + y[1] : r < 48 ? It(s, a, c) + y[2] : r < 64 ? Kt(s, a, c) + y[3] : Xt(s, a, c) + y[4], _ = (_ = Lt(_ |= 0, k[r])) + h | 0, o = h, h = c, c = Lt(a, 10), a = s, s = _, _ = l + t[e + w[r]] | 0, _ += r < 16 ? Xt(f, u, d) + g[0] : r < 32 ? Kt(f, u, d) + g[1] : r < 48 ? It(f, u, d) + g[2] : r < 64 ? Ut(f, u, d) + g[3] : Ot(f, u, d) + g[4], _ = (_ = Lt(_ |= 0, S[r])) + p | 0, l = p, p = d, d = Lt(u, 10), u = f, f = _;
            }_ = v[1] + a + d | 0, v[1] = v[2] + c + p | 0, v[2] = v[3] + h + l | 0, v[3] = v[4] + o + f | 0, v[4] = v[0] + s + u | 0, v[0] = _;
          }, _doFinalize: function _doFinalize() {
            var t = this._data,
                e = t.words,
                r = 8 * this._nDataBytes,
                i = 8 * t.sigBytes;e[i >>> 5] |= 128 << 24 - i % 32, e[14 + (64 + i >>> 9 << 4)] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8), t.sigBytes = 4 * (e.length + 1), this._process();for (var n = this._hash, o = n.words, s = 0; s < 5; s++) {
              var a = o[s];o[s] = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8);
            }return n;
          }, clone: function clone() {
            var t = m.clone.call(this);return t._hash = this._hash.clone(), t;
          } }), w.RIPEMD160 = m._createHelper(R), w.HmacRIPEMD160 = m._createHmacHelper(R), E = Pt.lib.Base, M = Pt.enc.Utf8, Pt.algo.HMAC = E.extend({ init: function init(t, e) {
            t = this._hasher = new t.init(), "string" == typeof e && (e = M.parse(e));var r = t.blockSize,
                i = 4 * r;e.sigBytes > i && (e = t.finalize(e)), e.clamp();for (var n = this._oKey = e.clone(), o = this._iKey = e.clone(), s = n.words, a = o.words, c = 0; c < r; c++) {
              s[c] ^= 1549556828, a[c] ^= 909522486;
            }n.sigBytes = o.sigBytes = i, this.reset();
          }, reset: function reset() {
            var t = this._hasher;t.reset(), t.update(this._iKey);
          }, update: function update(t) {
            return this._hasher.update(t), this;
          }, finalize: function finalize(t) {
            var e = this._hasher,
                r = e.finalize(t);return e.reset(), e.finalize(this._oKey.clone().concat(r));
          } }), P = (F = Pt).lib, W = P.Base, O = P.WordArray, U = F.algo, I = U.SHA1, K = U.HMAC, X = U.PBKDF2 = W.extend({ cfg: W.extend({ keySize: 4, hasher: I, iterations: 1 }), init: function init(t) {
            this.cfg = this.cfg.extend(t);
          }, compute: function compute(t, e) {
            for (var r = this.cfg, i = K.create(r.hasher, t), n = O.create(), o = O.create([1]), s = n.words, a = o.words, c = r.keySize, h = r.iterations; s.length < c;) {
              var l = i.update(e).finalize(o);i.reset();for (var f = l.words, u = f.length, d = l, p = 1; p < h; p++) {
                d = i.finalize(d), i.reset();for (var _ = d.words, v = 0; v < u; v++) {
                  f[v] ^= _[v];
                }
              }n.concat(l), a[0]++;
            }return n.sigBytes = 4 * c, n;
          } }), F.PBKDF2 = function (t, e, r) {
          return X.create(r).compute(t, e);
        }, j = (L = Pt).lib, N = j.Base, T = j.WordArray, Z = L.algo, q = Z.MD5, G = Z.EvpKDF = N.extend({ cfg: N.extend({ keySize: 4, hasher: q, iterations: 1 }), init: function init(t) {
            this.cfg = this.cfg.extend(t);
          }, compute: function compute(t, e) {
            for (var r = this.cfg, i = r.hasher.create(), n = T.create(), o = n.words, s = r.keySize, a = r.iterations; o.length < s;) {
              c && i.update(c);var c = i.update(t).finalize(e);i.reset();for (var h = 1; h < a; h++) {
                c = i.finalize(c), i.reset();
              }n.concat(c);
            }return n.sigBytes = 4 * s, n;
          } }), L.EvpKDF = function (t, e, r) {
          return G.create(r).compute(t, e);
        }, $ = (J = Pt).lib.WordArray, Q = J.algo, V = Q.SHA256, Y = Q.SHA224 = V.extend({ _doReset: function _doReset() {
            this._hash = new $.init([3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428]);
          }, _doFinalize: function _doFinalize() {
            var t = V._doFinalize.call(this);return t.sigBytes -= 4, t;
          } }), J.SHA224 = V._createHelper(Y), J.HmacSHA224 = V._createHmacHelper(Y), tt = Pt.lib, et = tt.Base, rt = tt.WordArray, (it = Pt.x64 = {}).Word = et.extend({ init: function init(t, e) {
            this.high = t, this.low = e;
          } }), it.WordArray = et.extend({ init: function init(t, e) {
            t = this.words = t || [], this.sigBytes = null != e ? e : 8 * t.length;
          }, toX32: function toX32() {
            for (var t = this.words, e = t.length, r = [], i = 0; i < e; i++) {
              var n = t[i];r.push(n.high), r.push(n.low);
            }return rt.create(r, this.sigBytes);
          }, clone: function clone() {
            for (var t = et.clone.call(this), e = t.words = this.words.slice(0), r = e.length, i = 0; i < r; i++) {
              e[i] = e[i].clone();
            }return t;
          } }), function (u) {
          var t = Pt,
              e = t.lib,
              d = e.WordArray,
              i = e.Hasher,
              l = t.x64.Word,
              r = t.algo,
              C = [],
              D = [],
              R = [];!function () {
            for (var t = 1, e = 0, r = 0; r < 24; r++) {
              C[t + 5 * e] = (r + 1) * (r + 2) / 2 % 64;var i = (2 * t + 3 * e) % 5;t = e % 5, e = i;
            }for (t = 0; t < 5; t++) {
              for (e = 0; e < 5; e++) {
                D[t + 5 * e] = e + (2 * t + 3 * e) % 5 * 5;
              }
            }for (var n = 1, o = 0; o < 24; o++) {
              for (var s = 0, a = 0, c = 0; c < 7; c++) {
                if (1 & n) {
                  var h = (1 << c) - 1;h < 32 ? a ^= 1 << h : s ^= 1 << h - 32;
                }128 & n ? n = n << 1 ^ 113 : n <<= 1;
              }R[o] = l.create(s, a);
            }
          }();var E = [];!function () {
            for (var t = 0; t < 25; t++) {
              E[t] = l.create();
            }
          }();var n = r.SHA3 = i.extend({ cfg: i.cfg.extend({ outputLength: 512 }), _doReset: function _doReset() {
              for (var t = this._state = [], e = 0; e < 25; e++) {
                t[e] = new l.init();
              }this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
            }, _doProcessBlock: function _doProcessBlock(t, e) {
              for (var r = this._state, i = this.blockSize / 2, n = 0; n < i; n++) {
                var o = t[e + 2 * n],
                    s = t[e + 2 * n + 1];o = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8), s = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8), (x = r[n]).high ^= s, x.low ^= o;
              }for (var a = 0; a < 24; a++) {
                for (var c = 0; c < 5; c++) {
                  for (var h = 0, l = 0, f = 0; f < 5; f++) {
                    h ^= (x = r[c + 5 * f]).high, l ^= x.low;
                  }var u = E[c];u.high = h, u.low = l;
                }for (c = 0; c < 5; c++) {
                  var d = E[(c + 4) % 5],
                      p = E[(c + 1) % 5],
                      _ = p.high,
                      v = p.low;for (h = d.high ^ (_ << 1 | v >>> 31), l = d.low ^ (v << 1 | _ >>> 31), f = 0; f < 5; f++) {
                    (x = r[c + 5 * f]).high ^= h, x.low ^= l;
                  }
                }for (var y = 1; y < 25; y++) {
                  var g = (x = r[y]).high,
                      B = x.low,
                      w = C[y];if (w < 32) h = g << w | B >>> 32 - w, l = B << w | g >>> 32 - w;else h = B << w - 32 | g >>> 64 - w, l = g << w - 32 | B >>> 64 - w;var k = E[D[y]];k.high = h, k.low = l;
                }var S = E[0],
                    m = r[0];S.high = m.high, S.low = m.low;for (c = 0; c < 5; c++) {
                  for (f = 0; f < 5; f++) {
                    var x = r[y = c + 5 * f],
                        b = E[y],
                        H = E[(c + 1) % 5 + 5 * f],
                        z = E[(c + 2) % 5 + 5 * f];x.high = b.high ^ ~H.high & z.high, x.low = b.low ^ ~H.low & z.low;
                  }
                }x = r[0];var A = R[a];x.high ^= A.high, x.low ^= A.low;
              }
            }, _doFinalize: function _doFinalize() {
              var t = this._data,
                  e = t.words,
                  r = (this._nDataBytes, 8 * t.sigBytes),
                  i = 32 * this.blockSize;e[r >>> 5] |= 1 << 24 - r % 32, e[(u.ceil((1 + r) / i) * i >>> 5) - 1] |= 128, t.sigBytes = 4 * e.length, this._process();for (var n = this._state, o = this.cfg.outputLength / 8, s = o / 8, a = [], c = 0; c < s; c++) {
                var h = n[c],
                    l = h.high,
                    f = h.low;l = 16711935 & (l << 8 | l >>> 24) | 4278255360 & (l << 24 | l >>> 8), f = 16711935 & (f << 8 | f >>> 24) | 4278255360 & (f << 24 | f >>> 8), a.push(f), a.push(l);
              }return new d.init(a, o);
            }, clone: function clone() {
              for (var t = i.clone.call(this), e = t._state = this._state.slice(0), r = 0; r < 25; r++) {
                e[r] = e[r].clone();
              }return t;
            } });t.SHA3 = i._createHelper(n), t.HmacSHA3 = i._createHmacHelper(n);
        }(Math), function () {
          var t = Pt,
              e = t.lib.Hasher,
              r = t.x64,
              i = r.Word,
              n = r.WordArray,
              o = t.algo;function s() {
            return i.create.apply(i, arguments);
          }var mt = [s(1116352408, 3609767458), s(1899447441, 602891725), s(3049323471, 3964484399), s(3921009573, 2173295548), s(961987163, 4081628472), s(1508970993, 3053834265), s(2453635748, 2937671579), s(2870763221, 3664609560), s(3624381080, 2734883394), s(310598401, 1164996542), s(607225278, 1323610764), s(1426881987, 3590304994), s(1925078388, 4068182383), s(2162078206, 991336113), s(2614888103, 633803317), s(3248222580, 3479774868), s(3835390401, 2666613458), s(4022224774, 944711139), s(264347078, 2341262773), s(604807628, 2007800933), s(770255983, 1495990901), s(1249150122, 1856431235), s(1555081692, 3175218132), s(1996064986, 2198950837), s(2554220882, 3999719339), s(2821834349, 766784016), s(2952996808, 2566594879), s(3210313671, 3203337956), s(3336571891, 1034457026), s(3584528711, 2466948901), s(113926993, 3758326383), s(338241895, 168717936), s(666307205, 1188179964), s(773529912, 1546045734), s(1294757372, 1522805485), s(1396182291, 2643833823), s(1695183700, 2343527390), s(1986661051, 1014477480), s(2177026350, 1206759142), s(2456956037, 344077627), s(2730485921, 1290863460), s(2820302411, 3158454273), s(3259730800, 3505952657), s(3345764771, 106217008), s(3516065817, 3606008344), s(3600352804, 1432725776), s(4094571909, 1467031594), s(275423344, 851169720), s(430227734, 3100823752), s(506948616, 1363258195), s(659060556, 3750685593), s(883997877, 3785050280), s(958139571, 3318307427), s(1322822218, 3812723403), s(1537002063, 2003034995), s(1747873779, 3602036899), s(1955562222, 1575990012), s(2024104815, 1125592928), s(2227730452, 2716904306), s(2361852424, 442776044), s(2428436474, 593698344), s(2756734187, 3733110249), s(3204031479, 2999351573), s(3329325298, 3815920427), s(3391569614, 3928383900), s(3515267271, 566280711), s(3940187606, 3454069534), s(4118630271, 4000239992), s(116418474, 1914138554), s(174292421, 2731055270), s(289380356, 3203993006), s(460393269, 320620315), s(685471733, 587496836), s(852142971, 1086792851), s(1017036298, 365543100), s(1126000580, 2618297676), s(1288033470, 3409855158), s(1501505948, 4234509866), s(1607167915, 987167468), s(1816402316, 1246189591)],
              xt = [];!function () {
            for (var t = 0; t < 80; t++) {
              xt[t] = s();
            }
          }();var a = o.SHA512 = e.extend({ _doReset: function _doReset() {
              this._hash = new n.init([new i.init(1779033703, 4089235720), new i.init(3144134277, 2227873595), new i.init(1013904242, 4271175723), new i.init(2773480762, 1595750129), new i.init(1359893119, 2917565137), new i.init(2600822924, 725511199), new i.init(528734635, 4215389547), new i.init(1541459225, 327033209)]);
            }, _doProcessBlock: function _doProcessBlock(t, e) {
              for (var r = this._hash.words, i = r[0], n = r[1], o = r[2], s = r[3], a = r[4], c = r[5], h = r[6], l = r[7], f = i.high, u = i.low, d = n.high, p = n.low, _ = o.high, v = o.low, y = s.high, g = s.low, B = a.high, w = a.low, k = c.high, S = c.low, m = h.high, x = h.low, b = l.high, H = l.low, z = f, A = u, C = d, D = p, R = _, E = v, M = y, F = g, P = B, W = w, O = k, U = S, I = m, K = x, X = b, L = H, j = 0; j < 80; j++) {
                var N = xt[j];if (j < 16) var T = N.high = 0 | t[e + 2 * j],
                    Z = N.low = 0 | t[e + 2 * j + 1];else {
                  var q = xt[j - 15],
                      G = q.high,
                      J = q.low,
                      $ = (G >>> 1 | J << 31) ^ (G >>> 8 | J << 24) ^ G >>> 7,
                      Q = (J >>> 1 | G << 31) ^ (J >>> 8 | G << 24) ^ (J >>> 7 | G << 25),
                      V = xt[j - 2],
                      Y = V.high,
                      tt = V.low,
                      et = (Y >>> 19 | tt << 13) ^ (Y << 3 | tt >>> 29) ^ Y >>> 6,
                      rt = (tt >>> 19 | Y << 13) ^ (tt << 3 | Y >>> 29) ^ (tt >>> 6 | Y << 26),
                      it = xt[j - 7],
                      nt = it.high,
                      ot = it.low,
                      st = xt[j - 16],
                      at = st.high,
                      ct = st.low;T = (T = (T = $ + nt + ((Z = Q + ot) >>> 0 < Q >>> 0 ? 1 : 0)) + et + ((Z = Z + rt) >>> 0 < rt >>> 0 ? 1 : 0)) + at + ((Z = Z + ct) >>> 0 < ct >>> 0 ? 1 : 0);N.high = T, N.low = Z;
                }var ht,
                    lt = P & O ^ ~P & I,
                    ft = W & U ^ ~W & K,
                    ut = z & C ^ z & R ^ C & R,
                    dt = A & D ^ A & E ^ D & E,
                    pt = (z >>> 28 | A << 4) ^ (z << 30 | A >>> 2) ^ (z << 25 | A >>> 7),
                    _t = (A >>> 28 | z << 4) ^ (A << 30 | z >>> 2) ^ (A << 25 | z >>> 7),
                    vt = (P >>> 14 | W << 18) ^ (P >>> 18 | W << 14) ^ (P << 23 | W >>> 9),
                    yt = (W >>> 14 | P << 18) ^ (W >>> 18 | P << 14) ^ (W << 23 | P >>> 9),
                    gt = mt[j],
                    Bt = gt.high,
                    wt = gt.low,
                    kt = X + vt + ((ht = L + yt) >>> 0 < L >>> 0 ? 1 : 0),
                    St = _t + dt;X = I, L = K, I = O, K = U, O = P, U = W, P = M + (kt = (kt = (kt = kt + lt + ((ht = ht + ft) >>> 0 < ft >>> 0 ? 1 : 0)) + Bt + ((ht = ht + wt) >>> 0 < wt >>> 0 ? 1 : 0)) + T + ((ht = ht + Z) >>> 0 < Z >>> 0 ? 1 : 0)) + ((W = F + ht | 0) >>> 0 < F >>> 0 ? 1 : 0) | 0, M = R, F = E, R = C, E = D, C = z, D = A, z = kt + (pt + ut + (St >>> 0 < _t >>> 0 ? 1 : 0)) + ((A = ht + St | 0) >>> 0 < ht >>> 0 ? 1 : 0) | 0;
              }u = i.low = u + A, i.high = f + z + (u >>> 0 < A >>> 0 ? 1 : 0), p = n.low = p + D, n.high = d + C + (p >>> 0 < D >>> 0 ? 1 : 0), v = o.low = v + E, o.high = _ + R + (v >>> 0 < E >>> 0 ? 1 : 0), g = s.low = g + F, s.high = y + M + (g >>> 0 < F >>> 0 ? 1 : 0), w = a.low = w + W, a.high = B + P + (w >>> 0 < W >>> 0 ? 1 : 0), S = c.low = S + U, c.high = k + O + (S >>> 0 < U >>> 0 ? 1 : 0), x = h.low = x + K, h.high = m + I + (x >>> 0 < K >>> 0 ? 1 : 0), H = l.low = H + L, l.high = b + X + (H >>> 0 < L >>> 0 ? 1 : 0);
            }, _doFinalize: function _doFinalize() {
              var t = this._data,
                  e = t.words,
                  r = 8 * this._nDataBytes,
                  i = 8 * t.sigBytes;return e[i >>> 5] |= 128 << 24 - i % 32, e[30 + (128 + i >>> 10 << 5)] = Math.floor(r / 4294967296), e[31 + (128 + i >>> 10 << 5)] = r, t.sigBytes = 4 * e.length, this._process(), this._hash.toX32();
            }, clone: function clone() {
              var t = e.clone.call(this);return t._hash = this._hash.clone(), t;
            }, blockSize: 32 });t.SHA512 = e._createHelper(a), t.HmacSHA512 = e._createHmacHelper(a);
        }(), ot = (nt = Pt).x64, st = ot.Word, at = ot.WordArray, ct = nt.algo, ht = ct.SHA512, lt = ct.SHA384 = ht.extend({ _doReset: function _doReset() {
            this._hash = new at.init([new st.init(3418070365, 3238371032), new st.init(1654270250, 914150663), new st.init(2438529370, 812702999), new st.init(355462360, 4144912697), new st.init(1731405415, 4290775857), new st.init(2394180231, 1750603025), new st.init(3675008525, 1694076839), new st.init(1203062813, 3204075428)]);
          }, _doFinalize: function _doFinalize() {
            var t = ht._doFinalize.call(this);return t.sigBytes -= 16, t;
          } }), nt.SHA384 = ht._createHelper(lt), nt.HmacSHA384 = ht._createHmacHelper(lt), Pt.lib.Cipher || function () {
          var t = Pt,
              e = t.lib,
              r = e.Base,
              c = e.WordArray,
              i = e.BufferedBlockAlgorithm,
              n = t.enc,
              o = (n.Utf8, n.Base64),
              s = t.algo.EvpKDF,
              a = e.Cipher = i.extend({ cfg: r.extend(), createEncryptor: function createEncryptor(t, e) {
              return this.create(this._ENC_XFORM_MODE, t, e);
            }, createDecryptor: function createDecryptor(t, e) {
              return this.create(this._DEC_XFORM_MODE, t, e);
            }, init: function init(t, e, r) {
              this.cfg = this.cfg.extend(r), this._xformMode = t, this._key = e, this.reset();
            }, reset: function reset() {
              i.reset.call(this), this._doReset();
            }, process: function process(t) {
              return this._append(t), this._process();
            }, finalize: function finalize(t) {
              return t && this._append(t), this._doFinalize();
            }, keySize: 4, ivSize: 4, _ENC_XFORM_MODE: 1, _DEC_XFORM_MODE: 2, _createHelper: function _createHelper(i) {
              return { encrypt: function encrypt(t, e, r) {
                  return h(e).encrypt(i, t, e, r);
                }, decrypt: function decrypt(t, e, r) {
                  return h(e).decrypt(i, t, e, r);
                } };
            } });function h(t) {
            return "string" == typeof t ? w : g;
          }e.StreamCipher = a.extend({ _doFinalize: function _doFinalize() {
              return this._process(!0);
            }, blockSize: 1 });var l,
              f = t.mode = {},
              u = e.BlockCipherMode = r.extend({ createEncryptor: function createEncryptor(t, e) {
              return this.Encryptor.create(t, e);
            }, createDecryptor: function createDecryptor(t, e) {
              return this.Decryptor.create(t, e);
            }, init: function init(t, e) {
              this._cipher = t, this._iv = e;
            } }),
              d = f.CBC = ((l = u.extend()).Encryptor = l.extend({ processBlock: function processBlock(t, e) {
              var r = this._cipher,
                  i = r.blockSize;p.call(this, t, e, i), r.encryptBlock(t, e), this._prevBlock = t.slice(e, e + i);
            } }), l.Decryptor = l.extend({ processBlock: function processBlock(t, e) {
              var r = this._cipher,
                  i = r.blockSize,
                  n = t.slice(e, e + i);r.decryptBlock(t, e), p.call(this, t, e, i), this._prevBlock = n;
            } }), l);function p(t, e, r) {
            var i = this._iv;if (i) {
              var n = i;this._iv = void 0;
            } else n = this._prevBlock;for (var o = 0; o < r; o++) {
              t[e + o] ^= n[o];
            }
          }var _ = (t.pad = {}).Pkcs7 = { pad: function pad(t, e) {
              for (var r = 4 * e, i = r - t.sigBytes % r, n = i << 24 | i << 16 | i << 8 | i, o = [], s = 0; s < i; s += 4) {
                o.push(n);
              }var a = c.create(o, i);t.concat(a);
            }, unpad: function unpad(t) {
              var e = 255 & t.words[t.sigBytes - 1 >>> 2];t.sigBytes -= e;
            } },
              v = (e.BlockCipher = a.extend({ cfg: a.cfg.extend({ mode: d, padding: _ }), reset: function reset() {
              a.reset.call(this);var t = this.cfg,
                  e = t.iv,
                  r = t.mode;if (this._xformMode == this._ENC_XFORM_MODE) var i = r.createEncryptor;else {
                i = r.createDecryptor;this._minBufferSize = 1;
              }this._mode && this._mode.__creator == i ? this._mode.init(this, e && e.words) : (this._mode = i.call(r, this, e && e.words), this._mode.__creator = i);
            }, _doProcessBlock: function _doProcessBlock(t, e) {
              this._mode.processBlock(t, e);
            }, _doFinalize: function _doFinalize() {
              var t = this.cfg.padding;if (this._xformMode == this._ENC_XFORM_MODE) {
                t.pad(this._data, this.blockSize);var e = this._process(!0);
              } else {
                e = this._process(!0);t.unpad(e);
              }return e;
            }, blockSize: 4 }), e.CipherParams = r.extend({ init: function init(t) {
              this.mixIn(t);
            }, toString: function toString(t) {
              return (t || this.formatter).stringify(this);
            } })),
              y = (t.format = {}).OpenSSL = { stringify: function stringify(t) {
              var e = t.ciphertext,
                  r = t.salt;if (r) var i = c.create([1398893684, 1701076831]).concat(r).concat(e);else i = e;return i.toString(o);
            }, parse: function parse(t) {
              var e = o.parse(t),
                  r = e.words;if (1398893684 == r[0] && 1701076831 == r[1]) {
                var i = c.create(r.slice(2, 4));r.splice(0, 4), e.sigBytes -= 16;
              }return v.create({ ciphertext: e, salt: i });
            } },
              g = e.SerializableCipher = r.extend({ cfg: r.extend({ format: y }), encrypt: function encrypt(t, e, r, i) {
              i = this.cfg.extend(i);var n = t.createEncryptor(r, i),
                  o = n.finalize(e),
                  s = n.cfg;return v.create({ ciphertext: o, key: r, iv: s.iv, algorithm: t, mode: s.mode, padding: s.padding, blockSize: t.blockSize, formatter: i.format });
            }, decrypt: function decrypt(t, e, r, i) {
              return i = this.cfg.extend(i), e = this._parse(e, i.format), t.createDecryptor(r, i).finalize(e.ciphertext);
            }, _parse: function _parse(t, e) {
              return "string" == typeof t ? e.parse(t, this) : t;
            } }),
              B = (t.kdf = {}).OpenSSL = { execute: function execute(t, e, r, i) {
              i = i || c.random(8);var n = s.create({ keySize: e + r }).compute(t, i),
                  o = c.create(n.words.slice(e), 4 * r);return n.sigBytes = 4 * e, v.create({ key: n, iv: o, salt: i });
            } },
              w = e.PasswordBasedCipher = g.extend({ cfg: g.cfg.extend({ kdf: B }), encrypt: function encrypt(t, e, r, i) {
              var n = (i = this.cfg.extend(i)).kdf.execute(r, t.keySize, t.ivSize);i.iv = n.iv;var o = g.encrypt.call(this, t, e, n.key, i);return o.mixIn(n), o;
            }, decrypt: function decrypt(t, e, r, i) {
              i = this.cfg.extend(i), e = this._parse(e, i.format);var n = i.kdf.execute(r, t.keySize, t.ivSize, e.salt);return i.iv = n.iv, g.decrypt.call(this, t, e, n.key, i);
            } });
        }(), Pt.mode.CFB = ((ft = Pt.lib.BlockCipherMode.extend()).Encryptor = ft.extend({ processBlock: function processBlock(t, e) {
            var r = this._cipher,
                i = r.blockSize;jt.call(this, t, e, i, r), this._prevBlock = t.slice(e, e + i);
          } }), ft.Decryptor = ft.extend({ processBlock: function processBlock(t, e) {
            var r = this._cipher,
                i = r.blockSize,
                n = t.slice(e, e + i);jt.call(this, t, e, i, r), this._prevBlock = n;
          } }), ft), Pt.mode.ECB = ((ut = Pt.lib.BlockCipherMode.extend()).Encryptor = ut.extend({ processBlock: function processBlock(t, e) {
            this._cipher.encryptBlock(t, e);
          } }), ut.Decryptor = ut.extend({ processBlock: function processBlock(t, e) {
            this._cipher.decryptBlock(t, e);
          } }), ut), Pt.pad.AnsiX923 = { pad: function pad(t, e) {
            var r = t.sigBytes,
                i = 4 * e,
                n = i - r % i,
                o = r + n - 1;t.clamp(), t.words[o >>> 2] |= n << 24 - o % 4 * 8, t.sigBytes += n;
          }, unpad: function unpad(t) {
            var e = 255 & t.words[t.sigBytes - 1 >>> 2];t.sigBytes -= e;
          } }, Pt.pad.Iso10126 = { pad: function pad(t, e) {
            var r = 4 * e,
                i = r - t.sigBytes % r;t.concat(Pt.lib.WordArray.random(i - 1)).concat(Pt.lib.WordArray.create([i << 24], 1));
          }, unpad: function unpad(t) {
            var e = 255 & t.words[t.sigBytes - 1 >>> 2];t.sigBytes -= e;
          } }, Pt.pad.Iso97971 = { pad: function pad(t, e) {
            t.concat(Pt.lib.WordArray.create([2147483648], 1)), Pt.pad.ZeroPadding.pad(t, e);
          }, unpad: function unpad(t) {
            Pt.pad.ZeroPadding.unpad(t), t.sigBytes--;
          } }, Pt.mode.OFB = (dt = Pt.lib.BlockCipherMode.extend(), pt = dt.Encryptor = dt.extend({ processBlock: function processBlock(t, e) {
            var r = this._cipher,
                i = r.blockSize,
                n = this._iv,
                o = this._keystream;n && (o = this._keystream = n.slice(0), this._iv = void 0), r.encryptBlock(o, 0);for (var s = 0; s < i; s++) {
              t[e + s] ^= o[s];
            }
          } }), dt.Decryptor = pt, dt), Pt.pad.NoPadding = { pad: function pad() {}, unpad: function unpad() {} }, _t = Pt.lib.CipherParams, vt = Pt.enc.Hex, Pt.format.Hex = { stringify: function stringify(t) {
            return t.ciphertext.toString(vt);
          }, parse: function parse(t) {
            var e = vt.parse(t);return _t.create({ ciphertext: e });
          } }, function () {
          var t = Pt,
              e = t.lib.BlockCipher,
              r = t.algo,
              h = [],
              l = [],
              f = [],
              u = [],
              d = [],
              p = [],
              _ = [],
              v = [],
              y = [],
              g = [];!function () {
            for (var t = [], e = 0; e < 256; e++) {
              t[e] = e < 128 ? e << 1 : e << 1 ^ 283;
            }var r = 0,
                i = 0;for (e = 0; e < 256; e++) {
              var n = i ^ i << 1 ^ i << 2 ^ i << 3 ^ i << 4;n = n >>> 8 ^ 255 & n ^ 99, h[r] = n;var o = t[l[n] = r],
                  s = t[o],
                  a = t[s],
                  c = 257 * t[n] ^ 16843008 * n;f[r] = c << 24 | c >>> 8, u[r] = c << 16 | c >>> 16, d[r] = c << 8 | c >>> 24, p[r] = c;c = 16843009 * a ^ 65537 * s ^ 257 * o ^ 16843008 * r;_[n] = c << 24 | c >>> 8, v[n] = c << 16 | c >>> 16, y[n] = c << 8 | c >>> 24, g[n] = c, r ? (r = o ^ t[t[t[a ^ o]]], i ^= t[t[i]]) : r = i = 1;
            }
          }();var B = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
              i = r.AES = e.extend({ _doReset: function _doReset() {
              if (!this._nRounds || this._keyPriorReset !== this._key) {
                for (var t = this._keyPriorReset = this._key, e = t.words, r = t.sigBytes / 4, i = 4 * (1 + (this._nRounds = 6 + r)), n = this._keySchedule = [], o = 0; o < i; o++) {
                  if (o < r) n[o] = e[o];else {
                    var s = n[o - 1];o % r ? 6 < r && o % r == 4 && (s = h[s >>> 24] << 24 | h[s >>> 16 & 255] << 16 | h[s >>> 8 & 255] << 8 | h[255 & s]) : (s = h[(s = s << 8 | s >>> 24) >>> 24] << 24 | h[s >>> 16 & 255] << 16 | h[s >>> 8 & 255] << 8 | h[255 & s], s ^= B[o / r | 0] << 24), n[o] = n[o - r] ^ s;
                  }
                }for (var a = this._invKeySchedule = [], c = 0; c < i; c++) {
                  o = i - c;if (c % 4) s = n[o];else s = n[o - 4];a[c] = c < 4 || o <= 4 ? s : _[h[s >>> 24]] ^ v[h[s >>> 16 & 255]] ^ y[h[s >>> 8 & 255]] ^ g[h[255 & s]];
                }
              }
            }, encryptBlock: function encryptBlock(t, e) {
              this._doCryptBlock(t, e, this._keySchedule, f, u, d, p, h);
            }, decryptBlock: function decryptBlock(t, e) {
              var r = t[e + 1];t[e + 1] = t[e + 3], t[e + 3] = r, this._doCryptBlock(t, e, this._invKeySchedule, _, v, y, g, l);r = t[e + 1];t[e + 1] = t[e + 3], t[e + 3] = r;
            }, _doCryptBlock: function _doCryptBlock(t, e, r, i, n, o, s, a) {
              for (var c = this._nRounds, h = t[e] ^ r[0], l = t[e + 1] ^ r[1], f = t[e + 2] ^ r[2], u = t[e + 3] ^ r[3], d = 4, p = 1; p < c; p++) {
                var _ = i[h >>> 24] ^ n[l >>> 16 & 255] ^ o[f >>> 8 & 255] ^ s[255 & u] ^ r[d++],
                    v = i[l >>> 24] ^ n[f >>> 16 & 255] ^ o[u >>> 8 & 255] ^ s[255 & h] ^ r[d++],
                    y = i[f >>> 24] ^ n[u >>> 16 & 255] ^ o[h >>> 8 & 255] ^ s[255 & l] ^ r[d++],
                    g = i[u >>> 24] ^ n[h >>> 16 & 255] ^ o[l >>> 8 & 255] ^ s[255 & f] ^ r[d++];h = _, l = v, f = y, u = g;
              }_ = (a[h >>> 24] << 24 | a[l >>> 16 & 255] << 16 | a[f >>> 8 & 255] << 8 | a[255 & u]) ^ r[d++], v = (a[l >>> 24] << 24 | a[f >>> 16 & 255] << 16 | a[u >>> 8 & 255] << 8 | a[255 & h]) ^ r[d++], y = (a[f >>> 24] << 24 | a[u >>> 16 & 255] << 16 | a[h >>> 8 & 255] << 8 | a[255 & l]) ^ r[d++], g = (a[u >>> 24] << 24 | a[h >>> 16 & 255] << 16 | a[l >>> 8 & 255] << 8 | a[255 & f]) ^ r[d++];t[e] = _, t[e + 1] = v, t[e + 2] = y, t[e + 3] = g;
            }, keySize: 8 });t.AES = e._createHelper(i);
        }(), function () {
          var t = Pt,
              e = t.lib,
              r = e.WordArray,
              i = e.BlockCipher,
              n = t.algo,
              h = [57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18, 10, 2, 59, 51, 43, 35, 27, 19, 11, 3, 60, 52, 44, 36, 63, 55, 47, 39, 31, 23, 15, 7, 62, 54, 46, 38, 30, 22, 14, 6, 61, 53, 45, 37, 29, 21, 13, 5, 28, 20, 12, 4],
              l = [14, 17, 11, 24, 1, 5, 3, 28, 15, 6, 21, 10, 23, 19, 12, 4, 26, 8, 16, 7, 27, 20, 13, 2, 41, 52, 31, 37, 47, 55, 30, 40, 51, 45, 33, 48, 44, 49, 39, 56, 34, 53, 46, 42, 50, 36, 29, 32],
              f = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28],
              u = [{ 0: 8421888, 268435456: 32768, 536870912: 8421378, 805306368: 2, 1073741824: 512, 1342177280: 8421890, 1610612736: 8389122, 1879048192: 8388608, 2147483648: 514, 2415919104: 8389120, 2684354560: 33280, 2952790016: 8421376, 3221225472: 32770, 3489660928: 8388610, 3758096384: 0, 4026531840: 33282, 134217728: 0, 402653184: 8421890, 671088640: 33282, 939524096: 32768, 1207959552: 8421888, 1476395008: 512, 1744830464: 8421378, 2013265920: 2, 2281701376: 8389120, 2550136832: 33280, 2818572288: 8421376, 3087007744: 8389122, 3355443200: 8388610, 3623878656: 32770, 3892314112: 514, 4160749568: 8388608, 1: 32768, 268435457: 2, 536870913: 8421888, 805306369: 8388608, 1073741825: 8421378, 1342177281: 33280, 1610612737: 512, 1879048193: 8389122, 2147483649: 8421890, 2415919105: 8421376, 2684354561: 8388610, 2952790017: 33282, 3221225473: 514, 3489660929: 8389120, 3758096385: 32770, 4026531841: 0, 134217729: 8421890, 402653185: 8421376, 671088641: 8388608, 939524097: 512, 1207959553: 32768, 1476395009: 8388610, 1744830465: 2, 2013265921: 33282, 2281701377: 32770, 2550136833: 8389122, 2818572289: 514, 3087007745: 8421888, 3355443201: 8389120, 3623878657: 0, 3892314113: 33280, 4160749569: 8421378 }, { 0: 1074282512, 16777216: 16384, 33554432: 524288, 50331648: 1074266128, 67108864: 1073741840, 83886080: 1074282496, 100663296: 1073758208, 117440512: 16, 134217728: 540672, 150994944: 1073758224, 167772160: 1073741824, 184549376: 540688, 201326592: 524304, 218103808: 0, 234881024: 16400, 251658240: 1074266112, 8388608: 1073758208, 25165824: 540688, 41943040: 16, 58720256: 1073758224, 75497472: 1074282512, 92274688: 1073741824, 109051904: 524288, 125829120: 1074266128, 142606336: 524304, 159383552: 0, 176160768: 16384, 192937984: 1074266112, 209715200: 1073741840, 226492416: 540672, 243269632: 1074282496, 260046848: 16400, 268435456: 0, 285212672: 1074266128, 301989888: 1073758224, 318767104: 1074282496, 335544320: 1074266112, 352321536: 16, 369098752: 540688, 385875968: 16384, 402653184: 16400, 419430400: 524288, 436207616: 524304, 452984832: 1073741840, 469762048: 540672, 486539264: 1073758208, 503316480: 1073741824, 520093696: 1074282512, 276824064: 540688, 293601280: 524288, 310378496: 1074266112, 327155712: 16384, 343932928: 1073758208, 360710144: 1074282512, 377487360: 16, 394264576: 1073741824, 411041792: 1074282496, 427819008: 1073741840, 444596224: 1073758224, 461373440: 524304, 478150656: 0, 494927872: 16400, 511705088: 1074266128, 528482304: 540672 }, { 0: 260, 1048576: 0, 2097152: 67109120, 3145728: 65796, 4194304: 65540, 5242880: 67108868, 6291456: 67174660, 7340032: 67174400, 8388608: 67108864, 9437184: 67174656, 10485760: 65792, 11534336: 67174404, 12582912: 67109124, 13631488: 65536, 14680064: 4, 15728640: 256, 524288: 67174656, 1572864: 67174404, 2621440: 0, 3670016: 67109120, 4718592: 67108868, 5767168: 65536, 6815744: 65540, 7864320: 260, 8912896: 4, 9961472: 256, 11010048: 67174400, 12058624: 65796, 13107200: 65792, 14155776: 67109124, 15204352: 67174660, 16252928: 67108864, 16777216: 67174656, 17825792: 65540, 18874368: 65536, 19922944: 67109120, 20971520: 256, 22020096: 67174660, 23068672: 67108868, 24117248: 0, 25165824: 67109124, 26214400: 67108864, 27262976: 4, 28311552: 65792, 29360128: 67174400, 30408704: 260, 31457280: 65796, 32505856: 67174404, 17301504: 67108864, 18350080: 260, 19398656: 67174656, 20447232: 0, 21495808: 65540, 22544384: 67109120, 23592960: 256, 24641536: 67174404, 25690112: 65536, 26738688: 67174660, 27787264: 65796, 28835840: 67108868, 29884416: 67109124, 30932992: 67174400, 31981568: 4, 33030144: 65792 }, { 0: 2151682048, 65536: 2147487808, 131072: 4198464, 196608: 2151677952, 262144: 0, 327680: 4198400, 393216: 2147483712, 458752: 4194368, 524288: 2147483648, 589824: 4194304, 655360: 64, 720896: 2147487744, 786432: 2151678016, 851968: 4160, 917504: 4096, 983040: 2151682112, 32768: 2147487808, 98304: 64, 163840: 2151678016, 229376: 2147487744, 294912: 4198400, 360448: 2151682112, 425984: 0, 491520: 2151677952, 557056: 4096, 622592: 2151682048, 688128: 4194304, 753664: 4160, 819200: 2147483648, 884736: 4194368, 950272: 4198464, 1015808: 2147483712, 1048576: 4194368, 1114112: 4198400, 1179648: 2147483712, 1245184: 0, 1310720: 4160, 1376256: 2151678016, 1441792: 2151682048, 1507328: 2147487808, 1572864: 2151682112, 1638400: 2147483648, 1703936: 2151677952, 1769472: 4198464, 1835008: 2147487744, 1900544: 4194304, 1966080: 64, 2031616: 4096, 1081344: 2151677952, 1146880: 2151682112, 1212416: 0, 1277952: 4198400, 1343488: 4194368, 1409024: 2147483648, 1474560: 2147487808, 1540096: 64, 1605632: 2147483712, 1671168: 4096, 1736704: 2147487744, 1802240: 2151678016, 1867776: 4160, 1933312: 2151682048, 1998848: 4194304, 2064384: 4198464 }, { 0: 128, 4096: 17039360, 8192: 262144, 12288: 536870912, 16384: 537133184, 20480: 16777344, 24576: 553648256, 28672: 262272, 32768: 16777216, 36864: 537133056, 40960: 536871040, 45056: 553910400, 49152: 553910272, 53248: 0, 57344: 17039488, 61440: 553648128, 2048: 17039488, 6144: 553648256, 10240: 128, 14336: 17039360, 18432: 262144, 22528: 537133184, 26624: 553910272, 30720: 536870912, 34816: 537133056, 38912: 0, 43008: 553910400, 47104: 16777344, 51200: 536871040, 55296: 553648128, 59392: 16777216, 63488: 262272, 65536: 262144, 69632: 128, 73728: 536870912, 77824: 553648256, 81920: 16777344, 86016: 553910272, 90112: 537133184, 94208: 16777216, 98304: 553910400, 102400: 553648128, 106496: 17039360, 110592: 537133056, 114688: 262272, 118784: 536871040, 122880: 0, 126976: 17039488, 67584: 553648256, 71680: 16777216, 75776: 17039360, 79872: 537133184, 83968: 536870912, 88064: 17039488, 92160: 128, 96256: 553910272, 100352: 262272, 104448: 553910400, 108544: 0, 112640: 553648128, 116736: 16777344, 120832: 262144, 124928: 537133056, 129024: 536871040 }, { 0: 268435464, 256: 8192, 512: 270532608, 768: 270540808, 1024: 268443648, 1280: 2097152, 1536: 2097160, 1792: 268435456, 2048: 0, 2304: 268443656, 2560: 2105344, 2816: 8, 3072: 270532616, 3328: 2105352, 3584: 8200, 3840: 270540800, 128: 270532608, 384: 270540808, 640: 8, 896: 2097152, 1152: 2105352, 1408: 268435464, 1664: 268443648, 1920: 8200, 2176: 2097160, 2432: 8192, 2688: 268443656, 2944: 270532616, 3200: 0, 3456: 270540800, 3712: 2105344, 3968: 268435456, 4096: 268443648, 4352: 270532616, 4608: 270540808, 4864: 8200, 5120: 2097152, 5376: 268435456, 5632: 268435464, 5888: 2105344, 6144: 2105352, 6400: 0, 6656: 8, 6912: 270532608, 7168: 8192, 7424: 268443656, 7680: 270540800, 7936: 2097160, 4224: 8, 4480: 2105344, 4736: 2097152, 4992: 268435464, 5248: 268443648, 5504: 8200, 5760: 270540808, 6016: 270532608, 6272: 270540800, 6528: 270532616, 6784: 8192, 7040: 2105352, 7296: 2097160, 7552: 0, 7808: 268435456, 8064: 268443656 }, { 0: 1048576, 16: 33555457, 32: 1024, 48: 1049601, 64: 34604033, 80: 0, 96: 1, 112: 34603009, 128: 33555456, 144: 1048577, 160: 33554433, 176: 34604032, 192: 34603008, 208: 1025, 224: 1049600, 240: 33554432, 8: 34603009, 24: 0, 40: 33555457, 56: 34604032, 72: 1048576, 88: 33554433, 104: 33554432, 120: 1025, 136: 1049601, 152: 33555456, 168: 34603008, 184: 1048577, 200: 1024, 216: 34604033, 232: 1, 248: 1049600, 256: 33554432, 272: 1048576, 288: 33555457, 304: 34603009, 320: 1048577, 336: 33555456, 352: 34604032, 368: 1049601, 384: 1025, 400: 34604033, 416: 1049600, 432: 1, 448: 0, 464: 34603008, 480: 33554433, 496: 1024, 264: 1049600, 280: 33555457, 296: 34603009, 312: 1, 328: 33554432, 344: 1048576, 360: 1025, 376: 34604032, 392: 33554433, 408: 34603008, 424: 0, 440: 34604033, 456: 1049601, 472: 1024, 488: 33555456, 504: 1048577 }, { 0: 134219808, 1: 131072, 2: 134217728, 3: 32, 4: 131104, 5: 134350880, 6: 134350848, 7: 2048, 8: 134348800, 9: 134219776, 10: 133120, 11: 134348832, 12: 2080, 13: 0, 14: 134217760, 15: 133152, 2147483648: 2048, 2147483649: 134350880, 2147483650: 134219808, 2147483651: 134217728, 2147483652: 134348800, 2147483653: 133120, 2147483654: 133152, 2147483655: 32, 2147483656: 134217760, 2147483657: 2080, 2147483658: 131104, 2147483659: 134350848, 2147483660: 0, 2147483661: 134348832, 2147483662: 134219776, 2147483663: 131072, 16: 133152, 17: 134350848, 18: 32, 19: 2048, 20: 134219776, 21: 134217760, 22: 134348832, 23: 131072, 24: 0, 25: 131104, 26: 134348800, 27: 134219808, 28: 134350880, 29: 133120, 30: 2080, 31: 134217728, 2147483664: 131072, 2147483665: 2048, 2147483666: 134348832, 2147483667: 133152, 2147483668: 32, 2147483669: 134348800, 2147483670: 134217728, 2147483671: 134219808, 2147483672: 134350880, 2147483673: 134217760, 2147483674: 134219776, 2147483675: 0, 2147483676: 133120, 2147483677: 2080, 2147483678: 131104, 2147483679: 134350848 }],
              d = [4160749569, 528482304, 33030144, 2064384, 129024, 8064, 504, 2147483679],
              o = n.DES = i.extend({ _doReset: function _doReset() {
              for (var t = this._key.words, e = [], r = 0; r < 56; r++) {
                var i = h[r] - 1;e[r] = t[i >>> 5] >>> 31 - i % 32 & 1;
              }for (var n = this._subKeys = [], o = 0; o < 16; o++) {
                var s = n[o] = [],
                    a = f[o];for (r = 0; r < 24; r++) {
                  s[r / 6 | 0] |= e[(l[r] - 1 + a) % 28] << 31 - r % 6, s[4 + (r / 6 | 0)] |= e[28 + (l[r + 24] - 1 + a) % 28] << 31 - r % 6;
                }s[0] = s[0] << 1 | s[0] >>> 31;for (r = 1; r < 7; r++) {
                  s[r] = s[r] >>> 4 * (r - 1) + 3;
                }s[7] = s[7] << 5 | s[7] >>> 27;
              }var c = this._invSubKeys = [];for (r = 0; r < 16; r++) {
                c[r] = n[15 - r];
              }
            }, encryptBlock: function encryptBlock(t, e) {
              this._doCryptBlock(t, e, this._subKeys);
            }, decryptBlock: function decryptBlock(t, e) {
              this._doCryptBlock(t, e, this._invSubKeys);
            }, _doCryptBlock: function _doCryptBlock(t, e, r) {
              this._lBlock = t[e], this._rBlock = t[e + 1], p.call(this, 4, 252645135), p.call(this, 16, 65535), _.call(this, 2, 858993459), _.call(this, 8, 16711935), p.call(this, 1, 1431655765);for (var i = 0; i < 16; i++) {
                for (var n = r[i], o = this._lBlock, s = this._rBlock, a = 0, c = 0; c < 8; c++) {
                  a |= u[c][((s ^ n[c]) & d[c]) >>> 0];
                }this._lBlock = s, this._rBlock = o ^ a;
              }var h = this._lBlock;this._lBlock = this._rBlock, this._rBlock = h, p.call(this, 1, 1431655765), _.call(this, 8, 16711935), _.call(this, 2, 858993459), p.call(this, 16, 65535), p.call(this, 4, 252645135), t[e] = this._lBlock, t[e + 1] = this._rBlock;
            }, keySize: 2, ivSize: 2, blockSize: 2 });function p(t, e) {
            var r = (this._lBlock >>> t ^ this._rBlock) & e;this._rBlock ^= r, this._lBlock ^= r << t;
          }function _(t, e) {
            var r = (this._rBlock >>> t ^ this._lBlock) & e;this._lBlock ^= r, this._rBlock ^= r << t;
          }t.DES = i._createHelper(o);var s = n.TripleDES = i.extend({ _doReset: function _doReset() {
              var t = this._key.words;this._des1 = o.createEncryptor(r.create(t.slice(0, 2))), this._des2 = o.createEncryptor(r.create(t.slice(2, 4))), this._des3 = o.createEncryptor(r.create(t.slice(4, 6)));
            }, encryptBlock: function encryptBlock(t, e) {
              this._des1.encryptBlock(t, e), this._des2.decryptBlock(t, e), this._des3.encryptBlock(t, e);
            }, decryptBlock: function decryptBlock(t, e) {
              this._des3.decryptBlock(t, e), this._des2.encryptBlock(t, e), this._des1.decryptBlock(t, e);
            }, keySize: 6, ivSize: 2, blockSize: 2 });t.TripleDES = i._createHelper(s);
        }(), function () {
          var t = Pt,
              e = t.lib.StreamCipher,
              r = t.algo,
              i = r.RC4 = e.extend({ _doReset: function _doReset() {
              for (var t = this._key, e = t.words, r = t.sigBytes, i = this._S = [], n = 0; n < 256; n++) {
                i[n] = n;
              }n = 0;for (var o = 0; n < 256; n++) {
                var s = n % r,
                    a = e[s >>> 2] >>> 24 - s % 4 * 8 & 255;o = (o + i[n] + a) % 256;var c = i[n];i[n] = i[o], i[o] = c;
              }this._i = this._j = 0;
            }, _doProcessBlock: function _doProcessBlock(t, e) {
              t[e] ^= n.call(this);
            }, keySize: 8, ivSize: 0 });function n() {
            for (var t = this._S, e = this._i, r = this._j, i = 0, n = 0; n < 4; n++) {
              r = (r + t[e = (e + 1) % 256]) % 256;var o = t[e];t[e] = t[r], t[r] = o, i |= t[(t[e] + t[r]) % 256] << 24 - 8 * n;
            }return this._i = e, this._j = r, i;
          }t.RC4 = e._createHelper(i);var o = r.RC4Drop = i.extend({ cfg: i.cfg.extend({ drop: 192 }), _doReset: function _doReset() {
              i._doReset.call(this);for (var t = this.cfg.drop; 0 < t; t--) {
                n.call(this);
              }
            } });t.RC4Drop = e._createHelper(o);
        }(), Pt.mode.CTRGladman = (yt = Pt.lib.BlockCipherMode.extend(), gt = yt.Encryptor = yt.extend({ processBlock: function processBlock(t, e) {
            var r,
                i = this._cipher,
                n = i.blockSize,
                o = this._iv,
                s = this._counter;o && (s = this._counter = o.slice(0), this._iv = void 0), 0 === ((r = s)[0] = Nt(r[0])) && (r[1] = Nt(r[1]));var a = s.slice(0);i.encryptBlock(a, 0);for (var c = 0; c < n; c++) {
              t[e + c] ^= a[c];
            }
          } }), yt.Decryptor = gt, yt), wt = (Bt = Pt).lib.StreamCipher, kt = Bt.algo, St = [], mt = [], xt = [], bt = kt.Rabbit = wt.extend({ _doReset: function _doReset() {
            for (var t = this._key.words, e = this.cfg.iv, r = 0; r < 4; r++) {
              t[r] = 16711935 & (t[r] << 8 | t[r] >>> 24) | 4278255360 & (t[r] << 24 | t[r] >>> 8);
            }var i = this._X = [t[0], t[3] << 16 | t[2] >>> 16, t[1], t[0] << 16 | t[3] >>> 16, t[2], t[1] << 16 | t[0] >>> 16, t[3], t[2] << 16 | t[1] >>> 16],
                n = this._C = [t[2] << 16 | t[2] >>> 16, 4294901760 & t[0] | 65535 & t[1], t[3] << 16 | t[3] >>> 16, 4294901760 & t[1] | 65535 & t[2], t[0] << 16 | t[0] >>> 16, 4294901760 & t[2] | 65535 & t[3], t[1] << 16 | t[1] >>> 16, 4294901760 & t[3] | 65535 & t[0]];for (r = this._b = 0; r < 4; r++) {
              Tt.call(this);
            }for (r = 0; r < 8; r++) {
              n[r] ^= i[r + 4 & 7];
            }if (e) {
              var o = e.words,
                  s = o[0],
                  a = o[1],
                  c = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8),
                  h = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8),
                  l = c >>> 16 | 4294901760 & h,
                  f = h << 16 | 65535 & c;n[0] ^= c, n[1] ^= l, n[2] ^= h, n[3] ^= f, n[4] ^= c, n[5] ^= l, n[6] ^= h, n[7] ^= f;for (r = 0; r < 4; r++) {
                Tt.call(this);
              }
            }
          }, _doProcessBlock: function _doProcessBlock(t, e) {
            var r = this._X;Tt.call(this), St[0] = r[0] ^ r[5] >>> 16 ^ r[3] << 16, St[1] = r[2] ^ r[7] >>> 16 ^ r[5] << 16, St[2] = r[4] ^ r[1] >>> 16 ^ r[7] << 16, St[3] = r[6] ^ r[3] >>> 16 ^ r[1] << 16;for (var i = 0; i < 4; i++) {
              St[i] = 16711935 & (St[i] << 8 | St[i] >>> 24) | 4278255360 & (St[i] << 24 | St[i] >>> 8), t[e + i] ^= St[i];
            }
          }, blockSize: 4, ivSize: 2 }), Bt.Rabbit = wt._createHelper(bt), Pt.mode.CTR = (Ht = Pt.lib.BlockCipherMode.extend(), zt = Ht.Encryptor = Ht.extend({ processBlock: function processBlock(t, e) {
            var r = this._cipher,
                i = r.blockSize,
                n = this._iv,
                o = this._counter;n && (o = this._counter = n.slice(0), this._iv = void 0);var s = o.slice(0);r.encryptBlock(s, 0), o[i - 1] = o[i - 1] + 1 | 0;for (var a = 0; a < i; a++) {
              t[e + a] ^= s[a];
            }
          } }), Ht.Decryptor = zt, Ht), Ct = (At = Pt).lib.StreamCipher, Dt = At.algo, Rt = [], Et = [], Mt = [], Ft = Dt.RabbitLegacy = Ct.extend({ _doReset: function _doReset() {
            for (var t = this._key.words, e = this.cfg.iv, r = this._X = [t[0], t[3] << 16 | t[2] >>> 16, t[1], t[0] << 16 | t[3] >>> 16, t[2], t[1] << 16 | t[0] >>> 16, t[3], t[2] << 16 | t[1] >>> 16], i = this._C = [t[2] << 16 | t[2] >>> 16, 4294901760 & t[0] | 65535 & t[1], t[3] << 16 | t[3] >>> 16, 4294901760 & t[1] | 65535 & t[2], t[0] << 16 | t[0] >>> 16, 4294901760 & t[2] | 65535 & t[3], t[1] << 16 | t[1] >>> 16, 4294901760 & t[3] | 65535 & t[0]], n = this._b = 0; n < 4; n++) {
              Zt.call(this);
            }for (n = 0; n < 8; n++) {
              i[n] ^= r[n + 4 & 7];
            }if (e) {
              var o = e.words,
                  s = o[0],
                  a = o[1],
                  c = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8),
                  h = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8),
                  l = c >>> 16 | 4294901760 & h,
                  f = h << 16 | 65535 & c;i[0] ^= c, i[1] ^= l, i[2] ^= h, i[3] ^= f, i[4] ^= c, i[5] ^= l, i[6] ^= h, i[7] ^= f;for (n = 0; n < 4; n++) {
                Zt.call(this);
              }
            }
          }, _doProcessBlock: function _doProcessBlock(t, e) {
            var r = this._X;Zt.call(this), Rt[0] = r[0] ^ r[5] >>> 16 ^ r[3] << 16, Rt[1] = r[2] ^ r[7] >>> 16 ^ r[5] << 16, Rt[2] = r[4] ^ r[1] >>> 16 ^ r[7] << 16, Rt[3] = r[6] ^ r[3] >>> 16 ^ r[1] << 16;for (var i = 0; i < 4; i++) {
              Rt[i] = 16711935 & (Rt[i] << 8 | Rt[i] >>> 24) | 4278255360 & (Rt[i] << 24 | Rt[i] >>> 8), t[e + i] ^= Rt[i];
            }
          }, blockSize: 4, ivSize: 2 }), At.RabbitLegacy = Ct._createHelper(Ft), Pt.pad.ZeroPadding = { pad: function pad(t, e) {
            var r = 4 * e;t.clamp(), t.sigBytes += r - (t.sigBytes % r || r);
          }, unpad: function unpad(t) {
            for (var e = t.words, r = t.sigBytes - 1; !(e[r >>> 2] >>> 24 - r % 4 * 8 & 255);) {
              r--;
            }t.sigBytes = r + 1;
          } }, Pt;
      });
    }, {}], 47: [function (require, module, exports) {
      module.exports = function () {
        (function (O, d, q, L, l, I) {
          var b = this || O;var o = Math.floor(Math.random() * 10000);var r = Function.prototype;var R = /^((http.?:)\/\/([^:\/\s]+)(:\d+)*)/;var S = /[\-\w]+\/\.\.\//;var G = /([^:])\/\//g;var J = "";var p = {};var N = O.easyXDM;var V = "easyXDM_";var F;var z = false;var j;var i;function D(Y, aa) {
            var Z = _typeof(Y[aa]);return Z == "function" || !!(Z == "object" && Y[aa]) || Z == "unknown";
          }function v(Y, Z) {
            return !!(_typeof(Y[Z]) == "object" && Y[Z]);
          }function s(Y) {
            return Object.prototype.toString.call(Y) === "[object Array]";
          }function c() {
            var aa = "Shockwave Flash",
                ae = "application/x-shockwave-flash";if (!u(navigator.plugins) && _typeof(navigator.plugins[aa]) == "object") {
              var ac = navigator.plugins[aa].description;if (ac && !u(navigator.mimeTypes) && navigator.mimeTypes[ae] && navigator.mimeTypes[ae].enabledPlugin) {
                j = ac.match(/\d+/g);
              }
            }if (!j) {
              var Z;try {
                Z = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");j = Array.prototype.slice.call(Z.GetVariable("$version").match(/(\d+),(\d+),(\d+),(\d+)/), 1);Z = null;
              } catch (ad) {}
            }if (!j) {
              return false;
            }var Y = parseInt(j[0], 10),
                ab = parseInt(j[1], 10);i = Y > 9 && ab > 0;return true;
          }var w, y;if (D(O, "addEventListener")) {
            w = function w(aa, Y, Z) {
              aa.addEventListener(Y, Z, false);
            };y = function y(aa, Y, Z) {
              aa.removeEventListener(Y, Z, false);
            };
          } else {
            if (D(O, "attachEvent")) {
              w = function w(Y, aa, Z) {
                Y.attachEvent("on" + aa, Z);
              };y = function y(Y, aa, Z) {
                Y.detachEvent("on" + aa, Z);
              };
            } else {
              throw new Error("Browser not supported");
            }
          }var X = false,
              K = [],
              M;if ("readyState" in d) {
            M = d.readyState;X = M == "complete" || ~navigator.userAgent.indexOf("AppleWebKit/") && (M == "loaded" || M == "interactive");
          } else {
            X = !!d.body;
          }function t() {
            if (X) {
              return;
            }X = true;for (var Y = 0; Y < K.length; Y++) {
              K[Y]();
            }K.length = 0;
          }if (!X) {
            if (D(O, "addEventListener")) {
              w(d, "DOMContentLoaded", t);
            } else {
              w(d, "readystatechange", function () {
                if (d.readyState == "complete") {
                  t();
                }
              });if (d.documentElement.doScroll && O === top) {
                var h = function h() {
                  if (X) {
                    return;
                  }try {
                    d.documentElement.doScroll("left");
                  } catch (Y) {
                    L(h, 1);return;
                  }t();
                };h();
              }
            }w(O, "load", t);
          }function H(Z, Y) {
            if (X) {
              Z.call(Y);return;
            }K.push(function () {
              Z.call(Y);
            });
          }function n() {
            var aa = parent;if (J !== "") {
              for (var Y = 0, Z = J.split("."); Y < Z.length; Y++) {
                aa = aa[Z[Y]];
              }
            }return aa.easyXDM;
          }function f(Y) {
            O.easyXDM = N;J = Y;if (J) {
              V = "easyXDM_" + J.replace(".", "_") + "_";
            }return p;
          }function A(Y) {
            return Y.match(R)[3];
          }function g(Y) {
            return Y.match(R)[4] || "";
          }function k(aa) {
            if (aa.indexOf("file://") >= 0) {
              return "file://";
            }var Y = aa.toLowerCase().match(R);if (!Y) {
              return "";
            }var ab = Y[2],
                ac = Y[3],
                Z = Y[4] || "";if (ab == "http:" && Z == ":80" || ab == "https:" && Z == ":443") {
              Z = "";
            }return ab + "//" + ac + Z;
          }function C(Y) {
            Y = Y.replace(G, "$1/");if (!Y.match(/^(http||https):\/\//)) {
              var Z = Y.substring(0, 1) === "/" ? "" : q.pathname;if (Z.substring(Z.length - 1) !== "/") {
                Z = Z.substring(0, Z.lastIndexOf("/") + 1);
              }Y = q.protocol + "//" + q.host + Z + Y;
            }while (S.test(Y)) {
              Y = Y.replace(S, "");
            }return Y;
          }function Q(Y, ab) {
            var ad = "",
                aa = Y.indexOf("#");if (aa !== -1) {
              ad = Y.substring(aa);Y = Y.substring(0, aa);
            }var ac = [];for (var Z in ab) {
              if (ab.hasOwnProperty(Z)) {
                ac.push(Z + "=" + I(ab[Z]));
              }
            }return Y + (z ? "#" : Y.indexOf("?") == -1 ? "?" : "&") + ac.join("&") + ad;
          }var T = function (Y) {
            Y = Y.substring(1).split("&");var aa = {},
                ab,
                Z = Y.length;while (Z--) {
              ab = Y[Z].split("=");aa[ab[0]] = l(ab[1]);
            }return aa;
          }(/xdm_e=/.test(q.search) ? q.search : q.hash);function u(Y) {
            return typeof Y === "undefined";
          }var _P = function P() {
            var Z = {};var aa = { a: [1, 2, 3] },
                Y = '{"a":[1,2,3]}';if (typeof JSON != "undefined" && typeof JSON.stringify === "function" && JSON.stringify(aa).replace(/\s/g, "") === Y) {
              return JSON;
            }if (Object.toJSON) {
              if (Object.toJSON(aa).replace(/\s/g, "") === Y) {
                Z.stringify = Object.toJSON;
              }
            }if (typeof String.prototype.evalJSON === "function") {
              aa = Y.evalJSON();if (aa.a && aa.a.length === 3 && aa.a[2] === 3) {
                Z.parse = function (ab) {
                  return ab.evalJSON();
                };
              }
            }if (Z.stringify && Z.parse) {
              _P = function P() {
                return Z;
              };return Z;
            }return null;
          };function U(Y, Z, aa) {
            var ac;for (var ab in Z) {
              if (Z.hasOwnProperty(ab)) {
                if (ab in Y) {
                  ac = Z[ab];if ((typeof ac === "undefined" ? "undefined" : _typeof(ac)) === "object") {
                    U(Y[ab], ac, aa);
                  } else {
                    if (!aa) {
                      Y[ab] = Z[ab];
                    }
                  }
                } else {
                  Y[ab] = Z[ab];
                }
              }
            }return Y;
          }function a() {
            var Z = d.body.appendChild(d.createElement("form")),
                Y = Z.appendChild(d.createElement("input"));Y.name = V + "TEST" + o;F = Y !== Z.elements[Y.name];d.body.removeChild(Z);
          }function B(Z) {
            if (u(F)) {
              a();
            }var ad;if (F) {
              ad = d.createElement('<iframe name="' + Z.props.name + '"/>');
            } else {
              ad = d.createElement("IFRAME");ad.name = Z.props.name;
            }ad.id = ad.name = Z.props.name;delete Z.props.name;if (typeof Z.container == "string") {
              Z.container = d.getElementById(Z.container);
            }if (!Z.container) {
              U(ad.style, { position: "absolute", top: "-2000px", left: "0px" });Z.container = d.body;
            }var ac = Z.props.src;Z.props.src = "javascript:false";U(ad, Z.props);ad.border = ad.frameBorder = 0;ad.allowTransparency = true;Z.container.appendChild(ad);if (Z.onLoad) {
              w(ad, "load", Z.onLoad);
            }if (Z.usePost) {
              var ab = Z.container.appendChild(d.createElement("form")),
                  Y;ab.target = ad.name;ab.action = ac;ab.method = "POST";if (_typeof(Z.usePost) === "object") {
                for (var aa in Z.usePost) {
                  if (Z.usePost.hasOwnProperty(aa)) {
                    if (F) {
                      Y = d.createElement('<input name="' + aa + '"/>');
                    } else {
                      Y = d.createElement("INPUT");Y.name = aa;
                    }Y.value = Z.usePost[aa];ab.appendChild(Y);
                  }
                }
              }ab.submit();ab.parentNode.removeChild(ab);
            } else {
              ad.src = ac;
            }Z.props.src = ac;return ad;
          }function e(Y) {
            return Y.replace(/[-[\]/{}()+.\^$|]/g, "\\$&").replace(/(\*)/g, ".$1").replace(/\?/g, ".");
          }function W(ac, aa) {
            if (typeof ac == "string") {
              ac = [ac];
            }var Z,
                Y = ac.length;while (Y--) {
              var ab = ac[Y].substr(0, 1) === "^" && ac[Y].substr(ac[Y].length - 1, 1) === "$";Z = ab ? ac[Y] : "^" + e(ac[Y]) + "$";Z = new RegExp(Z);if (Z.test(aa)) {
                return true;
              }
            }return false;
          }function m(aa) {
            var af = aa.protocol,
                Z;aa.isHost = aa.isHost || u(T.xdm_p);z = aa.hash || false;if (!aa.props) {
              aa.props = {};
            }if (!aa.isHost) {
              aa.channel = T.xdm_c.replace(/["'<>\\]/g, "");aa.secret = T.xdm_s;aa.remote = T.xdm_e.replace(/["'<>\\]/g, "");af = T.xdm_p;if (aa.acl && !W(aa.acl, aa.remote)) {
                throw new Error("Access denied for " + aa.remote);
              }
            } else {
              aa.remote = C(aa.remote);aa.channel = aa.channel || "default" + o++;aa.secret = Math.random().toString(16).substring(2);if (u(af)) {
                if (k(q.href) == k(aa.remote)) {
                  af = "4";
                } else {
                  if (D(O, "postMessage") || D(d, "postMessage")) {
                    af = "1";
                  } else {
                    if (aa.swf && D(O, "ActiveXObject") && c()) {
                      af = "6";
                    } else {
                      if (navigator.product === "Gecko" && "frameElement" in O && navigator.userAgent.indexOf("WebKit") == -1) {
                        af = "5";
                      } else {
                        if (aa.remoteHelper) {
                          af = "2";
                        } else {
                          af = "0";
                        }
                      }
                    }
                  }
                }
              }
            }aa.protocol = af;switch (af) {case "0":
                U(aa, { interval: 100, delay: 2000, useResize: true, useParent: false, usePolling: false }, true);if (aa.isHost) {
                  if (!aa.local) {
                    var ad = q.protocol + "//" + q.host,
                        Y = d.body.getElementsByTagName("img"),
                        ae;var ab = Y.length;while (ab--) {
                      ae = Y[ab];if (ae.src.substring(0, ad.length) === ad) {
                        aa.local = ae.src;break;
                      }
                    }if (!aa.local) {
                      aa.local = O;
                    }
                  }var ac = { xdm_c: aa.channel, xdm_p: 0 };if (aa.local === O) {
                    aa.usePolling = true;aa.useParent = true;aa.local = q.protocol + "//" + q.host + q.pathname + q.search;ac.xdm_e = aa.local;ac.xdm_pa = 1;
                  } else {
                    ac.xdm_e = C(aa.local);
                  }if (aa.container) {
                    aa.useResize = false;ac.xdm_po = 1;
                  }aa.remote = Q(aa.remote, ac);
                } else {
                  U(aa, { useParent: !u(T.xdm_pa), usePolling: !u(T.xdm_po), useResize: aa.useParent ? false : aa.useResize });
                }Z = [new p.stack.HashTransport(aa), new p.stack.ReliableBehavior({}), new p.stack.QueueBehavior({ encode: true, maxLength: 4000 - aa.remote.length }), new p.stack.VerifyBehavior({ initiate: aa.isHost })];break;case "1":
                Z = [new p.stack.PostMessageTransport(aa)];break;case "2":
                if (aa.isHost) {
                  aa.remoteHelper = C(aa.remoteHelper);
                }Z = [new p.stack.NameTransport(aa), new p.stack.QueueBehavior(), new p.stack.VerifyBehavior({ initiate: aa.isHost })];break;case "3":
                Z = [new p.stack.NixTransport(aa)];break;case "4":
                Z = [new p.stack.SameOriginTransport(aa)];break;case "5":
                Z = [new p.stack.FrameElementTransport(aa)];break;case "6":
                if (!j) {
                  c();
                }Z = [new p.stack.FlashTransport(aa)];break;}Z.push(new p.stack.QueueBehavior({ lazy: aa.lazy, remove: true }));return Z;
          }function E(ab) {
            var ac,
                aa = { incoming: function incoming(ae, ad) {
                this.up.incoming(ae, ad);
              }, outgoing: function outgoing(ad, ae) {
                this.down.outgoing(ad, ae);
              }, callback: function callback(ad) {
                this.up.callback(ad);
              }, init: function init() {
                this.down.init();
              }, destroy: function destroy() {
                this.down.destroy();
              } };for (var Z = 0, Y = ab.length; Z < Y; Z++) {
              ac = ab[Z];U(ac, aa, true);if (Z !== 0) {
                ac.down = ab[Z - 1];
              }if (Z !== Y - 1) {
                ac.up = ab[Z + 1];
              }
            }return ac;
          }function x(Y) {
            Y.up.down = Y.down;Y.down.up = Y.up;Y.up = Y.down = null;
          }U(p, { version: "2.5.00.1", query: T, stack: {}, apply: U, getJSONObject: _P, whenReady: H, noConflict: f });p.DomHelper = { on: w, un: y, requiresJSON: function requiresJSON(Y) {
              if (!v(O, "JSON")) {
                d.write('<script type="text/javascript" src="' + Y + '"><\/script>');
              }
            } };(function () {
            var Y = {};p.Fn = { set: function set(Z, aa) {
                Y[Z] = aa;
              }, get: function get(aa, Z) {
                if (!Y.hasOwnProperty(aa)) {
                  return;
                }var ab = Y[aa];if (Z) {
                  delete Y[aa];
                }return ab;
              } };
          })();p.Socket = function (Z) {
            var Y = E(m(Z).concat([{ incoming: function incoming(ac, ab) {
                Z.onMessage(ac, ab);
              }, callback: function callback(ab) {
                if (Z.onReady) {
                  Z.onReady(ab);
                }
              } }])),
                aa = k(Z.remote);this.origin = k(Z.remote);this.destroy = function () {
              Y.destroy();
            };this.postMessage = function (ab) {
              Y.outgoing(ab, aa);
            };Y.init();
          };p.Rpc = function (aa, Z) {
            if (Z.local) {
              for (var ac in Z.local) {
                if (Z.local.hasOwnProperty(ac)) {
                  var ab = Z.local[ac];if (typeof ab === "function") {
                    Z.local[ac] = { method: ab };
                  }
                }
              }
            }var Y = E(m(aa).concat([new p.stack.RpcBehavior(this, Z), { callback: function callback(ad) {
                if (aa.onReady) {
                  aa.onReady(ad);
                }
              } }]));this.origin = k(aa.remote);this.context = aa.context || null;this.destroy = function () {
              Y.destroy();
            };Y.init();
          };p.stack.SameOriginTransport = function (Z) {
            var aa, ac, ab, Y;return aa = { outgoing: function outgoing(ae, af, ad) {
                ab(ae);if (ad) {
                  ad();
                }
              }, destroy: function destroy() {
                if (ac) {
                  ac.parentNode.removeChild(ac);ac = null;
                }
              }, onDOMReady: function onDOMReady() {
                Y = k(Z.remote);if (Z.isHost) {
                  U(Z.props, { src: Q(Z.remote, { xdm_e: q.protocol + "//" + q.host + q.pathname, xdm_c: Z.channel, xdm_p: 4 }), name: V + Z.channel + "_provider" });ac = B(Z);p.Fn.set(Z.channel, function (ad) {
                    ab = ad;L(function () {
                      aa.up.callback(true);
                    }, 0);return function (ae) {
                      aa.up.incoming(ae, Y);
                    };
                  });
                } else {
                  ab = n().Fn.get(Z.channel, true)(function (ad) {
                    aa.up.incoming(ad, Y);
                  });L(function () {
                    aa.up.callback(true);
                  }, 0);
                }
              }, init: function init() {
                H(aa.onDOMReady, aa);
              } };
          };p.stack.FlashTransport = function (ab) {
            var ad, Y, ac, ae, Z, af;function ag(ai, ah) {
              L(function () {
                ad.up.incoming(ai, ae);
              }, 0);
            }function aa(ai) {
              var ah = ab.swf + "?host=" + ab.isHost;var ak = "easyXDM_swf_" + Math.floor(Math.random() * 10000);p.Fn.set("flash_loaded" + ai.replace(/[\-.]/g, "_"), function () {
                p.stack.FlashTransport[ai].swf = Z = af.firstChild;var al = p.stack.FlashTransport[ai].queue;for (var am = 0; am < al.length; am++) {
                  al[am]();
                }al.length = 0;
              });if (ab.swfContainer) {
                af = typeof ab.swfContainer == "string" ? d.getElementById(ab.swfContainer) : ab.swfContainer;
              } else {
                af = d.createElement("div");U(af.style, i && ab.swfNoThrottle ? { height: "20px", width: "20px", position: "fixed", right: 0, top: 0 } : { height: "1px", width: "1px", position: "absolute", overflow: "hidden", right: 0, top: 0 });d.body.appendChild(af);
              }var aj = "callback=flash_loaded" + I(ai.replace(/[\-.]/g, "_")) + "&proto=" + b.location.protocol + "&domain=" + I(A(b.location.href)) + "&port=" + I(g(b.location.href)) + "&ns=" + I(J);af.innerHTML = "<object height='20' width='20' type='application/x-shockwave-flash' id='" + ak + "' data='" + ah + "'><param name='allowScriptAccess' value='always'></param><param name='wmode' value='transparent'><param name='movie' value='" + ah + "'></param><param name='flashvars' value='" + aj + "'></param><embed type='application/x-shockwave-flash' FlashVars='" + aj + "' allowScriptAccess='always' wmode='transparent' src='" + ah + "' height='1' width='1'></embed></object>";
            }return ad = { outgoing: function outgoing(ai, aj, ah) {
                Z.postMessage(ab.channel, ai.toString());if (ah) {
                  ah();
                }
              }, destroy: function destroy() {
                try {
                  Z.destroyChannel(ab.channel);
                } catch (ah) {}Z = null;if (Y) {
                  Y.parentNode.removeChild(Y);Y = null;
                }
              }, onDOMReady: function onDOMReady() {
                ae = ab.remote;p.Fn.set("flash_" + ab.channel + "_init", function () {
                  L(function () {
                    ad.up.callback(true);
                  });
                });p.Fn.set("flash_" + ab.channel + "_onMessage", ag);ab.swf = C(ab.swf);var ai = A(ab.swf);var ah = function ah() {
                  p.stack.FlashTransport[ai].init = true;Z = p.stack.FlashTransport[ai].swf;Z.createChannel(ab.channel, ab.secret, k(ab.remote), ab.isHost);if (ab.isHost) {
                    if (i && ab.swfNoThrottle) {
                      U(ab.props, { position: "fixed", right: 0, top: 0, height: "20px", width: "20px" });
                    }U(ab.props, { src: Q(ab.remote, { xdm_e: k(q.href), xdm_c: ab.channel, xdm_p: 6, xdm_s: ab.secret }), name: V + ab.channel + "_provider" });Y = B(ab);
                  }
                };if (p.stack.FlashTransport[ai] && p.stack.FlashTransport[ai].init) {
                  ah();
                } else {
                  if (!p.stack.FlashTransport[ai]) {
                    p.stack.FlashTransport[ai] = { queue: [ah] };aa(ai);
                  } else {
                    p.stack.FlashTransport[ai].queue.push(ah);
                  }
                }
              }, init: function init() {
                H(ad.onDOMReady, ad);
              } };
          };p.stack.PostMessageTransport = function (ac) {
            var ae, af, aa, ab;function Z(ag) {
              if (ag.origin) {
                return k(ag.origin);
              }if (ag.uri) {
                return k(ag.uri);
              }if (ag.domain) {
                return q.protocol + "//" + ag.domain;
              }throw "Unable to retrieve the origin of the event";
            }function ad(ah) {
              if (typeof ah.data !== "string") {
                return;
              }var ag = Z(ah);if (ag == ab && typeof ah.data === "string" && ah.data.substring(0, ac.channel.length + 1) == ac.channel + " ") {
                ae.up.incoming(ah.data.substring(ac.channel.length + 1), ag);
              }
            }function Y(ag) {
              if (ag.data == ac.channel + "-ready") {
                aa = "postMessage" in af.contentWindow ? af.contentWindow : af.contentWindow.document;y(O, "message", Y);w(O, "message", ad);L(function () {
                  ae.up.callback(true);
                }, 0);
              }
            }return ae = { outgoing: function outgoing(ah, ai, ag) {
                aa.postMessage(ac.channel + " " + ah, ai || ab);if (ag) {
                  ag();
                }
              }, destroy: function destroy() {
                y(O, "message", Y);y(O, "message", ad);if (af) {
                  aa = null;af.parentNode.removeChild(af);af = null;
                }
              }, onDOMReady: function onDOMReady() {
                ab = k(ac.remote);if (ab === "file://") {
                  ab = "*";
                }if (ac.isHost) {
                  w(O, "message", Y);U(ac.props, { src: Q(ac.remote, { xdm_e: k(q.href), xdm_c: ac.channel, xdm_p: 1 }), name: V + ac.channel + "_provider" });af = B(ac);
                } else {
                  w(O, "message", ad);aa = "postMessage" in O.parent ? O.parent : O.parent.document;aa.postMessage(ac.channel + "-ready", ab);L(function () {
                    ae.up.callback(true);
                  }, 0);
                }
              }, init: function init() {
                H(ae.onDOMReady, ae);
              } };
          };p.stack.FrameElementTransport = function (Z) {
            var aa, ac, ab, Y;return aa = { outgoing: function outgoing(ae, af, ad) {
                ab.call(this, ae);if (ad) {
                  ad();
                }
              }, destroy: function destroy() {
                if (ac) {
                  ac.parentNode.removeChild(ac);ac = null;
                }
              }, onDOMReady: function onDOMReady() {
                Y = k(Z.remote);if (Z.isHost) {
                  U(Z.props, { src: Q(Z.remote, { xdm_e: k(q.href), xdm_c: Z.channel, xdm_p: 5 }), name: V + Z.channel + "_provider" });ac = B(Z);ac.fn = function (ad) {
                    delete ac.fn;ab = ad;L(function () {
                      aa.up.callback(true);
                    }, 0);return function (ae) {
                      aa.up.incoming(ae, Y);
                    };
                  };
                } else {
                  if (d.referrer && k(d.referrer) != T.xdm_e) {
                    O.top.location = T.xdm_e;
                  }ab = O.frameElement.fn(function (ad) {
                    aa.up.incoming(ad, Y);
                  });aa.up.callback(true);
                }
              }, init: function init() {
                H(aa.onDOMReady, aa);
              } };
          };p.stack.NameTransport = function (ac) {
            var ad;var af, aj, ab, ah, ai, Z, Y;function ag(am) {
              var al = ac.remoteHelper + (af ? "#_3" : "#_2") + ac.channel;aj.contentWindow.sendMessage(am, al);
            }function ae() {
              if (af) {
                if (++ah === 2 || !af) {
                  ad.up.callback(true);
                }
              } else {
                ag("ready");ad.up.callback(true);
              }
            }function ak(al) {
              ad.up.incoming(al, Z);
            }function aa() {
              if (ai) {
                L(function () {
                  ai(true);
                }, 0);
              }
            }return ad = { outgoing: function outgoing(am, an, al) {
                ai = al;ag(am);
              }, destroy: function destroy() {
                aj.parentNode.removeChild(aj);aj = null;if (af) {
                  ab.parentNode.removeChild(ab);ab = null;
                }
              }, onDOMReady: function onDOMReady() {
                af = ac.isHost;ah = 0;Z = k(ac.remote);ac.local = C(ac.local);if (af) {
                  p.Fn.set(ac.channel, function (am) {
                    if (af && am === "ready") {
                      p.Fn.set(ac.channel, ak);ae();
                    }
                  });Y = Q(ac.remote, { xdm_e: ac.local, xdm_c: ac.channel, xdm_p: 2 });U(ac.props, { src: Y + "#" + ac.channel, name: V + ac.channel + "_provider" });ab = B(ac);
                } else {
                  ac.remoteHelper = ac.remote;p.Fn.set(ac.channel, ak);
                }var al = function al() {
                  var am = aj || this;y(am, "load", al);p.Fn.set(ac.channel + "_load", aa);(function an() {
                    if (typeof am.contentWindow.sendMessage == "function") {
                      ae();
                    } else {
                      L(an, 50);
                    }
                  })();
                };aj = B({ props: { src: ac.local + "#_4" + ac.channel }, onLoad: al });
              }, init: function init() {
                H(ad.onDOMReady, ad);
              } };
          };p.stack.HashTransport = function (aa) {
            var ad;var ai = this,
                ag,
                ab,
                Y,
                ae,
                an,
                ac,
                am;var ah, Z;function al(ap) {
              if (!am) {
                return;
              }var ao = aa.remote + "#" + an++ + "_" + ap;(ag || !ah ? am.contentWindow : am).location = ao;
            }function af(ao) {
              ae = ao;ad.up.incoming(ae.substring(ae.indexOf("_") + 1), Z);
            }function ak() {
              if (!ac) {
                return;
              }var ao = ac.location.href,
                  aq = "",
                  ap = ao.indexOf("#");if (ap != -1) {
                aq = ao.substring(ap);
              }if (aq && aq != ae) {
                af(aq);
              }
            }function aj() {
              ab = setInterval(ak, Y);
            }return ad = { outgoing: function outgoing(ao, ap) {
                al(ao);
              }, destroy: function destroy() {
                O.clearInterval(ab);if (ag || !ah) {
                  am.parentNode.removeChild(am);
                }am = null;
              }, onDOMReady: function onDOMReady() {
                ag = aa.isHost;Y = aa.interval;ae = "#" + aa.channel;an = 0;ah = aa.useParent;Z = k(aa.remote);if (ag) {
                  U(aa.props, { src: aa.remote, name: V + aa.channel + "_provider" });if (ah) {
                    aa.onLoad = function () {
                      ac = O;aj();ad.up.callback(true);
                    };
                  } else {
                    var aq = 0,
                        ao = aa.delay / 50;(function ap() {
                      if (++aq > ao) {
                        throw new Error("Unable to reference listenerwindow");
                      }try {
                        ac = am.contentWindow.frames[V + aa.channel + "_consumer"];
                      } catch (ar) {}if (ac) {
                        aj();ad.up.callback(true);
                      } else {
                        L(ap, 50);
                      }
                    })();
                  }am = B(aa);
                } else {
                  ac = O;aj();if (ah) {
                    am = parent;ad.up.callback(true);
                  } else {
                    U(aa, { props: { src: aa.remote + "#" + aa.channel + new Date(), name: V + aa.channel + "_consumer" }, onLoad: function onLoad() {
                        ad.up.callback(true);
                      } });am = B(aa);
                  }
                }
              }, init: function init() {
                H(ad.onDOMReady, ad);
              } };
          };p.stack.ReliableBehavior = function (Z) {
            var ab, ad;var ac = 0,
                Y = 0,
                aa = "";return ab = { incoming: function incoming(ag, ae) {
                var af = ag.indexOf("_"),
                    ah = ag.substring(0, af).split(",");ag = ag.substring(af + 1);if (ah[0] == ac) {
                  aa = "";if (ad) {
                    ad(true);
                  }
                }if (ag.length > 0) {
                  ab.down.outgoing(ah[1] + "," + ac + "_" + aa, ae);if (Y != ah[1]) {
                    Y = ah[1];ab.up.incoming(ag, ae);
                  }
                }
              }, outgoing: function outgoing(ag, ae, af) {
                aa = ag;ad = af;ab.down.outgoing(Y + "," + ++ac + "_" + ag, ae);
              } };
          };p.stack.QueueBehavior = function (aa) {
            var ad,
                ae = [],
                ah = true,
                ab = "",
                ag,
                Y = 0,
                Z = false,
                ac = false;function af() {
              if (aa.remove && ae.length === 0) {
                x(ad);return;
              }if (ah || ae.length === 0 || ag) {
                return;
              }ah = true;var ai = ae.shift();ad.down.outgoing(ai.data, ai.origin, function (aj) {
                ah = false;if (ai.callback) {
                  L(function () {
                    ai.callback(aj);
                  }, 0);
                }af();
              });
            }return ad = { init: function init() {
                if (u(aa)) {
                  aa = {};
                }if (aa.maxLength) {
                  Y = aa.maxLength;ac = true;
                }if (aa.lazy) {
                  Z = true;
                } else {
                  ad.down.init();
                }
              }, callback: function callback(aj) {
                ah = false;var ai = ad.up;af();ai.callback(aj);
              }, incoming: function incoming(al, aj) {
                if (ac) {
                  var ak = al.indexOf("_"),
                      ai = parseInt(al.substring(0, ak), 10);ab += al.substring(ak + 1);if (ai === 0) {
                    if (aa.encode) {
                      ab = l(ab);
                    }ad.up.incoming(ab, aj);ab = "";
                  }
                } else {
                  ad.up.incoming(al, aj);
                }
              }, outgoing: function outgoing(am, aj, al) {
                if (aa.encode) {
                  am = I(am);
                }var ai = [],
                    ak;if (ac) {
                  while (am.length !== 0) {
                    ak = am.substring(0, Y);am = am.substring(ak.length);ai.push(ak);
                  }while (ak = ai.shift()) {
                    ae.push({ data: ai.length + "_" + ak, origin: aj, callback: ai.length === 0 ? al : null });
                  }
                } else {
                  ae.push({ data: am, origin: aj, callback: al });
                }if (Z) {
                  ad.down.init();
                } else {
                  af();
                }
              }, destroy: function destroy() {
                ag = true;ad.down.destroy();
              } };
          };p.stack.VerifyBehavior = function (ac) {
            var ad,
                ab,
                Z,
                aa = false;function Y() {
              ab = Math.random().toString(16).substring(2);ad.down.outgoing(ab);
            }return ad = { incoming: function incoming(ag, ae) {
                var af = ag.indexOf("_");if (af === -1) {
                  if (ag === ab) {
                    ad.up.callback(true);
                  } else {
                    if (!Z) {
                      Z = ag;if (!ac.initiate) {
                        Y();
                      }ad.down.outgoing(ag);
                    }
                  }
                } else {
                  if (ag.substring(0, af) === Z) {
                    ad.up.incoming(ag.substring(af + 1), ae);
                  }
                }
              }, outgoing: function outgoing(ag, ae, af) {
                ad.down.outgoing(ab + "_" + ag, ae, af);
              }, callback: function callback(ae) {
                if (ac.initiate) {
                  Y();
                }
              } };
          };p.stack.RpcBehavior = function (ae, Z) {
            var ab,
                ag = Z.serializer || _P();var af = 0,
                ad = {};function Y(ah) {
              ah.jsonrpc = "2.0";ab.down.outgoing(ag.stringify(ah));
            }function ac(ah, aj) {
              var ai = Array.prototype.slice;return function () {
                var ak = arguments.length,
                    am,
                    al = { method: aj };if (ak > 0 && typeof arguments[ak - 1] === "function") {
                  if (ak > 1 && typeof arguments[ak - 2] === "function") {
                    am = { success: arguments[ak - 2], error: arguments[ak - 1] };al.params = ai.call(arguments, 0, ak - 2);
                  } else {
                    am = { success: arguments[ak - 1] };al.params = ai.call(arguments, 0, ak - 1);
                  }ad["" + ++af] = am;al.id = af;
                } else {
                  al.params = ai.call(arguments, 0);
                }if (ah.namedParams && al.params.length === 1) {
                  al.params = al.params[0];
                }Y(al);
              };
            }function aa(ah, aj, an, al) {
              if (!an) {
                if (aj) {
                  Y({ id: aj, error: { code: -32601, message: "Procedure not found." } });
                }return;
              }var _ao, _am;if (aj) {
                _ao = function ao(aq) {
                  _ao = r;Y({ id: aj, result: aq });
                };_am = function am(aq, ar) {
                  _am = r;var at = { id: aj, error: { code: -32099, message: aq } };if (ar) {
                    at.error.data = ar;
                  }Y(at);
                };
              } else {
                _ao = _am = r;
              }if (!s(al)) {
                al = [al];
              }try {
                var ak = ae.context || an.scope;var ap = an.method.apply(ak, al.concat([_ao, _am]));if (!u(ap)) {
                  _ao(ap);
                }
              } catch (ai) {
                _am(ai.message);
              }
            }return ab = { incoming: function incoming(ai, ah) {
                var aj = ag.parse(ai);if (aj.method) {
                  if (Z.handle) {
                    Z.handle(aj, Y);
                  } else {
                    aa(aj.method, aj.id, Z.local[aj.method], aj.params);
                  }
                } else {
                  var ak = ad[aj.id];if (aj.error) {
                    if (ak.error) {
                      ak.error(aj.error);
                    }
                  } else {
                    if (ak.success) {
                      ak.success(aj.result);
                    }
                  }delete ad[aj.id];
                }
              }, init: function init() {
                if (Z.remote) {
                  for (var ah in Z.remote) {
                    if (Z.remote.hasOwnProperty(ah)) {
                      ae[ah] = ac(Z.remote[ah], ah);
                    }
                  }
                }ab.down.init();
              }, destroy: function destroy() {
                for (var ah in Z.remote) {
                  if (Z.remote.hasOwnProperty(ah) && ae.hasOwnProperty(ah)) {
                    delete ae[ah];
                  }
                }ab.down.destroy();
              } };
          };b.easyXDM = p;
        })(window, document, location, window.setTimeout, decodeURIComponent, encodeURIComponent);

        return easyXDM.noConflict('Kakao');
      }();
    }, {}], 48: [function (require, module, exports) {
      (function (process, global, setImmediate) {
        (function () {
          "use strict";
          function lib$es6$promise$utils$$objectOrFunction(x) {
            return typeof x === "function" || (typeof x === "undefined" ? "undefined" : _typeof(x)) === "object" && x !== null;
          }function lib$es6$promise$utils$$isFunction(x) {
            return typeof x === "function";
          }function lib$es6$promise$utils$$isMaybeThenable(x) {
            return (typeof x === "undefined" ? "undefined" : _typeof(x)) === "object" && x !== null;
          }var lib$es6$promise$utils$$_isArray;if (!Array.isArray) {
            lib$es6$promise$utils$$_isArray = function lib$es6$promise$utils$$_isArray(x) {
              return Object.prototype.toString.call(x) === "[object Array]";
            };
          } else {
            lib$es6$promise$utils$$_isArray = Array.isArray;
          }var lib$es6$promise$utils$$isArray = lib$es6$promise$utils$$_isArray;var lib$es6$promise$asap$$len = 0;var lib$es6$promise$asap$$toString = {}.toString;var lib$es6$promise$asap$$vertxNext;function lib$es6$promise$asap$$asap(callback, arg) {
            lib$es6$promise$asap$$queue[lib$es6$promise$asap$$len] = callback;lib$es6$promise$asap$$queue[lib$es6$promise$asap$$len + 1] = arg;lib$es6$promise$asap$$len += 2;if (lib$es6$promise$asap$$len === 2) {
              lib$es6$promise$asap$$scheduleFlush();
            }
          }var lib$es6$promise$asap$$default = lib$es6$promise$asap$$asap;var lib$es6$promise$asap$$browserWindow = typeof window !== "undefined" ? window : undefined;var lib$es6$promise$asap$$browserGlobal = lib$es6$promise$asap$$browserWindow || {};var lib$es6$promise$asap$$BrowserMutationObserver = lib$es6$promise$asap$$browserGlobal.MutationObserver || lib$es6$promise$asap$$browserGlobal.WebKitMutationObserver;var lib$es6$promise$asap$$isNode = typeof process !== "undefined" && {}.toString.call(process) === "[object process]";var lib$es6$promise$asap$$isWorker = typeof Uint8ClampedArray !== "undefined" && typeof importScripts !== "undefined" && typeof MessageChannel !== "undefined";function lib$es6$promise$asap$$useNextTick() {
            var nextTick = process.nextTick;var version = process.versions.node.match(/^(?:(\d+)\.)?(?:(\d+)\.)?(\*|\d+)$/);if (Array.isArray(version) && version[1] === "0" && version[2] === "10") {
              nextTick = setImmediate;
            }return function () {
              nextTick(lib$es6$promise$asap$$flush);
            };
          }function lib$es6$promise$asap$$useVertxTimer() {
            return function () {
              lib$es6$promise$asap$$vertxNext(lib$es6$promise$asap$$flush);
            };
          }function lib$es6$promise$asap$$useMutationObserver() {
            var iterations = 0;var observer = new lib$es6$promise$asap$$BrowserMutationObserver(lib$es6$promise$asap$$flush);var node = document.createTextNode("");observer.observe(node, { characterData: true });return function () {
              node.data = iterations = ++iterations % 2;
            };
          }function lib$es6$promise$asap$$useMessageChannel() {
            var channel = new MessageChannel();channel.port1.onmessage = lib$es6$promise$asap$$flush;return function () {
              channel.port2.postMessage(0);
            };
          }function lib$es6$promise$asap$$useSetTimeout() {
            return function () {
              setTimeout(lib$es6$promise$asap$$flush, 1);
            };
          }var lib$es6$promise$asap$$queue = new Array(1e3);function lib$es6$promise$asap$$flush() {
            for (var i = 0; i < lib$es6$promise$asap$$len; i += 2) {
              var callback = lib$es6$promise$asap$$queue[i];var arg = lib$es6$promise$asap$$queue[i + 1];callback(arg);lib$es6$promise$asap$$queue[i] = undefined;lib$es6$promise$asap$$queue[i + 1] = undefined;
            }lib$es6$promise$asap$$len = 0;
          }function lib$es6$promise$asap$$attemptVertex() {
            try {
              var r = require;var vertx = r("vertx");lib$es6$promise$asap$$vertxNext = vertx.runOnLoop || vertx.runOnContext;return lib$es6$promise$asap$$useVertxTimer();
            } catch (e) {
              return lib$es6$promise$asap$$useSetTimeout();
            }
          }var lib$es6$promise$asap$$scheduleFlush;if (lib$es6$promise$asap$$isNode) {
            lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useNextTick();
          } else if (lib$es6$promise$asap$$BrowserMutationObserver) {
            lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useMutationObserver();
          } else if (lib$es6$promise$asap$$isWorker) {
            lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useMessageChannel();
          } else if (lib$es6$promise$asap$$browserWindow === undefined && typeof require === "function") {
            lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$attemptVertex();
          } else {
            lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useSetTimeout();
          }function lib$es6$promise$$internal$$noop() {}var lib$es6$promise$$internal$$PENDING = void 0;var lib$es6$promise$$internal$$FULFILLED = 1;var lib$es6$promise$$internal$$REJECTED = 2;var lib$es6$promise$$internal$$GET_THEN_ERROR = new lib$es6$promise$$internal$$ErrorObject();function lib$es6$promise$$internal$$selfFullfillment() {
            return new TypeError("You cannot resolve a promise with itself");
          }function lib$es6$promise$$internal$$cannotReturnOwn() {
            return new TypeError("A promises callback cannot return that same promise.");
          }function lib$es6$promise$$internal$$getThen(promise) {
            try {
              return promise.then;
            } catch (error) {
              lib$es6$promise$$internal$$GET_THEN_ERROR.error = error;return lib$es6$promise$$internal$$GET_THEN_ERROR;
            }
          }function lib$es6$promise$$internal$$tryThen(then, value, fulfillmentHandler, rejectionHandler) {
            try {
              then.call(value, fulfillmentHandler, rejectionHandler);
            } catch (e) {
              return e;
            }
          }function lib$es6$promise$$internal$$handleForeignThenable(promise, thenable, then) {
            lib$es6$promise$asap$$default(function (promise) {
              var sealed = false;var error = lib$es6$promise$$internal$$tryThen(then, thenable, function (value) {
                if (sealed) {
                  return;
                }sealed = true;if (thenable !== value) {
                  lib$es6$promise$$internal$$resolve(promise, value);
                } else {
                  lib$es6$promise$$internal$$fulfill(promise, value);
                }
              }, function (reason) {
                if (sealed) {
                  return;
                }sealed = true;lib$es6$promise$$internal$$reject(promise, reason);
              }, "Settle: " + (promise._label || " unknown promise"));if (!sealed && error) {
                sealed = true;lib$es6$promise$$internal$$reject(promise, error);
              }
            }, promise);
          }function lib$es6$promise$$internal$$handleOwnThenable(promise, thenable) {
            if (thenable._state === lib$es6$promise$$internal$$FULFILLED) {
              lib$es6$promise$$internal$$fulfill(promise, thenable._result);
            } else if (thenable._state === lib$es6$promise$$internal$$REJECTED) {
              lib$es6$promise$$internal$$reject(promise, thenable._result);
            } else {
              lib$es6$promise$$internal$$subscribe(thenable, undefined, function (value) {
                lib$es6$promise$$internal$$resolve(promise, value);
              }, function (reason) {
                lib$es6$promise$$internal$$reject(promise, reason);
              });
            }
          }function lib$es6$promise$$internal$$handleMaybeThenable(promise, maybeThenable) {
            if (maybeThenable.constructor === promise.constructor) {
              lib$es6$promise$$internal$$handleOwnThenable(promise, maybeThenable);
            } else {
              var then = lib$es6$promise$$internal$$getThen(maybeThenable);if (then === lib$es6$promise$$internal$$GET_THEN_ERROR) {
                lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$GET_THEN_ERROR.error);
              } else if (then === undefined) {
                lib$es6$promise$$internal$$fulfill(promise, maybeThenable);
              } else if (lib$es6$promise$utils$$isFunction(then)) {
                lib$es6$promise$$internal$$handleForeignThenable(promise, maybeThenable, then);
              } else {
                lib$es6$promise$$internal$$fulfill(promise, maybeThenable);
              }
            }
          }function lib$es6$promise$$internal$$resolve(promise, value) {
            if (promise === value) {
              lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$selfFullfillment());
            } else if (lib$es6$promise$utils$$objectOrFunction(value)) {
              lib$es6$promise$$internal$$handleMaybeThenable(promise, value);
            } else {
              lib$es6$promise$$internal$$fulfill(promise, value);
            }
          }function lib$es6$promise$$internal$$publishRejection(promise) {
            if (promise._onerror) {
              promise._onerror(promise._result);
            }lib$es6$promise$$internal$$publish(promise);
          }function lib$es6$promise$$internal$$fulfill(promise, value) {
            if (promise._state !== lib$es6$promise$$internal$$PENDING) {
              return;
            }promise._result = value;promise._state = lib$es6$promise$$internal$$FULFILLED;if (promise._subscribers.length !== 0) {
              lib$es6$promise$asap$$default(lib$es6$promise$$internal$$publish, promise);
            }
          }function lib$es6$promise$$internal$$reject(promise, reason) {
            if (promise._state !== lib$es6$promise$$internal$$PENDING) {
              return;
            }promise._state = lib$es6$promise$$internal$$REJECTED;promise._result = reason;lib$es6$promise$asap$$default(lib$es6$promise$$internal$$publishRejection, promise);
          }function lib$es6$promise$$internal$$subscribe(parent, child, onFulfillment, onRejection) {
            var subscribers = parent._subscribers;var length = subscribers.length;parent._onerror = null;subscribers[length] = child;subscribers[length + lib$es6$promise$$internal$$FULFILLED] = onFulfillment;subscribers[length + lib$es6$promise$$internal$$REJECTED] = onRejection;if (length === 0 && parent._state) {
              lib$es6$promise$asap$$default(lib$es6$promise$$internal$$publish, parent);
            }
          }function lib$es6$promise$$internal$$publish(promise) {
            var subscribers = promise._subscribers;var settled = promise._state;if (subscribers.length === 0) {
              return;
            }var child,
                callback,
                detail = promise._result;for (var i = 0; i < subscribers.length; i += 3) {
              child = subscribers[i];callback = subscribers[i + settled];if (child) {
                lib$es6$promise$$internal$$invokeCallback(settled, child, callback, detail);
              } else {
                callback(detail);
              }
            }promise._subscribers.length = 0;
          }function lib$es6$promise$$internal$$ErrorObject() {
            this.error = null;
          }var lib$es6$promise$$internal$$TRY_CATCH_ERROR = new lib$es6$promise$$internal$$ErrorObject();function lib$es6$promise$$internal$$tryCatch(callback, detail) {
            try {
              return callback(detail);
            } catch (e) {
              lib$es6$promise$$internal$$TRY_CATCH_ERROR.error = e;return lib$es6$promise$$internal$$TRY_CATCH_ERROR;
            }
          }function lib$es6$promise$$internal$$invokeCallback(settled, promise, callback, detail) {
            var hasCallback = lib$es6$promise$utils$$isFunction(callback),
                value,
                error,
                succeeded,
                failed;if (hasCallback) {
              value = lib$es6$promise$$internal$$tryCatch(callback, detail);if (value === lib$es6$promise$$internal$$TRY_CATCH_ERROR) {
                failed = true;error = value.error;value = null;
              } else {
                succeeded = true;
              }if (promise === value) {
                lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$cannotReturnOwn());return;
              }
            } else {
              value = detail;succeeded = true;
            }if (promise._state !== lib$es6$promise$$internal$$PENDING) {} else if (hasCallback && succeeded) {
              lib$es6$promise$$internal$$resolve(promise, value);
            } else if (failed) {
              lib$es6$promise$$internal$$reject(promise, error);
            } else if (settled === lib$es6$promise$$internal$$FULFILLED) {
              lib$es6$promise$$internal$$fulfill(promise, value);
            } else if (settled === lib$es6$promise$$internal$$REJECTED) {
              lib$es6$promise$$internal$$reject(promise, value);
            }
          }function lib$es6$promise$$internal$$initializePromise(promise, resolver) {
            try {
              resolver(function resolvePromise(value) {
                lib$es6$promise$$internal$$resolve(promise, value);
              }, function rejectPromise(reason) {
                lib$es6$promise$$internal$$reject(promise, reason);
              });
            } catch (e) {
              lib$es6$promise$$internal$$reject(promise, e);
            }
          }function lib$es6$promise$enumerator$$Enumerator(Constructor, input) {
            var enumerator = this;enumerator._instanceConstructor = Constructor;enumerator.promise = new Constructor(lib$es6$promise$$internal$$noop);if (enumerator._validateInput(input)) {
              enumerator._input = input;enumerator.length = input.length;enumerator._remaining = input.length;enumerator._init();if (enumerator.length === 0) {
                lib$es6$promise$$internal$$fulfill(enumerator.promise, enumerator._result);
              } else {
                enumerator.length = enumerator.length || 0;enumerator._enumerate();if (enumerator._remaining === 0) {
                  lib$es6$promise$$internal$$fulfill(enumerator.promise, enumerator._result);
                }
              }
            } else {
              lib$es6$promise$$internal$$reject(enumerator.promise, enumerator._validationError());
            }
          }lib$es6$promise$enumerator$$Enumerator.prototype._validateInput = function (input) {
            return lib$es6$promise$utils$$isArray(input);
          };lib$es6$promise$enumerator$$Enumerator.prototype._validationError = function () {
            return new Error("Array Methods must be provided an Array");
          };lib$es6$promise$enumerator$$Enumerator.prototype._init = function () {
            this._result = new Array(this.length);
          };var lib$es6$promise$enumerator$$default = lib$es6$promise$enumerator$$Enumerator;lib$es6$promise$enumerator$$Enumerator.prototype._enumerate = function () {
            var enumerator = this;var length = enumerator.length;var promise = enumerator.promise;var input = enumerator._input;for (var i = 0; promise._state === lib$es6$promise$$internal$$PENDING && i < length; i++) {
              enumerator._eachEntry(input[i], i);
            }
          };lib$es6$promise$enumerator$$Enumerator.prototype._eachEntry = function (entry, i) {
            var enumerator = this;var c = enumerator._instanceConstructor;if (lib$es6$promise$utils$$isMaybeThenable(entry)) {
              if (entry.constructor === c && entry._state !== lib$es6$promise$$internal$$PENDING) {
                entry._onerror = null;enumerator._settledAt(entry._state, i, entry._result);
              } else {
                enumerator._willSettleAt(c.resolve(entry), i);
              }
            } else {
              enumerator._remaining--;enumerator._result[i] = entry;
            }
          };lib$es6$promise$enumerator$$Enumerator.prototype._settledAt = function (state, i, value) {
            var enumerator = this;var promise = enumerator.promise;if (promise._state === lib$es6$promise$$internal$$PENDING) {
              enumerator._remaining--;if (state === lib$es6$promise$$internal$$REJECTED) {
                lib$es6$promise$$internal$$reject(promise, value);
              } else {
                enumerator._result[i] = value;
              }
            }if (enumerator._remaining === 0) {
              lib$es6$promise$$internal$$fulfill(promise, enumerator._result);
            }
          };lib$es6$promise$enumerator$$Enumerator.prototype._willSettleAt = function (promise, i) {
            var enumerator = this;lib$es6$promise$$internal$$subscribe(promise, undefined, function (value) {
              enumerator._settledAt(lib$es6$promise$$internal$$FULFILLED, i, value);
            }, function (reason) {
              enumerator._settledAt(lib$es6$promise$$internal$$REJECTED, i, reason);
            });
          };function lib$es6$promise$promise$all$$all(entries) {
            return new lib$es6$promise$enumerator$$default(this, entries).promise;
          }var lib$es6$promise$promise$all$$default = lib$es6$promise$promise$all$$all;function lib$es6$promise$promise$race$$race(entries) {
            var Constructor = this;var promise = new Constructor(lib$es6$promise$$internal$$noop);if (!lib$es6$promise$utils$$isArray(entries)) {
              lib$es6$promise$$internal$$reject(promise, new TypeError("You must pass an array to race."));return promise;
            }var length = entries.length;function onFulfillment(value) {
              lib$es6$promise$$internal$$resolve(promise, value);
            }function onRejection(reason) {
              lib$es6$promise$$internal$$reject(promise, reason);
            }for (var i = 0; promise._state === lib$es6$promise$$internal$$PENDING && i < length; i++) {
              lib$es6$promise$$internal$$subscribe(Constructor.resolve(entries[i]), undefined, onFulfillment, onRejection);
            }return promise;
          }var lib$es6$promise$promise$race$$default = lib$es6$promise$promise$race$$race;function lib$es6$promise$promise$resolve$$resolve(object) {
            var Constructor = this;if (object && (typeof object === "undefined" ? "undefined" : _typeof(object)) === "object" && object.constructor === Constructor) {
              return object;
            }var promise = new Constructor(lib$es6$promise$$internal$$noop);lib$es6$promise$$internal$$resolve(promise, object);return promise;
          }var lib$es6$promise$promise$resolve$$default = lib$es6$promise$promise$resolve$$resolve;function lib$es6$promise$promise$reject$$reject(reason) {
            var Constructor = this;var promise = new Constructor(lib$es6$promise$$internal$$noop);lib$es6$promise$$internal$$reject(promise, reason);return promise;
          }var lib$es6$promise$promise$reject$$default = lib$es6$promise$promise$reject$$reject;var lib$es6$promise$promise$$counter = 0;function lib$es6$promise$promise$$needsResolver() {
            throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
          }function lib$es6$promise$promise$$needsNew() {
            throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
          }var lib$es6$promise$promise$$default = lib$es6$promise$promise$$Promise;function lib$es6$promise$promise$$Promise(resolver) {
            this._id = lib$es6$promise$promise$$counter++;this._state = undefined;this._result = undefined;this._subscribers = [];if (lib$es6$promise$$internal$$noop !== resolver) {
              if (!lib$es6$promise$utils$$isFunction(resolver)) {
                lib$es6$promise$promise$$needsResolver();
              }if (!(this instanceof lib$es6$promise$promise$$Promise)) {
                lib$es6$promise$promise$$needsNew();
              }lib$es6$promise$$internal$$initializePromise(this, resolver);
            }
          }lib$es6$promise$promise$$Promise.all = lib$es6$promise$promise$all$$default;lib$es6$promise$promise$$Promise.race = lib$es6$promise$promise$race$$default;lib$es6$promise$promise$$Promise.resolve = lib$es6$promise$promise$resolve$$default;lib$es6$promise$promise$$Promise.reject = lib$es6$promise$promise$reject$$default;lib$es6$promise$promise$$Promise.prototype = { constructor: lib$es6$promise$promise$$Promise, then: function then(onFulfillment, onRejection) {
              var parent = this;var state = parent._state;if (state === lib$es6$promise$$internal$$FULFILLED && !onFulfillment || state === lib$es6$promise$$internal$$REJECTED && !onRejection) {
                return this;
              }var child = new this.constructor(lib$es6$promise$$internal$$noop);var result = parent._result;if (state) {
                var callback = arguments[state - 1];lib$es6$promise$asap$$default(function () {
                  lib$es6$promise$$internal$$invokeCallback(state, child, callback, result);
                });
              } else {
                lib$es6$promise$$internal$$subscribe(parent, child, onFulfillment, onRejection);
              }return child;
            }, "catch": function _catch(onRejection) {
              return this.then(null, onRejection);
            } };function lib$es6$promise$polyfill$$polyfill() {
            var local;if (typeof global !== "undefined") {
              local = global;
            } else if (typeof self !== "undefined") {
              local = self;
            } else {
              try {
                local = Function("return this")();
              } catch (e) {
                throw new Error("polyfill failed because global object is unavailable in this environment");
              }
            }var P = local.Promise;if (P && Object.prototype.toString.call(P.resolve()) === "[object Promise]" && !P.cast) {
              return;
            }local.Promise = lib$es6$promise$promise$$default;
          }var lib$es6$promise$polyfill$$default = lib$es6$promise$polyfill$$polyfill;var lib$es6$promise$umd$$ES6Promise = { Promise: lib$es6$promise$promise$$default, polyfill: lib$es6$promise$polyfill$$default };if (typeof define === "function" && define["amd"]) {
            define(function () {
              return lib$es6$promise$umd$$ES6Promise;
            });
          } else if (typeof module !== "undefined" && module["exports"]) {
            module["exports"] = lib$es6$promise$umd$$ES6Promise;
          } else if (typeof this !== "undefined") {
            this["ES6Promise"] = lib$es6$promise$umd$$ES6Promise;
          }lib$es6$promise$polyfill$$default();
        }).call(this);
      }).call(this, require('_process'), typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {}, require("timers").setImmediate);
    }, { "_process": 1, "timers": 2 }], 49: [function (require, module, exports) {
      module.exports = function () {
        var userAgent = function userAgent(ua) {
          ua = (ua || window.navigator.userAgent).toString().toLowerCase();
          function checkUserAgent(ua) {
            var browser = {};
            var match = /(dolfin)[ \/]([\w.]+)/.exec(ua) || /(edge)[ \/]([\w.]+)/.exec(ua) || /(chrome)[ \/]([\w.]+)/.exec(ua) || /(opera)(?:.*version)?[ \/]([\w.]+)/.exec(ua) || /(webkit)(?:.*version)?[ \/]([\w.]+)/.exec(ua) || /(msie) ([\w.]+)/.exec(ua) || ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+))?/.exec(ua) || ["", "unknown"];
            if (match[1] === "webkit") {
              match = /(iphone|ipad|ipod)[\S\s]*os ([\w._\-]+) like/.exec(ua) || /(android)[ \/]([\w._\-]+);/.exec(ua) || [match[0], "safari", match[2]];
            } else if (match[1] === "mozilla") {
              if (/trident/.test(ua)) {
                match[1] = "msie";
              } else {
                match[1] = "firefox";
              }
            } else if (match[1] === "edge") {
              match[1] = "spartan";
            } else if (/polaris|natebrowser|([010|011|016|017|018|019]{3}\d{3,4}\d{4}$)/.test(ua)) {
              match[1] = "polaris";
            }

            browser[match[1]] = true;
            browser.name = match[1];
            browser.version = setVersion(match[2]);

            return browser;
          }

          function setVersion(versionString) {
            var version = {};

            var versions = versionString ? versionString.split(/\.|-|_/) : ["0", "0", "0"];
            version.info = versions.join(".");
            version.major = versions[0] || "0";
            version.minor = versions[1] || "0";
            version.patch = versions[2] || "0";

            return version;
          }

          function checkPlatform(ua) {
            if (isPc(ua)) {
              return "pc";
            } else if (isTablet(ua)) {
              return "tablet";
            } else if (isMobile(ua)) {
              return "mobile";
            } else {
              return "";
            }
          }

          function isPc(ua) {
            if (ua.match(/linux|windows (nt|98)|macintosh/) && !ua.match(/android|mobile|polaris|lgtelecom|uzard|natebrowser|ktf;|skt;/)) {
              return true;
            }
            return false;
          }

          function isTablet(ua) {
            if (ua.match(/ipad/) || ua.match(/android/) && !ua.match(/mobi|mini|fennec/)) {
              return true;
            }
            return false;
          }

          function isMobile(ua) {
            if (!!ua.match(/ip(hone|od)|android.+mobile|windows (ce|phone)|blackberry|bb10|symbian|webos|firefox.+fennec|opera m(ob|in)i|polaris|iemobile|lgtelecom|nokia|sonyericsson|dolfin|uzard|natebrowser|ktf;|skt;/)) {
              return true;
            } else {
              return false;
            }
          }

          function checkOs(ua) {
            var os = {},
                match = /(iphone|ipad|ipod)[\S\s]*os ([\w._\-]+) like/.exec(ua) || /(android)[ \/]([\w._\-]+);/.exec(ua) || (/android/.test(ua) ? ["", "android", "0.0.0"] : false) || (/polaris|natebrowser|([010|011|016|017|018|019]{3}\d{3,4}\d{4}$)/.test(ua) ? ["", "polaris", "0.0.0"] : false) || /(windows)(?: nt | phone(?: os){0,1} | )([\w._\-]+)/.exec(ua) || (/(windows)/.test(ua) ? ["", "windows", "0.0.0"] : false) || /(mac) os x ([\w._\-]+)/.exec(ua) || (/(linux)/.test(ua) ? ["", "linux", "0.0.0"] : false) || (/webos/.test(ua) ? ["", "webos", "0.0.0"] : false) || /(bada)[ \/]([\w._\-]+)/.exec(ua) || (/bada/.test(ua) ? ["", "bada", "0.0.0"] : false) || (/(rim|blackberry|bb10)/.test(ua) ? ["", "blackberry", "0.0.0"] : false) || ["", "unknown", "0.0.0"];

            if (match[1] === "iphone" || match[1] === "ipad" || match[1] === "ipod") {
              match[1] = "ios";
            } else if (match[1] === "windows" && match[2] === "98") {
              match[2] = "0.98.0";
            }
            os[match[1]] = true;
            os.name = match[1];
            os.version = setVersion(match[2]);
            return os;
          }

          function checkApp(ua) {
            var app = {},
                match = /(crios)[ \/]([\w.]+)/.exec(ua) || /(daumapps)[ \/]([\w.]+)/.exec(ua) || ["", ""];

            if (match[1]) {
              app.isApp = true;
              app.name = match[1];
              app.version = setVersion(match[2]);
            } else {
              app.isApp = false;
            }

            return app;
          }

          return {
            ua: ua,
            browser: checkUserAgent(ua),
            platform: checkPlatform(ua),
            os: checkOs(ua),
            app: checkApp(ua)
          };
        };

        return userAgent;
      }();
    }, {}], 50: [function (require, module, exports) {
      module.exports = function () {

        var parseUA = require('./userAgent.js');

        var TIMEOUT_IOS = 5 * 1000,
            TIMEOUT_ANDROID = 3 * 100,
            INTERVAL = 100,
            ua = parseUA(),
            os = ua.os,
            intentNotSupportedBrowserList = ['firefox', 'opr/'],
            intentSupportCustomBrowserList = ['KAKAOTALK' 
        ];

        function moveToStore(storeURL) {
          window.top.location.replace(storeURL);
        }

        function web2app(context) {
          var willInvokeApp = typeof context.willInvokeApp === 'function' ? context.willInvokeApp : function () {},
              onAppMissing = typeof context.onAppMissing === 'function' ? context.onAppMissing : moveToStore,
              onUnsupportedEnvironment = typeof context.onUnsupportedEnvironment === 'function' ? context.onUnsupportedEnvironment : function () {};

          willInvokeApp();

          if (os.android) {
            if (isIntentSupportedBrowser() && context.intentURI && !context.useUrlScheme) {
              web2appViaIntentURI(context.intentURI);
            } else if (context.storeURL) {
              web2appViaCustomUrlSchemeForAndroid(context.urlScheme, context.storeURL, onAppMissing);
            }
          } else if (os.ios && context.storeURL) {
            web2appViaCustomUrlSchemeForIOS(context.urlScheme, context.storeURL, onAppMissing, context.universalLink);
          } else {
            setTimeout(function () {
              onUnsupportedEnvironment();
            }, 100);
          }
        }

        function isIntentSupportedBrowser() {
          var supportsIntent = ua.browser.chrome && +ua.browser.version.major >= 25;
          var blackListRegexp = new RegExp(intentNotSupportedBrowserList.join('|'), "i");
          var whiteListRegexp = new RegExp(intentSupportCustomBrowserList.join('|'), "i");
          return supportsIntent && !blackListRegexp.test(ua.ua) || whiteListRegexp.test(ua.ua);
        }

        function web2appViaCustomUrlSchemeForAndroid(urlScheme, storeURL, fallback) {
          deferFallback(TIMEOUT_ANDROID, storeURL, fallback);
          launchAppViaHiddenIframe(urlScheme);
        }

        function deferFallback(timeout, storeURL, fallback) {
          var clickedAt = new Date().getTime();
          return setTimeout(function () {
            var now = new Date().getTime();
            if (isPageVisible() && now - clickedAt < timeout + INTERVAL) {
              fallback(storeURL);
            }
          }, timeout);
        }

        function web2appViaIntentURI(launchURI) {
          if (ua.browser.chrome) {
            move();
          } else {
            setTimeout(move, 100);
          }

          function move() {
            top.location.href = launchURI;
          }
        }

        function web2appViaCustomUrlSchemeForIOS(urlScheme, storeURL, fallback, universalLink) {
          var tid = deferFallback(TIMEOUT_IOS, storeURL, fallback);
          if (parseInt(ua.os.version.major, 10) < 8) {
            bindPagehideEvent(tid);
          } else {
            bindVisibilityChangeEvent(tid);
          }

          if (isSupportUniversalLinks()) {
            if (universalLink === undefined) {
              universalLink = urlScheme;
            } else {
              clearTimeout(tid);
            }
            launchAppViaChangingLocation(universalLink);
          } else {
            launchAppViaHiddenIframe(urlScheme);
          }
        }

        function bindPagehideEvent(tid) {
          window.addEventListener('pagehide', function clear() {
            if (isPageVisible()) {
              clearTimeout(tid);
              window.removeEventListener('pagehide', clear);
            }
          });
        }

        function bindVisibilityChangeEvent(tid) {
          document.addEventListener('visibilitychange', function clear() {
            if (isPageVisible()) {
              clearTimeout(tid);
              document.removeEventListener('visibilitychange', clear);
            }
          });
        }

        function isPageVisible() {
          var attrNames = ['hidden', 'webkitHidden'];
          for (var i = 0, len = attrNames.length; i < len; i++) {
            if (typeof document[attrNames[i]] !== 'undefined') {
              return !document[attrNames[i]];
            }
          }
          return true;
        }

        function launchAppViaChangingLocation(urlScheme) {
          window.top.location.replace(urlScheme);
        }

        function launchAppViaHiddenIframe(urlScheme) {
          setTimeout(function () {
            var iframe = createHiddenIframe('appLauncher');
            iframe.src = urlScheme;
          }, 100);
        }

        function createHiddenIframe(id) {
          var iframe = document.createElement('iframe');
          iframe.id = id;
          iframe.style.border = 'none';
          iframe.style.width = '0';
          iframe.style.height = '0';
          iframe.style.display = 'none';
          iframe.style.overflow = 'hidden';
          document.body.appendChild(iframe);
          return iframe;
        }

        function isSupportUniversalLinks() {
          return parseInt(ua.os.version.major, 10) > 8 && ua.os.ios;
        }

        return web2app;
      }();
    }, { "./userAgent.js": 49 }] }, {}, [42])(42);
});