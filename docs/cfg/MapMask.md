namespace ns {
	export namespace cfg {
		export class MapMask {
			Id: number;		//#编号
			BasePos: string;		//地图起始点
			ExtendTile: string;		//附送格子
			ExtendTileOpenId: number;		//关联ID
			NearIndex: string;		//邻近大格编号
			UnlockIndex: number;		//解锁顺序
		}
	}
}