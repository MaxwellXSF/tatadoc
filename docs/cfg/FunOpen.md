namespace ns {
	export namespace cfg {
		export class FunOpen {
			Id: number;		//#功能编号
			Name: string;		//功能名称
			PLevel: number;		//玩家等级
			MLevel: number;		//主城等级
			TileCount: number;		//需要解锁的地块
			WorldProcess: number;		//纪念碑进程
			OpenServerDay: number;		//需开服多少天以后
			Vip: number;		//VIP需求
			VipExtend: number;		//额外VIP附加
			JumpUI: number;		//跳转信息
			Desc: string;		//功能描述
			IsShow: number;		//展示窗口
			Res: string;		//图标资源
			ViewSort: number;		//功能预告顺序
			UIAward: string;		//功能解锁后奖励
		}
	}
}