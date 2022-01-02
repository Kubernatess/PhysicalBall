var CONST_SCORE_HIGHEST: string = "playBall score highest";//最高分数
var GamePanel = { rank: null, over: null, game: null };
class GameMain extends moon.GameView {
	protected panelGame: GameControl;
	protected panelStart: GameStart;
	protected panelOver: GameOver;

	/**加载到舞台之后调用 */
	protected render(): void {
		super.render();
		//this.createBgGradientFill();

		//面板－主要逻辑处理
		this.panelGame = new GameControl;
		this.panelGame.addEvent(MoonEvent.OVER, this.onOver, this);
		this.addChild(this.panelGame);
		GamePanel.game = this.panelGame;

		//面板－开始
		this.panelStart = new GameStart;
		this.panelStart.addEvent(MoonEvent.START, this.start, this);
		this.addChild(this.panelStart);

		//面板－结束
		this.panelOver = new GameOver;
		this.panelOver.addEvent(moon.MoonEvent.START, this.start, this);
		//this.addChild(this.panelOver);

		//读取历史最高分
		GameData.scoreHighest = Number(moon.BasicGameStorage.localRead(CONST_SCORE_HIGHEST));
	}

	protected start(e: moon.MoonEvent): void {
		this.panelGame.initGame();
		this.panelGame.play();
	}
	protected onOver(e: MoonEvent): void {
		this.addChild(this.panelOver);
		this.panelOver.alpha = 0;
		Tween.get(this.panelOver).to({ alpha: 1 }, 300)
		this.panelOver.update(e.data);
	}
}


/**开始界面*/
class GameStart extends moon.BasicGameStart {
	protected initView(): void {
		this.createImageBg("startPanel_png");

		var btn: MButton = new MButton(new MImage("btnStart_png"), new MImage("btnStart_png"))
		this.addChild(btn);
		btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
		btn.x = (this.stageW - btn.width) >> 1;
		btn.y = 650;
	}
}
/**游戏结束 */
class GameOver extends moon.BasicGameStart {
	private layout: Layout = Layout.getIns();
	private txtScoreMax: TextField;
	private score: number;
	private btnScore: MButton;
	private btnGuangGao: MButton;
	protected txtScore: TextField;
	protected txtLevel: TextField;
	protected btnRestart: MButton;
	protected btnRank: MButton;
	gameRank: GameRank;
	protected initView(): void {
		this.gameRank = new GameRank();
		GamePanel.rank = this.gameRank;
		GamePanel.over = this;

		this.layout.setStageWH(this.stageW, this.stageH);
		this.createImageBg("overPanel_png");

		this.btnRestart = this.createMButton("btnRestart_png", 264, 700);
		this.btnScore = this.createMButton("btnScore_png", 425, 700);
		this.btnRank = this.createMButton("btnRank_png", 107, 700);

		this.txtScore = this.createText(333, 400);
		this.txtScoreMax = this.createText(333, 525);
		this.txtScore.size = this.txtScoreMax.size = 50;
		//this.txtScore.text=this.txtScoreMax.text="99999";
	}
	protected createMButton(name: string, x: number, y: number): MButton {
		var btn: MButton = this.createSkinBtn(name, name);
		btn.x = x; btn.y = y;
		return btn;
	}
	protected createSkinBtn(value1: string, value2: string): MButton {
		var skin: Scale9Image = new Scale9Image(value1);
		var skin2: Scale9Image = new Scale9Image(value2);
		skin2.alpha = 0.5;
		var btn: MButton = new MButton(skin, skin2);
		btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
		this.addChild(btn);
		return btn;
	}
	protected onClick(e: egret.TouchEvent): void {
		if (e.currentTarget == this.btnRestart) {
			this.dispEvent(MoonEvent.START);
			Tween.get(this).to({ alpha: 0 }, 300).call(this.backCall, this)
		} else if (e.currentTarget == this.btnScore) {
			platform.submitScore(GameData.score, this.callback, this);
		} else if (e.currentTarget == this.btnRank) {
			this.addChild(this.gameRank);
			this.gameRank.updateScore();
		}
		SoundControl.getIns().play(MUSIC_CLICK_BTN);
	}
	/**提交分数返回函数 */
	private callback(obj) {
		console.log("代码:" + obj.code + ",消息:" + obj.message + ",数据:" + obj.data);
		if (obj.code == 10000) {
			console.log("上传成功");
			alertAuto("分数提交成功")
		} else {
			console.log("上传失败");
		}
	}
	public update(data: Object): void {
		GameData.score = data["score"];
		if (GameData.score > GameData.scoreHighest) {
			GameData.scoreHighest = GameData.score;
			moon.BasicGameStorage.localWrite(CONST_SCORE_HIGHEST, GameData.scoreHighest.toString());
		}
		this.txtScore.text = String(GameData.score);
		this.txtScoreMax.text = String(GameData.scoreHighest);
	}
}

