/**
	 * @author vinson
	 * 创建时间：2017-12-18 上午9:36:42
	 * P2物理世界的模拟类
	 */
class P2Simulation extends egret.DisplayObjectContainer {
    private world: p2.World;
    loopBackFun: any;
    removeBodys: any[] = [];//需要删除的刚体
    public constructor(x: number = 0, y: number = 0) {
        super();
        this.world = new p2.World({ gravity: [x, y] });
        this.addEventListener(egret.Event.ENTER_FRAME, this.updateWorld, this);
    }
    public get p2World(): p2.World {
        return this.world;
    }
    private getBody(mass: number = 0, type: number = p2.Body.DYNAMIC): p2.Body {
        var body = new p2.Body({ mass: mass });
        body.type = type;
        body.userData = {};
        return body;
    }
    /**创建四面墙刚体*/
    public createWall(rect: egret.Rectangle): p2.Body[] {
        var bodys: p2.Body[] = []
        bodys.push(this.createPlane(0, 0, 0));//上
        bodys.push(this.createPlane(-Math.PI / 2, 0, 0));//左
        bodys.push(this.createPlane(Math.PI, 0, rect.height));//下
        bodys.push(this.createPlane(Math.PI / 2, rect.width, 0));//右
        return bodys;
    }
    /**创建平面刚体*/
    public createPlane(angle: number = Math.PI, x: number, y: number): p2.Body {
        var shape = new p2.Plane();
        var body = this.getBody(0, p2.Body.STATIC)
        body.addShape(shape);
        body.angle = angle;
        body.position[0] = x;
        body.position[1] = y;
        this.world.addBody(body);
        return body;
    }

    /**创建圆形刚体与圆形形状 */
    public createCircleBodyShape(radius: number, type: number = p2.Body.DYNAMIC): p2.Body {
        var body = this.getBody(10, type);
        var shape: p2.Shape = new p2.Circle({ radius: radius });
        body.addShape(shape);
        this.world.addBody(body);
        return body;
    }
    /***
     * 创建方形刚体与形状
     * angle=rotation*Math.PI/180
     */
    public createBoxBodyShape(width: number, height: number, type: number = p2.Body.DYNAMIC, angle: number = 0): p2.Body {
        var body = this.getBody(10, type);
        var shape: p2.Shape = new p2.Box({ width: width, height: height });
        body.addShape(shape);
        body.angle = angle;
        this.world.addBody(body);
        return body;
    }
    /**创建多边形刚体与形状(值得注意的是锚点要在中间，这样就不能从[0,0]开始) */
    public createConvexBodyShape(points: any[], type: number = p2.Body.DYNAMIC): p2.Body {
        var body: p2.Body = this.getBody(10, type);
        body.fromPolygon(points, { optimalDecomp: false });
        this.world.addBody(body);
        return body;
    }
    /**创建正多边形,side边数，radius为半径*/
    public createPolygon(side: number = 3, radius: number = 30, type: number = p2.Body.DYNAMIC): p2.Body {
        var body: p2.Body = this.getBody(10, type);
        var points: any[] = [];
        for (var i: number = 0; i < side; i++) {
            var x: number = Math.cos((i * (360 / side) * Math.PI / 180)) * radius;
            var y: number = Math.sin((i * (360 / side) * Math.PI / 180)) * radius;
            points.push([x, y]);
        }
        return this.createConvexBodyShape(points, type)
    }
    /**创建圆与方的组合体 */
    public createBoxCircleBodyShape(width: number, height: number, type: number = p2.Body.DYNAMIC): p2.Body {
        var body = this.getBody(10, type);
        body.fixedRotation = true;
        width /= 2;
        height /= 1.5;
        var shape: p2.Shape = new p2.Box({ width: width, height: height })
        var shape2: p2.Shape = new p2.Circle({ radius: width / 2 });
        body.addShape(shape);
        body.addShape(shape2);
        shape.position[1] = -height;
        shape2.position[1] = -width / 2;
        this.world.addBody(body);
        return body;
    }

    /**更新世界*/
    private updateWorld(e: egret.Event): void {
        var timeStep = 1 / 60;
        var removeBodys: any[] = this.removeBodys;
        this.world.step(timeStep);
        var bodys = this.world.bodies;
        var l: number = bodys.length;
        for (var i: number = 0; i < l; i++) {
            var body: p2.Body = bodys[i];
            if (body.displays) {
                var skin: egret.DisplayObject = body.displays[0];
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
    }
}