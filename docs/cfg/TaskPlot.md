namespace ns {
	export namespace cfg {
		export class TaskPlot {
			Id: number;		//#ID
			PlotB: number;		//剧情章
			PlotS: number;		//任务
			PlotOk: number;		//任务类型
			PlotName: string;		//第几剧情名字
			ZJName: string;		//章节名
			ZJContent: string;		//章节内容
			Describe: string;		//具体描述
			PlotIcon: string;		//第几剧情icon
			ZJIcon: string;		//章节icon
			LimitLv: number;		//限制的主城等级
			Jump: number;		//打开功能UI
			Type: number;		//类型
			TarId: number;		//具体目标id
			Condition: number;		//完成条件
			Award: string;		//章节任务奖励
			AttrId: number;		//属性
		}
	}
}