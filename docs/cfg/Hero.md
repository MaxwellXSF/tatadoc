namespace ns {
	export namespace cfg {
		export class Hero {
			Id: number;		//#ID
			Name: string;		//名称
			Title: string;		//称号
			Desc: string;		//描述
			Type: number;		//类型
			Quality: number;		//品质
			MarchNum: number;		//出征数量
			HeadIcon: string;		//头像资源
			ArmType: number;		//兵种类型
			JBDesc: string;		//羁绊描述
			Fragment: number;		//碎片ID
			Merge: number;		//合成消耗
			Split: number;		//分解获得
			GoAttrId: number;		//出征属性ID
			AppAttrId: number;		//委任属性ID
			RentAttrId: number;		//租借英雄属性ID
			BaseAttr: string;		//基础属性
			SkillId: string;		//初始技能
			StarCost: string;		//升星消耗
			StarAttr: string;		//升星属性
			Sound: string;		//
			SkillIcon: string;		//技能图标
			TJSkills: string;		//推荐技能
			HeroDes: string;		//英雄介绍
			GraspCost: string;		//领悟消耗
		}
	}
}