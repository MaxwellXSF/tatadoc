namespace ns {
	export namespace cfg {
		export class Task {
			Id: number;		//#ID
			Name: string;		//简要名称
			Describe: string;		//具体描述
			Icon: string;		//图标
			Jump: string;		//打开功能UI
			Type: number;		//类型
			SType: number;		//子类型
			Level: number;		//开放等级
			TarId: number;		//具体目标id
			Condition: number;		//完成条件
			Award: string;		//奖励
		}
	}
}