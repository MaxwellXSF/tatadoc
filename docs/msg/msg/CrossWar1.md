// Generated by msgts
// DO NOT EDIT!

namespace ns {
	export namespace msg {
		// 1跨服乱斗更新
		export class S2C_CW1Update {	
			// 配置ID
			public CId: number; 
			// 总积分
			public HitSum: number; 
			// 杀敌
			public HitKill: number; 
			// 攻城
			public HitCity: number; 
			// 击飞
			public HitFly: number; 
		}
		
		// 1跨服乱斗击飞
		export class S2C_CW1HitFly {	
			// 配置ID
			public CId: number; 
			// 总积分
			public HitSum: number; 
			// 杀敌
			public HitKill: number; 
			// 攻城
			public HitCity: number; 
			// 击飞
			public HitFly: number; 
			
			public Enemy: dbmodel.RankData; 
		}
		
		// 1跨服乱斗结束
		export class S2C_CW1Finish {	
			// 配置ID
			public CId: number; 
			// 列表
			public List: dbmodel.RankDataSlice; 
		}
		
		// 1跨服乱斗击杀
		export class S2C_CW1Kill {	
			// 配置ID
			public CId: number; 
			// CrossWar1Kill
			public Type: number; 
			// 0普通 1终止连胜
			public Flag: number; 
			// 次数
			public Num: number; 
			// 攻击方UID
			public AttU: number; 
			// 攻击方名字
			public AttN: string; 
			// 攻击方坐标
			public AttP: dbmodel.Point; 
			// 防守方UID
			public DefU: number; 
			// 防守方名字
			public DefN: string; 
			// 防守方坐标
			public DefP: dbmodel.Point; 
		}
		
		// 1跨服乱斗查询
		export class C2S_CW1Query {	
			// 配置ID
			public CId: number; 
			// 排名 服务端用
			public Rank: number; 
		}
		
		
		export class S2C_CW1Query {	
			// 0失败 1成功
			public Ret: number; 
			// 配置ID
			public CId: number; 
			// 排名
			public Rank: number; 
			// 总积分
			public HitSum: number; 
			// 杀敌
			public HitKill: number; 
			// 攻城
			public HitCity: number; 
			// 击飞
			public HitFly: number; 
		}
		
		// 1跨服乱斗排行
		export class C2S_CW1Rank {	
			// 配置ID
			public CId: number; 
			// 第几轮 0全部
			public Round: number; 
		}
		
		
		export class S2C_CW1Rank {	
			// 0失败 1成功
			public Ret: number; 
			// 配置ID
			public CId: number; 
			// 第几轮
			public Round: number; 
			// 排行数据
			public List: dbmodel.RankDataSlice; 
		}
		
		// 1跨服乱斗复活
		export class C2S_CW1Again {	
			// 配置ID
			public CId: number; 
		}
		
		
		export class S2C_CW1Again {	
			// 0失败 1成功
			public Ret: number; 
			// 配置ID
			public CId: number; 
		}
		
		// 1跨服乱斗地图对象
		export class CW1MapObj {	
			// 角色ID
			public UId: number; 
			// 坐标
			public Pos: dbmodel.Point; 
		}
		
		// 1跨服乱斗地图
		export class S2C_CW1Map {	
			// 配置ID
			public CId: number; 
			// 列表
			public List: CW1MapObj[]; 
		}
		
		// 1跨服乱斗事件
		export class S2C_CW1Event {	
			// 1刷怪
			public Type: number; 
		}
		
	}
}
