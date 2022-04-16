namespace ns {
	export namespace cfg {
		export class GangTaskWeek {
			Id: number;		//#表ID序
			Desc: string;		//任务描述
			Icon: string;		//图标
			Jump: number;		//打开功能UI
			Type: number;		//task类型
			TarId: number;		//具体目标id
			SumCondition: number;		//总完成条件
			Award: string;		//奖励
		}
	}
}