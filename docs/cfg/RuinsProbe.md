namespace ns {
	export namespace cfg {
		export class RuinsProbe {
			Id: number;		//#ID
			Lev: number;		//等级难度
			Step: number;		//波
			Mons: string;		//怪物队形
			Score: number;		//怪物积分
			Secs: number;		//发兵间隔
			WorldMapMonsterId: number;		//关联WorldMapMonsterId获取显示外观
		}
	}
}