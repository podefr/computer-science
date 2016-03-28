"use strict";

function debounce(callback, timer) {
    var handle;

    return function () {
        if (typeof handle != "undefined") {
            clearTimeout(handle);
        }
        handle = setTimeout(function () {
            callback();
        }, timer);
    };
}

var debouncedLog = debounce(function () {
    console.log("should only log once");
}, 1000);

debouncedLog();
debouncedLog();
debouncedLog();