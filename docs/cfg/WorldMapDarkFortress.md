namespace ns {
	export namespace cfg {
		export class WorldMapDarkFortress {
			Id: number;		//#ID
			Name: string;		//名称
			Lev: number;		//Lev
			Desc: string;		//描述
			MapResId: number;		//地图资源ID
			KeepTime: number;		//持续时间(秒)
			Num: number;		//数量
			Strength: number;		//消耗体力
			Reward: string;		//奖励
			SpecialReward: string;		//首次成功奖励
			Hero: string;		//武将
			Arms: string;		//士兵
			WorldMapMonsterId: number;		//关联WorldMapMonsterId获取显示外观
			MapId: number;		//地图ID
		}
	}
}