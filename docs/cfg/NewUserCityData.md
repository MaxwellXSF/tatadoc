namespace ns {
	export namespace global {
		export interface initMap {
			mapSizeX: number;				//背景底图横向格子数
			mapSizeY: number;				//背景底图纵向格子数
			mapUrlName: string;				//背景图名称前缀
			bgCellSizeW: number;				//单张背景图的宽度
			bgCellSizeH: number;				//单张背景图的高度
			basePos: number[];				//初始定位
				//前景图及位置
				//地图士兵
				//巡逻士兵
		}

		export interface FireCityInfo {
			FireEffect: string;				//火焰光效
			FirePos: number[][];				//起火点，格式为[x坐标,y坐标,缩放]
			DeadArmy: number[][];				//死亡士兵
			CreateArmy: number[][];				//存活的士兵
		}

		export interface TalkChoice {
			title: string;				//剧情选择标题
			leftInfo: string;				//左侧选项
			leftJump: number;				//左侧跳转的对话
			rightInfo: string;				//右侧选项
			rightJump: number;				//右侧跳转的对话
		}

		export interface createBoss {
			skin: number;				//
			posBase: number[];				//
			posEnd: number[];				//
			scale: number;				//
			action: string;				//
			arrow: number;				//
			moveTime: number;				//
		}

		export interface movie_1 {
			totalDelayTime: number;				//总等待时间(毫秒）
			playEffect: string[];				//播放龙骨动画(动画名,X位置,Y位置)
			openLight: number;				//开始报警
			createBoss: createBoss;				//生成BOSS对象
				//生成小兵对象
		}

		export interface movie_2 {
			totalDelayTime: number;				//总等待时间(毫秒）
			armyIndex: number;				//指定要移动的士兵
			movePath: number[][];				//移动路径及时间
		}

		export interface movie_3 {
			totalDelayTime: number;				//总等待时间(毫秒）
				//移动路径及时间
			loopMoveEnd: number[][];				//巡逻兵移动目标
		}

		export interface movie_4 {
			totalDelayTime: number;				//总等待时间(毫秒）
			soundFile: string;				//要播放的声音文件
		}

		export interface NewUserCityData {
			initMap: initMap;				//初始化地图
			FireCityInfo: FireCityInfo;				//绘制着火时的城堡
				//聊天段1
				//聊天段2
				//聊天段3
				//聊天段4
				//聊天段5
				//聊天段6
			TalkChoice: TalkChoice;				//剧情选择
			movie_1: movie_1;				//动画段1（传送门出现，敌方军队出现并移动到指定地方）
			movie_2: movie_2;				//动画段2（士兵移动百夫长报告）
			movie_3: movie_3;				//动画段3（士兵们向城门移动）
			movie_4: movie_4;				//动画段4（开始报警）
				//操作步骤
		}

	}
}
