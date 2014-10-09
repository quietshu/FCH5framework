/**
 * Created by dsds on 10/9/14.
 */

/*
* player class: create a unique player, manage all properties of a player
*   properties:
*     position:
*       { x, y, angle }
*     velocity:
*       { x, y }
*     view:
*       frames:
*         [ images ]
*       size:
*         { width, height }
*     custom properties
*   ports:
*     manage custom properties:
*       add, remove, modify, bind event functions
*     manage view
*   TODO
* */

var player = {
    createNew: function () {
        var p = {
            // properties
            props: [],
            customProps: [],
            events: [],

            // initialization
            init: function () {
                p.props = [];
                return p;
            },

            /*
            * detect if has the property
            * */
            hasProperty: function (key) {
                if (global.isDefined(key))
                    return p.props.indexOf(key) !== -1;
                return false;
            },
            /*
            * add a property
            *   { key: value }
            * */
            addProperty: function (key, value) {
                if (p.hasProperty(key))
                    p.modifyProperty(key, value);
                else
                    p.props.push({
                        "key": key,
                        "value": value
                    });
                return p;
            },
            /*
            * modify a property
            *   { key: value }
            * */
            modifyProperty: function (key, value) {
                if (p.hasProperty(key))
                    p.props[key] = value;
                return p;
            }
        };

        p.init();

        return p;
    }
};
