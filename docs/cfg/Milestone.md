namespace ns {
	export namespace cfg {
		export class Milestone {
			Id: number;		//#表ID序
			BType: number;		// 任务性质类型
			SortNum: number;		//排序个数
			SType: number;		// 任务具体类型
			Comin: number;		//任务参与对象
			CloseTime: number;		//前期任务持续时间
			NewMake: number;		//任务达标是否立即新里程
			AFlag: number;		//领取奖励的对象
			Desc: string;		//任务描述
			Desc_2: string;		//任务状态描述
			NeedData: string;		//需要的参数
			TarId: number;		//具体目标id
			SumCondition: number;		//总完成条件
			OneCondition: number;		//单完成条件
			AddArm: string;		//完成该里程牌加的兵源值
			Buffid: number;		//完成该里程牌加的Buff
		}
	}
}