var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var TextField = (function (_super) {
    __extends(TextField, _super);
    function TextField() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return TextField;
}(egret.TextField));
__reflect(TextField.prototype, "TextField");
;
var Sprite = (function (_super) {
    __extends(Sprite, _super);
    function Sprite() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Sprite;
}(egret.Sprite));
__reflect(Sprite.prototype, "Sprite");
;
var Shape = (function (_super) {
    __extends(Shape, _super);
    function Shape() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Shape;
}(egret.Shape));
__reflect(Shape.prototype, "Shape");
;
var DisplayObject = (function (_super) {
    __extends(DisplayObject, _super);
    function DisplayObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return DisplayObject;
}(egret.DisplayObject));
__reflect(DisplayObject.prototype, "DisplayObject");
;
var DisplayObjectContainer = (function (_super) {
    __extends(DisplayObjectContainer, _super);
    function DisplayObjectContainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return DisplayObjectContainer;
}(egret.DisplayObjectContainer));
__reflect(DisplayObjectContainer.prototype, "DisplayObjectContainer");
;
var Point = (function (_super) {
    __extends(Point, _super);
    function Point() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Point;
}(egret.Point));
__reflect(Point.prototype, "Point");
;
var Rectangle = (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Rectangle;
}(egret.Rectangle));
__reflect(Rectangle.prototype, "Rectangle");
;
var Bitmap = (function (_super) {
    __extends(Bitmap, _super);
    function Bitmap() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Bitmap;
}(egret.Bitmap));
__reflect(Bitmap.prototype, "Bitmap");
;
var BitmapData = (function (_super) {
    __extends(BitmapData, _super);
    function BitmapData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return BitmapData;
}(egret.BitmapData));
__reflect(BitmapData.prototype, "BitmapData");
;
var Stage = (function (_super) {
    __extends(Stage, _super);
    function Stage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Stage;
}(egret.Stage));
__reflect(Stage.prototype, "Stage");
;
var Tween = (function (_super) {
    __extends(Tween, _super);
    function Tween() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Tween;
}(egret.Tween));
__reflect(Tween.prototype, "Tween");
;
var Ease = (function (_super) {
    __extends(Ease, _super);
    function Ease() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Ease;
}(egret.Ease));
__reflect(Ease.prototype, "Ease");
;
//----------------------------------------------
//????????????????????????????????????????????????????????????????????????
//moon.TipsManager.getIns().init(this.stage);
//moon.LogManager.getIns().init(this.stage);
//moon.AlertManager.getIns().init(this.stage);
var trace = function () {
    var arg = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arg[_i] = arguments[_i];
    }
    var str = "";
    for (var i = 0; i < arg.length; i++) {
        str += arg[i] + ",";
    }
    str = str.substr(0, str.length - 1);
    moon.LogManager.getInstane().logMessage(str);
};
var traceSimple = function () {
    var arg = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arg[_i] = arguments[_i];
    }
    var str = "";
    for (var i = 0; i < arg.length; i++) {
        str += arg[i] + ",";
    }
    str = str.substr(0, str.length - 1);
    moon.LogManager.getInstane().log(str);
};
var alertAuto = function (title, closeTime) {
    if (title === void 0) { title = "???????????????"; }
    if (closeTime === void 0) { closeTime = 3; }
    moon.AlertManager.getInstance().alertAuto(title, closeTime);
};
var alertHand = function (title) {
    if (title === void 0) { title = "???????????????"; }
    moon.AlertManager.getInstance().alert(title);
};
var alertRoll = function (title, bgWidth) {
    if (title === void 0) { title = "???????????????"; }
    if (bgWidth === void 0) { bgWidth = 200; }
    moon.AlertManager.getInstance().alertRoll(title, bgWidth);
};
//----------------------------------------------
var moon;
(function (moon) {
    var FONT = (function () {
        function FONT() {
        }
        FONT.fontName = "??????";
        return FONT;
    }());
    moon.FONT = FONT;
    __reflect(FONT.prototype, "moon.FONT");
    var Const = (function () {
        function Const() {
        }
        /**?????? ??????*/
        Const.HORIZONTAL = "horizontal";
        /**?????? ??????*/
        Const.VERTICAL = "vertical";
        /**?????? ??????*/
        Const.SHAPE_RECT = "shape rect";
        /**?????? ????????????*/
        Const.SHAPE_RECT_ROUND = "shape rect round";
        /**?????? ??????*/
        Const.SHAPE_CIRCLE = "shape circle";
        /**?????? ??????*/
        Const.VER_DEBUG = "debug";
        /**?????? ??????*/
        Const.VER_RELEASE = "release";
        return Const;
    }());
    moon.Const = Const;
    __reflect(Const.prototype, "moon.Const");
    /**?????? */
    var Color = (function () {
        function Color() {
        }
        Object.defineProperty(Color, "random", {
            get: function () { return Math.random() * 0XFFFFFF; },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(Color, "white", {
            get: function () { return 0XFFFFFF; },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(Color, "black", {
            get: function () { return 0X000000; },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(Color, "gray", {
            get: function () { return 0X666666; },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(Color, "red", {
            get: function () { return 0XFF0000; },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(Color, "green", {
            get: function () { return 0X00FF00; },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(Color, "bule", {
            get: function () { return 0X0000FF; },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(Color, "skinNormal", {
            get: function () { return 0X15191C; },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(Color, "skinDown", {
            get: function () { return 0X999999; },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(Color, "titleBackground", {
            get: function () { return 0X20262B; },
            enumerable: true,
            configurable: true
        });
        ;
        Color.getRandomArray = function (count) {
            var colors = [];
            for (var i = 0; i < count; i++)
                colors.push(Math.random() * 0XFFFFFF);
            return colors;
        };
        ;
        /** ????????????????????????,value??????-255???255*/
        Color.lightenDarkenColor = function (color, value) {
            var r = (color >> 16) + value;
            if (r > 255)
                r = 255;
            else if (r < 0)
                r = 0;
            var b = ((color >> 8) & 0x00FF) + value;
            if (b > 255)
                b = 255;
            else if (b < 0)
                b = 0;
            var g = (color & 0x0000FF) + value;
            if (g > 255)
                g = 255;
            else if (g < 0)
                g = 0;
            return (g | (b << 8) | (r << 16));
        };
        return Color;
    }());
    moon.Color = Color;
    __reflect(Color.prototype, "moon.Color");
    /**?????? */
    var Skin = (function () {
        function Skin() {
        }
        Object.defineProperty(Skin, "randomRect", {
            get: function () { return moon.MoonUI.getRect(60, 60, moon.Color.random); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(Skin, "randomCircle", {
            get: function () { return moon.MoonUI.getCircle(50, moon.Color.random); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(Skin, "pointNormal", {
            /**????????? */
            get: function () { return moon.MoonUI.getCircle(6, moon.Color.black); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(Skin, "pointDown", {
            get: function () { return moon.MoonUI.getCircle(6, moon.Color.gray); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(Skin, "buttonNormal", {
            /**???????????? */
            get: function () { return MoonUI.getRect(60, 60, Color.skinNormal); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(Skin, "buttonDown", {
            get: function () { return MoonUI.getRect(60, 60, Color.skinDown); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(Skin, "radioOff", {
            /**??????????????? */
            get: function () { return moon.MoonUI.getRadioCircle(moon.Color.white, moon.Color.white); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(Skin, "radioOn", {
            get: function () { return moon.MoonUI.getRadioCircle(moon.Color.white, moon.Color.black, 1); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(Skin, "checkBoxOff", {
            /**??????????????? */
            get: function () { return moon.MoonUI.getCheckBoxRect(moon.Color.white, moon.Color.white); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(Skin, "checkBoxOn", {
            get: function () { return moon.MoonUI.getCheckBoxRect(moon.Color.white, moon.Color.black, 1); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(Skin, "switchOff", {
            /**???????????? */
            get: function () { return moon.MoonUI.getSwitch(moon.Color.skinNormal, moon.Color.white); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(Skin, "switchOn", {
            get: function () { return moon.MoonUI.getSwitch(moon.Color.skinNormal, moon.Color.white, 1); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(Skin, "progressBackground", {
            /**??????????????? */
            get: function () { return moon.MoonUI.getRect(300, 20, moon.Color.skinNormal); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Skin, "progressValue", {
            get: function () { return moon.MoonUI.getRect(300, 20, moon.Color.skinDown); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Skin, "sliderBackground", {
            /**??????????????? */
            get: function () { return moon.MoonUI.getRect(300, 10, moon.Color.skinNormal); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Skin, "sliderValue", {
            get: function () { return moon.MoonUI.getRect(300, 10, moon.Color.skinDown); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Skin, "sliderBar", {
            get: function () { return moon.MoonUI.getCircle(15, moon.Color.white); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Skin, "scrollBar", {
            /**??????????????? */
            get: function () { return moon.MoonUI.getRect(10, 10, moon.Color.skinNormal); },
            enumerable: true,
            configurable: true
        });
        Skin.getRodatioButton = function (label) {
            var btn = new BasicButton(moon.Skin.radioOff, moon.Skin.radioOn);
            btn.skinAutoScale = false;
            btn.label = label;
            btn.labelColor = moon.Color.black;
            btn.setLabelPoint(40, 0);
            return btn;
        };
        Skin.getCheckBox = function (label) {
            var skins = [moon.Skin.checkBoxOff, moon.Skin.checkBoxOff, moon.Skin.checkBoxOn, moon.Skin.checkBoxOn];
            var btn = new moon.MoreSkinButton(skins);
            btn.skinAutoScale = false;
            btn.label = label;
            btn.toggleSwitch = true;
            btn.labelColor = moon.Color.black;
            btn.setLabelPoint(50, 2);
            return btn;
        };
        return Skin;
    }());
    moon.Skin = Skin;
    __reflect(Skin.prototype, "moon.Skin");
    /**
     * ...
     * ???????????????
     * @author vinson
     */
    var SimpleLayout = (function () {
        function SimpleLayout() {
        }
        /**???????????????,X?????????,X?????????,Y?????????,X?????????,Y?????????,??????/?????? */
        SimpleLayout.displayRank = function (array, xNum, xDis, yDis, x, y, sign) {
            if (xNum === void 0) { xNum = 1; }
            if (xDis === void 0) { xDis = 0; }
            if (yDis === void 0) { yDis = 0; }
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (sign === void 0) { sign = 1; }
            var display;
            for (var i = 0; i < array.length; i++) {
                display = array[i];
                display.x = x + Math.floor(i % xNum) * (display.width + xDis) * sign;
                display.y = y + Math.floor(i / xNum) * (display.height + yDis) * sign;
            }
        };
        return SimpleLayout;
    }());
    moon.SimpleLayout = SimpleLayout;
    __reflect(SimpleLayout.prototype, "moon.SimpleLayout");
    /**
     * ...
     * ????????????x???,y???,w???,h???,r??????,c??????,ew?????????,eh?????????
     * @author vinson
     */
    var MoonUI = (function () {
        function MoonUI() {
        }
        Object.defineProperty(MoonUI, "randomColor", {
            /**???????????????*/
            get: function () {
                return Math.random() * 0XFFFFFF;
            },
            enumerable: true,
            configurable: true
        });
        /**???????????????*/
        MoonUI.getLineRect = function (w, h, c, s, x, y) {
            if (c === void 0) { c = 0; }
            if (s === void 0) { s = 1; }
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            var node = new Sprite();
            node.graphics.lineStyle(s, c);
            node.graphics.drawRect(x, y, w, h);
            node.graphics.endFill();
            return node;
        };
        /**???????????????*/
        MoonUI.getLineCircle = function (r, c, s, x, y) {
            if (c === void 0) { c = 0; }
            if (s === void 0) { s = 1; }
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            var node = new Sprite();
            node.graphics.lineStyle(s, c);
            node.graphics.drawCircle(x, y, r);
            node.graphics.endFill();
            return node;
        };
        /**?????????????????? a??????????????????0,0.5,1,2????????????????????????*/
        MoonUI.getMatrixRect = function (w, h, c1, c2, a) {
            if (c1 === void 0) { c1 = 0; }
            if (c2 === void 0) { c2 = 0; }
            if (a === void 0) { a = 0; }
            var node = new Sprite();
            var matrix = new egret.Matrix();
            matrix.createGradientBox(w, h, Math.PI * a, 0, 0);
            node.graphics.beginGradientFill(egret.GradientType.LINEAR, [c1, c2], [1, 1], [0, 255], matrix);
            node.graphics.drawRect(0, 0, w, h);
            node.graphics.endFill();
            return node;
        };
        /**????????????*/
        MoonUI.getRect = function (w, h, c, x, y) {
            if (c === void 0) { c = 0; }
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            var s = new Sprite();
            s.graphics.beginFill(c);
            s.graphics.drawRect(x, y, w, h);
            s.graphics.endFill();
            return s;
        };
        /**?????????????????????X*/
        MoonUI.getX = function (w, h, c, s, x, y) {
            if (c === void 0) { c = 0; }
            if (s === void 0) { s = 1; }
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            var container = new Sprite;
            var l1 = new Sprite;
            l1.graphics.lineStyle(s, c);
            l1.graphics.moveTo(0, 0);
            l1.graphics.lineTo(w, h);
            var l2 = new Sprite;
            l2.graphics.lineStyle(s, c);
            l2.graphics.moveTo(w, 0);
            l2.graphics.lineTo(0, h);
            container.addChild(l1);
            container.addChild(l2);
            return container;
        };
        /**??????????????????*/
        MoonUI.getRoundRect = function (w, h, c, ew, eh, x, y) {
            if (c === void 0) { c = 0; }
            if (ew === void 0) { ew = 5; }
            if (eh === void 0) { eh = 5; }
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            var s = new Sprite();
            s.graphics.beginFill(c);
            s.graphics.drawRoundRect(x, y, w, h, ew, eh);
            s.graphics.endFill();
            return s;
        };
        /**????????????*/
        MoonUI.getCircle = function (r, c, x, y) {
            if (c === void 0) { c = 0; }
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            var s = new Sprite();
            s.graphics.beginFill(c);
            s.graphics.drawCircle(x, y, r);
            s.graphics.endFill();
            return s;
        };
        /**???????????????,side??????,rotation??????*/
        MoonUI.getPolygon = function (side, r, c, rotation) {
            if (side === void 0) { side = 3; }
            if (r === void 0) { r = 10; }
            if (c === void 0) { c = 0; }
            if (rotation === void 0) { rotation = 0; }
            var s = new Sprite;
            s.rotation = rotation;
            s.graphics.beginFill(c);
            for (var i = 0; i <= side; i++) {
                var lineX = Math.cos((i * (360 / side) * Math.PI / 180)) * r;
                var lineY = Math.sin((i * (360 / side) * Math.PI / 180)) * r;
                if (i == 0)
                    s.graphics.moveTo(lineX, lineY);
                else
                    s.graphics.lineTo(lineX, lineY);
            }
            s.graphics.endFill();
            return s;
        };
        /**????????????????????????????????????rc??????????????????,pc??????????????????*/
        MoonUI.getArrowRoundRect = function (w, h, rc, pc, rotation) {
            if (pc === void 0) { pc = 0; }
            if (rotation === void 0) { rotation = 0; }
            var s = new Sprite;
            s.addChild(this.getRoundRect(w, h, rc));
            var p = this.getPolygon(3, w / 3, pc, 30 + rotation);
            p.x = s.width >> 1;
            p.y = s.height >> 1;
            s.addChild(p);
            return s;
        };
        /**??????????????????bar*/
        MoonUI.getScrollLineBar = function (w, h, c) {
            var s = new Sprite;
            var _h = h / 3;
            for (var i = 0; i < 3; i++) {
                var r = this.getRect(w, 1, c, 0, i * _h);
                s.addChild(r);
            }
            return s;
        };
        /**??????????????????-???*/
        MoonUI.getAddRoundRect = function (w, h, c) {
            var s = new Sprite;
            s.addChild(this.getRoundRect(w, h, c));
            var r1 = this.getRect(w / 2, 2, 0, w / 4, h / 2 - 1);
            var r2 = this.getRect(2, h / 2, 0, w / 2 - 1, h / 4);
            s.addChild(r1);
            s.addChild(r2);
            return s;
        };
        /**??????????????????-???*/
        MoonUI.getRemoveRoundRect = function (w, h, c) {
            var s = new Sprite;
            s.addChild(this.getRoundRect(w, h, c));
            var r = this.getRect(w / 2, 2, 0, w / 4, h / 2 - 1);
            s.addChild(r);
            return s;
        };
        /**??????????????????????????????*/
        MoonUI.getRoundRectText = function (w, h, c, str) {
            if (str === void 0) { str = "click"; }
            var s = new Sprite;
            s.addChild(this.getRoundRect(w, h, c));
            var text = new TextField;
            text.name = "text";
            text.text = str;
            text.x = (s.width - text.width) >> 1;
            text.y = (s.height - text.height) >> 1;
            s.addChild(text);
            return s;
        };
        /**????????????-switchButton bc???????????????gc???????????????,type???0???????????????1?????????*/
        MoonUI.getSwitch = function (bc, gc, type) {
            if (bc === void 0) { bc = 0XFFFFFF; }
            if (gc === void 0) { gc = 0; }
            if (type === void 0) { type = 0; }
            var node = this.getRoundRect(80, 50, bc, 60, 60);
            node.addChild(this.getCircle(22, gc, type == 0 ? 25 : 55, 25));
            return node;
        };
        /**????????????-????????? bc???????????????gc????????????,type???0???????????????1?????????*/
        MoonUI.getCheckBoxRect = function (bc, gc, type) {
            if (bc === void 0) { bc = 0XFFFFFF; }
            if (gc === void 0) { gc = 0; }
            if (type === void 0) { type = 0; }
            var s = new Sprite;
            s.addChild(this.getRect(40, 40, bc));
            if (type == 1) {
                var r = new Sprite;
                r.graphics.beginFill(gc);
                r.graphics.moveTo(0, 20);
                r.graphics.lineTo(20, 36);
                r.graphics.lineTo(44, 8);
                r.graphics.lineTo(36, 0);
                r.graphics.lineTo(20, 18);
                r.graphics.lineTo(12, 8);
                r.graphics.lineTo(0, 20);
                s.addChild(r);
            }
            return s;
        };
        /**????????????-????????? bc???????????????gc????????????,type???0???????????????1?????????*/
        MoonUI.getRadioCircle = function (bc, gc, type) {
            if (bc === void 0) { bc = 0XFFFFFF; }
            if (gc === void 0) { gc = 0; }
            if (type === void 0) { type = 0; }
            var s = new Sprite;
            s.addChild(this.getCircle(16, bc, 16, 16));
            s.graphics.lineStyle(1, 0);
            if (type == 1) {
                var r = this.getCircle(8, gc, 16, 16);
                s.addChild(r);
            }
            return s;
        };
        /**????????????-??????
         * rect.x???x?????????
         * rect.y???y?????????
         * rect.width????????????
         * rect.height????????????
         * lc???????????????
         * */
        MoonUI.getGridding = function (rect, c) {
            if (c === void 0) { c = 0; }
            var s = new Sprite;
            s.graphics.lineStyle(0.1, c);
            var disx = rect.width / rect.x;
            var disy = rect.height / rect.y;
            for (var i = 0; i < rect.x; i++) {
                s.graphics.moveTo(0, i * disy);
                s.graphics.lineTo(rect.width, i * disy);
            }
            for (i = 0; i < rect.y; i++) {
                s.graphics.moveTo(i * disx, 0);
                s.graphics.lineTo(i * disx, rect.height);
            }
            return s;
        };
        /***???????????? */
        MoonUI.getHeart = function (r, c) {
            if (r === void 0) { r = 15; }
            if (c === void 0) { c = 0XFF0000; }
            var s = new Sprite;
            s.graphics.beginFill(c);
            s.graphics.moveTo(0, 0);
            s.graphics.lineTo(0, -r * 2);
            s.graphics.cubicCurveTo(r, -r * 2.5, r * 2, -r * 1.5, 0, 0);
            s.graphics.moveTo(0, 0);
            s.graphics.lineTo(0, -r * 2);
            s.graphics.cubicCurveTo(-r, -r * 2.5, -r * 2, -r * 1.5, 0, 0);
            s.graphics.endFill();
            s.anchorOffsetX = -s.width / 2;
            s.anchorOffsetY = -s.height;
            return s;
        };
        return MoonUI;
    }());
    moon.MoonUI = MoonUI;
    __reflect(MoonUI.prototype, "moon.MoonUI");
    //--------------
    var LogManager = (function () {
        function LogManager() {
        }
        LogManager.getInstane = function () {
            if (this.instance == null) {
                this.instance = new LogManager();
            }
            return this.instance;
        };
        /**??????????????????????????? */
        LogManager.prototype.init = function (stage) {
            var txt = (new Label).textField;
            txt.textAlign = egret.HorizontalAlign.LEFT;
            stage.addChild(txt);
            this.txtSimple = txt;
            var txt = (new Label).textField;
            txt.size = 25;
            stage.addChild(txt);
            this.txtMessage = txt;
        };
        /**?????????????????????????????? */
        LogManager.prototype.debug = function (value) {
            this.txtSimple.text = value;
        };
        /**?????????????????????????????? */
        LogManager.prototype.log = function (value) {
            if (GameData.version == Const.VER_DEBUG)
                this.txtSimple.text = value;
        };
        /**?????????????????? */
        LogManager.prototype.logMessage = function (value) {
            if (GameData.version == Const.VER_DEBUG)
                this.txtMessage.appendText(value + "\n");
        };
        LogManager.prototype.setLogColor = function (color) {
            this.txtSimple.textColor = color;
        };
        LogManager.prototype.setLogMessageColor = function (color) {
            this.txtMessage.textColor = color;
        };
        return LogManager;
    }());
    moon.LogManager = LogManager;
    __reflect(LogManager.prototype, "moon.LogManager");
    //--------------
    var AlertManager = (function () {
        function AlertManager() {
        }
        AlertManager.getInstance = function () {
            if (this.instance == null) {
                this.instance = new AlertManager();
            }
            return this.instance;
        };
        /**??????????????????????????? */
        AlertManager.prototype.init = function (stage) {
            this.stage = stage;
        };
        AlertManager.prototype.alertAuto = function (title, closeTime) {
            if (title === void 0) { title = "??????????????????????????????"; }
            if (closeTime === void 0) { closeTime = 3; }
            var a = new AlertAutoBar(title, closeTime);
            if (this.stage)
                this.stage.addChild(a);
            else
                trace("??????alertAuto???????????????AlertManager???init???????????????");
            return a;
        };
        AlertManager.prototype.alert = function (title) {
            if (title === void 0) { title = "??????????????????????????????"; }
            var a = new AlertBar(title);
            if (this.stage)
                this.stage.addChild(a);
            else
                trace("??????alertBar???????????????AlertManager???init???????????????");
            return a;
        };
        AlertManager.prototype.alertRoll = function (title, bgWidth) {
            if (title === void 0) { title = "???????????????"; }
            if (bgWidth === void 0) { bgWidth = 200; }
            var a = new AlertRollBar(title, bgWidth);
            if (this.stage)
                this.stage.addChild(a);
            else
                trace("??????alertRollBar???????????????AlertManager???init???????????????");
            return a;
        };
        return AlertManager;
    }());
    moon.AlertManager = AlertManager;
    __reflect(AlertManager.prototype, "moon.AlertManager");
    var MoonEvent = (function (_super) {
        __extends(MoonEvent, _super);
        function MoonEvent(type, data, currentTarget) {
            if (type === void 0) { type = ""; }
            if (data === void 0) { data = null; }
            if (currentTarget === void 0) { currentTarget = null; }
            var _this = _super.call(this) || this;
            _this.type = type;
            _this.data = data;
            _this.curTarget = currentTarget;
            return _this;
        }
        //button event
        MoonEvent.MOUSE_OVER = "event-over"; //??????
        MoonEvent.MOUSE_OUT = "event-out"; //??????
        MoonEvent.MOUSE_DOWN = "event-down"; //??????
        MoonEvent.MOUSE_MOVE = "event-move"; //??????
        MoonEvent.MOUSE_UP = "event-up"; //??????
        MoonEvent.CLICK = "event-click"; //??????
        //tabbar event
        MoonEvent.CHANGE = "change"; //??????
        MoonEvent.COMPLETE = "complete"; //??????
        MoonEvent.RENDER_COMPLETE = "render complete"; //????????????
        MoonEvent.UPDATE = "update"; //??????
        MoonEvent.START = "start"; //??????
        MoonEvent.MOVE = "move"; //??????
        MoonEvent.OVER = "over"; //??????
        MoonEvent.PAUSE = "pause"; //??????
        MoonEvent.STOP = "stop"; //??????
        MoonEvent.PLAY = "play"; //??????
        MoonEvent.OPEN = "open"; //??????
        MoonEvent.CLOSE = "close"; //??????
        return MoonEvent;
    }(egret.EventDispatcher));
    moon.MoonEvent = MoonEvent;
    __reflect(MoonEvent.prototype, "moon.MoonEvent");
    var MoonDisplayObject = (function (_super) {
        __extends(MoonDisplayObject, _super);
        function MoonDisplayObject() {
            var _this = _super.call(this) || this;
            _this._type = Const.SHAPE_RECT;
            _this._color = 0;
            _this.display = new Sprite;
            _this.bg = new Sprite;
            return _this;
        }
        Object.defineProperty(MoonDisplayObject.prototype, "type", {
            get: function () { return this._type; },
            set: function (value) { this._type = value; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MoonDisplayObject.prototype, "color", {
            get: function () { return this._color; },
            set: function (value) { this._color = value; this._data.c = value; this.draw(); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MoonDisplayObject.prototype, "data", {
            /**{w:1,h:1,r:1,c:1,ew:1,eh:1} */
            set: function (value) { this._data = value; this.draw(); },
            enumerable: true,
            configurable: true
        });
        MoonDisplayObject.prototype.draw = function () {
            this._color = this._data.c;
            this.display.graphics.clear();
            this.display = this.getDisplay(this._data);
            this.addChild(this.display);
            this.setPosition();
        };
        MoonDisplayObject.prototype.setPosition = function () {
            if (this._hasBg && this.type != Const.SHAPE_CIRCLE) {
                this.display.x = (this.bg.width - this.display.width) >> 1;
                this.display.y = (this.bg.height - this.display.height) >> 1;
            }
        };
        MoonDisplayObject.prototype.setBackground = function (color, side) {
            if (side === void 0) { side = 1; }
            this._hasBg = true;
            var d = this._data;
            var o = {};
            for (var i in d) {
                o[i] = d[i];
            }
            o.c = color;
            if (o.w)
                o.w = o.w + side * 2;
            if (o.h)
                o.h = o.h + side * 2;
            if (o.r)
                o.r = o.r + side;
            this.bg.graphics.clear();
            this.bg = this.getDisplay(o);
            this.addChildAt(this.bg, 0);
            this.setPosition();
        };
        MoonDisplayObject.prototype.getDisplay = function (o) {
            switch (this.type) {
                case Const.SHAPE_RECT:
                    return MoonUI.getRect(o.w, o.h, o.c);
                case Const.SHAPE_RECT_ROUND:
                    return MoonUI.getRoundRect(o.w, o.h, o.c, o.ew, o.eh);
                case Const.SHAPE_CIRCLE:
                    return MoonUI.getCircle(o.r, o.c);
            }
        };
        return MoonDisplayObject;
    }(Sprite));
    moon.MoonDisplayObject = MoonDisplayObject;
    __reflect(MoonDisplayObject.prototype, "moon.MoonDisplayObject");
    var MoonContainer = (function (_super) {
        __extends(MoonContainer, _super);
        function MoonContainer() {
            var _this = _super.call(this) || this;
            _this.dataEvent = new Object;
            _this.once(egret.Event.ADDED_TO_STAGE, _this.render, _this);
            return _this;
        }
        /**??????????????????????????? */
        MoonContainer.prototype.render = function () {
            this.stageW = this.stage.stageWidth;
            this.stageH = this.stage.stageHeight;
        };
        /**????????????*/
        MoonContainer.prototype.dispEvent = function (type, data, dataType) {
            if (data === void 0) { data = null; }
            if (dataType === void 0) { dataType = null; }
            if (!this.dataEvent)
                return;
            var listenerFunc = this.dataEvent[type];
            if (listenerFunc == null)
                return;
            var moonEvent = new MoonEvent;
            moonEvent.curTarget = this;
            moonEvent.data = data;
            moonEvent.type = type;
            moonEvent.dataType = dataType;
            if (listenerFunc["this"]) {
                listenerFunc.apply(listenerFunc["this"], [moonEvent]);
            }
            else {
                listenerFunc(moonEvent);
            }
        };
        /**????????????*/
        MoonContainer.prototype.addEvent = function (type, listener, thisObj) {
            if (thisObj === void 0) { thisObj = null; }
            if (this.dataEvent && this.dataEvent[type] == null) {
                listener["this"] = thisObj;
                this.dataEvent[type] = listener;
            }
        };
        /**????????????*/
        MoonContainer.prototype.removeEvent = function (type, listener) {
            if (this.dataEvent && this.dataEvent[type]) {
                delete this.dataEvent[type];
            }
        };
        /**????????????????????????*/ //value???????????????????????????????????????
        MoonContainer.prototype.removeFromParent = function (value) {
            if (value === void 0) { value = false; }
            var _parent = this.parent;
            if (value)
                this.dispose();
            if (_parent && _parent.contains(this))
                _parent.removeChild(this);
            _parent = null;
        };
        /**??????????????????????????????*/
        MoonContainer.prototype.removeChildAll = function () {
            var beginIndex = 0, endIndex = this.numChildren - 1;
            for (var i = beginIndex; i <= endIndex; ++i) {
                var display = this.getChildAt(0);
                if (display instanceof MoonContainer) {
                    display.removeFromParent(true);
                }
                else {
                    display.parent && display.parent.removeChild(display);
                }
            }
        };
        /**??????*/
        MoonContainer.prototype.dispose = function () {
            this.removeChildAll();
            this.dataEvent = null;
            this.stageW = null;
            this.stageH = null;
        };
        return MoonContainer;
    }(DisplayObjectContainer));
    moon.MoonContainer = MoonContainer;
    __reflect(MoonContainer.prototype, "moon.MoonContainer");
    var BasicView = (function (_super) {
        __extends(BasicView, _super);
        function BasicView() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        BasicView.prototype.createText = function (x, y, s) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (s === void 0) { s = ""; }
            var text = (new Label).textField;
            text.x = x;
            text.y = y;
            text.text = s;
            this.addChild(text);
            return text;
        };
        BasicView.prototype.createRect = function (w, h, c, x, y) {
            if (c === void 0) { c = 0; }
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            var sprite = MoonUI.getRect(w, h, c, x, y);
            this.addChild(sprite);
            return sprite;
        };
        BasicView.prototype.createRectBySprite = function (s, w, h, c, x, y) {
            if (c === void 0) { c = 0; }
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            s.graphics.clear();
            s.graphics.beginFill(c);
            s.graphics.drawRect(x, y, w, h);
            s.graphics.endFill();
        };
        /**?????????????????? */
        BasicView.prototype.createBackground = function (c, a) {
            if (c === void 0) { c = 0; }
            if (a === void 0) { a = 1; }
            var s = this.createRect(this.stageW, this.stageH, c);
            s.alpha = a;
            s.touchEnabled = true; //??????????????????????????????
            return s;
        };
        /**????????????????????? */
        BasicView.prototype.createBgGradientFill = function (c1, c2) {
            if (c1 === void 0) { c1 = 0X017AC3; }
            if (c2 === void 0) { c2 = 0XDDDDDD; }
            var w = this.stageW;
            var h = this.stageH;
            var matrix = new egret.Matrix();
            matrix.createGradientBox(w, h, Math.PI / 2);
            var sprite = new Sprite;
            sprite.graphics.beginGradientFill(egret.GradientType.LINEAR, [c1, c2], [1, 1], [0, 255], matrix);
            sprite.graphics.drawRect(0, 0, w, h);
            this.addChild(sprite);
            return sprite;
        };
        return BasicView;
    }(MoonContainer));
    moon.BasicView = BasicView;
    __reflect(BasicView.prototype, "moon.BasicView");
    var GameView = (function (_super) {
        __extends(GameView, _super);
        function GameView() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        GameView.prototype.play = function () {
            this.stop();
            this.isPlay = true;
            egret.startTick(this.loop, this);
        };
        GameView.prototype.stop = function () {
            this.isPlay = false;
            egret.stopTick(this.loop, this);
        };
        GameView.prototype.loop = function (n) {
            traceSimple(n);
            return true;
        };
        GameView.prototype.createButton = function (name, x, y) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            var btn = new BasicButton;
            btn.label = name;
            btn.x = x;
            btn.y = y;
            this.addChild(btn);
            return btn;
        };
        return GameView;
    }(BasicView));
    moon.GameView = GameView;
    __reflect(GameView.prototype, "moon.GameView");
    /**?????????*/
    var Scale9Image = (function (_super) {
        __extends(Scale9Image, _super);
        function Scale9Image(name, rect) {
            if (rect === void 0) { rect = null; }
            var _this = _super.call(this) || this;
            if (RES.hasRes(name)) {
                _this.texture = RES.getRes(name);
                _this.scale9Grid = rect || new Rectangle(8, 8, 2, 2);
            }
            else {
                egret.error("??????????????????" + name);
            }
            return _this;
        }
        return Scale9Image;
    }(Bitmap));
    moon.Scale9Image = Scale9Image;
    __reflect(Scale9Image.prototype, "moon.Scale9Image");
    var BasicTips = (function (_super) {
        __extends(BasicTips, _super);
        function BasicTips(skinName) {
            var _this = _super.call(this) || this;
            _this.side = 14; //????????????????????????
            _this.lineSpacing = 4; //?????????
            _this.image = new Scale9Image(skinName);
            _this.addChild(_this.image);
            _this.text = (new Label).textField;
            _this.text.textAlign = egret.HorizontalAlign.CENTER;
            _this.text.verticalAlign = egret.VerticalAlign.MIDDLE;
            _this.text.lineSpacing = _this.lineSpacing;
            _this.addChild(_this.text);
            return _this;
        }
        /**??????????????????*/
        BasicTips.prototype.setValue = function (value) {
            this.text.text = value;
            this.setCenter();
        };
        /**??????????????? {text:"string",style:{"size":50,"textColor":0}}*/
        BasicTips.prototype.setTextFlow = function (textFlow) {
            this.text.textFlow = textFlow;
            this.setCenter();
        };
        BasicTips.prototype.setCenter = function () {
            var image = this.image;
            var text = this.text;
            var side = this.side;
            var w = text.width + side;
            var h = text.height + side;
            image.width = w;
            image.height = h;
            text.x = text.y = side >> 1;
        };
        return BasicTips;
    }(MoonContainer));
    moon.BasicTips = BasicTips;
    __reflect(BasicTips.prototype, "moon.BasicTips");
    var Label = (function (_super) {
        __extends(Label, _super);
        function Label(str, c) {
            if (str === void 0) { str = ""; }
            if (c === void 0) { c = 0XFFFFFF; }
            var _this = _super.call(this) || this;
            _this.text = new TextField;
            _this.text.textAlign = egret.HorizontalAlign.LEFT;
            _this.text.verticalAlign = egret.VerticalAlign.MIDDLE;
            _this.text.text = str;
            _this.text.textColor = c;
            _this.text.fontFamily = moon.FONT.fontName;
            _this.addChild(_this.text);
            return _this;
        }
        Object.defineProperty(Label.prototype, "textField", {
            get: function () {
                return this.text;
            },
            enumerable: true,
            configurable: true
        });
        return Label;
    }(MoonContainer));
    moon.Label = Label;
    __reflect(Label.prototype, "moon.Label");
    var BasicButton = (function (_super) {
        __extends(BasicButton, _super);
        function BasicButton(normal, down) {
            if (normal === void 0) { normal = null; }
            if (down === void 0) { down = null; }
            var _this = _super.call(this) || this;
            /**????????????????????????????????? */
            _this.skinAutoScale = true;
            _this.statusNormal = normal || Skin.buttonNormal;
            _this.statusDown = down || Skin.buttonDown;
            _this.skinContainer = new DisplayObjectContainer;
            _this.addChild(_this.skinContainer);
            _this.updateSkin(_this.statusNormal);
            _this.text = (new Label).textField;
            _this.addChild(_this.text);
            _this.open();
            return _this;
        }
        BasicButton.prototype.open = function () {
            this.close();
            this.touchEnabled = true;
            this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouch, this);
        };
        BasicButton.prototype.close = function () {
            this.touchEnabled = false;
            this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouch, this);
            if (this.stage)
                this.stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouch, this);
        };
        BasicButton.prototype.setLabelPoint = function (x, y) {
            this.text.anchorOffsetX = 0;
            this.text.anchorOffsetY = 0;
            this.text.x = x;
            this.text.y = y;
        };
        Object.defineProperty(BasicButton.prototype, "labelColor", {
            set: function (value) {
                this.text.textColor = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicButton.prototype, "label", {
            get: function () {
                return this.text.text;
            },
            set: function (value) {
                this.text.text = value;
                var width = this.text.width + 20;
                this.setSkinSize();
                this.setTextPosition();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicButton.prototype, "textFild", {
            get: function () {
                return this.text;
            },
            enumerable: true,
            configurable: true
        });
        BasicButton.prototype.setSkinNormal = function () {
            this.updateSkin(this.statusNormal);
        };
        BasicButton.prototype.setSkinDown = function () {
            this.updateSkin(this.statusDown);
        };
        BasicButton.prototype.onTouch = function (e) {
            if (e.type == egret.TouchEvent.TOUCH_BEGIN) {
                this.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouch, this);
                this.updateSkin(this.statusDown);
            }
            else {
                this.stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouch, this);
                this.updateSkin(this.statusNormal);
            }
            this.dispEvent(MoonEvent.CLICK);
        };
        Object.defineProperty(BasicButton.prototype, "textWidth", {
            get: function () {
                return this.text.width + 20;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicButton.prototype, "textHeight", {
            get: function () {
                return this.text.height + 20;
            },
            enumerable: true,
            configurable: true
        });
        BasicButton.prototype.setSkinSize = function () {
            if (this.skinAutoScale && this.text.text != "") {
                var scale = this.textWidth / this.statusNormal.width;
                if (this.statusNormal instanceof Bitmap) {
                    this.statusNormal.width = this.textWidth;
                    this.statusDown.width = this.textWidth;
                }
                else {
                    this.statusNormal.scaleX = this.statusDown.scaleX = scale;
                }
                var height = this.textHeight;
                if (height >= this.statusNormal.height) {
                    scale = height / this.statusNormal.height;
                    if (this.statusNormal instanceof Bitmap) {
                        this.statusNormal.height = this.textHeight;
                        this.statusDown.height = this.textHeight;
                    }
                    else {
                        this.statusNormal.scaleY = this.statusDown.scaleY = scale;
                    }
                }
            }
        };
        BasicButton.prototype.setTextPosition = function () {
            this.text.anchorOffsetX = this.text.width >> 1;
            this.text.anchorOffsetY = this.text.height >> 1;
            if (this.textWidth > this.statusNormal.width)
                this.text.x = this.textWidth >> 1;
            else
                this.text.x = this.statusNormal.width >> 1;
            if (this.textHeight > this.statusNormal.height)
                this.text.y = this.textHeight >> 1;
            else
                this.text.y = this.statusNormal.height >> 1;
        };
        BasicButton.prototype.updateSkin = function (skin) {
            this.skinContainer.removeChildren();
            this.skinContainer.addChild(skin);
        };
        BasicButton.prototype.dispose = function () {
            this.close();
            _super.prototype.dispose.call(this);
        };
        return BasicButton;
    }(MoonContainer));
    moon.BasicButton = BasicButton;
    __reflect(BasicButton.prototype, "moon.BasicButton", ["moon.IOnoff"]);
    /**????????????????????????,?????????????????????????????????2???????????????2?????????
     * ?????????????????????????????????ToggleSwitch???
    */
    var MoreSkinButton = (function (_super) {
        __extends(MoreSkinButton, _super);
        function MoreSkinButton(skins) {
            var _this = _super.call(this, skins[0], skins[1]) || this;
            _this._currentPage = 0;
            _this.skins = skins;
            return _this;
        }
        /**?????????????????????????????????????????? */
        MoreSkinButton.prototype.updatePage = function (value) {
            this.currentPage = value;
            this.setSkinNormal();
        };
        Object.defineProperty(MoreSkinButton.prototype, "currentPage", {
            get: function () {
                return this._currentPage;
            },
            set: function (value) {
                value = value * 2 == this.skins.length ? 0 : value;
                this._currentPage = value;
                this.statusNormal = this.skins[value * 2];
                this.statusDown = this.skins[(value * 2) + 1];
                this.setSkinSize();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MoreSkinButton.prototype, "toggleSwitch", {
            set: function (value) {
                this._toggleSwitch = value;
            },
            enumerable: true,
            configurable: true
        });
        MoreSkinButton.prototype.onTouch = function (e) {
            if (e.type == egret.TouchEvent.TOUCH_END) {
                if (this._toggleSwitch) {
                    this.currentPage = 1 - this.currentPage;
                }
            }
            _super.prototype.onTouch.call(this, e);
        };
        return MoreSkinButton;
    }(BasicButton));
    moon.MoreSkinButton = MoreSkinButton;
    __reflect(MoreSkinButton.prototype, "moon.MoreSkinButton");
    /**??????????????????*/
    var BasicBar = (function (_super) {
        __extends(BasicBar, _super);
        function BasicBar() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.items = [];
            _this.index = 0;
            return _this;
        }
        BasicBar.prototype.addItem = function (item) {
            this.items.push(item);
        };
        BasicBar.prototype.removeItem = function (item) {
            var index = this.items.indexOf(item);
            if (index >= 0)
                this.items.splice(index, 1);
        };
        BasicBar.prototype.hasItem = function (index) {
            return this.items.length > 0 && (index >= 0 && index < this.items.length);
        };
        BasicBar.prototype.getItem = function (index) {
            return this.items[index];
        };
        BasicBar.prototype.getNextItem = function () {
            return this.items[this.index++];
        };
        BasicBar.prototype.reset = function () {
            this.index = 0;
        };
        BasicBar.prototype.update = function () {
        };
        /**??????*/
        BasicBar.prototype.dispose = function () {
            this.reset();
            while (this.hasItem(this.index)) {
                var item = this.getItem(this.index);
                this.removeItem(item);
                if (item instanceof MoonContainer) {
                    item.removeFromParent(true);
                }
            }
        };
        return BasicBar;
    }(BasicView));
    moon.BasicBar = BasicBar;
    __reflect(BasicBar.prototype, "moon.BasicBar", ["moon.IItem"]);
    /***????????? */
    var ProgressBar = (function (_super) {
        __extends(ProgressBar, _super);
        function ProgressBar(bg, value) {
            if (bg === void 0) { bg = null; }
            if (value === void 0) { value = null; }
            var _this = _super.call(this) || this;
            _this._value = 0;
            _this.setSkin(bg, value);
            _this.addChild(_this.skinBg);
            _this.addChild(_this.skinValue);
            _this.text = (new Label).textField;
            _this.addChild(_this.text);
            return _this;
        }
        ProgressBar.prototype.setSkin = function (bg, value) {
            if (bg === void 0) { bg = null; }
            if (value === void 0) { value = null; }
            this.skinBg = bg || Skin.progressBackground;
            this.skinValue = value || Skin.progressValue;
        };
        Object.defineProperty(ProgressBar.prototype, "value", {
            get: function () {
                return this._value;
            },
            /**????????????0???1?????? */
            set: function (v) {
                v = v < 0 ? 0 : v > 1 ? 1 : v;
                this._value = v;
                this.skinValue.scaleX = v;
            },
            enumerable: true,
            configurable: true
        });
        ProgressBar.prototype.showText = function (v, x, y) {
            if (x === void 0) { x = -1; }
            if (y === void 0) { y = -1; }
            this.text.text = v;
            if (x == -1)
                this.text.x = (this.skinBg.width - this.text.width) >> 1;
            else
                this.text.x = x;
            if (y == -1)
                this.text.y = this.skinBg.height + 5;
            else
                this.text.y = y;
        };
        return ProgressBar;
    }(MoonContainer));
    moon.ProgressBar = ProgressBar;
    __reflect(ProgressBar.prototype, "moon.ProgressBar");
    /***????????? */
    var SliderBar = (function (_super) {
        __extends(SliderBar, _super);
        function SliderBar(bg, value, bar) {
            if (bg === void 0) { bg = null; }
            if (value === void 0) { value = null; }
            if (bar === void 0) { bar = null; }
            var _this = _super.call(this, bg, value) || this;
            _this.skinBar = bar || Skin.sliderBar;
            _this.addChild(_this.skinBar);
            _this.skinBar.addEventListener(egret.TouchEvent.TOUCH_BEGIN, _this.onTouch, _this);
            _this.skinBar.touchEnabled = true;
            _this.layout();
            _this.value = 1;
            return _this;
        }
        SliderBar.prototype.setSkin = function (bg, value) {
            if (bg === void 0) { bg = null; }
            if (value === void 0) { value = null; }
            this.skinBg = bg || Skin.sliderBackground;
            this.skinValue = value || Skin.sliderValue;
        };
        SliderBar.prototype.onTouch = function (e) {
            switch (e.type) {
                case egret.TouchEvent.TOUCH_BEGIN:
                    this.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouch, this);
                    this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouch, this);
                    this.dispEvent(MoonEvent.START);
                    break;
                case egret.TouchEvent.TOUCH_MOVE:
                    this.moveDo(e.stageX, e.stageY);
                    this.dispEvent(MoonEvent.MOVE);
                    break;
                case egret.TouchEvent.TOUCH_END:
                    this.stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouch, this);
                    this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouch, this);
                    this.dispEvent(MoonEvent.OVER);
                    break;
            }
        };
        SliderBar.prototype.moveDo = function (x, y) {
            var p = this.globalToLocal(x, y);
            var v;
            if (this.type == Const.HORIZONTAL)
                v = p.x / this.skinValue.width;
            else
                v = -p.y / this.skinValue.width;
            this.value = v;
        };
        Object.defineProperty(SliderBar.prototype, "value", {
            get: function () {
                return this._value;
            },
            /**????????????0???1?????? */
            set: function (v) {
                v = v < 0 ? 0 : v > 1 ? 1 : v;
                this._value = v;
                this.skinValue.scaleX = v;
                if (this.type == Const.HORIZONTAL)
                    this.skinBar.x = this.skinValue.width * v;
                else
                    this.skinBar.y = -this.skinValue.width * v;
            },
            enumerable: true,
            configurable: true
        });
        /**??????????????????????????????????????? */
        SliderBar.prototype.layout = function (type, interval) {
            if (type === void 0) { type = Const.HORIZONTAL; }
            if (interval === void 0) { interval = 0; }
            this.type = type;
            if (type == Const.VERTICAL) {
                var angle = -90;
                this.skinBar.x = this.skinValue.height >> 1;
            }
            else {
                var angle = 0;
                this.skinBar.y = this.skinValue.height >> 1;
            }
            this.skinBg.rotation = angle;
            this.skinValue.rotation = angle;
        };
        return SliderBar;
    }(ProgressBar));
    moon.SliderBar = SliderBar;
    __reflect(SliderBar.prototype, "moon.SliderBar", ["moon.ILayout"]);
    /***????????? */
    var ScrollBar = (function (_super) {
        __extends(ScrollBar, _super);
        function ScrollBar(bar) {
            if (bar === void 0) { bar = null; }
            var _this = _super.call(this) || this;
            _this.skinBar = bar || Skin.scrollBar;
            _this.skinBar.alpha = 0;
            _this.addChild(_this.skinBar);
            _this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, _this.onTouch, _this);
            _this.touchEnabled = true;
            _this.startPos = new Point;
            _this.stPos = new Point;
            _this.setSize();
            _this.layout();
            return _this;
        }
        ScrollBar.prototype.onTouch = function (e) {
            switch (e.type) {
                case egret.TouchEvent.TOUCH_BEGIN:
                    this.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouch, this);
                    this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouch, this);
                    this.stPos.x = e.stageX;
                    this.stPos.y = e.stageY;
                    this.startPos.x = e.stageX - this._target.x;
                    this.startPos.y = e.stageY - this._target.y;
                    this.hideShow(1);
                    this.startTime = egret.getTimer();
                    break;
                case egret.TouchEvent.TOUCH_MOVE:
                    this.moveDo(e.stageX, e.stageY);
                    break;
                case egret.TouchEvent.TOUCH_END:
                    this.stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouch, this);
                    this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouch, this);
                    this.hideShow(0, 100);
                    this.timeMove(e.stageX, e.stageY);
                    break;
            }
        };
        //????????????
        ScrollBar.prototype.timeMove = function (x, y) {
            var time = egret.getTimer() - this.startTime;
            if (time < 500) {
                var target = this._target;
                var maskRect = this.maskRect;
                Tween.removeTweens(target);
                var dx = x - this.stPos.x;
                var dy = y - this.stPos.y;
                var distance = Math.sqrt(dx * dx + dy * dy);
                var value = (distance / time) * 100;
                var tw = Tween.get(target);
                if (this.type == Const.VERTICAL) {
                    var sign = dy > 0 ? 1 : -1;
                    value *= sign;
                    var h = target.y + value;
                    if (h > 0 && target.y + value > 0)
                        h = 0;
                    if (h < 0 && target.y + value < (maskRect.height - target.height))
                        h = maskRect.height - target.height;
                    tw.to({ y: h }, 400, Ease.sineOut).call(this.setBarPos, this);
                }
                else {
                    var sign = dx > 0 ? 1 : -1;
                    value *= sign;
                    var w = target.x + value;
                    if (w > 0 && target.x + value > 0)
                        w = 0;
                    if (w < 0 && target.x + value < (maskRect.width - target.width))
                        w = maskRect.width - target.width;
                    tw.to({ x: w }, 400, Ease.sineOut).call(this.setBarPos, this);
                }
            }
        };
        ScrollBar.prototype.setBarPos = function () {
            if (this.type == Const.VERTICAL)
                this.skinBar.y = -this._target.y / (this._target.height - this.maskRect.height) * (this.maskRect.height - this.skinBar.height);
            else
                this.skinBar.x = -this._target.x / (this._target.width - this.maskRect.width) * (this.maskRect.width - this.skinBar.width);
        };
        ScrollBar.prototype.hideShow = function (alpha, time) {
            if (time === void 0) { time = 1000; }
            Tween.removeTweens(this.skinBar);
            if (alpha == 1) {
                this.skinBar.alpha = 1;
            }
            var tw = Tween.get(this.skinBar);
            tw.to({ alpha: alpha }, time);
        };
        ScrollBar.prototype.moveDo = function (x, y) {
            if (this.type == Const.VERTICAL) {
                this.canMoveY(y);
            }
            else if (this.type == Const.HORIZONTAL) {
                this.canMoveX(x);
            }
        };
        ScrollBar.prototype.canMoveX = function (x) {
            var dis = this.maskRect.width - this._target.width;
            var xx = x - this.startPos.x;
            if (xx > dis && xx < 0) {
                this._target.x = xx;
                this.skinBar.x = -xx / (this._target.width - this.maskRect.width) * (this.maskRect.width - this.skinBar.width);
            }
        };
        ScrollBar.prototype.canMoveY = function (y) {
            var dis = this.maskRect.height - this._target.height;
            var yy = y - this.startPos.y;
            if (yy > dis && yy < 0) {
                this._target.y = yy;
                this.skinBar.y = -yy / (this._target.height - this.maskRect.height) * (this.maskRect.height - this.skinBar.height);
            }
        };
        ScrollBar.prototype.setMask = function () {
            if (this.maskRect != null && this._target != null) {
                this._target.mask = this.maskRect;
            }
        };
        ScrollBar.prototype.setSkinBarPos = function () {
            this.skinBar.x = this.skinBar.y = 0;
            if (this.type == Const.VERTICAL) {
                this.skinBar.x = this.maskRect.width - this.skinBar.width;
            }
            else if (this.type == Const.HORIZONTAL) {
                this.skinBar.y = this.maskRect.height - this.skinBar.height;
            }
        };
        ScrollBar.prototype.layout = function (type, interval) {
            if (type === void 0) { type = Const.VERTICAL; }
            if (interval === void 0) { interval = 0; }
            this.type = type;
            this.setSkinBarPos();
        };
        ScrollBar.prototype.setSize = function (w, h) {
            if (w === void 0) { w = 200; }
            if (h === void 0) { h = 200; }
            this.maskRect = MoonUI.getRect(w, h);
            this.addChild(this.maskRect);
            this.setMask();
            this.setSkinBarPos();
        };
        Object.defineProperty(ScrollBar.prototype, "target", {
            set: function (value) {
                this._target = value;
                this.addChildAt(this._target, 0);
                this.setMask();
            },
            enumerable: true,
            configurable: true
        });
        return ScrollBar;
    }(MoonContainer));
    moon.ScrollBar = ScrollBar;
    __reflect(ScrollBar.prototype, "moon.ScrollBar", ["moon.ILayout"]);
    /**??????????????? */
    var CheckBoxBar = (function (_super) {
        __extends(CheckBoxBar, _super);
        function CheckBoxBar() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        CheckBoxBar.prototype.addItemLabel = function (label, item) {
            if (item === void 0) { item = null; }
            if (item == null)
                item = Skin.getCheckBox(label);
            else
                item.label = label;
            this.addItem(item);
        };
        CheckBoxBar.prototype.addItem = function (item) {
            _super.prototype.addItem.call(this, item);
            item.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
            this.addChild(item);
        };
        CheckBoxBar.prototype.removeItem = function (item) {
            _super.prototype.removeItem.call(this, item);
            item.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
            item.removeFromParent(true);
        };
        CheckBoxBar.prototype.onClick = function (e) {
            var item = e.currentTarget;
            this.dispEvent(moon.MoonEvent.CHANGE);
        };
        /**?????? type?????????????????????interval?????????????????????*/
        CheckBoxBar.prototype.layout = function (type, interval) {
            if (type === void 0) { type = Const.VERTICAL; }
            if (interval === void 0) { interval = 10; }
            for (var i = 0; i < this.items.length; i++) {
                var item = this.items[i];
                if (type == Const.VERTICAL)
                    item.y = (item.height + interval) * i;
                else
                    item.x = (item.width + interval) * i;
            }
        };
        Object.defineProperty(CheckBoxBar.prototype, "selectIndexs", {
            get: function () {
                var nums = [];
                for (var i = 0; i < this.items.length; i++) {
                    var btn = this.items[i];
                    if (btn.currentPage == 1)
                        nums.push(i);
                }
                return nums;
            },
            enumerable: true,
            configurable: true
        });
        return CheckBoxBar;
    }(BasicBar));
    moon.CheckBoxBar = CheckBoxBar;
    __reflect(CheckBoxBar.prototype, "moon.CheckBoxBar", ["moon.ILayout"]);
    /**??????????????? */
    var TabbarBar = (function (_super) {
        __extends(TabbarBar, _super);
        function TabbarBar() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._selectIndex = 0;
            return _this;
        }
        TabbarBar.prototype.onClick = function (e) {
            var curr = e.currentTarget;
            this.selectItem(curr);
        };
        TabbarBar.prototype.selectItem = function (curr) {
            this.reset();
            while (this.hasItem(this.index)) {
                var item = this.getNextItem();
                item.currentPage = 0;
                item.setSkinNormal();
                item.open();
            }
            curr.close();
            curr.currentPage = 1;
            curr.setSkinNormal();
            this._selectIndex = this.items.indexOf(curr);
            this.dispEvent(moon.MoonEvent.CHANGE, this._selectIndex);
        };
        Object.defineProperty(TabbarBar.prototype, "selectIndex", {
            get: function () { return this._selectIndex; },
            set: function (value) { this._selectIndex = value, this.selectItem(this.getItem(value)); },
            enumerable: true,
            configurable: true
        });
        return TabbarBar;
    }(CheckBoxBar));
    moon.TabbarBar = TabbarBar;
    __reflect(TabbarBar.prototype, "moon.TabbarBar");
    /**??????????????? */
    var RadioButtonBar = (function (_super) {
        __extends(RadioButtonBar, _super);
        function RadioButtonBar() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.isAutoLayout = false;
            return _this;
        }
        RadioButtonBar.prototype.addItemLabel = function (label, item) {
            if (item === void 0) { item = null; }
            if (item == null)
                item = Skin.getRodatioButton(label);
            else
                item.label = label;
            this.addItem(item);
        };
        RadioButtonBar.prototype.render = function () {
            this.update();
        };
        RadioButtonBar.prototype.update = function () {
            var item;
            if (this.isAutoLayout == true) {
                for (var i = 0; i < this.items.length; i++) {
                    item = this.items[i];
                    item.x = (item.width + 10) * i;
                }
            }
        };
        RadioButtonBar.prototype.onClick = function (e) {
            var item = e.currentTarget;
            this.selectIndex = this.items.indexOf(item);
            this.dispEvent(moon.MoonEvent.CHANGE);
        };
        Object.defineProperty(RadioButtonBar.prototype, "selectIndex", {
            get: function () {
                return this._selectIndex;
            },
            set: function (index) {
                this._selectIndex = index;
                var item = this.items[index];
                this.items.map(setSkinNormal, this);
                function setSkinNormal(i) {
                    i.setSkinNormal();
                }
                item.setSkinDown();
            },
            enumerable: true,
            configurable: true
        });
        return RadioButtonBar;
    }(CheckBoxBar));
    moon.RadioButtonBar = RadioButtonBar;
    __reflect(RadioButtonBar.prototype, "moon.RadioButtonBar");
    /**??????????????? ????????????*/
    var AlertBar = (function (_super) {
        __extends(AlertBar, _super);
        function AlertBar(title) {
            if (title === void 0) { title = "???????????????"; }
            var _this = _super.call(this) || this;
            _this.bgColor = Color.black;
            _this.text = (new Label).textField;
            _this.text.text = title;
            return _this;
        }
        /**??????????????????????????? */
        AlertBar.prototype.render = function () {
            _super.prototype.render.call(this);
            this.initView();
        };
        AlertBar.prototype.initView = function () {
            var node = this.createBackground(0, 0.3);
            var tw = this.text.width;
            var th = this.text.height;
            var w = tw + 80;
            var h = th + 120;
            var x = (this.stageW - w) >> 1;
            var y = (this.stageH - h) >> 1;
            this.bg = new MoonDisplayObject;
            this.bg.type = Const.SHAPE_RECT_ROUND;
            this.bg.data = { w: w, h: h, c: this.bgColor, ew: 10, eh: 10 };
            this.bg.setBackground(0, 2);
            this.bg.x = x;
            this.bg.y = y;
            this.addChild(this.bg);
            var btn = new BasicButton;
            btn.label = "??? ???";
            this.bg.addChild(btn);
            btn.x = (w - btn.width) >> 1;
            btn.y = this.text.y + th + 40;
            btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
            this.text.x = x + ((w - tw) >> 1);
            this.text.y = y + 20;
            this.addChild(this.text);
        };
        AlertBar.prototype.onClick = function (e) {
            this.removeFromParent(true);
            this.dispEvent(MoonEvent.CLOSE);
        };
        Object.defineProperty(AlertBar.prototype, "color", {
            /**??????????????? */
            set: function (value) {
                this.bgColor = value;
                if (this.bg)
                    this.bg.color = value;
            },
            enumerable: true,
            configurable: true
        });
        ;
        AlertBar.prototype.dispose = function () {
            _super.prototype.dispose.call(this);
            this.bg = null;
            this.bgColor = null;
            this.text = null;
        };
        return AlertBar;
    }(BasicBar));
    moon.AlertBar = AlertBar;
    __reflect(AlertBar.prototype, "moon.AlertBar");
    /**??????????????? ????????????*/
    var AlertAutoBar = (function (_super) {
        __extends(AlertAutoBar, _super);
        function AlertAutoBar(title, closeTime) {
            if (title === void 0) { title = "???????????????"; }
            if (closeTime === void 0) { closeTime = 3; }
            var _this = _super.call(this, title) || this;
            _this.time = closeTime;
            return _this;
        }
        AlertAutoBar.prototype.initView = function () {
            var tw = this.text.width;
            var th = this.text.height;
            var w = tw + 20;
            var h = th + 20;
            var x = (this.stageW - w) >> 1;
            var y = (this.stageH - h) >> 1;
            this.bg = new MoonDisplayObject;
            this.bg.type = Const.SHAPE_RECT_ROUND;
            this.bg.data = { w: w, h: h, c: this.bgColor, ew: 10, eh: 10 };
            this.bg.setBackground(0, 2);
            this.bg.x = x;
            this.bg.y = y;
            this.addChild(this.bg);
            this.text.x = x + ((w - tw) >> 1);
            this.text.y = y + ((h - th) >> 1);
            this.addChild(this.text);
            this.alpha = 0;
            var ty = this.y - 50;
            Tween.get(this).to({ alpha: 1 }, 500).wait(this.time * 1000).to({ alpha: 0, y: ty }, 500).call(this.backCall, this);
        };
        AlertAutoBar.prototype.backCall = function () {
            Tween.removeTweens(this);
            this.removeFromParent(true);
            this.time = null;
            this.dispEvent(MoonEvent.CLOSE);
        };
        return AlertAutoBar;
    }(AlertBar));
    moon.AlertAutoBar = AlertAutoBar;
    __reflect(AlertAutoBar.prototype, "moon.AlertAutoBar");
    /**??????????????? ????????????*/
    var AlertRollBar = (function (_super) {
        __extends(AlertRollBar, _super);
        function AlertRollBar(title, bgWidth) {
            if (title === void 0) { title = "???????????????"; }
            if (bgWidth === void 0) { bgWidth = 200; }
            var _this = _super.call(this, title) || this;
            _this.bgWidth = bgWidth;
            return _this;
        }
        AlertRollBar.prototype.initView = function () {
            var tw = this.text.width;
            var th = this.text.height;
            var w = this.bgWidth;
            var h = th + 20;
            var x = (this.stageW - w) >> 1;
            var y = 100;
            this.bg = new MoonDisplayObject;
            this.bg.type = Const.SHAPE_RECT;
            this.bg.data = { w: w, h: h, c: this.bgColor };
            this.bg.x = x;
            this.bg.y = y;
            this.addChild(this.bg);
            var mask = MoonUI.getRect(w, h, 0, x, y);
            this.bg.mask = mask;
            this.text.x = w;
            this.text.y = 10;
            this.bg.addChild(this.text);
            var time = 2000 + this.text.text.length * 100;
            var tx = -tw;
            Tween.get(this.text).to({ x: tx }, time).call(this.backCall, this);
        };
        AlertRollBar.prototype.backCall = function () {
            Tween.removeTweens(this);
            Tween.removeTweens(this.text);
            this.removeFromParent(true);
            this.bgWidth = null;
            this.dispEvent(MoonEvent.CLOSE);
        };
        return AlertRollBar;
    }(AlertBar));
    moon.AlertRollBar = AlertRollBar;
    __reflect(AlertRollBar.prototype, "moon.AlertRollBar");
    /**????????? */
    var InputBar = (function (_super) {
        __extends(InputBar, _super);
        function InputBar(width, height) {
            if (width === void 0) { width = 100; }
            if (height === void 0) { height = 50; }
            var _this = _super.call(this) || this;
            _this.text = (new Label).textField;
            _this.inputW = width;
            _this.inputH = height;
            return _this;
        }
        /**??????????????????????????? */
        InputBar.prototype.render = function () {
            _super.prototype.render.call(this);
            var w = this.inputW;
            var h = this.inputH;
            this.bg = new MoonDisplayObject;
            this.bg.type = Const.SHAPE_RECT_ROUND;
            this.bg.data = { w: w, h: h, c: this.bgColor, ew: 10, eh: 10 };
            this.bg.setBackground(0, 2);
            this.addChild(this.bg);
            var side = 5;
            this.text.x = side;
            this.text.y = side;
            this.text.width = w - side * 2;
            this.text.height = h - side * 2;
            this.text.type = egret.TextFieldType.INPUT;
            this.addChild(this.text);
        };
        /**??????????????? */
        InputBar.prototype.setMultiline = function () {
            this.text.wordWrap = true;
            this.text.multiline = true;
            this.text.verticalAlign = egret.VerticalAlign.TOP;
        };
        Object.defineProperty(InputBar.prototype, "color", {
            /**??????????????? */
            set: function (value) {
                this.bgColor = value;
                if (this.bg)
                    this.bg.color = value;
            },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(InputBar.prototype, "maxChars", {
            /**?????????????????? */
            set: function (value) { this.text.maxChars = value; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(InputBar.prototype, "restrict", {
            /**??????????????????????????????????????????????????? a-zA-Z0-9??? */
            set: function (value) { this.text.restrict = value; },
            enumerable: true,
            configurable: true
        });
        return InputBar;
    }(BasicBar));
    moon.InputBar = InputBar;
    __reflect(InputBar.prototype, "moon.InputBar");
    /**?????? */
    var PanelBar = (function (_super) {
        __extends(PanelBar, _super);
        function PanelBar(pWidth, pHeight) {
            if (pWidth === void 0) { pWidth = 0; }
            if (pHeight === void 0) { pHeight = 0; }
            var _this = _super.call(this) || this;
            _this.titleHeight = 60;
            _this.pWidth = pWidth;
            _this.pHeight = pWidth;
            _this.titleBg = new Sprite;
            _this.containerBg = new Sprite;
            _this.title = (new Label).textField;
            _this.container = new MoonContainer;
            return _this;
        }
        /**??????????????????????????? */
        PanelBar.prototype.render = function () {
            if (this.pWidth == 0 && this.pWidth == 0) {
                _super.prototype.render.call(this);
            }
            else {
                this.stageW = this.pWidth;
                this.stageH = this.pHeight;
            }
            this.createRectBySprite(this.titleBg, this.stageW, this.titleHeight, moon.Color.titleBackground);
            this.createRectBySprite(this.containerBg, this.stageW, this.stageH - this.titleHeight, moon.Color.white, 0, this.titleHeight);
            this.addChild(this.titleBg);
            this.addChild(this.containerBg);
            this.title.anchorOffsetX = this.title.textWidth >> 1;
            this.title.anchorOffsetY = this.title.textHeight >> 1;
            this.title.x = this.stageW >> 1;
            this.title.y = this.titleHeight >> 1;
            this.addChild(this.title);
            this.container.y = this.titleHeight;
            this.addChild(this.container);
            this.containerMask = this.createRect(this.stageW, this.stageH - this.titleHeight, moon.Color.white, 0, this.titleHeight);
            this.container.mask = this.containerMask;
            this.touchEnabled = true; //?????????????????????????????????
            this.dispEvent(MoonEvent.RENDER_COMPLETE);
        };
        PanelBar.prototype.addItem = function (item, x, y) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            _super.prototype.addItem.call(this, item);
            if (x != 0)
                item.x = x;
            if (y != 0)
                item.y = y;
            this.container.addChild(item);
        };
        PanelBar.prototype.removeItem = function (item) {
            _super.prototype.removeItem.call(this, item);
            if (this.container.contains(item))
                this.container.removeChild(item);
        };
        Object.defineProperty(PanelBar.prototype, "label", {
            get: function () {
                return this.title.text;
            },
            set: function (value) {
                this.title.text = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PanelBar.prototype, "colorTop", {
            set: function (c) {
                var w = this.titleBg.width, h = this.titleBg.height;
                this.createRectBySprite(this.titleBg, w, h, c);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PanelBar.prototype, "colorBottom", {
            set: function (c) {
                var w = this.containerBg.width, h = this.containerBg.height;
                this.createRectBySprite(this.containerBg, w, h, c, 0, this.titleHeight);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PanelBar.prototype, "windowRect", {
            get: function () {
                var rect = new Rectangle(0, 0, this.stageW, this.stageH);
                return rect;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PanelBar.prototype, "topHeight", {
            get: function () {
                return this.titleHeight;
            },
            enumerable: true,
            configurable: true
        });
        PanelBar.prototype.removeAll = function () {
            this.container.dispose();
        };
        return PanelBar;
    }(BasicBar));
    moon.PanelBar = PanelBar;
    __reflect(PanelBar.prototype, "moon.PanelBar");
    /**?????????????????? */
    var PanelMoreManager = (function (_super) {
        __extends(PanelMoreManager, _super);
        function PanelMoreManager() {
            var _this = _super.call(this) || this;
            _this.radioButton = new RadioButtonBar;
            _this.currentPage = 0;
            _this.posStartX = 0;
            _this.moveItems = [];
            _this.container = new MoonContainer;
            _this.addChild(_this.container);
            _this.radioButton.isAutoLayout = true;
            return _this;
        }
        PanelMoreManager.prototype.open = function () {
            this.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouch, this);
        };
        PanelMoreManager.prototype.close = function () {
            this.stage.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouch, this);
        };
        PanelMoreManager.prototype.update = function () {
            this.container.removeChildren();
            var itemW;
            var itemH;
            if (this.items.length > 0) {
                var item = this.items[0];
                this.container.addChild(item);
                itemW = item.windowRect.width;
                itemH = item.windowRect.height;
                this.panelWidth = itemW;
            }
            var len = this.items.length;
            for (var i = 0; i < len; i++) {
                var btn = new BasicButton(moon.Skin.pointNormal, moon.Skin.pointDown);
                this.radioButton.addItem(btn);
            }
            btn = this.radioButton.getItem(0);
            btn.setSkinDown();
            this.radioButton.x = (itemW - len * 22) >> 1;
            this.radioButton.y = itemH - 20;
            this.addChild(this.radioButton);
        };
        PanelMoreManager.prototype.render = function () {
            this.update();
            if (this.items.length > 1) {
                this.open();
            }
        };
        PanelMoreManager.prototype.onTouch = function (e) {
            switch (e.type) {
                case egret.TouchEvent.TOUCH_BEGIN:
                    this.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouch, this);
                    this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouch, this);
                    this.posStartX = e.stageX;
                    this.dispEvent(MoonEvent.START);
                    break;
                case egret.TouchEvent.TOUCH_MOVE:
                    this.moveDo(e.stageX);
                    break;
                case egret.TouchEvent.TOUCH_END:
                    this.stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouch, this);
                    this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouch, this);
                    this.moveEnd(e.stageX);
                    break;
            }
        };
        PanelMoreManager.prototype.moveDo = function (x) {
            var disx = x - this.posStartX;
            if (Math.abs(disx) > 20) {
                if (this.moveItems.length == 0) {
                    var item = this.items[this.currentPage];
                    var width = this.panelWidth;
                    this.moveItems.push(item);
                    if (this.currentPage == 0) {
                        item = this.items[this.currentPage + 1];
                        this.container.addChild(item);
                        item.x = width;
                        this.moveItems.push(item);
                    }
                    else if (this.currentPage == this.items.length - 1) {
                        item = this.items[this.currentPage - 1];
                        this.container.addChild(item);
                        item.x = -width;
                        this.moveItems.push(item);
                    }
                    else {
                        item = this.items[this.currentPage - 1];
                        this.container.addChild(item);
                        item.x = -width;
                        this.moveItems.push(item);
                        item = this.items[this.currentPage + 1];
                        this.container.addChild(item);
                        item.x = width;
                        this.moveItems.push(item);
                    }
                }
                var boo1 = (this.currentPage == 0 && disx > 0);
                var boo2 = ((this.currentPage == this.items.length - 1) && disx < 0);
                if (!boo1 && !boo2) {
                    this.container.x = disx;
                }
            }
        };
        PanelMoreManager.prototype.moveEnd = function (x) {
            if (this.container.x == 0) {
                this.backCall(0);
                return;
            }
            var disx = x - this.posStartX;
            var tw = egret.Tween.get(this.container);
            var currX = this.panelWidth;
            var turnDis = this.panelWidth >> 2;
            //??????????????????????????????????????????????????????
            if (Math.abs(disx) > turnDis) {
                currX = this.panelWidth;
                currX *= disx > 0 ? 1 : -1;
            }
            else {
                disx = 0;
                currX = 0;
            }
            var time = 200;
            tw.to({ x: currX }, time);
            tw.call(this.backCall, this, [disx]);
        };
        /**?????????????????????????????? */
        PanelMoreManager.prototype.backCall = function (disx) {
            if (disx > 0) {
                this.currentPage--;
                this.currentPage = this.currentPage < 0 ? 0 : this.currentPage;
            }
            else if (disx < 0) {
                this.currentPage++;
                this.currentPage = this.currentPage == this.items.length ? this.items.length - 1 : this.currentPage;
            }
            this.container.removeChildren();
            var item = this.items[this.currentPage];
            item.x = 0;
            this.container.addChild(item);
            this.radioButton.selectIndex = this.currentPage;
            this.moveItems.length = 0;
            this.container.x = 0;
            this.dispEvent(MoonEvent.OVER);
        };
        /**??????*/
        PanelMoreManager.prototype.dispose = function () {
            _super.prototype.dispose.call(this);
            this.close();
        };
        return PanelMoreManager;
    }(BasicBar));
    moon.PanelMoreManager = PanelMoreManager;
    __reflect(PanelMoreManager.prototype, "moon.PanelMoreManager", ["moon.IOnoff"]);
    var GameData = (function () {
        function GameData() {
        }
        /**??????????????? */
        GameData.stageW = 640;
        /**??????????????? */
        GameData.stageH = 1136;
        /**??????*/
        GameData.FPS = 60;
        /**????????????????????????????????? */
        GameData.version = Const.VER_DEBUG;
        /**???????????????????????????????????????????????????????????? */
        GameData.isMobile = egret.Capabilities.isMobile;
        /**?????????ID */
        GameData.gameId = 1;
        /**???????????? */
        GameData.score = 0;
        /**?????????????????? */
        GameData.scoreHighest = 0;
        return GameData;
    }());
    moon.GameData = GameData;
    __reflect(GameData.prototype, "moon.GameData");
    /**?????????????????? */
    var GameLoad = (function (_super) {
        __extends(GameLoad, _super);
        function GameLoad() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.color = 0XF9AB03;
            return _this;
        }
        GameLoad.prototype.render = function () {
            _super.prototype.render.call(this);
            this.createBgGradientFill();
            var container = new Sprite;
            this.addChild(container);
            var sw = this.stageW;
            var sh = this.stageH;
            var w = 80;
            var loadbg = MoonUI.getRoundRect(sw - 100, w, 0XFCE59D, 10, 10);
            loadbg.x = (sw - loadbg.width) >> 1;
            loadbg.y = (sh - loadbg.height) >> 1;
            container.addChild(loadbg);
            //--------
            var progress = MoonUI.getRect(sw - 120, w - 10, this.color);
            progress.x = (sw - progress.width) >> 1;
            progress.y = (sh - progress.height) >> 1;
            container.addChild(progress);
            this.proWidth = progress.width;
            var mask = MoonUI.getRoundRect(sw - 120, w - 10, 0, 10, 10);
            mask.x = (sw - mask.width) >> 1;
            mask.y = (sh - mask.height) >> 1;
            progress.mask = mask;
            this.progress = progress;
            //--------
            var txtbg = new MoonDisplayObject();
            txtbg.type = moon.Const.SHAPE_CIRCLE;
            txtbg.data = { r: w / 2, c: 0XE18E0D };
            txtbg.setBackground(0XFFFFFF, 5);
            this.addChild(txtbg);
            txtbg.x = loadbg.x + loadbg.width - w / 2;
            txtbg.y = loadbg.y + w / 2;
            this.txtLoadPos = new Point(txtbg.x, txtbg.y);
            var txtExp = this.createText(0, 0, "");
            txtExp.size = 40;
            txtExp.textColor = 0xB07300;
            this.txtLoad = txtExp;
            //--------
            var txtTip = this.createText(0, 0, "????????????");
            txtTip.size = 40;
            txtTip.x = (sw - txtTip.width) >> 1;
            txtTip.y = loadbg.y - txtTip.height * 2;
            var txtName = this.createText(0, 0, "");
            txtName.size = 40;
            this.txtName = txtName;
            this.updateName("????????????");
            //--------
            this.createAirFan();
            this.airFan.x = txtbg.x;
            this.airFan.y = txtbg.y;
            this.createLogo();
            this.update(0);
            this.play();
        };
        GameLoad.prototype.loop = function (n) {
            this.airFan.rotation += 3;
            return true;
        };
        GameLoad.prototype.createAirFan = function () {
            this.airFan = new Sprite;
            this.addChild(this.airFan);
            for (var i = 0; i < 4; i++) {
                var shape = new Sprite();
                this.airFan.addChild(shape);
                shape.graphics.lineStyle(0);
                shape.graphics.beginFill(0xFFFFFF);
                shape.graphics.cubicCurveTo(-29, -28, 29, -28, 0, 0);
                shape.graphics.endFill();
                shape.rotation = i * 90;
            }
        };
        GameLoad.prototype.createLogo = function () {
            var sw = this.stageW;
            var sh = this.stageH;
            var logo = new MoonDisplayObject();
            logo.type = moon.Const.SHAPE_CIRCLE;
            logo.data = { r: 50, c: 0XE18E0D };
            logo.setBackground(0XFFFFFF, 2);
            logo.x = sw >> 1;
            logo.y = logo.height;
            this.addChild(logo);
            var txtName = this.createText(0, 0, "ZL");
            txtName.size = 40;
            txtName.x = logo.x - (txtName.width >> 1);
            txtName.y = logo.y - (txtName.height >> 1) - 15;
            txtName = this.createText(0, 0, "game");
            txtName.size = 30;
            txtName.x = logo.x - (txtName.width >> 1);
            txtName.y = logo.y - (txtName.height >> 1) + 15;
            this.addChild(moon.MoonUI.getHeart(15, 0XFFFFFF));
            txtName = this.createText(0, 0, "????????????");
            txtName.size = 40;
            txtName.textColor = 0XE09F21;
            txtName.x = sw - txtName.width - 10;
            txtName.y = sh - txtName.height - 10;
        };
        /**????????????????????? */
        GameLoad.prototype.createBgGradientFill = function (c1, c2) {
            if (c1 === void 0) { c1 = 0XFDD559; }
            if (c2 === void 0) { c2 = 0XE09F21; }
            var w = this.stageW;
            var h = this.stageH;
            var matrix = new egret.Matrix();
            matrix.createGradientBox(w * 2, h * 2, Math.PI / 2);
            var sprite = new Sprite;
            sprite.graphics.beginGradientFill(egret.GradientType.RADIAL, [c1, c2], [1, 1], [0, 255], matrix);
            sprite.graphics.drawRect(0, 0, w, h);
            this.addChild(sprite);
            return sprite;
        };
        GameLoad.prototype.updateName = function (name) {
            this.txtName.text = name;
            this.txtName.x = (this.stageW - this.txtName.width) >> 1;
            this.txtName.y = this.stageH / 2 + this.txtName.height * 2;
        };
        GameLoad.prototype.update = function (value) {
            if (value > 1)
                return;
            if (value > 0.99)
                this.stop();
            this.progress.scaleX = value;
            var txtExp = this.txtLoad;
            var pos = this.txtLoadPos;
            txtExp.text = Math.ceil(value * 100) + "%";
            txtExp.x = (this.stageW - txtExp.width) >> 1;
            txtExp.y = pos.y - txtExp.height / 2;
            var exp = MoonUI.getCircle(5 + Math.random() * 5, this.color, pos.x, pos.y);
            exp.y = 10 - Math.random() * 20;
            this.addChildAt(exp, 2);
            Tween.get(exp).to({ x: -this.proWidth, alpha: 0 }, 1000);
        };
        return GameLoad;
    }(moon.GameView));
    moon.GameLoad = GameLoad;
    __reflect(GameLoad.prototype, "moon.GameLoad");
})(moon || (moon = {}));
