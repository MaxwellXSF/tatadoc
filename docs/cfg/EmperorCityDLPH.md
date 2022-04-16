namespace ns {
	export namespace cfg {
		export class EmperorCityDLPH {
			Id: number;		//#ID
			Name: string;		//名称
			Desc: string;		//描述
			Type: number;		//类型
			Money: number;		//需要银两
			BuffID: number;		//buffID（捣乱是失败的惩罚bufid，其他是0）
			XG: number;		//效果（捣乱是掉落id，其他是持续时间）
			Icon: string;		//资源图标
			TipDes: string;		//基本国策国家政策tip描述
			OneMoney: number;		//单次捐献消耗
		}
	}
}