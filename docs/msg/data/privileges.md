// Generated by msgts
// DO NOT EDIT!

namespace ns {
	export namespace data {
		// 特权表
		export class PrivilegesConf {	
			// RechargeType
			public Type: number; 
			// 特权描述
			public Desc: string; 
			// 特权一次领取礼包待开放
			public Award: Item[]; 
			// 每日礼包奖励
			public Gift: Item[]; 
			// 特权Attr
			public Attr: number; 
			
			public Castle: number; 
		}
		
		
		export class GrowFundAwardConf {	
			// ID
			public Level: number; 
			// 特权描述
			public Desc: string; 
			// 奖励
			public Award: Item[]; 
		}
		
	}
}