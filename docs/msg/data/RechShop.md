// Generated by msgts
// DO NOT EDIT!

namespace ns {
	export namespace data {
	// 充值类型
		
		// 0普通
		export const RechType_Base:number = 0; 
		// 1首冲
		export const RechType_First:number = 1; 
		// 2Week
		export const RechType_Week:number = 2; 
		// 3成长基金
		export const RechType_GrowFund:number = 3; 
		// 4福袋
		export const RechType_LuckBag:number = 4; 
		// 5特惠礼包
		export const RechType_YouHuiBag:number = 5; 
		// 6每日补给
		export const RechType_MRBJ:number = 6; 
		// 7聚宝盆
		export const RechType_JBP:number = 7; 
		// 8高级金榜
		export const RechType_GJJB:number = 8; 
		// 9英雄图鉴
		export const RechType_HeroTJ:number = 9; 
		// 10月卡
		export const RechType_Month:number = 10; 
		// 11内部
		export const RechType_Inside:number = 11; 
		// 12超值英雄礼包
		export const RechType_SHeroGift:number = 12; 
		// 13HeroGift
		export const RechType_HeroGift:number = 13; 
		// 14触发礼包
		export const RechType_TriggerGift:number = 14; 
		// 15首冲2
		export const RechType_Recharge2:number = 15; 
		// 16终身卡
		export const RechType_Life:number = 16; 
		// 17红蓝对撞
		export const RechType_RedBlue:number = 17; 
		// 18星座占卜
		export const RechType_Star:number = 18; 
		// 19vip
		export const RechType_Vip:number = 19; 
		// 20LeapGift
		export const RechType_LeapGift:number = 20; 
		// 21周卡定制
		export const RechType_WeekS:number = 21; 
		// 22每日登录限时礼包
		export const RechType_DayLogin:number = 22; 
		// 23历练之路
		export const RechType_RoadTask:number = 23; 
		// 24gangtask每周活跃
		export const RechType_GangTaskCJB:number = 24; 
		// 25gangtask每周至尊
		export const RechType_GangTaskGJB:number = 25; 
		
		// 充值商品表
		export class RechShopConf {	
			
			public Id: number; 
			// 金额
			public Money: number; 
			// 钻石
			public Cash: number; 
			// 奖励
			public Award: Item[]; 
			// 名称
			public Name: string; 
			// 描述
			public Des: string; 
			// 图示
			public Icon: string; 
			// 类型
			public Type: number; 
			// 运营方
			public Operate: number; 
			// 活动索引
			public ActivityIndex: number; 
			// cp产品ID
			public CpID: string; 
			// UIMoney
			public UIMoney: string; 
		}
		
	}
}
