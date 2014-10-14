/**
 * Created by dsds on 10/9/14.
 */

/*
* global class
*   supported functions:
*     detect if defined
*     detect whether a string
*     detect whether a presentation of a key
*     get a key code
* */

var global = {
    defaults: {
        screenWidth: 800,
        screenHeight: 600
    },

    // test an object
    isDefined: function (obj) {
        return (typeof obj !== "undefined");
    },

    // detect a string
    isString: function (str) {
        return (typeof obj === "string");
    },

    /**
     * @param string (like "a" / "A" / "return" / "Enter" / "ESC") or key code (33 or 20), etc.
     *   return if param key is a keyboard code.
     */
    isKey: function (key) {
        // TODO
        return true;
    },

    toKeyCode: function (key) {
        // TODO
        return key;
    }
};
