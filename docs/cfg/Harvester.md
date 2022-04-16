namespace ns {
	export namespace cfg {
		export class Harvester {
			Id: number;		//#lv
			Cost: string;		//升到下一级消耗
			Secs: number;		//本级可以自动收获时间秒数
			Odds: string;		//收获翻倍概率
			Des: string;		//描述
		}
	}
}