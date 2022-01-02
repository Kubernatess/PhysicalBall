class MButton extends moon.BasicButton { };
class MImage extends moon.Image { };
class ImageAnimation extends moon.ImageAnimation { };
class Layout extends moon.ImageLayout { };
class Scale9Image extends moon.Scale9Image { };
class MoonEvent extends moon.MoonEvent { };
class GameData extends moon.GameData { };
class Const extends moon.Const { };
module moon {
    /**游戏开始界面 */
    export class BasicGameStart extends moon.GameView {
        /**加载到舞台之后调用 */
        protected render(): void {
            super.render();

            this.initView();
        }
        protected initView(): void {
            var bg: Sprite = this.createBackground();
            bg.alpha = 0.5;

            this.createBtn("开始游戏");
            this.createTitle("游戏标题");
        }
        protected createBtn(value: string): MButton {
            var btn: moon.BasicButton = this.createButton(value);
            btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
            btn.x = (this.stageW - btn.width) >> 1;
            btn.y = (this.stageH - btn.height) >> 1;
            return btn;
        }
        protected createTitle(value: string): TextField {
            var title: TextField = this.createText(0, 0, value);
            title.x = (this.stageW - title.width) / 2;
            title.y = (this.stageH - title.height) / 2 - 100;
            return title;
        }
        protected onClick(e: egret.TouchEvent): void {
            this.dispEvent(MoonEvent.START);
            Tween.get(this).to({ alpha: 0 }, 300).call(this.backCall, this)
        }
        protected backCall(e: egret.TouchEvent): void {
            this.removeFromParent();
        }
        protected createImageBg(name: string): void {
            this.addChild(new MImage(name));
        }
    }

    export class RankItem extends BasicView {
        protected w: number;
        protected rank: number;
        protected txtRank: TextField;
        public txtScore: TextField;
        protected colors: number[] = [0, 0XDD823B, 0XD2A85E, 0XDFD164];
        public constructor(w: number, rank: number) {
            super();
            this.w = w;
            this.rank = rank + 1;
            this.initView();

        }
        protected initView(): void {
            var bg: Sprite = this.createRect(this.w, 80, 0);
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
        }
    }
    
    /**游戏数据存储*/
    export class BasicGameStorage {
        /**只能内部访问,在外部修改gameId */
        protected static getGameIdKey(key: string): string { return GameData.gameId + key }
        /**本地 数据写入*/
        public static localWrite(key: string, value: string): void {
            egret.localStorage.setItem(this.getGameIdKey(key), value);
        }
        /**本地 数据读取*/
        public static localRead(key: string): string {
            return egret.localStorage.getItem(this.getGameIdKey(key));
        }
        /**本地 数据删除*/
        public static localRemove(key: string): any {
            egret.localStorage.removeItem(this.getGameIdKey(key));
        }
        /**本地 数据清空*/
        public static localClear(): any {
            egret.localStorage.clear();
        }
        /**服务器 数据写入*/
        public static serverWrite(): void { }
        /**服务器 数据读取*/
        public static serverRead(): string { return "" }
        /**服务器 数据删除*/
        public static serverRemove(): void { }
    }
    /**初始化游戏*/
    export class GameMoon {
        public static init(stage: Stage): void {
            //移动端与PC端使用不同模式
            egret.Capabilities.isMobile ? stage.scaleMode = egret.StageScaleMode.FIXED_WIDTH : stage.scaleMode = egret.StageScaleMode.SHOW_ALL;
            //保存好舞台数据 请使用 render()方法中的 this.stageWidth;
            //GameData.stageWidth=stage.stageWidth;
            //GameData.stageHeight=stage.stageHeight;
            GameData.stage = stage;
            //初始化部分功能
            moon.LogManager.getInstane().init(stage);
            moon.AlertManager.getInstance().init(stage);
        }
    }
}