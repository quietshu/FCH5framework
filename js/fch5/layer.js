/**
 * Created by shuding on 10/11/14.
 * <ds303077135@gmail.com>
 */

var layer = {

    createCanvasLayer: function (w, h) {
        var cvs = document.createElement("canvas");
        cvs.width = w || global.defaults.screenWidth;
        cvs.height = h || global.defaults.screenHeight;


    }

};