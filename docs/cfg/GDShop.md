namespace ns {
	export namespace cfg {
		export class GDShop {
			Id: number;		//#ID
			Type: number;		//类型0通用1随机
			Item: string;		//一份物品
			Cost: string;		//一份原价
			Min: number;		//一份最低成交价
			Max: number;		//一份最高成交价
			Num: number;		//生成份数
			Limit: number;		//本次刷新最多购买次数（通用不限制次数）
		}
	}
}