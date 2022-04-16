namespace ns {
	export namespace cfg {
		export class HeroSkillLevel {
			Id: number;		//#ID
			SkillId: number;		//技能ID
			Level: number;		//技能等级
			Exp: number;		//经验
			Del: string;		//遗忘获得
			CalcType: number;		//计算类型
			AttrType: number;		//属性类型
			AttrId: number;		//属性ID
			GoAttrId: number;		//出征属性ID
			AppAttrId: number;		//委任属性ID
			AppAttrIdBuild: string;		//委任属性ID建筑
			Power: number;		//战力
			SkillBuff: number;		//技能BUFF
			Type: number;		//类型
			TypeExt: string;		//类型扩展
		}
	}
}