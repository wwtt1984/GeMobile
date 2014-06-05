cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.toast.toast.Toast/www/toast.js",
        "id": "com.toast.toast.Toast.toast",
        "clobbers": [
            "window.plugins.Toast"
        ]
    },
    {
        "file": "plugins/com.phone.phone.Phone/www/phone.js",
        "id": "com.phone.phone.Phone.phone",
        "clobbers": [
            "window.plugins.Phone"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.toast.toast.Toast": "1.5.2",
    "com.phone.phone.Phone": "1.5.2"
}
// BOTTOM OF METADATA
});