// Generated by msgts
// DO NOT EDIT!

namespace ns {
	export namespace data {
	
		
		// 0UnKnow
		export const ActHZLH_0:number = 0; 
		// 采集资源总量达到指定数量（不限类型）
		export const ActHZLH_1:number = 1; 
		// 消耗指定数量的指定道具
		export const ActHZLH_2:number = 2; 
		// 训练指定数量的指定兵种（不限等级）
		export const ActHZLH_3:number = 3; 
		// 英雄高级招募指定次数（10连抽按10次计算）
		export const ActHZLH_4:number = 4; 
		// 消耗指定数量钻石
		export const ActHZLH_5:number = 5; 
		// 使用加速道具时间累计达到指定时间（不限道具类型，行军加速除外）
		export const ActHZLH_6:number = 6; 
		// 击败指定数量野怪（不限类型等级）
		export const ActHZLH_7:number = 7; 
		// 炼金指定次数
		export const ActHZLH_8:number = 8; 
		// 累计登入指定天数（按时间登入天数计算）
		export const ActHZLH_9:number = 9; 
		// 随机商店购买商品指定次数（不限商品）
		export const ActHZLH_10:number = 10; 
		// 攻击锤子怪指定次数（不限等级）
		export const ActHZLH_11:number = 11; 
		// 联盟科技捐献指定次数。（不限科技）
		export const ActHZLH_12:number = 12; 
		
		
		export type Arr = number[]
		
		
		export type Pos = number[]
		
		
		export class ActivityCommConf {	
			// 礼包ID
			public Id: number; 
			// 活动id
			public SwitchId: string; 
			
			public Value: number; 
			// 活动针对对象
			public Tar: number; 
			// 奖励
			public Reward: Item[]; 
			
			public BG: string; 
			
			public Lab: string; 
			
			public Jump: string; 
		}
		
		
		export class ActivityVipConf {	
			// 礼包ID
			public Id: number; 
			// 活动id
			public SwitchId: string; 
			
			public Vip: number; 
			
			public Value: number; 
			// Cost
			public Cost: Item[]; 
			// 奖励
			public Reward: Item[]; 
			
			public BG: string; 
			
			public Lab: string; 
		}
		
		
		export class ActivityHZLHConf {	
			// 礼包ID
			public Id: number; 
			// 活动id
			public SwitchId: string; 
			// 格子任务
			public Do: number; 
			// 前置
			public YL: number[]; 
			// 值
			public Value: number; 
			// 针对对象
			public Tar: number; 
			// 奖励
			public Reward: Item[]; 
			// 格子顺序
			public SX: number; 
			// BG
			public BG: string; 
			// Lab
			public Lab: string; 
			// JumpData
			public JumpData: string; 
		}
		
		
		export class BestOwnerConf {	
			// ID
			public Id: number; 
			// 活动id
			public SwitchId: string; 
			// 阶段
			public Stage: number; 
			// Day
			public MinDay: number; 
			// Day
			public MaxDay: number; 
			// 任务
			public Do: number; 
			// 如果具体积分找不到，就默认积分
			public DScore: number; 
			// 具体积分
			public Score: Arr[]; 
			// Dsc
			public Dsc: string; 
			// Lab
			public Lab: string; 
			// Dsc2
			public Dsc2: string; 
			// Dsc2
			public Dsc3: string; 
		}
		
		
		export class BestOwnerScoreAwardConf {	
			// ID
			public Id: number; 
			// 活动id
			public SwitchId: string; 
			// 阶段
			public Stage: number; 
			// 值
			public Value: number; 
			// 奖励
			public Reward: Item[]; 
			// BG
			public BG: string; 
		}
		
		
		export class BestOwnerRankAwardConf {	
			// ID
			public Id: number; 
			// 活动id
			public SwitchId: string; 
			// 类型
			public Type: number; 
			// Dsc
			public Dsc: string; 
			// 排名名次数字小
			public MinNum: number; 
			// 排名名次数字大
			public MaxNum: number; 
			// 奖励
			public Award: Item[]; 
		}
		
		
		export class ForbesConf {	
			// Lev      int    //	Lev
			public Id: number; 
			// 升到下一等级所需的经验
			public Exp: number; 
			// 普通奖励
			public CAward: Item[]; 
			// 高级奖励
			public GAward: Item[]; 
			// 活动id
			public SwitchId: string; 
		}
		
		
		export class ActivityForbesConf {	
			// 礼包ID
			public Id: number; 
			// 活动id
			public SwitchId: string; 
			// 格子任务
			public Do: number; 
			// 0常规1每日
			public Type: number; 
			// 刷新概率
			public Odds: number; 
			// 值
			public Value: number; 
			// 针对对象
			public Tar: number; 
			// 奖励
			public Reward: Item[]; 
			// 加的经验
			public AddExp: number; 
			// 进度描述
			public Lab: string; 
			// 跳转id
			public JumpData: string; 
			// 标签类型
			public TabType: string; 
			// 标签类型
			public TabName: string; 
			// ShowId
			public ShowId: string; 
		}
		
		
		export class ActivityCZGConf {	
			// ID
			public Id: number; 
			// 活动id
			public SwitchId: string; 
			
			public Tarid: number; 
			
			public PS: number; 
			
