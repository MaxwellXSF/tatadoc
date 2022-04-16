namespace ns {
	export namespace cfg {
		export class TaskMilestone {
			Id: number;		//#ID
			Describe: string;		//具体描述
			Milestone: number;		//对应的所在里程碑id
			Type: number;		//类型
			TarId: number;		//具体目标id
			Condition: number;		//完成条件
			Award: string;		//奖励
		}
	}
}