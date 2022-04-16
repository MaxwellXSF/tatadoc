namespace ns {
	export namespace cfg {
		export class GangRed {
			Id: number;		//#ID
			Icon: string;		//图标
			Des: string;		//描述
			Token: number;		//红包代币类型
			Num: number;		//红包代币数量
			Cost: string;		//购买消耗
			Drop: number;		//红包抢完掉落奖励
			SendDes: string;		//发红包默认描述
			ItemId: number;		//对应可以使用的道具id
			OverTime: number;		//红包结束的秒数
		}
	}
}