			public GS: number; 
		}
		
		
		export class ActivityCZGScoreAwardConf {	
			// ID
			public Id: number; 
			// 活动id
			public SwitchId: string; 
			// 值
			public Value: number; 
			// 奖励
			public Reward: Item[]; 
			// BG
			public BG: string; 
		}
		
		
		export class ActivityCZGRankAwardConf {	
			// ID
			public Id: number; 
			// 活动id
			public SwitchId: string; 
			// 排名名次数字小
			public MinNum: number; 
			// 排名名次数字大
			public MaxNum: number; 
			// 奖励
			public PAward: Item[]; 
			// 奖励
			public GAward: Item[]; 
		}
		
		
		export class ActivityPowerScoreAwardConf {	
			// ID
			public Id: number; 
			// 活动id
			public SwitchId: string; 
			// 类型
			public Type: number; 
			// 值
			public Value: number; 
			// 奖励
			public Reward: Item[]; 
			// BG
			public BG: string; 
		}
		
		
		export class ActivityPowerRankAwardConf {	
			// ID
			public Id: number; 
			// 活动id
			public SwitchId: string; 
			// 排名名次数字小
			public MinNum: number; 
			// 排名名次数字大
			public MaxNum: number; 
			// 奖励
			public Award: Item[]; 
		}
		
		
		export class ActivityStarRankAwardConf {	
			// ID
			public Id: number; 
			// 活动id
			public SwitchId: string; 
			// 排名名次数字小
			public MinNum: number; 
			// 排名名次数字大
			public MaxNum: number; 
			// 奖励
			public Award: Item[]; 
		}
		
		
		export class ActivityStarRechargeAwardConf {	
			// ID
			public Id: number; 
			// 活动id
			public SwitchId: string; 
			// RecType
			public RecType: number; 
			// RecIndex
			public RecIndex: number; 
			// 奖励
			public Award: Item[]; 
			// 客户端展示的东西
			public OhterData: string; 
		}
		
		
		export class ActivityStarOpenAwardConf {	
			// ID
			public Id: number; 
			// 活动id
			public SwitchId: string; 
			// Card
			public Card: number; 
			// 奖励
			public Award: Item[]; 
			// 客户端展示的东西
			public C1: string; 
			// 客户端展示的东西
			public C2: string; 
			
			public Odds: number; 
			
			public LOdds: number; 
		}
		
		
		export class ActivityStarLunAwardConf {	
			// ID
			public Id: number; 
			// 活动id
			public SwitchId: string; 
			// Lun
			public Lun: number; 
			// 奖励
			public Award: Item[]; 
			// 客户端展示的东西
			public OhterData: string; 
		}
		
		
		export class ActivityStarChoiceAwardConf {	
			// ID
			public Id: number; 
			// 活动id
			public SwitchId: string; 
			// Seq
			public Seq: number; 
			// 奖励
			public Award: Item[]; 
		}
		
		
		export class ActivityTeamTaskDayConf {	
			// ID
			public Id: number; 
			// 描述
			public Describe: string; 
			// 类型
			public Type: number; 
			// 目标id
			public TarId: number; 
			// 完成条件
			public Condition: number; 
			// 奖励列表
			public Award: Item[]; 
			// 刷新概率
			public Odds: number; 
			
			public TeamExp: number; 
			// 跳转id
			public Jump: string; 
		}
		
		
		export class QZBLConf {	
			
			public Id: number; 
			// 活动id
			public SwitchId: string; 
			// 类型
			public Type: number; 
			// 排序
			public Order: number; 
			// 达标值
			public Ok: number; 
			// 奖励
			public Award: Item[]; 
			// 描述
			public Txt: string; 
		}
		
		
		export class ActivityRedBlueConf {	
			
			public Id: number; 
			// 活动id
			public SwitchId: string; 
			// 奖励
			public Reward: Item[]; 
			// 显示出来的图标
			public UI_Icon: string; 
		}
		
		
		export class ActivityHeroLineLookConf {	
			// ID
			public Id: number; 
			// 活动id
			public SwitchId: string; 
			// Card
			public Card: number; 
			// 客户端展示的东西
			public C1: string; 
			// 客户端展示的东西
			public C2: string; 
			
			public Odds: number; 
		}
		
		
		export class ActivityHeroLineLookAwardConf {	
			// ID
			public Id: number; 
			// 活动id
			public SwitchId: string; 
			
			public ANum: number; 
			
			public BNum: number; 
			
			public CNum: number; 
			// 奖励
			public Award: Item[]; 
			// 客户端展示的东西
			public C1: string; 
			// 客户端展示的东西
			public C2: string; 
		}
		
		
		export class ActivityHeroLineTaskAwardConf {	
			// 礼包ID
			public Id: number; 
			// 活动id
			public SwitchId: string; 
			// 格子任务
			public Do: number; 
			// 值
			public Value: number; 
			// 针对对象
			public Tar: number; 
			// 奖励
			public Reward: Item[]; 
			// Lab
			public Lab: string; 
			// JumpData
			public JumpData: string; 
			// BG
			public BG: string; 
		}
		
		
		export class DayLoginConf {	
			// 礼包ID
			public Id: number; 
			// 类型 1:每周 2:开服
			public Type: number; 
			// 倒计时
			public Secs: number; 
			// 周几0-6
			public Week: number; 
			// Rech类型
			public RechType: number; 
			// Rech索引
			public RechIndex: number; 
			// 显示原价的金额
			public UIMoney: string; 
		}
		
	}
}
