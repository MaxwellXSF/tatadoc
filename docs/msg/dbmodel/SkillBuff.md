// Generated by msgts
// DO NOT EDIT!

namespace ns {
	export namespace dbmodel {
	// 触发类型
		
		
		export const SkillBuffEvent_Null:number = 0; 
		// 攻击前
		export const SkillBuffEvent_Att_Before:number = 1; 
		// 攻击后
		export const SkillBuffEvent_Att_After:number = 2; 
		// 受击前
		export const SkillBuffEvent_Hit_Before:number = 3; 
		// 受击后
		export const SkillBuffEvent_Hit_After:number = 4; 
		// 战斗前
		export const SkillBuffEvent_Battle_Before:number = 5; 
		// 战斗后
		export const SkillBuffEvent_Battle_After:number = 6; 
		
	// 目标类型
		
		
		export const SkillBuffTar_Null:number = 0; 
		// 自己
		export const SkillBuffTar_Self:number = 1; 
		// 我方
		export const SkillBuffTar_Our:number = 2; 
		// 敌方
		export const SkillBuffTar_Tar:number = 3; 
		
	// Buff类型
		
		
		export const SkillBuffType_Null:number = 0; 
		// 属性
		export const SkillBuffType_Attr:number = 1; 
		// 加血
		export const SkillBuffType_AddHp:number = 2; 
		// 扣血
		export const SkillBuffType_DecHp:number = 3; 
		
		
		export class SkillBuff {	
			
			public Conf: data.HeroSkillBuffConf; 
			// 实例ID
			public Id: string; 
			// 配置ID
			public CId: number; 
			// 回合
			public Round: number; 
			// 数值
			public Value: number; 
			// 释放者英雄3维系数
			public AttrOdds: number[]; 
			// 释放者属性
			public TarSumAttr: SumAttr; 
			// 释放者兵种
			public TarArm: PVPBattleArm; 
			// 计算类型
			public CalcType: number; 
		}
		
	}
}
