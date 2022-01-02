var MOON_FTP: number = 24;
module moon {
    /**图像类 */
    export class Image extends MoonContainer {
        protected skinName: string;
        protected skinImage: Scale9Image;
        protected position: Point;
        public bgW: number;
        public bgH: number;
        public constructor(skinName: string = "") {
            super();
            if (skinName != "") {
                this.skinName = skinName;
                this.position = new Point();
                this.addBitmap();
                this.bgW = this.width;
                this.bgH = this.height;
            }
        }
        public addBitmap(): void {
            if (RES.hasRes(this.skinName)) {
                this.skinImage = new Scale9Image(this.skinName);
                this.skinImage.smoothing = true;
                this.addChild(this.skinImage);
            } else {
                trace("找不到资源：" + this.skinName)
                //egret.error("找不到key"+this.skinName);
            }
        }
        /**设置锚点在中心 */
        public setAnchorCenter(): void {
            this.anchorOffsetX = this.width >> 1;
            this.anchorOffsetY = this.height >> 1;
        }
    }
    /**图像容器类 */
    export class BasicContainer extends Image {
        protected items: any[] = [];
        protected index: number = 0;
        protected skinImage: Scale9Image;

        public addItem(item: any): void {
            this.items.push(item);
        }
        public removeItem(index: number): void {
            if (this.hasItem(index)) {
                this.items.splice(index, 1);
            }
        }
        public getItem(index: number): any {
            return this.items[index];
        }
        public hasItem(index: number): boolean {
            return this.items.length > 0 && (index >= 0 && index < this.items.length);
        }
        public getNextItem(): any {
            return this.items[this.index++];
        }
        public reset(): void {
            this.index = 0;
        }
    }
    /**图像动画类 */
    export class ImageAnimation extends BasicContainer {
        protected timer: egret.Timer;
        protected _ftp: number = MOON_FTP;
        public loop: boolean;
        public constructor(skinName: string = "", start: number, end: number, type: string = "png") {
            super();
            for (var i: number = start; i <= end; i++) {
                this.items.push(skinName + i + "_" + type);
            }
            this.skinName = this.getItem(0);
            this.addBitmap();
            this.createTime();
        }
        protected createTime(): void {
            if (this.timer == null) {
                this.timer = new egret.Timer(1000 / this.ftp, 0);
                this.timer.addEventListener(egret.TimerEvent.TIMER, this.onTimer, this);
            }
        }
        protected onTimer(): void {
            if (this.hasItem(++this.index)) {
                this.gotoAndStop(this.index);
            } else {
                if (this.loop) {
                    this.reset();
                    this.gotoAndStop(this.index);
                } else {
                    this.timer.stop();
                }
            }
        }
        public gotoAndStop(index: number): void {
            if (this.hasItem(index)) {
                this.index = index;
                this.skinName = this.getItem(index);
                this.update();
            } else {
                trace("gotoAndStop的参数请保持在0到" + this.items.length, "当前index=" + index)
            }
        }
        public gotoAndPlay(index: number): void {
            this.index = index;
            this.play();
        }
        public play(): void {
            this.timer.start();
        }
        public stop(): void {
            this.timer.stop();
        }
        public update(): void {
            if (RES.hasRes(this.skinName)) {
                this.skinImage.texture = RES.getRes(this.skinName);
            } else {
                trace("找不到资源：" + this.skinName);
            }
        }
        public get currentFrame(): number { return this.index }
        public get ftp() { return this._ftp }
        public set ftp(value: number) {
            this._ftp = value;
            this.removeTime();
            this.createTime();
        }
        protected removeTime(): void {
            if (this.timer != null) {
                this.timer.stop();
                this.timer.removeEventListener(egret.TimerEvent.TIMER, this.onTimer, this);
                this.timer = null;
            }
        }
        public dispose(): void {
            super.dispose();
            this.removeTime();
        }
    }
    /**图像布局类 */
    export class ImageLayout {
        private tw: number;
        private th: number;
        private image: DisplayObject;
        private static instance: ImageLayout;
        public static getIns(): ImageLayout {
            if (this.instance == null) this.instance = new ImageLayout();
            return this.instance;
        }
        public setStageWH(w: number, h: number): void {
            this.tw = w;
            this.th = h;
        }
        public setCenterXByPanent(display: DisplayObject): void {
            if (display.parent instanceof Image) display.x = (display.parent.bgW - display.width) >> 1;
            else display.x = (display.parent.width - display.width) >> 1;
        }
        public setCenterYByPanent(display: DisplayObject): void {
            if (display.parent instanceof Image) display.y = (display.parent.bgH - display.height) >> 1;
            else display.y = (display.parent.height - display.height) >> 1;
        }
    }
}