// Generated by msgts
// DO NOT EDIT!

namespace ns {
	export namespace msg {
		// 集结对象
		export class MusterObj {	
			// 数据库对象
			public Obj: dbmodel.GangMusterObj; 
			// 行军队列
			public Marches: { [key: string]: dbmodel.MarchData }; 
			// 防守队列
			public DefMarches: { [key: string]: dbmodel.MarchData }; 
			// 坐标
			public Pos: dbmodel.Point; 
			// 目标对象
			public Tar: dbmodel.WorldMapData; 
			// 援助数量
			public Num: number; 
			// 援助最大数量
			public MNum: number; 
		}
		
		// 集结刷新变更
		export class S2C_MusterUpdateChange {	
			// 1添加 2刷新 3删除
			public State: number; 
		}
		
		// 集结刷新
		export class C2S_MusterUpdate {	
		}
		
		
		export class S2C_MusterUpdate {	
			// 0失败 1成功
			public Ret: number; 
			// 集结列表
			public List: MusterObj[]; 
		}
		
		// 集结单个
		export class C2S_MusterOne {	
			// 实例ID
			public Id: string; 
		}
		
		
		export class S2C_MusterOne {	
			// 0失败 1成功
			public Ret: number; 
			// 集结对象
			public Obj: MusterObj; 
		}
		
		// 集结开始
		export class C2S_MusterStart {	
			// 坐标
			public Pos: dbmodel.Point; 
			// 战斗信息
			public Info: dbmodel.BattleInfo; 
			// 时间配置索引
			public TimeIdx: number; 
		}
		
		
		export class S2C_MusterStart {	
			// 0失败 1成功
			public Ret: number; 
		}
		
		// 集结参加
		export class C2S_MusterJoin {	
			// 实例ID
			public Id: string; 
			// 战斗信息
			public Info: dbmodel.BattleInfo; 
		}
		
		
		export class S2C_MusterJoin {	
			// 0失败 1成功
			public Ret: number; 
		}
		
		// 集结记录
		export class C2S_MusterRecord {	
		}
		
		
		export class S2C_MusterRecord {	
			// 0失败 1成功
			public Ret: number; 
			
			public Records: dbmodel.GangMusterRecord[]; 
		}
		
		// 集结解散
		export class C2S_MusterDel {	
			// 实例ID
			public Id: string; 
		}
		
		
		export class S2C_MusterDel {	
			// 0失败 1成功
			public Ret: number; 
		}
		
		// 集结遣返
		export class C2S_MusterReturn {	
			// 实例ID
			public Id: string; 
			// 行军实例ID
			public MId: string; 
		}
		
		
		export class S2C_MusterReturn {	
			// 0失败 1成功
			public Ret: number; 
			
			public March: dbmodel.MarchData; 
		}
		
		// 集结数量
		export class C2S_MusterNum {	
		}
		
		
		export class S2C_MusterNum {	
			// 0失败 1成功
			public Ret: number; 
			// 数量
			public Num: number; 
		}
		
		
		export class S2C_NMusterObj {	
			
			public GangId: number; 
			
			public LUName: string; 
			
			public LUid: number; 
			
			public MusterId: string; 
			
			public MusterOTime: number; 
			
			public MusterETime: number; 
			
			public MType: number; 
			
			public MCId: number; 
			
			public MName: string; 
			// 0add 1del
			public State: number; 
		}
		
		// 集结设置
		export class C2S_MusterSet {	
			// 对象
			public Obj: dbmodel.MusterSet; 
		}
		
		
		export class S2C_MusterSet {	
			// 0失败 1成功
			public Ret: number; 
			// 对象
			public Obj: dbmodel.MusterSet; 
		}
		
	}
}