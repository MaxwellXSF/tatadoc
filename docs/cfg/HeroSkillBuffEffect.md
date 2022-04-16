namespace ns {
	export namespace cfg {
		export class HeroSkillBuffEffect {
			Id: number;		//#ID
			Desc: string;		//技能描述
			Target: number;		// 作用目标
			Range: number;		//光效范围
			ViewType: number;		//技能类型
			ArmyType: string;		//影响兵种
			StartEff: string;		//施法光效
			StartAction: string;		//施法动作
			FootEff: string;		//脚底光效
			BodyEff: string;		//身上光效
			HitEff: string;		//受击光效
			AddBuff: string;		//增加BUFF
			ClearBuff: string;		//清除BUFF
			DFirstTime: number;		//伤害判定
			DCount: number;		//伤害次数
			Dspeed: number;		//伤害间隔
		}
	}
}