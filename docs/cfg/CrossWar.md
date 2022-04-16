namespace ns {
	export namespace cfg {
		export class CrossWar {
			Id: number;		//#ID
			Name: string;		//名称
			Desc: string;		//描述
			MapId: number;		//地图ID
			SvrArr: string;		//服务器租
			Type: number;		//类型
			Week: number;		//周几开始
			FrontTime: number;		//前期时间
			KeepTime: number;		//持续时间
			AfterTime: number;		//后期时间
			RoundTime: string;		//每轮时间
			RankType: number;		//排名类型
			Rank: number;		//排名限制
			AwardRank: number;		//奖励排名
			DefSec: number;		//防护罩秒数
			KickSec: number;		//踢出秒数
			SpeedOdds: number;		//行军速度比率
			RecTime: number;		//恢复时间
			RecOdds: number;		//恢复比率
			MonTime: number;		//刷怪时间
			MiniMap: string;		//小地图信息
		}
	}
}