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
/**
     * @author vinson
     * 创建时间：2017-12-18 上午9:36:42
     * P2物理世界的模拟类
     */
var P2Simulation = (function (_super) {
    __extends(P2Simulation, _super);
    function P2Simulation(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        var _this = _super.call(this) || this;
        _this.removeBodys = []; //需要删除的刚体
        _this.world = new p2.World({ gravity: [x, y] });
        _this.addEventListener(egret.Event.ENTER_FRAME, _this.updateWorld, _this);
        return _this;
    }
    Object.defineProperty(P2Simulation.prototype, "p2World", {
        get: function () {
            return this.world;
        },
        enumerable: true,
        configurable: true
    });
    P2Simulation.prototype.getBody = function (mass, type) {
        if (mass === void 0) { mass = 0; }
        if (type === void 0) { type = p2.Body.DYNAMIC; }
        var body = new p2.Body({ mass: mass });
        body.type = type;
        body.userData = {};
        return body;
    };
    /**创建四面墙刚体*/
    P2Simulation.prototype.createWall = function (rect) {
        var bodys = [];
        bodys.push(this.createPlane(0, 0, 0)); //上
        bodys.push(this.createPlane(-Math.PI / 2, 0, 0)); //左
        bodys.push(this.createPlane(Math.PI, 0, rect.height)); //下
        bodys.push(this.createPlane(Math.PI / 2, rect.width, 0)); //右
        return bodys;
    };
    /**创建平面刚体*/
    P2Simulation.prototype.createPlane = function (angle, x, y) {
        if (angle === void 0) { angle = Math.PI; }
        var shape = new p2.Plane();
        var body = this.getBody(0, p2.Body.STATIC);
        body.addShape(shape);
        body.angle = angle;
        body.position[0] = x;
        body.position[1] = y;
        this.world.addBody(body);
        return body;
    };
    /**创建圆形刚体与圆形形状 */
    P2Simulation.prototype.createCircleBodyShape = function (radius, type) {
        if (type === void 0) { type = p2.Body.DYNAMIC; }
        var body = this.getBody(10, type);
        var shape = new p2.Circle({ radius: radius });
        body.addShape(shape);
        this.world.addBody(body);
        return body;
    };
    /***
     * 创建方形刚体与形状
     * angle=rotation*Math.PI/180
     */
    P2Simulation.prototype.createBoxBodyShape = function (width, height, type, angle) {
        if (type === void 0) { type = p2.Body.DYNAMIC; }
        if (angle === void 0) { angle = 0; }
        var body = this.getBody(10, type);
        var shape = new p2.Box({ width: width, height: height });
        body.addShape(shape);
        body.angle = angle;
        this.world.addBody(body);
        return body;
    };
    /**创建多边形刚体与形状(值得注意的是锚点要在中间，这样就不能从[0,0]开始) */
    P2Simulation.prototype.createConvexBodyShape = function (points, type) {
        if (type === void 0) { type = p2.Body.DYNAMIC; }
        var body = this.getBody(10, type);
        body.fromPolygon(points, { optimalDecomp: false });
        this.world.addBody(body);
        return body;
    };
    /**创建正多边形,side边数，radius为半径*/
    P2Simulation.prototype.createPolygon = function (side, radius, type) {
        if (side === void 0) { side = 3; }
        if (radius === void 0) { radius = 30; }
        if (type === void 0) { type = p2.Body.DYNAMIC; }
        var body = this.getBody(10, type);
        var points = [];
        for (var i = 0; i < side; i++) {
            var x = Math.cos((i * (360 / side) * Math.PI / 180)) * radius;
            var y = Math.sin((i * (360 / side) * Math.PI / 180)) * radius;
            points.push([x, y]);
        }
        return this.createConvexBodyShape(points, type);
    };
    /**创建圆与方的组合体 */
    P2Simulation.prototype.createBoxCircleBodyShape = function (width, height, type) {
        if (type === void 0) { type = p2.Body.DYNAMIC; }
        var body = this.getBody(10, type);
        body.fixedRotation = true;
        width /= 2;
        height /= 1.5;
        var shape = new p2.Box({ width: width, height: height });
        var shape2 = new p2.Circle({ radius: width / 2 });
        body.addShape(shape);
        body.addShape(shape2);
        shape.position[1] = -height;
        shape2.position[1] = -width / 2;
        this.world.addBody(body);
        return body;
    };
    /**更新世界*/
    P2Simulation.prototype.updateWorld = function (e) {
        var timeStep = 1 / 60;
        var removeBodys = this.removeBodys;
        this.world.step(timeStep);
        var bodys = this.world.bodies;
        var l = bodys.length;
        for (var i = 0; i < l; i++) {
            var body = bodys[i];
            if (body.displays) {
                var skin = body.displays[0];
                skin.x = body.position[0];
                skin.y = body.position[1];
                skin.rotation = body.angle * 180 / Math.PI;
            }
        }
        for (i = 0; i < removeBodys.length; i++) {
            body = removeBodys[i];
            body.userData = null;
            this.world.removeBody(body);
        }
        if (this.loopBackFun != null) {
            this.loopBackFun();
        }
    };
    return P2Simulation;
}(egret.DisplayObjectContainer));
__reflect(P2Simulation.prototype, "P2Simulation");
