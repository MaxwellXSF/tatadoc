namespace ns {
	export namespace cfg {
		export class GangProbe {
			Id: number;		//#ID
			ProbeType: number;		//事件类型
			TaskTitle: string;		//任务标题
			Describe: string;		//具体描述
			TType: number;		//任务类型
			TarId: number;		//具体目标id
			Condition: number;		//完成条件
			Award: number;		//奖励
			Story: number;		//剧情ID
			NpcID: number;		//怪物ID
			Jump: number;		//打开功能UI
		}
	}
}