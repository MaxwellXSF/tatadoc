namespace ns {
	export namespace cfg {
		export class gang {
			Id: number;		//#ID
			Level: number;		//等级
			Exp: number;		//升级所需经验
			Limit: number;		//当前等级可容人数
			Money: number;		//消耗帮派资金
			Elders: string;		//[长老个数，所需贡献]
			Elites: string;		//[精英个数，所需贡献]
			ShopDis: number;		//商店折扣
			Copy: number;		//出阵上限人数
		}
	}
}