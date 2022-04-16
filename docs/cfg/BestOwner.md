namespace ns {
	export namespace cfg {
		export class BestOwner {
			Id: number;		//#ID
			SwitchId: number;		//活动id
			Stage: number;		//阶段
			Day: number;		//开始Day
			EndDay: number;		//结束Day
			Do: number;		//任务
			DScore: number;		//如果具体积分找不到，就默认积分
			Score: string;		//具体积分
			Dsc: string;		//Dsc
			Lab: string;		//Lab
			Des_2: string;		//详细的描述
			Title: string;		//详细积分描述的标题
		}
	}
}