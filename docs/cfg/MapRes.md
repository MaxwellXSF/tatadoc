namespace ns {
	export namespace cfg {
		export class MapRes {
			Id: number;		//#资源索引编号
			Type: number;		//大类型
			SmallTypes: number;		//小类型
			Size: number;		//占用格子
			RemoveFlag: number;		//是否可移除
			PutFlag: number;		//是否可放置单位
			LongEffectID: number;		//远程兵武器ID
			AttPoint: string;		//攻击方偏移坐标
			DefPoint: string;		//防守方偏移坐标
			LongPoint: string;		//远程兵武器偏移坐标
			BuildIcon: string;		//建造图标
			UiIcon: string;		//UI图标
		}
	}
}