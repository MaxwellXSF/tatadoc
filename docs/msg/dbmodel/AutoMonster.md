// Generated by msgts
// DO NOT EDIT!

namespace ns {
	export namespace dbmodel {
	
		
		// 自动打怪
		export const FuncUnlock_AutoMonster:number = 0; 
		
		export const FuncUnlock_Max:number = 1; 
		
		// 自动打怪
		export class AutoMonster {	
			// 战斗信息
			public Info: BattleInfo; 
			// 设置
			public Set: AutoMonsterSet; 
			// 0关闭 1开启
			public Open: number; 
			// 队列ID
			public MarchId: string; 
		}
		
		// 自动打怪设置
		export class AutoMonsterSet {	
			// 0不限等级 1等级高于自己 2等级低于自己
			public TarLv: number; 
			// 医院床位已占80%后停止自动组队
			public Hospital: number; 
			// 战斗失败1次后停止自动组队
			public Fail: number; 
			// 当前次数
			public Num: number; 
			// 设置次数 -1不限次数
			public MNum: number; 
			// 自动恢复体力
			public Strength: number; 
			// 持续时间
			public Time: number; 
		}
		
	}
}
