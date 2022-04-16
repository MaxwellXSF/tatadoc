namespace ns {
	export namespace cfg {
		export class WorldMapResource {
			Id: number;		//#ID
			Name: string;		//名字
			Desc: string;		//描述
			Res: number;		//外观
			Time: number;		//刷新时间(秒)
			Level: number;		//等级
			DropId: number;		//奖励
			Num: number;		//数量
			Type: number;		//类型
			GetMax: number;		//采集容量
			Value: number;		//采集产出(小时)
			ValueId: number;		//采集产出货币
			LandId: string;		//对应地块ID
			MapId: number;		//地图ID
		}
	}
}