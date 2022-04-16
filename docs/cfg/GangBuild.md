namespace ns {
	export namespace cfg {
		export class GangBuild {
			Id: number;		//#ID
			Type: number;		//类型
			SubType: number;		//子类型
			Name: string;		//名称
			Desc: string;		//建筑描述 
			SumMemNum: number;		//总人数限制
			GangSkillId: number;		//联盟科技id
			BuildValue: number;		//建筑值
			Cost: string;		//消耗
			BResId: number;		//建造资源
			FResId: number;		//完成资源
			Time: number;		//持续时间(秒)
			DropId: number;		//奖励
			Value: number;		//采集产出(小时)
			ValueId: number;		//采集产出货币
		}
	}
}