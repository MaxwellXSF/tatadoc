namespace ns {
	export namespace cfg {
		export class WorldMapMonster {
			Id: number;		//#ID
			Name: string;		//名字
			Desc: string;		//描述
			Res: number;		//外观
			Type: number;		//类型
			Time: number;		//刷新时间(秒)
			Level: number;		//等级
			DropId: number;		//奖励
			Rewards: string;		//首杀奖励
			Num: number;		//数量
			Plan: string;		//布阵
			Arms: string;		//士兵
			Milestone: number;		//所需的里程碑
			Sweep: number;		//扫荡
			MainLv: number;		//主城等级
			IdentityLv: number;		//角色等级
			HeroExp: number;		//英雄经验
			MapId: number;		//地图ID
		}
	}
}