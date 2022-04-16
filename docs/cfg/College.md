namespace ns {
	export namespace cfg {
		export class College {
			Id: number;		//#配置ID
			Type: number;		//类型
			Level: number;		//等级
			Name: string;		//名称
			Desc: string;		//描述
			Icon: string;		//图标
			MainLv: number;		//主城等级
			OpenLimit: number;		//开启科技
			OpenBuildType: number;		//开启建筑类型
			NextId: number;		//下一级ID
			Value: number;		//效果值
			LvCost: string;		//升级消耗
			FinishCost: string;		//立即完成消耗
			LvTime: number;		//升级时间
			Exp: number;		//经验
			Power: number;		//战力
		}
	}
}