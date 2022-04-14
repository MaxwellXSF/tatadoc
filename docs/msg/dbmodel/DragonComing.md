// Generated by msgts
// DO NOT EDIT!

namespace ns {
	export namespace dbmodel {
		
		export class DragonComingDataInUser {	
			
			public UserId: number; 
			
			public GangId: number; 
			// 每个玩家伤害积分
			public Score: number; 
			// 每个玩家伤害积分奖励领取情况
			public ScoreAward: { [key: string]: number }; 
			// 行军队列log 每个玩家活动有20次攻击机会
			public MarchesLog: { [key: string]: number }; 
			// VipLog 每个玩家限购次数
			public VipLog: { [key: string]: number }; 
		}
		
		
		export class DragonComingDataInGang {	
			
			public GangId: number; 
			
			public Score: number; 
		}
		
		
		export class DragonComingDefData {	
			
			public Id: string; 
			// 关卡数据
			public DefInfo: PVPBattleInfo; 
		}
		
		
		export class AttLog {	
			
			public UserName: string; 
			
			public GangName: string; 
			
			public BossId: number; 
			
			public Pos: Point; 
			
			public Hit: number; 
			// 0正常攻击 1暴击 2血条打击 3致命一击
			public Att: number; 
		}
		
		
		export class MonsterStatus {	
			
			public Id: string; 
			
			public BossId: number; 
			
			public Pos: Point; 
			
			public MaxHp: number; 
			
			public CurHp: number; 
		}
		
		
		export class DragonComingData {	
			// id
			public Id: string; 
			
			public RunTime: number; 
			// 达标次数
			public YesNum: number; 
			// 不达标次数
			public NoNum: number; 
			// 1small 2big
			public MonType: number; 
			
			public ComeTime: number; 
			// 小怪
			public SMap: { [key: string]: DragonComingDefData }; 
			// 大怪
			public BMap: { [key: string]: DragonComingDefData }; 
			
			public Monster: { [key: string]: MonsterStatus }; 
			// 小怪波数及开始时间，结束时间
			public STimes: number[]; 
			// 大怪波数及开始时间，结束时间
			public BTimes: number[]; 
			// 3种兵种随机一种兵种为本次活动克制兵种
			public SeedArm: number; 
			// 50条战斗信息
			public AttLogs: AttLog[]; 
			
			public UserMap: { [key: string]: DragonComingDataInUser }; 
			
			public GangMap: { [key: string]: DragonComingDataInGang }; 
			// 伤害积分计算排行
			public UserRank: RankDataSlice; 
			
			public GangRank: RankGangSlice; 
		}
		
	}
}