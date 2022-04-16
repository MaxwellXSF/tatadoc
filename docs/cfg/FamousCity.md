namespace ns {
	export namespace cfg {
		export class FamousCity {
			Id: number;		//#ID
			Type: number;		//类型
			Name: string;		//名称
			Desc: string;		//描述
			MapResId: number;		//地图资源ID
			Pos: string;		//坐标
			Icon: string;		//UI图标
			SpecialReward: string;		//特殊奖励
			Hero: string;		//武将
			Arms: string;		//士兵
			MaxWin: number;		//占领胜利值
			GetWin: number;		//占领名城后每分钟获得占领值
			AttrId: number;		//增益属性
		}
	}
}