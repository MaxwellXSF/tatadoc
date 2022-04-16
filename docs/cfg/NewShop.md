namespace ns {
	export namespace cfg {
		export class NewShop {
			Id: number;		//#ID
			Type: number;		//标签类型
			LimitType: number;		//限购类型
			Limit: number;		//限购次数
			Add: number;		//递增
			Discount: number;		//折扣
			Item: string;		//物品
			Cost: string;		//消耗
			Vip: number;		//Vip
			GangLv: number;		//家族解锁等级
			Min: number;		//最小等级
			Max: number;		//最大等级
			Odds: number;		//刷新概率
			Extend: number;		//扩展字段
		}
	}
}