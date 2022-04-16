namespace ns {
	export namespace cfg {
		export class GangAuction {
			Id: number;		//#ID
			Sort: number;		//名次
			Week: number;		//周几
			ShopNum: number;		//上架货架
			ShopItem: string;		//上架商品
			StartPrice: string;		//起拍价
			BuyPrice: string;		//一口价
			End: number;		//竞拍时间
		}
	}
}