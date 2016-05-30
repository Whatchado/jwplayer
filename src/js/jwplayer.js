define([
    'api/global-api',
    'utils/helpers'
], function (GlobalApi, utils) {
    // test cloned repo
    /*global __webpack_public_path__:true*/
    __webpack_public_path__ = utils.loadFrom();

    return GlobalApi.selectPlayer;
});