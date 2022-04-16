namespace ns {
	export namespace wx {
		export interface StartInfo {
			StartTime: string;				//开始时间
			EndTime: string;				//结束时间
			WaitTime: string;				//等待时间
		}

		export interface PhoneCode {
			Award: number[][];				//奖励
			AppointNum: number;				//预约人数
		}

		export interface Conf {
			1: number[][];				//
			3: number[][];				//
			5: number[][];				//
			7: number[][];				//
		}

		export interface ShareAward {
			Conf: Conf;				//配置表
		}

		export interface Conf {
			2: number[][];				//
			5: number[][];				//
			8: number[][];				//
		}

		export interface Team {
			Conf: Conf;				//配置表
			LeadAward: number[][];				//队长奖励
			MaxNum: number;				//队伍最大总人数
		}

		export interface Conf {
			8: number[][];				//
			16: number[][];				//
			24: number[][];				//
		}

		export interface Rank {
			rank_1_1: number[][];				//
			rank_2_3: number[][];				//
			rank_4_5: number[][];				//
			rank_6_10: number[][];				//
			rank_11_20: number[][];				//
			rank_21_50: number[][];				//
			rank_51_100: number[][];				//
			rank_101_500: number[][];				//
		}

		export interface Game {
			difficulty: number[];				//小游戏难度
			Conf: Conf;				//配置表
			MaxNum: number;				//最大次数
			Rank: Rank;				//排行奖励
			RankNum: number;				//排行数量
		}

		export interface CeShiData {
			uid: number;				//玩家id
			inviteId: string;				//邀请ID
		}

		export interface Mail {
			GameTitle: string;				//游戏标题
			GameText: string;				//游戏内容
			TeamTitle: string;				//组队标题
			TeamText: string;				//组队内容
			TeamLeaderTitle: string;				//组队队长标题
			TeamLeaderText: string;				//组队队长内容
			BagTitle: string;				//背包标题
			BagText: string;				//背包内容
		}

		export interface WXAppointData {
			StartInfo: StartInfo;				//开始信息
			PhoneCode: PhoneCode;				//验证码
			ShareAward: ShareAward;				//分享有礼
			Team: Team;				//组队
			Game: Game;				//游戏
			CeShiData: CeShiData;				//测试数据
			Mail: Mail;				//邮件
		}

	}
}
