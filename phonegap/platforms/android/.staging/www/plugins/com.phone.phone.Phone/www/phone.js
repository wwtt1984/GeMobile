cordova.define("com.phone.phone.Phone.phone", function(require, exports, module) { ﻿var Phone = function () {};
/**
 * 设置提示值
 * @param phonenum
 * @returns {*}
 */
Phone.prototype.Call = function (phonenum,callback,errback) {
    return cordova.exec(callback, errback,"PhonePlugin","Call",[phonenum]);
};

Phone.prototype.Abort = function (callback) {
    return cordova.exec(callback, null,"PhonePlugin","Abort",[]);
};

module.exports = (new Phone());

});
