namespace ns {
	export namespace cfg {
		export class GangTask {
			Id: number;		//#ID
			Describe: string;		//具体描述
			Icon: string;		//图标
			Type: number;		//类型
			Jump: number;		//跳转
			Level: number;		//开放等级
			TarId: number;		//具体目标id
			Condition: number;		//完成条件
			Award: string;		//奖励
		}
	}
}