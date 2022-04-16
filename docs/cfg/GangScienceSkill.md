namespace ns {
	export namespace cfg {
		export class GangScienceSkill {
			Id: number;		//#ID
			Type: number;		//技能类型
			Btype: number;		//技能分类
			Name: string;		//技能名称
			Des: string;		//技能描述
			Lv: number;		//技能等级
			UpExp: number;		//升下一级所需经验
			Unlock: number;		//解锁前置的条件(技能ID)
			Add: number;		//技能增益
			Add2: number;		//辅助增益
			AddStr: number;		//技能增益描述
			Item1: string;		//高级捐献物品
			Num1: number;		//高级捐献次数上限
			Award1: string;		//高级捐献奖励
			Exp1: number;		//高级捐献一次经验
			Item2: string;		//普通捐献物品
			Num2: number;		//普通捐献次数上限
			Award2: string;		//普通捐献奖励
			Exp2: number;		//普通捐献一次经验
			Odds: string;		//翻倍概率
			UpTime: number;		//升级时间
			FreeTime: number;		//恢复免费间隔
		}
	}
}