// Generated by msgts
// DO NOT EDIT!

namespace ns {
	export namespace data {
		
		export class RuinsProbeConf {	
			// ID
			public Id: number; 
			// 等级难度
			public Lev: number; 
			// 波
			public Step: number; 
			// 士兵
			public Arms: Item[]; 
			// 怪物积分
			public Score: number; 
			
			public Secs: number; 
			
			public WorldMapMonsterId: number; 
		}
		
		
		export class RuinsProbeScoreAwardConf {	
			// ID
			public Id: number; 
			// 个人达标
			public PS: number; 
			// 同时联盟要达标
			public GS: number; 
			// 奖励列表
			public Award: Item[]; 
		}
		
		
		export class RuinsProbeRankAwardConf {	
			// ID
			public Id: number; 
			// 类型
			public Type: number; 
			// Dsc
			public Dsc: string; 
			// 排名名次数字小
			public MinNum: number; 
			// 排名名次数字大
			public MaxNum: number; 
			// 奖励列表
			public Award: Item[]; 
		}
		
	}
}
