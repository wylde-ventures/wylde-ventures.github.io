(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var IABNativeBridge, MockOpenerMessages;

IABNativeBridge = (function() {
  function IABNativeBridge() {
    this._queue = [];
    this._listeners = [];
  }

  IABNativeBridge.prototype.post_message = function(message) {
    return this._queue.push(message);
  };

  IABNativeBridge.prototype.on_message = function(callback) {
    return this._listeners.push(callback);
  };

  IABNativeBridge.prototype.__ready = function() {
    return this.__ready = true;
  };

  IABNativeBridge.prototype.__trigger_message = function(message) {
    var listener, _i, _len, _ref, _results;
    _ref = this._listeners;
    _results = [];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      listener = _ref[_i];
      _results.push(listener(message));
    }
    return _results;
  };

  IABNativeBridge.prototype.__poll = function() {
    var ans;
    ans = this._queue;
    this._queue = [];
    return ans;
  };

  return IABNativeBridge;

})();

MockOpenerMessages = (function() {
  function MockOpenerMessages(config) {
    this._listeners = [];
    this._bridge = config.bridge;
    this._bridge.on_message((function(_this) {
      return function(message) {
        return _this.trigger('message', message);
      };
    })(this));
  }

  MockOpenerMessages.prototype.addEventListener = function(event, callback, useCapture) {
    if (event !== 'message') {
      throw new Error('MockOpenerMessages only supports the "message" event. Not: ' + event);
    }
    if (useCapture) {
      throw new Error('MockOpenerMessages does not support the useCapture arg.');
    }
    return this._listeners.push(callback);
  };

  MockOpenerMessages.prototype.removeEventListener = function(event, callback, useCapture) {
    var index;
    if (event !== 'message') {
      throw new Error('MockOpenerMessages only supports the "message" event. Not: ' + event);
    }
    if (useCapture) {
      throw new Error('MockOpenerMessages does not support the useCapture arg.');
    }
    index = this._listeners.indexOf(callback);
    if (index >= 0) {
      return this._listeners.splice(index, 1);
    }
  };

  MockOpenerMessages.prototype.postMessage = function(message) {
    return this._bridge.post_message(message);
  };

  MockOpenerMessages.prototype.trigger = function(event, message) {
    var listener, _i, _len, _ref, _results;
    if (event !== 'message') {
      throw new Error('MockOpenerMessages only supports the "message" event. Not: ' + event);
    }
    _ref = this._listeners;
    _results = [];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      listener = _ref[_i];
      _results.push(listener(message));
    }
    return _results;
  };

  return MockOpenerMessages;

})();

if (!window.opener) {
  if (!window.__iabNativeBridge) {
    window.__iabNativeBridge = new IABNativeBridge();
  }
  window.opener = new MockOpenerMessages({
    bridge: window.__iabNativeBridge
  });
  alert('done setting up bridge');
}

module.exports = null;


},{}]},{},[1])