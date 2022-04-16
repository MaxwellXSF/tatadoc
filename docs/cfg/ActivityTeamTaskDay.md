namespace ns {
	export namespace cfg {
		export class ActivityTeamTaskDay {
			Id: number;		//#ID
			Describe: string;		//具体描述
			Type: number;		//类型
			TarId: number;		//具体目标id
			Condition: number;		//完成条件
			Award: string;		//奖励
			Odds: number;		//刷新概率
			TeamExp: number;		//组队日常任务获得经验
			Jump: number;		//跳转id
		}
	}
}