// Generated by msgts
// DO NOT EDIT!

namespace ns {
	export namespace dbmodel {
	
		
		
		export const CrossWarType_Null:number = 0; 
		// 1跨服乱斗
		export const CrossWarType_1:number = 1; 
		
	
		
		// 未开启
		export const CrossWarState_Null:number = 0; 
		// 前期
		export const CrossWarState_Front:number = 1; 
		// 持续
		export const CrossWarState_Keep:number = 2; 
		// 后期
		export const CrossWarState_After:number = 3; 
		// 完成
		export const CrossWarState_Finish:number = 4; 
		
	
		
		
		export const CrossWarRankAward_Null:number = 0; 
		// 1每轮
		export const CrossWarRankAward_Round:number = 1; 
		// 2总榜
		export const CrossWarRankAward_Sum:number = 2; 
		
		// 基础数据
		export class CrossWarBase {	
			// 配置ID
			public CId: number; 
			// CrossWarType
			public Type: number; 
			// 前期时间
			public FrontTime: number; 
			// 开始时间
			public StartTime: number; 
			// 结束时间
			public EndTime: number; 
			// 后期时间
			public AfterTime: number; 
			// 第几轮
			public Round: number; 
			// CrossWarState
			public State: number; 
		}
		
		// 每轮数据
		export class CrossWarRound {	
			// 第几轮
			public Round: number; 
			// 开始时间
			public StartTime: number; 
			// 结束时间
			public EndTime: number; 
		}
		
		// 服务器分组
		export class CrossWarSvrArr {	
			// 跨服ID
			public CrossId: number; 
			// 服务器组
			public SvrArr: number[]; 
			// 场景ID
			public SceneId: string; 
		}
		
		
		export class CrossWarData {	
			// 配置ID
			public Id: number; 
			// 基础数据
			public Base: CrossWarBase; 
			// 每轮数据
			public Round: { [key: string]: CrossWarRound }; 
			// 服务器分组
			public Svr: { [key: string]: CrossWarSvrArr }; 
		}
		
		
		export class CrossWarUser {	
			// 跨服活动配置ID
			public CId: number; 
			// 地图ID
			public MId: number; 
		}
		
	}
}
