namespace ns {
	export namespace cfg {
		export class Vip {
			Id: number;		//#ID
			Desc: string;		//描述
			Exp: number;		//升到下一级累计充值经验
			ShopUpdate: number;		//商店刷新次数
			Strength: number;		//体力上限
			Sweep: number;		//扫荡上限
			PlayerCollegeNum: number;		//主公技能数量
			GodBeastHighEat: number;		//神兽高级喂养次数
			AttrId: number;		//属性ID
			DayAward: string;		//每天免费奖励
			Cost: string;		//消耗
			Award: string;		//消耗对应的奖励
			ShowCost: string;		//展示价格
			RedBagRNum: number;		//系统红包领取次数
			RedBagMNum : number;		//系统随机红包生成次数
			MBaoNum: number;		//合成暴击次数
			RentHeroBuy: number;		//租借英雄购买次数
		}
	}
}