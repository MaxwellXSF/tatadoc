namespace ns {
	export namespace cfg {
		export class Expedition {
			Id: number;		//#ID
			Name: string;		//名称
			Desc: string;		//描述
			Desc2: string;		//描述2
			Chapter: number;		//章节
			Stage: number;		//关卡
			Token: number;		//每分钟代币
			FirstAward: string;		//首次奖励
			ChapterAward: string;		//章节奖励
			GToken: number;		//挂机代币奖励
			GItem: number;		//挂机道具奖励
			GRare: number;		//挂机稀有奖励
			JianJun: number;		//监军值
			MonsterID: number;		//怪物ID
			Arms: string;		//士兵
			MarchNum: number;		//出征数量
			MingAward: string;		//名人堂奖励
			ArmMax: number;		//士兵上限
			Limit: string;		//开启限制
		}
	}
}