// Generated by msgts
// DO NOT EDIT!

namespace ns {
	export namespace msg {
		// 使用Treasure
		export class C2S_UseTreasure {	
			// 实例ID
			public Id: string; 
			// 数量
			public Num: number; 
		}
		
		
		export class S2C_UseTreasure {	
			// 0失败 1成功
			public Ret: number; 
			// 奖励
			public Rewards: data.Item[]; 
			
			public TreasureInfo: dbmodel.TreasureData; 
		}
		
		
		export class C2S_TreasureSEx {	
			
			public ExStr: string; 
			
			public NeedUser: number; 
			// NeedUser需要
			public Cost: data.Item[]; 
			// NeedUser提供
			public Award: data.Item[]; 
		}
		
		
		export class S2C_TreasureSEx {	
			
			public ExStr: string; 
			// 0失败 1成功
			public Ret: number; 
		}
		
		// 出兵
		export class C2S_WMTreasure {	
			// 坐标
			public Pos: dbmodel.Point; 
			// 战斗信息
			public Info: dbmodel.BattleInfo; 
		}
		
		
		export class S2C_WMTreasure {	
			// 0失败 1成功
			public Ret: number; 
		}
		
		
		export class C2S_TreasureList {	
		}
		
		
		export class S2C_TreasureList {	
			// 0失败 1成功
			public Ret: number; 
			
			public TreasurMap: { [key: string]: dbmodel.TreasureData }; 
		}
		
		
		export class C2S_TreasureInfo {	
			// 坐标
			public Pos: dbmodel.Point; 
		}
		
		
		export class S2C_TreasureInfo {	
			// 0失败 1成功
			public Ret: number; 
			
			public TreasureInfo: dbmodel.TreasureData; 
		}
		
		
		export class C2S_TreasureTS {	
			// 坐标
			public Pos: dbmodel.Point; 
			
			public Cost: data.Item[]; 
		}
		
		
		export class S2C_TreasureTS {	
			// 0失败 1成功
			public Ret: number; 
			
			public Award: data.Item[]; 
		}
		
		
		export class S2C_NTreasureInfo {	
			// 0change 1add 2del
			public Do: number; 
			
			public TreasureInfo: dbmodel.TreasureData; 
		}
		
		
		export class C2S_MusterMarchNum {	
			// 英雄ID
			public CIds: number[]; 
		}
		
		
		export class S2C_MusterMarchNum {	
			// 0失败 1成功
			public Ret: number; 
			// 上阵数量
			public Num: number; 
		}
		
		
		export class S2C_NOnline {	
			// 这次登录在线开始计算时间
			public OnlineStart: number; 
			// 这次登录前已经累积在线秒数
			public OnlineSecs: number; 
			// 领取过列表
			public OnlineLs: { [key: string]: number }; 
		}
		
		
		export class C2S_OnlineAward {	
			
			public AwardId: string[]; 
		}
		
		
		export class S2C_OnlineAward {	
			// 0失败 1成功
			public Ret: number; 
			
			public AwardId: string[]; 
			
			public Award: data.Item[]; 
			
			public OnlineLs: { [key: string]: number }; 
		}
		
		// 收红包抢红包
		export class C2S_RRedBag {	
			// 红包实例id
			public Redid: number; 
		}
		
		
		export class S2C_RRedBag {	
			// 0失败 1成功 2曾经抢过 3已经抢完 4没次数
			public Ret: number; 
			
			public RedLog: dbmodel.RedLog; 
		}
		
		// 同步一个红包状态
		export class S2C_NRedBagLog {	
			
			public RedLog: dbmodel.RedLog; 
		}
		
		
		export class S2C_NRedBagTarId {	
			
			public TarId: string; 
		}
		
		// 查看红包列表状态
		export class C2S_LRedBag {	
		}
		
		
		export class S2C_LRedBag {	
			
			public RedLogList: dbmodel.RedLog[]; 
			// 0失败 1成功
			public Ret: number; 
		}
		
	}
}