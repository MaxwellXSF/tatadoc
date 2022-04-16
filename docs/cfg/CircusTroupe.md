namespace ns {
	export namespace cfg {
		export class CircusTroupe {
			Id: number;		//#小游戏id
			Type: number;		//游戏类型
			Name: string;		//名称
			Rank: number;		//排行记录数
			Start: number;		//每周开放时间
			Days: number;		//持续天数
			Free: number;		//每天免费次数
			Play: number;		//每天使用游戏币玩的次数
			Dsc: string;		//描述
			Lev: string;		//游戏难度
			Rewards: string;		//各难度对应的奖励
		}
	}
}