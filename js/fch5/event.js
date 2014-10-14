/**
 * Created by dsds on 10/9/14.
 */

/*
* event class for all the handles in game
*   supported events:
*     mouse click (and touch)
*     keypress
*   supported ports:
*     bind an event, bind multi-events
*     remove an event
* */

var event = {
    // private
    clickEvents: [],
    keyEvents: [],
    keyMainEvent,

    bindEvent: function (event, obj) {
        if (global.isString(event)) {
            obj._obj.addEventListener(event, obj._func, false) || obj._obj.attachEvent(event, obj._func);
        }
        return event;
    },

    removeEvent: function (event, obj) {
        if (global.isString(event)) {
            obj._obj.removeEventListener(event, obj._func, false) || obj._obj.detachEvent(event, obj._func);
        }
        return event;
    },

    bindClickEvent: function (obj) {
        event.bindEvent("onclick", obj);
        event.bindEvent("ontouchstart", obj);
        return event;
    },

    removeClickEvent: function (obj) {
        event.removeEvent("onclick", obj);
        event.removeEvent("ontouchstart", obj);
        return event;
    },

    bindKeyMainEvent: function () {
        var keyPressedFunction = function (event) {
            var keyNumber;
            if (window.event) {
                // IE
                keyNumber = event.keyCode;
            }
            else if (event.which) {
                // other browsers
                keyNumber = event.which;
            }
            for (var i = 0; i < event.keyEvents.length; ++i) {
                if (+keyNumber === +event._key) {
                    event._func();
                }
            }
        };
    },

    // public

    /**
     * bind the click event
     *   bind both touch (for touch devices) & click (for desktop computers)
     *   execute function func
     *   note: add func to clickEvents (execute all the functions bound before)
     * @method event.click
     * @params { obj, func }
     */
    click: function (obj, func) {

        if (global.isDefined(obj) && global.isDefined(func)) {
            var o = {
                "_obj": obj,
                "_func": func
            };
            event.bindClickEvent(o);
            event.clickEvents.push(o);
        }

        return event;
    },

    /**
     * remove the click event
     * @method event.removeClick
     * @params func: the SAME function object to that function bound to object before
     */
    removeClick: function (obj, func) {
        if (global.isDefined(obj) && global.isDefined(func)) {
            var o = {
                "_obj": obj,
                "_func": func
            };
            var index = event.clickEvents.indexOf(o);
            if (index !== -1) {
                // function found
                event.removeClickEvent(o);
                event.clickEvents.splice(index, 1);
            }
            else {
                // function not found
            }
        }
        return event;
    },

    /**
     * event keypress
     *   bind a specific key pressdown event
     *   execute function func
     * @method event.keypress
     */
    keypress: function (key, func) {
        if (global.isKey(key) && global.isDefined(func)) {
            event.keyEvents.push({
                "_key": global.toKeyCode(key),
                "_func": func
            });
            if (!global.isDefined(event.keyMainEvent))
                event.bindKeyMainEvent();
        }
        return event;
    },

    /**
     * remove the keypress event
     * @method event.removeKeypress
     * @params func: the SAME function object to that function bound to object before
     */
    removeKeypress: function (key, func) {
        if (global.isKey(key) && global.isDefined(func)) {
            var index = event.keyEvents.indexOf({
                "_key": global.toKeyCode(key),
                "_func": func
            });
            if (index !== -1)
                event.keyEvents.splice(index, 1);
        }
        return event;
    }
};
