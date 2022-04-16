namespace ns {
	export namespace cfg {
		export class Treasure {
			Id: number;		//#ID
			Icon: string;		//图标
			Des: string;		//描述
			Type: number;		//类型
			Quality: number;		//品质
			StartAward: string;		//发起者奖励
			MapResId: number;		//地图资源ID
			Times: number;		//宝藏时效
			TSCost: string;		//探索消耗
			TSAward: string;		//捐献探索奖励
			Wa: number;		//挖掘值
			WaAwardItemId: number;		//挖掘宝箱奖励
			WaAwardItemNum: number;		//挖掘宝箱奖励总数量
		}
	}
}