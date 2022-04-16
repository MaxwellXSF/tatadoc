namespace ns {
	export namespace cfg {
		export class PlayerBuff {
			Id: number;		//#ID
			Name: string;		//名称
			Desc: string;		//描述
			UIType: number;		//UI类型
			Type: number;		//类型
			CDTime: number;		//冷却时间
			KeepTime: number;		//持续时间
			Num: number;		//生效次数
			AttrId: number;		//属性ID
			Value: number;		//效果值
		}
	}
}