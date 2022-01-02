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
var MButton = (function (_super) {
    __extends(MButton, _super);
    function MButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MButton;
}(moon.BasicButton));
__reflect(MButton.prototype, "MButton");
;
var MImage = (function (_super) {
    __extends(MImage, _super);
    function MImage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MImage;
}(moon.Image));
__reflect(MImage.prototype, "MImage");
;
var ImageAnimation = (function (_super) {
    __extends(ImageAnimation, _super);
    function ImageAnimation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ImageAnimation;
}(moon.ImageAnimation));
__reflect(ImageAnimation.prototype, "ImageAnimation");
;
var Layout = (function (_super) {
    __extends(Layout, _super);
    function Layout() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Layout;
}(moon.ImageLayout));
__reflect(Layout.prototype, "Layout");
;
var Scale9Image = (function (_super) {
    __extends(Scale9Image, _super);
    function Scale9Image() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Scale9Image;
}(moon.Scale9Image));
__reflect(Scale9Image.prototype, "Scale9Image");
;
var MoonEvent = (function (_super) {
    __extends(MoonEvent, _super);
    function MoonEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MoonEvent;
}(moon.MoonEvent));
__reflect(MoonEvent.prototype, "MoonEvent");
;
var GameData = (function (_super) {
    __extends(GameData, _super);
    function GameData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return GameData;
}(moon.GameData));
__reflect(GameData.prototype, "GameData");
;
var Const = (function (_super) {
    __extends(Const, _super);
    function Const() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Const;
}(moon.Const));
__reflect(Const.prototype, "Const");
;
var moon;
(function (moon) {
    /**游戏开始界面 */
    var BasicGameStart = (function (_super) {
        __extends(BasicGameStart, _super);
        function BasicGameStart() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**加载到舞台之后调用 */
        BasicGameStart.prototype.render = function () {
            _super.prototype.render.call(this);
            this.initView();
        };
        BasicGameStart.prototype.initView = function () {
            var bg = this.createBackground();
            bg.alpha = 0.5;
            this.createBtn("开始游戏");
            this.createTitle("游戏标题");
        };
        BasicGameStart.prototype.createBtn = function (value) {
            var btn = this.createButton(value);
            btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
            btn.x = (this.stageW - btn.width) >> 1;
            btn.y = (this.stageH - btn.height) >> 1;
            return btn;
        };
        BasicGameStart.prototype.createTitle = function (value) {
            var title = this.createText(0, 0, value);
            title.x = (this.stageW - title.width) / 2;
            title.y = (this.stageH - title.height) / 2 - 100;
            return title;
        };
        BasicGameStart.prototype.onClick = function (e) {
            this.dispEvent(moon.MoonEvent.START);
            Tween.get(this).to({ alpha: 0 }, 300).call(this.backCall, this);
        };
        BasicGameStart.prototype.backCall = function (e) {
            this.removeFromParent();
        };
        BasicGameStart.prototype.createImageBg = function (name) {
            this.addChild(new MImage(name));
        };
        return BasicGameStart;
    }(moon.GameView));
    moon.BasicGameStart = BasicGameStart;
    __reflect(BasicGameStart.prototype, "moon.BasicGameStart");
    var RankItem = (function (_super) {
        __extends(RankItem, _super);
        function RankItem(w, rank) {
            var _this = _super.call(this) || this;
            _this.colors = [0, 0XDD823B, 0XD2A85E, 0XDFD164];
            _this.w = w;
            _this.rank = rank + 1;
            _this.initView();
            return _this;
        }
        RankItem.prototype.initView = function () {
            var bg = this.createRect(this.w, 80, 0);
            bg.alpha = this.rank % 2 == 0 ? 0.6 : 0.1;
            this.addChild(bg);
            this.txtRank = this.createText(150, 0);
            this.txtScore = this.createText(350, 0);
            if (this.rank <= 3) {
                this.txtRank.textColor = this.txtScore.textColor = this.colors[this.rank];
            }
            this.txtRank.text = String(this.rank);
            //this.txtScore.text=String(10000-this.rank);
            this.txtScore.text = String(0);
            Layout.getIns().setCenterYByPanent(this.txtRank);
            Layout.getIns().setCenterYByPanent(this.txtScore);
        };
        return RankItem;
    }(moon.BasicView));
    moon.RankItem = RankItem;
    __reflect(RankItem.prototype, "moon.RankItem");
    /**游戏数据存储*/
    var BasicGameStorage = (function () {
        function BasicGameStorage() {
        }
        /**只能内部访问,在外部修改gameId */
        BasicGameStorage.getGameIdKey = function (key) { return moon.GameData.gameId + key; };
        /**本地 数据写入*/
        BasicGameStorage.localWrite = function (key, value) {
            egret.localStorage.setItem(this.getGameIdKey(key), value);
        };
        /**本地 数据读取*/
        BasicGameStorage.localRead = function (key) {
            return egret.localStorage.getItem(this.getGameIdKey(key));
        };
        /**本地 数据删除*/
        BasicGameStorage.localRemove = function (key) {
            egret.localStorage.removeItem(this.getGameIdKey(key));
        };
        /**本地 数据清空*/
        BasicGameStorage.localClear = function () {
            egret.localStorage.clear();
        };
        /**服务器 数据写入*/
        BasicGameStorage.serverWrite = function () { };
        /**服务器 数据读取*/
        BasicGameStorage.serverRead = function () { return ""; };
        /**服务器 数据删除*/
        BasicGameStorage.serverRemove = function () { };
        return BasicGameStorage;
    }());
    moon.BasicGameStorage = BasicGameStorage;
    __reflect(BasicGameStorage.prototype, "moon.BasicGameStorage");
    /**初始化游戏*/
    var GameMoon = (function () {
        function GameMoon() {
        }
        GameMoon.init = function (stage) {
            //移动端与PC端使用不同模式
            egret.Capabilities.isMobile ? stage.scaleMode = egret.StageScaleMode.FIXED_WIDTH : stage.scaleMode = egret.StageScaleMode.SHOW_ALL;
            //保存好舞台数据 请使用 render()方法中的 this.stageWidth;
            //GameData.stageWidth=stage.stageWidth;
            //GameData.stageHeight=stage.stageHeight;
            moon.GameData.stage = stage;
            //初始化部分功能
            moon.LogManager.getInstane().init(stage);
            moon.AlertManager.getInstance().init(stage);
        };
        return GameMoon;
    }());
    moon.GameMoon = GameMoon;
    __reflect(GameMoon.prototype, "moon.GameMoon");
})(moon || (moon = {}));
