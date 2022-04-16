namespace ns {
	export namespace cfg {
		export class HeroSkillBuff {
			Id: number;		//#ID
			Type: number;		//触发类型
			HType: number;		//目标处理类型
			Odds: number;		//概率
			SNum: number;		//总次数
			Num: number;		//次数
			SelfArmType: string;		//释放兵种类型
			ArmType: string;		//兵种类型
			TarType: number;		//目标类型
			TarNum: number;		//目标数量
			BuffType: number;		//Buff类型
			BuffKind: number;		//Buff分类
			Round: number;		//回合
			AttrType: number;		//属性类型
			AttrId: number;		//100点属性ID
			BaseAttrId: number;		//基础属性ID
			NameIcon: string;		//名称图片
			Desc: string;		//描述
			EffectId: number;		//光效配置ID
		}
	}
}