/**分数排行*/
class GameRank extends moon.BasicView {
	protected txtRank: TextField;
	protected items: moon.RankItem[] = [];
	protected conatiner: Sprite;
	protected max: number = 50;
	protected render(): void {
		super.render();
		this.initView();
	}
	protected initView(): void {
		this.createBackground(0, 0.5);
		var rankBg = moon.MoonUI.getRect(this.stageW - 100, this.stageH - 200, 0);
		rankBg.alpha = 0.8;
		this.addChild(rankBg);
		Layout.getIns().setCenterXByPanent(rankBg);
		Layout.getIns().setCenterYByPanent(rankBg);
		var rect: Rectangle = new Rectangle(rankBg.x, rankBg.y, rankBg.width, rankBg.height);
		var dis: number = 60;
		var line: Sprite = new Sprite;
		line.graphics.lineStyle(2, 0XFFFFFF);
		line.graphics.moveTo(rect.x, rect.y + dis);
		line.graphics.lineTo(rect.x, rect.y);
		line.graphics.lineTo(rect.right, rect.y);
		line.graphics.lineTo(rect.right, rect.bottom);
		line.graphics.lineTo(rect.x, rect.bottom);
		line.graphics.lineTo(rect.x, rect.y + dis);
		line.graphics.lineTo(rect.right, rect.y + dis);
		this.addChild(line);

		var xnum: number = 30;
		var btnSkin = moon.MoonUI.getCircle(xnum, 0xffffff);
		var skinX = moon.MoonUI.getX(xnum >> 1, xnum >> 1, 0x00ff00, 4);
		skinX.anchorOffsetX = skinX.anchorOffsetY = xnum >> 2;
		btnSkin.addChild(skinX);

		var btn: MButton = new MButton(btnSkin, btnSkin);
		btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
		this.addChild(btn);
		btn.x = rankBg.x + rankBg.width;
		btn.y = rankBg.y;

		var txt: TextField = this.createText(0, 0, "分数排行榜");
		Layout.getIns().setCenterXByPanent(txt);
		txt.y = rankBg.y + (dis - txt.height) / 2;
		this.addChild(txt);

		var txt: TextField = this.createText(rankBg.x, rankBg.y - dis / 2);
		this.addChild(txt);
		this.txtRank = txt;
		this.txtRank.text = "你的排名:"

		this.conatiner = new Sprite;
		this.addChild(this.conatiner);
		var itemw: number = rankBg.width - 2
		for (var i = 0; i < this.max; i++) {
			var item: moon.RankItem = new moon.RankItem(itemw, i);
			this.conatiner.addChild(item);
			this.items.push(item);
		}
		moon.SimpleLayout.displayRank(this.items, 1);

		var scrollBar: moon.ScrollBar = new moon.ScrollBar();
		scrollBar.target = this.conatiner;
		scrollBar.setSize(rect.width, rect.height - dis - 2);
		scrollBar.layout(moon.Const.VERTICAL);
		this.addChild(scrollBar);
		scrollBar.x = rect.x + 1
		scrollBar.y = rect.y + dis + 2;
	}
	protected onClick(e: egret.TouchEvent): void {
		this.removeFromParent();
	}

	public updateScore(): void {
		platform.getRank(this.update, this);
	}
	/**查看排行榜返回函数 */
	public update(obj) {
		console.log("代码:" + obj.code + ",消息:" + obj.message + ",数据:" + obj.data);
		var _this = GamePanel.rank;
		if (obj.code == 10000) {
			console.log("获取成功");
			var data = obj.data;
			var len: number = data.length;
			var myRank: number = -1;
			for (var i = 0; i < len; i++) {
				//this.txtRank.text+=("积分:" + data[i].score + ",排名:" + data[i].rank+"\n");
				var score = data[i].score;
				console.log(i, score, _this.max);
				if (i < _this.max) {
					var item: moon.RankItem = _this.items[i];
					item.txtScore.text = score;
					console.log("item", item.txtScore.text, score);
				}
				if (i < len - 1) {
					var next: number = Number(data[i + 1].score);
					score = Number(score);
					console.log(GameData.score, next, score);
					if (GameData.score == score) {//刚好等于排行分数
						myRank = i + 1;
					} else if (GameData.score > next && GameData.score <= score) {//在排行榜之前
						myRank = i + 2;
					} else if (GameData.score >= data[0].score) {//大于等于第1名时
						myRank = 1;
					} else if (GameData.score <= data[len - 1].score) {//小于等于最后一名时
						myRank = len;
					}
				}
			}
			if (_this.txtRank) {
				if (myRank > 0) _this.txtRank.text = "你本次得" + GameData.score + "分，排在第" + myRank + "名。";
				else _this.txtRank.text = "未上榜";
			}
		} else {
			console.log("获取失败");
		}
	}
}