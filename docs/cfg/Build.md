namespace ns {
	export namespace cfg {
		export class Build {
			Id: number;		//#配置ID
			Name: string;		//名称
			Type: number;		//类型
			Level: number;		//等级
			LvType: number;		//升级模式
			LvCost: string;		//升级消耗
			FinishCost: string;		//立即完成消耗
			Cost: string;		//建造消耗
			MakeLimit: number;		//建造限制
			NextId: number;		//下一级ID
			LvLimit: number;		//升级限制
			CollegeLimit: number;		//科技限制
			MapResId: number;		//地图资源ID
			Production: number;		//生产
			Power: number;		//战斗力
			Exp: number;		//经验
			Value: number;		//功能
			Desc: string;		//描述
			AttrId: number;		//属性id
			MOdds: number;		//合成暴击万分比
		}
	}
}