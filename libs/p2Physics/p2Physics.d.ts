


/**
 * Copyright (c) 2014,Egret-Labs.org
 * All rights reserved.
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *     * Neither the name of the Egret-Labs.org nor the
 *       names of its contributors may be used to endorse or promote products
 *       derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
    
declare module p2 {

    export class AABB {
        upperBound: number[];
        lowerBound: number[];
        constructor(options?: {
            upperBound?: number[];
            lowerBound?: number[];
        });

        setFromPoints(points: number[][], position: number[], angle: number, skinSize: number): void;
        copy(aabb: AABB): void;
        extend(aabb: AABB): void;
        overlaps(aabb: AABB): boolean;

    }

    export class Broadphase {

        static AABB: number;
        static BOUNDING_CIRCLE: number;

        static NAIVE: number;
        static SAP: number;

        static boundingRadiusCheck(bodyA: Body, bodyB: Body): boolean;
        static aabbCheck(bodyA: Body, bodyB: Body): boolean;
        static canCollide(bodyA: Body, bodyB: Body): boolean;

        constructor(type: number);

        type: number;
        result: Body[];
        world: World;
        boundingVolumeType: number;

        setWorld(world: World): void;
        getCollisionPairs(world: World): Body[];
        boundingVolumeCheck(bodyA: Body, bodyB: Body): boolean;

    }

    export class GridBroadphase extends Broadphase {

        constructor(options?: {
            xmin?: number;
            xmax?: number;
            ymin?: number;
            ymax?: number;
            nx?: number;
            ny?: number;
        });

        xmin: number;
        xmax: number;
        ymin: number;
        ymax: number;
        nx: number;
        ny: number;
        binsizeX: number;
        binsizeY: number;

    }

    export class NativeBroadphase extends Broadphase {

    }

    export class Narrowphase {

        contactEquations: ContactEquation[];
        frictionEquations: FrictionEquation[];
        enableFriction: boolean;
        slipForce: number;
        frictionCoefficient: number;
        surfaceVelocity: number;
        reuseObjects: boolean;
        resuableContactEquations: any[];
        reusableFrictionEquations: any[];
        restitution: number;
        stiffness: number;
        relaxation: number;
        frictionStiffness: number;
        frictionRelaxation: number;
        enableFrictionReduction: boolean;
        contactSkinSize: number;

        collidedLastStep(bodyA: Body, bodyB: Body): boolean;
        reset(): void;
        createContactEquation(bodyA: Body, bodyB: Body, shapeA: Shape, shapeB: Shape): ContactEquation;
        createFrictionFromContact(c: ContactEquation): FrictionEquation;

    }

    export class SAPBroadphase extends Broadphase {

        axisList: Body[];
        axisIndex: number;

    }

    export class Constraint {

        static DISTANCE: number;
        static GEAR: number;
        static LOCK: number;
        static PRISMATIC: number;
        static REVOLUTE: number;

        constructor(bodyA: Body, bodyB: Body, type: number, options?: {
            collideConnected?: boolean;
            wakeUpBodies?: boolean;
        });

        type: number;
        equeations: Equation[];
        bodyA: Body;
        bodyB: Body;
        collideConnected: boolean;

        update(): void;
        setStiffness(stiffness: number): void;
        setRelaxation(relaxation: number): void;

    }

    export class DistanceConstraint extends Constraint {

        constructor(bodyA: Body, bodyB: Body, options?: {
            collideConnected?: boolean;
            wakeUpBodies?: boolean;
            distance?: number;
            localAnchorA?: number[];
            localAnchorB?: number[];
            maxForce?: number;
        });

        localAnchorA: number[];
        localAnchorB: number[];
        distance: number;
        maxForce: number;
        upperLimitEnabled: boolean;
        upperLimit: number;
        lowerLimitEnabled: boolean;
        lowerLimit: number;
        position: number;

        setMaxForce(f: number): void;
        getMaxForce(): number;

    }

    export class GearConstraint extends Constraint {

        constructor(bodyA: Body, bodyB: Body, options?: {
            collideConnected?: boolean;
            wakeUpBodies?: boolean;
            angle?: number;
            ratio?: number;
            maxTorque?: number;
        });

        ratio: number;
        angle: number;

        setMaxTorque(torque: number): void;
        getMaxTorque(): number;

    }

    export class LockConstraint extends Constraint {

        constructor(bodyA: Body, bodyB: Body, options?: {
            collideConnected?: boolean;
            wakeUpBodies?: boolean;
            localOffsetB?: number[];
            localAngleB?: number;
            maxForce?: number;
        });
        localOffsetB: number[];
        localAngleB: number;

        setMaxForce(force: number): void;
        getMaxForce(): number;

    }

    export class PrismaticConstraint extends Constraint {

        constructor(bodyA: Body, bodyB: Body, options?: {
            collideConnected?: boolean;
            wakeUpBodies?: boolean;
            maxForce?: number;
            localAnchorA?: number[];
            localAnchorB?: number[];
            localAxisA?: number[];
            disableRotationalLock?: boolean;
            upperLimit?: number;
            lowerLimit?: number;
        });

        localAnchorA: number[];
        localAnchorB: number[];
        localAxisA: number[];
        position: number;
        velocity: number;
        lowerLimitEnabled: boolean;
        upperLimitEnabled: boolean;
        lowerLimit: number;
        upperLimit: number;
        upperLimitEquation: ContactEquation;
        lowerLimitEquation: ContactEquation;
        motorEquation: Equation;
        motorEnabled: boolean;
        motorSpeed: number;
        disableRotationalLock: boolean;

        enableMotor(): void;
        disableMotor(): void;
        setLimits(lower: number, upper: number): void;

    }

    export class RevoluteConstraint extends Constraint {

        constructor(bodyA: Body, bodyB: Body, options?: {
            collideConnected?: boolean;
            wakeUpBodies?: boolean;
            worldPivot?: number[];
            localPivotA?: number[];
            localPivotB?: number[];
            maxForce?: number;
        });

        pivotA: number[];
        pivotB: number[];
        motorEquation: RotationalVelocityEquation;
        motorEnabled: boolean;
        angle: number;
        lowerLimitEnabled: boolean;
        upperLimitEnabled: boolean;
        lowerLimit: number;
        upperLimit: number;
        upperLimitEquation: ContactEquation;
        lowerLimitEquation: ContactEquation;

        enableMotor(): void;
        disableMotor(): void;
        motorIsEnabled(): boolean;
        setLimits(lower: number, upper: number): void;
        setMotorSpeed(speed: number): void;
        getMotorSpeed(): number;

    }

    export class AngleLockEquation extends Equation {

        constructor(bodyA: Body, bodyB: Body, options?: {
            angle?: number;
            ratio?: number;
        });

        computeGq(): number;
        setRatio(ratio: number): number;
        setMaxTorque(torque: number): number;

    }

    export class ContactEquation extends Equation {

        constructor(bodyA: Body, bodyB: Body);

        contactPointA: number[];
        penetrationVec: number[];
        contactPointB: number[];
        normalA: number[];
        restitution: number;
        firstImpact: boolean;
        shapeA: Shape;
        shapeB: Shape;

        computeB(a: number, b: number, h: number): number;

    }

    export class Equation {

        static DEFAULT_STIFFNESS: number;
        static DEFAULT_RELAXATION: number;

        constructor(bodyA: Body, bodyB: Body, minForce?: number, maxForce?: number);

        minForce: number;
        maxForce: number;
        bodyA: Body;
        bodyB: Body;
        stiffness: number;
        relaxation: number;
        G: number[];
        offset: number;
        a: number;
        b: number;
        epsilon: number;
        timeStep: number;
        needsUpdate: boolean;
        multiplier: number;
        relativeVelocity: number;
        enabled: boolean;

        gmult(G: number[], vi: number[], wi: number[], vj: number[], wj: number[]): number;
        computeB(a: number, b: number, h: number): number;
        computeGq(): number;
        computeGW(): number;
        computeGWlambda(): number;
        computeGiMf(): number;
        computeGiMGt(): number;
        addToWlambda(deltalambda: number): number;
        computeInvC(eps: number): number;
        update():void;

    }

    export class FrictionEquation extends Equation {

        constructor(bodyA: Body, bodyB: Body, slipForce: number);

        contactPointA: number[];
        contactPointB: number[];
        t: number[];
        shapeA: Shape;
        shapeB: Shape;
        frictionCoefficient: number;

        setSlipForce(slipForce: number): number;
        getSlipForce(): number;
        computeB(a: number, b: number, h: number): number;

    }

    export class RotationalLockEquation extends Equation {

        constructor(bodyA: Body, bodyB: Body, options?: {
            angle?: number;
        });

        angle: number;

        computeGq(): number;

    }

    export class RotationalVelocityEquation extends Equation {

        constructor(bodyA: Body, bodyB: Body);

        computeB(a: number, b: number, h: number): number;

    }

    export class EventEmitter {

        on(type: string, listener: Function): EventEmitter;
        has(type: string, listener: Function): boolean;
        off(type: string, listener: Function): EventEmitter;
        emit(event: any): EventEmitter;

    }
    /* remove by ladeng6666
    export class ContactMaterialOptions {

        friction: number;
        restitution: number;
        stiffness: number;
        relaxation: number;
        frictionStiffness: number;
        frictionRelaxation: number;
        surfaceVelocity: number;

    }*/

    export class ContactMaterial {

        static idCounter: number;

        constructor(materialA: Material, materialB: Material, options?: {
            friction?: number;
            restitution?: number;
            stiffness?: number;
            relaxation?: number;
            frictionStiffness?: number;
            frictionRelaxation?: number;
            surfaceVelocity?: number
            }
         );
        friction: number;
        restitution: number;
        stiffness: number;
        relaxation: number;
        frictionStiffness: number;
        frictionRelaxation: number;
        surfaceVelocity: number

    }

    export class Material {

        static idCounter: number;

        constructor(id?: number);

        id: number;

    }

    export class vec2 {

        static crossLength(a: number[], b: number[]): number;
        static crossVZ(out: number[], vec: number[], zcomp: number): number;
        static crossZV(out: number[], zcomp: number, vec: number[]): number;
        static rotate(out: number[], a: number[], angle: number): void;
        static rotate90cw(out: number[], a: number[]): number;
        static centroid(out: number[], a: number[], b: number[], c: number[]): number[];
        static create(): number[];
        static clone(a: number[]): number[];
        static fromValues(x: number, y: number): number[];
        static copy(out: number[], a: number[]): number[];
        static set(out: number[], x: number, y: number): number[];
        static toLocalFrame(out: number[], worldPoint: number[], framePosition: number[], frameAngle: number): void;
        static toGlobalFrame(out: number[], localPoint: number[], framePosition: number[], frameAngle: number): void;
        static add(out: number[], a: number[], b: number[]): number[];
        static subtract(out: number[], a: number[], b: number[]): number[];
        static sub(out: number[], a: number[], b: number[]): number[];
        static multiply(out: number[], a: number[], b: number[]): number[];
        static mul(out: number[], a: number[], b: number[]): number[];
        static divide(out: number[], a: number[], b: number[]): number[];
        static div(out: number[], a: number[], b: number[]): number[];
        static scale(out: number[], a: number[], b: number): number[];
        static distance(a: number[], b: number[]): number;
        static dist(a: number[], b: number[]): number;
        static squaredDistance(a: number[], b: number[]): number;
        static sqrDist(a: number[], b: number[]): number;
        static length(a: number[]): number;
        static len(a: number[]): number;
        static squaredLength(a: number[]): number;
        static sqrLen(a: number[]): number;
        static negate(out: number[], a: number[]): number[];
        static normalize(out: number[], a: number[]): number[];
        static dot(a: number[], b: number[]): number;
        static str(a: number[]): string;

    }

