namespace ns {
	export namespace cfg {
		export class TaskRoad {
			Id: number;		//#ID
			PlotB: number;		//剧情章
			PlotS: number;		//任务
			PlotOk: number;		//任务类型
			PlotName: string;		//第几剧情名字
			Describe: string;		//具体描述
			LimitLv: number;		//限制的主城等级
			Jump: number;		//打开功能UI
			Type: number;		//类型
			TarId: number;		//具体目标id
			Condition: number;		//完成条件
			Add: number;		//计数是否累积到没有解锁的章节
			Award: string;		//奖励
			Cost: string;		//消耗
			 ActivityIndex: number;		//充值活动索引
		}
	}
}