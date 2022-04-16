namespace ns {
	export namespace cfg {
		export class ActivitySwitch {
			Id: number;		//#表ID序
			ActivityType: number;		//活动类型
			ActivityId: number;		//活动id
			DelayTime: number;		//开服延期时间
			OpenType: number;		//开启类型
			OpenTime: number;		//开启时间
			CloseTime: number;		//前期持续时间
			RewardTime: number;		//后期持续时间
			IntervalTime: number;		//间隔时间
			DayReset: number;		//每日重置
			AFlag: number;		//领取奖励的阶段
			Stages: number;		//Stage个数
			RankActUsers: number;		//排行实际玩家数
			RankShowUsers: number;		//排行显示玩家数
			Desc: string;		//描述
			BtnIcon: string;		//按钮
			AcTypeBg: string;		//背景
			IsMain: number;		//主界面是否显示
			MainIcon: string;		//主界面图标
			RuleId: number;		//规则Id
			SortType: number;		//活动UI类型排序
			Day: number;		//开服类型第几天
			UIMaxType: number;		//活动UI类型
			UIMinType: number;		//对应UI类型的小类型
			SortMinType: number;		//对应UI小类型的排序
			UIThreeType: number;		//对应UI类型的三级类型
			SortThreeType: number;		//对应UI类型的三级类型的排序
			UIMaxTitle: string;		//UI类型名字
			UITwoTitle: string;		//对应UI的二级名字
			UIThreeTitle: string;		//对应UI的三级标签名字
			ShowAward: string;		//展示的奖励
			InfoDes: string;		//活动的详细描述
			IsShow: number;		//显示在活动日历的活动
			ViewImage: string;		//今日推荐底图
		}
	}
}