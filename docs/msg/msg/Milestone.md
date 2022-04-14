// Generated by msgts
// DO NOT EDIT!

namespace ns {
	export namespace msg {
		
		export class MilestoneData {	
			
			public Id: number; 
			// 开启时间
			public OpenTime: number; 
			// 持续时间
			public CloseTime: number; 
			// 领取奖励的玩家key为userid
			public OkMap: { [key: string]: number }; 
			// 玩家为参与单位key为userid 联盟为参与单位key为gangid
			public InMapOne: { [key: string]: number }; 
			// 总计数
			public InMapSum: number; 
			// 完成任务时间
			public OkTime: number; 
		}
		
		
		export class C2S_MilestoneInfo {	
		}
		
		
		export class S2C_MilestoneInfo {	
			
			public MilestoneDataArr: dbmodel.MilestoneData[]; 
			// 0失败 1成功
			public Ret: number; 
		}
		
		// 领取奖励
		export class C2S_MilestoneAward {	
			// Milestoneid
			public Id: number; 
		}
		
		
		export class S2C_MilestoneAward {	
			// Milestoneid
			public Id: number; 
			
			public Award: data.Item[]; 
			// 0失败 1成功
			public Ret: number; 
		}
		
		
		export class C2S_MilestoneRank {	
			// Milestoneid
			public Id: number; 
		}
		
		
		export class S2C_MilestoneRank {	
			// Milestoneid
			public Id: number; 
			// 玩家为参与单位 竞争排序
			public UserRank: dbmodel.RankDataSlice; 
			// 联盟为参与单位 竞争排序
			public GangRank: dbmodel.RankGangSlice; 
			// 0失败 1成功
			public Ret: number; 
		}
		
		
		export class S2C_NMilestoneInfo {	
			
			public MilestoneData: dbmodel.MilestoneData; 
		}
		
	}
}