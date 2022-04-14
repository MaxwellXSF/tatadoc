// Generated by msgts
// DO NOT EDIT!

namespace ns {
	export namespace dbmodel {
		
		export type GiftULogs = { [key: string]: GiftULog }
		
		
		export class EmperorCityBattleLog {	
			// 时间
			public Time: number; 
			// uid
			public UId: number; 
			// 联盟ID
			public GId: number; 
			// 联盟代号
			public GCode: string; 
			// 玩家名字
			public UName: string; 
			// 玩家头像
			public UHead: string; 
			// 0false 1win
			public Win: number; 
		}
		
		
		export class EmperorCityOwner {	
			// 就任时间
			public Time: number; 
			// uid
			public UId: number; 
			// 联盟ID
			public GId: number; 
			// 联盟代号
			public GCode: string; 
			// 玩家名字
			public UName: string; 
			// 玩家头像
			public UHead: string; 
			// 国家名称
			public Name: string; 
			// 诏书内容
			public Notice: string; 
			// 皇帝任命后本轮活动中无法变更
			public Set: boolean; 
			// 是否是外服当皇帝
			public BOther: boolean; 
		}
		
		
		export class EmperorCityPos {	
			
			public Pos: number; 
			// 就任时间
			public Time: number; 
			// 联盟代号
			public GCode: string; 
			// uid
			public UId: number; 
			// 玩家名字
			public UName: string; 
			// 玩家头像
			public UHead: string; 
			
			public Power: number; 
		}
		
		
		export class GiftULog {	
			
			public Gift: number; 
			// 时间
			public Time: number; 
			// uid
			public UId: number; 
			// 玩家名字
			public UName: string; 
			// 玩家头像
			public UHead: string; 
		}
		
		
		export class ResLog {	
			
			public Items: data.Item[]; 
			// 时间
			public Time: number; 
			// 主玩家
			public Name1: string; 
			// 副玩家
			public Name2: string; 
			// 0给1交
			public Event: number; 
		}
		
		
		export class DLPHLog {	
			
			public DLPH: number; 
			// 时间
			public Time: number; 
			// uid
			public UId: number; 
			// 玩家名字
			public UName: string; 
			// 玩家头像
			public UHead: string; 
			// 联盟代号
			public GCode: string; 
			
			public Pos: Point; 
			
			public Ex: number; 
		}
		
		
		export class EmperorCityMoneyUser {	
			
			public UserId: number; 
			
			public GangId: number; 
			// 每个玩家积分
			public Score: number; 
		}
		
		
		export class EmperorCityGCZLLog {	
			// ID
			public Id: number; 
			// 时间
			public Time: number; 
			// uid
			public UId: number; 
			// 玩家名字
			public UName: string; 
			// 玩家头像
			public UHead: string; 
			// 联盟代号
			public GCode: string; 
			// Tar玩家id
			public TUId: number; 
			// Tar玩家名字
			public TUName: string; 
			// Tar玩家头像
			public TUHead: string; 
			// Tar联盟代号
			public TGCode: string; 
			// 坐标
			public TPos: Point; 
		}
		
		
		export class EmperorCityGCZL {	
			// ID
			public Id: number; 
			// 类型
			public Type: number; 
			// 冷却时间
			public CDTime: number; 
			// 持续时间
			public KeepTime: number; 
			// 0ready 1open
			public State: number; 
			// 已经凑集银两
			public Money: number; 
			
			public MaxMoney: number; 
			// buffID
			public PBuffID: number; 
			// 主城buf填物品id
			public CItemID: number; 
			
			public TUid: number; 
		}
		
		
		export class DLPHObj {	
			
			public Time: number; 
			
			public Money: number; 
		}
		
		
		export class EmperorCityData {	
			// id
			public Id: string; 
			// 本轮运行时间
			public RunTime: number; 
			// Act时间
			public ActTime: number; 
			
			public OwnerCur: EmperorCityOwner; 
			
			public PosList: { [key: string]: EmperorCityPos }; 
			
			public PosCD: { [key: string]: number }; 
			
			public GiftLogs: { [key: string]: GiftULogs }; 
			// EmperorCity数据
			public OwnerLogs: EmperorCityOwner[]; 
			
			public BattleLogs: EmperorCityBattleLog[]; 
			// 国库Item
			public Box: data.Item[]; 
			// 国库Itemlog
			public BoxLogs: ResLog[]; 
			
			public BoxUserMap: { [key: string]: number }; 
			
			public MoneyUserMap: { [key: string]: EmperorCityMoneyUser }; 
			
			public ResAddType: number; 
			
			public ResAddOdds: number; 
			
			public ResAddTime: number; 
			
			public GCZLMap: { [key: string]: EmperorCityGCZL }; 
			
			public GCZLLog: EmperorCityGCZLLog[]; 
			// 伤害积分计算排行
			public UserRank: RankDataSlice; 
			// 国库银两在黑市兑换500钻石。
			public Money: number; 
			// 每天可以兑换3次
			public Dui: number; 
			
			public DLPHLogs: DLPHLog[]; 
			
			public DLPHData: { [key: string]: DLPHObj }; 
			
			public DataRepair: number; 
		}
		
		// EmperorCity皇城 Cross交叉;穿越 Data数据 连起来 穿越皇城数据
		export class EmperorCityCrossData {	
			// id//这字段客户端用不着
			public Id: string; 
			// 本轮运行时间
			public RunTime: number; 
			// tar是target缩写，目标服务器id
			public TarServerId: number; 
			// 这字段客户端用不着
			public TarServerScore: number; 
			// 这字段客户端用不着
			public TarServerTime: number; 
			// win 赢 整个功能结束赢的serverid，
			public WinServerId: number; 
			// 这字段客户端用不着
			public WinServerTime: number; 
			
			public WinOwnerSet: number; 
			// Owner所有权人 皇城所有权人
			public WinOwner: EmperorCityOwner; 
			// Arr是array缩写 数组 匹配server情况
			public ArrServer: EmperorCityCrossServer[]; 
			// Stage阶段 阶段数组数据 因为有多个阶段采取复数形式s
			public StageDatas: EmperorCityCrossStageData[]; 
		}
		
		
		export class EmperorCityCrossStageData {	
			// 开始
			public StartTime: number; 
			// 结束
			public EndTime: number; 
			
			public ActivityEndTime: number; 
			// User 用户 map就是map 用户参与map
			public UserMap: { [key: string]: RankData }; 
			// gang 联盟map就是map 联盟参与map
			public GangMap: { [key: string]: GangRankNode }; 
			// Rank 排列 用户排列
			public UserRank: RankDataSlice; 
			// Rank 排列 联盟排列
			public GangRank: RankGangSlice; 
			// 这字段客户端用不着
			public AwardRank: number; 
		}
		
		
		export class EmperorCityCrossAward {	
			// 用于判断是否重置标志，因为是循环复用
			public StartTime: number; 
			// key奖励id字符串，valu非0则领取过
			public AwardMap: { [key: string]: number }; 
		}
		
		
		export class EmperorCityCrossServer {	
			
			public ServerId: number; 
			
			public Score: number; 
		}
		
	}
}