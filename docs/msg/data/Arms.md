// Generated by msgts
// DO NOT EDIT!

namespace ns {
	export namespace data {
		// 兵种表
		export class ArmsConf {	
			
			public Id: number; 
			// 名称
			public Name: string; 
			// 描述
			public Desc: string; 
			// 喊话
			public Talk: string; 
			// 类型
			public Type: number; 
			// 小类型
			public SType: number; 
			// 等级
			public Level: number; 
			// 生产消耗
			public Cost: Item[]; 
			// 下一级Id
			public NextId: number; 
			// 升下一级消耗
			public LvCost: Item[]; 
			// 升级限制
			public LvLimit: number; 
			// 地图资源ID
			public MapResId: number; 
			// 建造耗时
			public MakeTime: number; 
			// 医院耗时
			public HospitalTime: number; 
			// 士兵属性ID
			public ArmAttrId: number; 
			// 战斗力
			public Power: number; 
			// 经验
			public Exp: number; 
			// 负重
			public Weight: number; 
			// 合成暴击万分比
			public MOdds: number; 
		}
		
	}
}
