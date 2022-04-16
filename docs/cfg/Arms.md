namespace ns {
	export namespace cfg {
		export class Arms {
			Id: number;		//#配置ID
			Name: string;		//名称
			Desc: string;		//描述
			Talk: string;		//喊话
			Type: number;		//类型
			SType: number;		//小类型
			Level: number;		//等级
			Cost: string;		//生产消耗
			NextId: number;		//下一级Id
			LvCost: string;		//升下一级消耗
			LvLimit: number;		//升级限制
			MapResId: number;		//地图资源ID
			MakeTime: number;		//建造耗时
			HospitalTime: number;		//医院耗时
			ArmAttrId: number;		//士兵属性ID
			Power: number;		//战斗力
			Exp: number;		//经验
			Weight: number;		//负重
			MOdds: number;		//合成暴击万分比
		}
	}
}