namespace ns {
	export namespace cfg {
		export class EmperorCityGCZL {
			Id: number;		//#ID
			Name: string;		//名称
			Desc: string;		//描述
			Pos: string;		//需要职位
			Type: number;		//类型
			MinType: number;		//客户端专用小类型
			CDTime: number;		//冷却时间
			KeepTime: number;		//持续时间
			ZC: number;		//0只能使用国库资金 1可以通过筹集资金
			Money: number;		//需要银两
			PBuffID: number;		//玩家buffID
			CBuffItemID: number;		//主城buf填物品id
			Icon: string;		//图标资源
			LimitDL: string;		//客户端专用限制捣乱
			TSData: string;		//客户端专用特殊参数
		}
	}
}