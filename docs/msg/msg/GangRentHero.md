// Generated by msgts
// DO NOT EDIT!

namespace ns {
	export namespace msg {
		// 联盟租英雄更新
		export class S2C_GangRHUp {	
			// 每日共合计可被租借次数
			public RentHeroNum: number; 
			// 每日免费租借次数
			public RentHeroFree: number; 
			// 每日购买租借次数
			public RentHeroBuy: number; 
			// 每日已用购买租借次数
			public RentHeroUse: number; 
		}
		
		// 信息对象
		export class GangRHObj {	
			// 实例ID
			public Id: string; 
			// 角色ID
			public UId: number; 
			// 名字
			public Name: string; 
			// 头像
			public Head: string; 
			// 等级
			public Lv: number; 
			// 次数
			public Num: number; 
			// 英雄对象
			public Hero: dbmodel.HeroObj; 
		}
		
		// 联盟租英雄查询
		export class C2S_GangRHQuery {	
			// 客户端标记
			public Flag: string; 
		}
		
		
		export class S2C_GangRHQuery {	
			// 0失败 1成功
			public Ret: number; 
			// 列表
			public List: GangRHObj[]; 
			// 客户端标记
			public Flag: string; 
		}
		
		// 联盟租英雄出租
		export class C2S_GangRHRent {	
			// 英雄ID
			public Ids: number[]; 
		}
		
		
		export class S2C_GangRHRent {	
			// 0失败 1成功
			public Ret: number; 
		}
		
		// 联盟租英雄购买次数
		export class C2S_GangRHBuyNum {	
		}
		
		
		export class S2C_GangRHBuyNum {	
			// 0失败 1成功
			public Ret: number; 
		}
		
	}
}
