// Generated by msgts
// DO NOT EDIT!

namespace ns {
	export namespace dbmodel {
		// 派遣记录
		export class WarHallRecord {	
			// 名字
			public Name: string; 
			// 头像
			public Head: string; 
			// 数量
			public Num: number; 
			// 时间
			public Time: number; 
		}
		
		// 战争大厅
		export class WarHall {	
			// 战斗信息
			public Info: BattleInfo; 
			// 出征英雄
			public Hero: number[]; 
			// 派遣列表
			public Records: WarHallRecord[]; 
			// 兵种顺序
			public Arm: number[]; 
			// 最大数量
			public MNum: number; 
			// 神兽配置ID
			public GodIds: number[]; 
		}
		
	}
}