//    export class BodyOptions {
//
//        mass: number;
//        position: number[];
//        velocity: number[];
//        angle: number;
//        angularVelocity: number;
//        force: number[];
//        angularForce: number;
//        fixedRotation: number;
//
//    }

    /**
     * ?????????????????????????????????????????????????????????????????????????????????
     *
     * @class Body
     * @constructor
     * @extends EventEmitter
     * @param {Object}              [options]
     * @param {Number}              [options.mass=0]    ????????????0???????????????????????????0??????type????????????????????? Body.STATIC.
     * @param {Array}               [options.position]
     * @param {Array}               [options.velocity]
     * @param {Number}              [options.angle=0]
     * @param {Number}              [options.angularVelocity=0]
     * @param {Array}               [options.force]
     * @param {Number}              [options.angularForce=0]
     * @param {Number}              [options.fixedRotation=false]
     *
     * @example
     *     // ??????????????????
     *     var body = new Body({
     *         mass: 1,
     *         position: [0, 0],
     *         angle: 0,
     *         velocity: [0, 0],
     *         angularVelocity: 0
     *     });
     *
     *     // ????????????????????????????????????
     *     body.addShape(new Circle(1));
     *
     *     // ??????????????? world
     *     world.addBody(body);
     */
    export class Body extends EventEmitter {

        sleepyEvent: {
            type: string;
        };

        sleepEvent: {
            type: string;
        };

        wakeUpEvent: {
            type: string;
        };

        static DYNAMIC: number;
        static STATIC: number;
        static KINEMATIC: number;
        static AWAKE: number;
        static SLEEPY: number;
        static SLEEPING: number;

        constructor(options?: {
            force?:number;
            position?:number[];
            velocity?:number;
            allowSleep?:boolean;
            collisionResponse?:boolean;
            angle?:number;
            angularForce?: number;
            angularVelocity?: number;
            ccdIterations?: number;
            ccdSpeedThreshold?:number;
            fixedRotation?:boolean;
            gravityScale?:number;
            id?:number;
            mass?:number
        });

        /**
         * ??????id
         * @property id
         * @type {Number}
         */
        id: number;
        /**
         * ????????????????????? world??????????????????????????? world ???????????????????????? null
         * @property world
         * @type {World}
         */
        world: World;
        /**
         * ?????????????????????
         *
         * @property shapes
         * @type {Array}
         */
        shapes: Shape[];
        /**
         * ??????????????????????????????????????????
         * @property shapeOffsets
         * @type {Array}
         */
        //shapeOffsets: number[][];
        /**
         * ???????????????????????????
         * @property shapeAngles
         * @type {Array}
         */
        //shapeAngles: number[];
        /**
         * ??????
         * @property mass
         * @type {number}
         */
        mass: number;
        /**
         * ??????
         * @property inertia
         * @type {number}
         */
        inertia: number;
        invInertia: number;
        /**
         * ??????????????????
         * @property fixedRotation
         * @type {Boolean}
         */
        fixedRotation: boolean;
        /**
         * ??????
         * @property position
         * @type {Array}
         */
        position: number[];
        /**
         * ????????????
         * @property interpolatedPosition
         * @type {Array}
         */
        interpolatedPosition: number[];
        /**
         * ????????????
         * @property interpolatedAngle
         * @type {Number}
         */
        interpolatedAngle: number;
        /**
         * ??????
         * @property velocity
         * @type {Array}
         */
        velocity: number[];
        /**
         * ??????
         * @property angle
         * @type {number}
         */
        angle: number;
        /**
         * ???
         * @property force
         * @type {Array}
         */
        force: number[];
        /**
         * ??????
         * @property angularForce
         * @type {number}
         */
        angularForce: number;
        /**
         * ???????????????????????????[0,1]
         * @property damping
         * @type {Number}
         * @default 0.1
         */
        damping: number;
        /**
         * ????????????????????????[0,1]
         * @property angularDamping
         * @type {Number}
         * @default 0.1
         */
        angularDamping: number;
        /**
         * ??????????????? ?????????Body.STATIC???Body.DYNAMIC???Body.KINEMATIC??????
         *
         * * Static ??????????????????????????????????????????
         * * Dynamic ?????????????????????????????????
         * * Kinematic ????????????????????????????????????????????????????????????
         *
         * @property type
         * @type {number}
         *
         * @example
         *     // ????????????STATIC
         *     var body = new Body();
         *     console.log(body.type == Body.STATIC); // true
         *
         * @example
         *     // ?????????????????????0??????????????????DYNAMIC
         *     var dynamicBody = new Body({
     *         mass : 1
     *     });
         *     console.log(dynamicBody.type == Body.DYNAMIC); // true
         *
         * @example
         *     // KINEMATIC????????????????????????????????????????????????
         *     var kinematicBody = new Body({
     *         type: Body.KINEMATIC
     *     });
         */
        type: number;
        /**
         * ???????????????
         * @property boundingRadius
         * @type {Number}
         */
        boundingRadius: number;
        /**
         * ??????
         * @property aabb
         * @type {AABB}
         */
        aabb: AABB;
        /**
         * ??????AABB?????????????????????????????? updateAABB ???????????????
         * @property aabbNeedsUpdate
         * @type {Boolean}
         * @see updateAABB
         *
         * @example
         *     body.aabbNeedsUpdate = true;
         *     body.updateAABB();
         *     console.log(body.aabbNeedsUpdate); // false
         */
        aabbNeedsUpdate: boolean;
        /**
         * ?????????true?????????????????????????????????????????? World ?????????????????????
         * @property allowSleep
         * @type {Boolean}
         * @default true
         */
        allowSleep: boolean;
        wantsToSleep: boolean;
        /**
         * Body.AWAKE???Body.SLEEPY???Body.SLEEPING??????
         *
         * ???????????? Body.AWAKE??????????????????????????? sleepSpeedLimit????????????????????? Body.SLEEPY??????????????? Body.SLEEPY ?????? sleepTimeLimit ???????????????????????? Body.SLEEPY???
         *
         * @property sleepState
         * @type {Number}
         * @default Body.AWAKE
         */
        sleepState: number;
        /**
         * ???????????????????????????sleepState ????????? Body.SLEEPY ??????
         * @property sleepSpeedLimit
         * @type {Number}
         * @default 0.2
         */
        sleepSpeedLimit: number;
        /**
         * ???????????? Body.SLEEPY ?????? sleepTimeLimit ??????sleepState ????????? Body.SLEEPING
         * @property sleepTimeLimit
         * @type {Number}
         * @default 1
         */
        sleepTimeLimit: number;
        /**
         * ???????????????????????????????????????????????????????????????????????????????????????????????????????????????-1???
         * @property {Number} gravityScale
         * @default 1
         */
        gravityScale: number;
        /**
         * ????????????????????????????????????
         */
        displays: any[];
        userData: any;

        updateSolveMassProperties(): void;
        /**
         * ?????????????????????
         * @method setDensity
         */
        setDensity(density: number): void;
        /**
         * ??????????????????????????????
         * @method getArea
         * @return {Number}
         */
        getArea(): number;
        /**
         * ??????AABB
         * @method getAABB
         */
        getAABB(): AABB;
        /**
         * ??????AABB
         * @method updateAABB
         */
        updateAABB(): void;
        /**
         * ???????????????
         * @method updateBoundingRadius
         */
        updateBoundingRadius(): void;
        /**
         * ??????????????????
         *
         * @method addShape
         * @param  {Shape} shape ??????
         * @param  {Array} [offset] ??????
         * @param  {Number} [angle] ??????
         *
         * @example
         *     var body = new Body(),
         *         shape = new Circle();
         *
         *     // ????????????
         *     body.addShape(shape);
         *
         *     // ????????????x???????????????
         *     body.addShape(shape,[1,0]);
         *
         *     // ????????????y???????????????????????????????????????90???
         *     body.addShape(shape,[0,1],Math.PI/2);
         */
        addShape(shape: Shape, offset?: number[], angle?: number): void;
        /**
         * ????????????
         * @method removeShape
         * @param  {Shape}  shape
         * @return {Boolean}
         */
        removeShape(shape: Shape): boolean;
        /**
         * ??????????????????????????????????????????????????????
         *
         * @method updateMassProperties
         *
         * @example
         *     body.mass += 1;
         *     body.updateMassProperties();
         */
        updateMassProperties(): void;
        /**
         * ????????? world ????????????????????????
         * @method applyForce
         * @param {Array} force ???
         * @param {Array} worldPoint world ?????????
         */
        applyForce(force: number[], worldPoint: number[]): void;
        /**
         * Wake the body up. Normally you should not need this, as the body is automatically awoken at events such as collisions.
         * Sets the sleepState to {{#crossLink "Body/AWAKE:property"}}Body.AWAKE{{/crossLink}} and emits the wakeUp event if the body wasn't awake before.
         * @method wakeUp
         */
        wakeUp(): void;
        /**
         * Force body sleep
         * @method sleep
         */
        sleep(): void;
        /**
         * Called every timestep to update internal sleep timer and change sleep state if needed.
         * @method sleepTick
         * @param {number} time The world time in seconds
         * @param {boolean} dontSleep
         * @param {number} dt
         */
        sleepTick(time: number, dontSleep: boolean, dt: number): void;
        getVelocityFromPosition(story: number[], dt: number): number[];
        getAngularVelocityFromPosition(timeStep: number): number;
        /**
         * Check if the body is overlapping another body. Note that this method only works if the body was added to a World and if at least one step was taken.
         * @method overlaps
         * @param  {Body} body
         * @return {boolean}
         */
        overlaps(body: Body): boolean;

        // functions below was added by ladeng6666
        angularVelocity: number;
        toWorldFrame(out: number[], localPoint: number[]): void;
        toLocalFrame(out: number[], worldPoint: number[]): void;
        vectorToLocalFrame(out:number[],worldVector:number[]):void;
        vectorToWorldFrame(out:number[],localVector:number[]):void;
        adjustCenterOfMass(): void;
        fromPolygon(vertices: number[][], options?: any): Body;
        applyDamping(dt: number): void;
        applyImpulse(force: number[], worldPoint: number[]): void;
        collisionResponse: boolean;
        fixedX: boolean;
        fixedY: boolean;
    }

    export class Spring {

        constructor(bodyA: Body, bodyB: Body, options?: {

            stiffness?: number;
            damping?: number;
            localAnchorA?: number[];
            localAnchorB?: number[];
            worldAnchorA?: number[];
            worldAnchorB?: number[];

        });

        stiffness: number;
        damping: number;
        bodyA: Body;
        bodyB: Body;

        applyForce(): void;

    }

    export class LinearSpring extends Spring {

        localAnchorA: number[];
        localAnchorB: number[];
        restLength: number;

        setWorldAnchorA(worldAnchorA: number[]): void;
        setWorldAnchorB(worldAnchorB: number[]): void;
        getWorldAnchorA(result: number[]): number[];
        getWorldAnchorB(result: number[]): number[];
        applyForce(): void;

    }

    export class RotationalSpring extends Spring {

        constructor(bodyA: Body, bodyB: Body, options?: {
            restAngle?: number;
            stiffness?: number;
            damping?: number;
        });

        restAngle: number;

    }

    export class Capsule extends Shape {

        constructor(optoins?: { length?: number; radius?: number });

        length: number;
        radius: number;

    }

    export class Circle extends Shape {

        constructor(options?: { radius: number });

        /**
         * ??????
         * @property radius
         * @type {number}
         */
        radius: number;

    }

    export class Convex extends Shape {

        static triangleArea(a: number[], b: number[], c: number[]): number;

        constructor(options: { vertices: number[][]; axes?: number[][] });

        vertices: number[][];
        axes: number[];
        centerOfMass: number[];
        triangles: number[];
        boundingRadius: number;

        projectOntoLocalAxis(localAxis: number[], result: number[]): void;
        projectOntoWorldAxis(localAxis: number[], shapeOffset: number[], shapeAngle: number, result: number[]): void;

        updateCenterOfMass(): void;

    }

    export class Heightfield extends Shape {

        constructor(options?: {
            heights: number[];
            minValue?: number;
            maxValue?: number;
            elementWidth: number;
        });

        heights: number[];
        maxValue: number;
        minValue: number;
        elementWidth: number;

    }

    export class Shape {

        static idCounter: number;
        static CIRCLE: number;
        static PARTICLE: number;
        static PLANE: number;
        static CONVEX: number;
        static LINE: number;
        static Box: number;
        static CAPSULE: number;
        static HEIGHTFIELD: number;

        constructor(options?: {
            position?: number[];
            angle?: number;
            collisionGroup?: number;
            collisionMask?: number;
            sensor?: boolean;
            collisionResponse?: boolean;
            type?: number;
        });

        type: number;
        id: number;
        boundingRadius: number;
        collisionGroup: number;
        collisionMask: number;
        material: Material;
        area: number;
        sensor: boolean;
        //vertices: number[][]; //2015-05-12 ladeng6666
        angle: number;
        position: number[];
        computeMomentOfInertia(mass: number): number;
        updateBoundingRadius(): number;
        updateArea(): void;
        computeAABB(out: AABB, position: number[], angle: number): void;

    }

    export class Line extends Shape {

        constructor(option?: { length?: number });

        length: number;

    }

    export class Particle extends Shape {

    }

    export class Plane extends Shape {

    }

    export class Box extends Shape {

        constructor(options: { width?: number; height?: number});

        width: number;
        height: number;
    }

    export class Solver extends EventEmitter {

        static GS: number;
        static ISLAND: number;

        constructor(options?: {}, type?: number);

        type: number;
        equations: Equation[];
        equationSortFunction: Equation; //Equation | boolean

        solve(dy: number, world: World): void;
        solveIsland(dy: number, island: Island): void;
        sortEquations(): void;
        addEquation(eq: Equation): void;
        addEquations(eqs: Equation[]): void;
        removeEquation(eq: Equation): void;
        removeAllEquations(): void;
        tolerance: number;
        frictionIterations: number;
    }

    export class GSSolver extends Solver {

        constructor(options?: {
            iterations?: number;
            tolerance?: number;
        });

        iterations: number;
        tolerance: number;
        useZeroRHS: boolean;
        frictionIterations: number;
        usedIterations: number;

        solve(h: number, world: World): void;

    }

    export class OverlapKeeper {

        constructor(bodyA: Body, shapeA: Shape, bodyB: Body, shapeB: Shape);

        shapeA: Shape;
        shapeB: Shape;
        bodyA: Body;
        bodyB: Body;

        tick(): void;
        setOverlapping(bodyA: Body, shapeA: Shape, bodyB: Body, shapeB: Body): void;
        bodiesAreOverlapping(bodyA: Body, bodyB: Body): boolean;
        set(bodyA: Body, shapeA: Shape, bodyB: Body, shapeB: Shape): void;

    }

    export class TupleDictionary {

        data: number[];
        keys: number[];

        getKey(id1: number, id2: number): string;
        getByKey(key: number): number;
        get(i: number, j: number): number;
        set(i: number, j: number, value: number): number;
        reset(): void;
        copy(dict: TupleDictionary): void;

    }

    export class Utils {

        static appendArray<T>(a: Array<T>, b: Array<T>): Array<T>;
        static splice<T>(array: Array<T>, index: number, howMany: number): void;
        static extend(a: any, b: any): void;
        static defaults(options: any, defaults: any): any;

    }

    export class Island {

        equations: Equation[];
        bodies: Body[];

        reset(): void;
        getBodies(result: any): Body[];
        wantsToSleep(): boolean;
        sleep(): boolean;

    }

    export class IslandManager extends Solver {

        static getUnvisitedNode(nodes: Node[]): IslandNode; // IslandNode | boolean

        equations: Equation[];
        islands: Island[];
        nodes: IslandNode[];

        visit(node: IslandNode, bds: Body[], eqs: Equation[]): void;
        bfs(root: IslandNode, bds: Body[], eqs: Equation[]): void;
        split(world: World): Island[];

    }

    export class IslandNode {

        constructor(body: Body);

        body: Body;
        neighbors: IslandNode[];
        equations: Equation[];
        visited: boolean;

        reset(): void;

    }

    /**
     * world?????????????????????
     *
     * @class World
     * @constructor
     * @param {Object}          [options]
     * @param {Solver}          [options.solver]            ????????? GSSolver.
     * @param {Array}           [options.gravity]           ????????? [0,-9.78]
     * @param {Broadphase}      [options.broadphase]        ????????? NaiveBroadphase
     * @param {Boolean}         [options.islandSplit=false]
     * @param {Boolean}         [options.doProfiling=false]
     * @extends EventEmitter
     *
     * @example
     *     var world = new World({
     *         gravity: [0, -9.81],
     *         broadphase: new SAPBroadphase()
     *     });
     */
    export class World extends EventEmitter {

        /**
         * step() ??????????????????
         * @event postStep
         */
        postStepEvent: {
            type: string;
        };

        /**
         * Body ???????????????
         * @event addBody
         * @param {Body} body
         */
        addBodyEvent: {
            type: string;
        };

        /**
         * Body???????????????
         * @event removeBody
         * @param {Body} body
         */
        removeBodyEvent: {
            type: string;
        };

        /**
         * Spring ???????????????
         * @event addSpring
         * @param {Spring} spring
         */
        addSpringEvent: {
            type: string;
        };

        /**
         * ???????????????????????????????????????????????????????????????????????????
         * @event impact
         * @param {Body} bodyA
         * @param {Body} bodyB
         */
        impactEvent: {
            type: string;
            bodyA: Body;
            bodyB: Body;
            shapeA: Shape;
            shapeB: Shape;
            contactEquation: ContactEquation;
        };

        /**
         * ??? Broadphase ???????????????????????????
         * @event postBroadphase
         * @param {Array} ????????????
         */
        postBroadphaseEvent: {
            type: string;
            pairs: Body[];
        };

        /**
         * ??????????????????????????????
         * @event beginContact
         * @param {Shape} shapeA
         * @param {Shape} shapeB
         * @param {Body}  bodyA
         * @param {Body}  bodyB
         * @param {Array} contactEquations
         */
        beginContactEvent: {
            type: string;
            shapeA: Shape;
            shapeB: Shape;
            bodyA: Body;
            bodyB: Body;
            contactEquations: ContactEquation[];
        };

        /**
         * ????????????????????????????????????
         * @event endContact
         * @param {Shape} shapeA
         * @param {Shape} shapeB
         * @param {Body}  bodyA
         * @param {Body}  bodyB
         * @param {Array} contactEquations
         */
        endContactEvent: {
            type: string;
            shapeA: Shape;
            shapeB: Shape;
            bodyA: Body;
            bodyB: Body;
        };

        /**
         * Fired just before equations are added to the solver to be solved. Can be used to control what equations goes into the solver.
         * @event preSolve
         * @param {Array} contactEquations  An array of contacts to be solved.
         * @param {Array} frictionEquations An array of friction equations to be solved.
         */
        preSolveEvent: {
            type: string;
            contactEquations: ContactEquation[];
            frictionEquations: FrictionEquation[];
        };
        
        /**
         * ?????????????????????
         * @static
         * @property {number} NO_SLEEPING
         */
        static NO_SLEEPING: number;
        /**
         * ????????????
         * @static
         * @property {number} BODY_SLEEPING
         */
        static BODY_SLEEPING: number;
        /**
         * ???????????????????????????????????????????????????????????????????????????????????? World.islandSplit
         * @static
         * @property {number} ISLAND_SLEEPING
         */
        static ISLAND_SLEEPING: number;

        constructor(options?: {
            solver?: Solver;
            gravity?: number[];
            broadphase?: Broadphase;
            islandSplit?: boolean;
            doProfiling?: boolean;
        });

        /**
         * ?????? Spring
         * @property springs
         * @type {Array}
         */
        springs: Spring[];
        /**
         * ?????? Body
         * @property {Array} bodies
         */
        bodies: Body[];
        /**
         * ????????????????????????????????????????????????????????? ???????????? GSSolver
         * @property {Solver} solver
         */
        solver: Solver;
        /**
         * @property narrowphase
         * @type {Narrowphase}
         */
        narrowphase: Narrowphase;
        /**
         * The island manager of this world.
         * @property {IslandManager} islandManager
         */
        islandManager: IslandManager;
        /**
         * ?????????????????? step() ???????????????????????????
         *
         * @property gravity
         * @type {Array}
         */
        gravity: number[];
        /**
         * ????????????
         * @property {Number} frictionGravity
         */
        frictionGravity: number;
        /**
         * ?????????true???frictionGravity ????????????????????? gravity ??????.
         * @property {Boolean} useWorldGravityAsFrictionGravity
         */
        useWorldGravityAsFrictionGravity: boolean;
        /**
         * @property broadphase
         * @type {Broadphase}
         */
        broadphase: Broadphase;
        /**
         * ??????????????????
         *
         * @property constraints
         * @type {Array}
         */
        constraints: Constraint[];
        /**
         * ???????????????defaultContactMaterial ?????????
         * @property {Material} defaultMaterial
         */
        defaultMaterial: Material;
        /**
         * ?????????????????????????????????????????????????????????????????????????????????
         * @property {ContactMaterial} defaultContactMaterial
         */
        defaultContactMaterial: ContactMaterial;
        /**
         * ???????????????????????????
         * @property applySpringForces
         * @type {Boolean}
         */
        applySpringForces: boolean;
        /**
         * ????????????????????????
         * @property applyDamping
         * @type {Boolean}
         */
        applyDamping: boolean;
        /**
         * ????????????????????????
         * @property applyGravity
         * @type {Boolean}
         */
        applyGravity: boolean;
        /**
         * ??????????????????
         * @property solveConstraints
         * @type {Boolean}
         */
        solveConstraints: boolean;
        /**
         * ????????????
         * @property contactMaterials
         * @type {Array}
         */
        contactMaterials: ContactMaterial[];
        /**
         * ????????????
         * @property time
         * @type {Number}
         */
        time: number;
        /**
         * ???????????? step ??????
         * @property {Boolean} stepping
         */
        stepping: boolean;
        /**
         * ????????????????????????
         * @property {Boolean} islandSplit
         */
        islandSplit: boolean;
        /**
         * ?????????true???world????????? impact ?????????????????????????????????
         * @property emitImpactEvent
         * @type {Boolean}
         */
        emitImpactEvent: boolean;
        /**
         * ?????????????????????????????? World.NO_SLEEPING???World.BODY_SLEEPING???World.ISLAND_SLEEPING ??????
         * @property sleepMode
         * @type {number}
         * @default World.NO_SLEEPING
         */
        sleepMode: number;

        /**
         * ????????????
         * @method addConstraint
         * @param {Constraint} c
         */
        addConstraint(c: Constraint): void;
        /**
         * ??????????????????
         * @method addContactMaterial
         * @param {ContactMaterial} contactMaterial
         */
        addContactMaterial(contactMaterial: ContactMaterial): void;
        /**
         * ??????????????????
         * @method removeContactMaterial
         * @param {ContactMaterial} cm
         */
        removeContactMaterial(cm: ContactMaterial): void;
        /**
         * ??????2???????????????????????????
         * @method getContactMaterial
         * @param {Material} materialA
         * @param {Material} materialB
         * @return {ContactMaterial} ???????????????????????????false
         */
        getContactMaterial(materialA: Material, materialB: Material): ContactMaterial;
        /**
         * ????????????
         * @method removeConstraint
         * @param {Constraint} c
         */
        removeConstraint(c: Constraint): void;
        /**
         * ???????????????????????????????????????
         *
         * @method step
         * @param {Number} dt                       ??????
         * @param {Number} [timeSinceLastCalled=0]
         * @param {Number} [maxSubSteps=10]
         *
         * @example
         *     var world = new World();
         *     world.step(0.01);
         */
        step(dt: number, timeSinceLastCalled?: number, maxSubSteps?: number): void;
        /**
         * ???????????? Spring
         *
         * @method addSpring
         * @param {Spring} s
         */
        addSpring(s: Spring): void;
        /**
         * ???????????? Spring
         *
         * @method removeSpring
         * @param {Spring} s
         */
        removeSpring(s: Spring): void;
        /**
         * ???????????? Body
         *
         * @method addBody
         * @param {Body} body
         *
         * @example
         *     var world = new World(),
         *         body = new Body();
         *     world.addBody(body);
         */
        addBody(body: Body): void;
        /**
         * ???????????? Body???????????? step()??????????????????????????????????????????
         *
         * @method removeBody
         * @param {Body} body
         */
        removeBody(body: Body): void;
        /**
         * ??????id???????????? Body
         * @method getBodyById
         * @return {Body|Boolean} ?????????????????????false
         */
        getBodyByID(id: number): Body;
        /**
         * ??????????????????????????????
         * @method disableCollision
         * @param {Body} bodyA
         * @param {Body} bodyB
         */
        disableBodyCollision(bodyA: Body, bodyB: Body): void;
        /**
         * ??????????????????????????????
         * @method enableCollision
         * @param {Body} bodyA
         * @param {Body} bodyB
         */
        enableBodyCollision(bodyA: Body, bodyB: Body): void;
        /**
         * ?????? world
         * @method clear
         */
        clear(): void;
        /**
         * ????????????
         * @method clone
         * @return {World}
         */
        clone(): World;
        /**
        * [ladeng6666] ??????world??????????????????????????????worldPoint?????????????????????????????????????????????????????????????????????
        * @param {Array} worldPoint  ???????????????????????????????????????.
        * @param {Array} bodies ????????????????????????.
        * @param {number} precision ??????????????????.
        */
        hitTest(worldPoint: number[], bodies: Body[], precision?: number): Body[];
        //functions below were added by ladeng6666
        /*raycastAll(from: number[], to: number[], options: { collisionMask?: number; collisionGroup?: number; skipBackfaces?: boolean; checkCollisionResponse?:boolean}, callback: Function): void;
        raycastAny(from: number[], to: number[], options: Object, result: RayCastResult): void;
        raycastClosed(from: number[], to: number[], options: Object, callback: Function): void;
        */
        raycast(result: RaycastResult, ray: Ray);
    }
    export class RaycastResult {
        constructor();
        body: Body;
        fraction: number;
        shape: Shape;
        faceIndex: number;
        isStopped: boolean;
        normal: number[];

        getHitPoint(out:number[],ray:Ray):number[];
        getHitDistance(ray:Ray): number;
        hasHit(): boolean;
        reset();
        stop();
    }
    export class Ray {
        static ANY: number;
        static CLOSEST: number;
        static ALL: number;

        constructor(options?: {
            to?: number[];
            from?: number[];
            mode?: number;
            callback?: Function;
            collisionMask?: number;
            collisionGroup?: number;
            checkCollisionResponse?: boolean;
            skipBackfaces?: boolean;
            direction?: number[];
            length?: number;
        });
        to: number[];
        from: number[];
        mode: number;
        callback: Function;
        collisionMask: number;
        collisionGroup: number;
        checkCollisionResponse: boolean;
        skipBackfaces: boolean;
        direction: number[];
        length: number;
    }

}



