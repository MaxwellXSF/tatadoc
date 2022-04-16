namespace ns {
	export namespace cfg {
		export class TaskDay {
			Id: number;		//#ID
			Name: string;		//简要名称
			Describe: string;		//具体描述
			Icon: string;		//图标
			Jump: number;		//打开功能UI
			Type: number;		//类型
			TarId: number;		//具体目标id
			Condition: number;		//完成条件
			Award: string;		//奖励
			Odds: number;		//刷新概率
			Bei: number;		//奖励倍数
			Level: number;		//开放等级
			TipDes: string;		//提示描述
		}
	}
}