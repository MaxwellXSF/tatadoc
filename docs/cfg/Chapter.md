namespace ns {
	export namespace cfg {
		export class Chapter {
			Id: number;		//#ID
			Name: string;		//名称
			Desc: string;		//描述
			Stage: string;		//进度
			BuildId: string;		//赠送建筑
			BuildState: number;		//赠送建筑状态
			ArmId: string;		//赠送士兵
			ArmAuto: number;		//士兵自动判断
			SubtitleId: number;		//弹幕ID
		}
	}
}