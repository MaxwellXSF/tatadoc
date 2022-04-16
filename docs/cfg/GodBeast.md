namespace ns {
	export namespace cfg {
		export class GodBeast {
			Id: number;		//#ID
			Name: string;		//名称
			Desc: string;		//描述
			EggRes: number;		//蛋资源
			Res: number;		//资源
			Type: number;		//类型
			HatchCost: string;		//孵化消耗
			HatchLimit: string;		//孵化限制
			HatchCostCash: string;		//孵化消耗钻石
			HatchLimitCash: number;		//孵化限制钻石
			HatchTime: number;		//孵化时间
			HatchTimeCash: number;		//孵化时间钻石
			LowEatCost10: string;		//低级喂养消耗10次
			HighEatCost: number;		//高级喂养消耗道具
			SkillArr: string;		//被动技能
			UseSkill: number;		//主动技能
		}
	}
}