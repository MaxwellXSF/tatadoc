// Generated by msgts
// DO NOT EDIT!

namespace ns {
	export namespace msg {
		// 领地对象刷新
		export class S2C_GangLandObj {	
			
			public Obj: dbmodel.GangLandObj; 
		}
		
		// 领地对象删除
		export class S2C_GangLandD {	
			// 配置ID
			public CId: number; 
		}
		
		// 领地信息
		export class C2S_GangLandInfo {	
		}
		
		
		export class S2C_GangLandInfo {	
			// 0失败 1成功
			public Ret: number; 
			
			public GangLand: dbmodel.GangLand; 
		}
		
		// 领地开启
		export class C2S_GangLandOpen {	
			// 配置ID
			public CId: number; 
			// 坐标
			public Pos: dbmodel.Point; 
		}
		
		
		export class S2C_GangLandOpen {	
			// 0失败 1成功
			public Ret: number; 
		}
		
		
		export class C2S_GangLandOpenNew {	
			// 配置ID
			public CId: number; 
			// 坐标
			public Pos: dbmodel.Point; 
		}
		
		
		export class S2C_GangLandOpenNew {	
			// 0失败 1成功
			public Ret: number; 
		}
		
		// 领地捐献
		export class C2S_GangLandGive {	
			// 配置ID
			public CId: number; 
			// 1钻石 2金币
			public Type: number; 
		}
		
		
		export class S2C_GangLandGive {	
			// 0失败 1成功
			public Ret: number; 
			// 领地钻石捐献次数
			public LandCashNum: number; 
			// 领地金币捐献次数
			public LandGoldNum: number; 
		}
		
		// 领地铲除
		export class C2S_GangLandDel {	
			// 配置ID
			public CId: number; 
		}
		
		
		export class S2C_GangLandDel {	
			// 0失败 1成功
			public Ret: number; 
			// 配置ID
			public CId: number; 
		}
		
		// 联盟邮件
		export class C2S_GangMail {	
			// 标题
			public Title: string; 
			// 内容
			public Text: string; 
		}
		
		
		export class S2C_GangMail {	
			// 0失败 1成功
			public Ret: number; 
		}
		
		
		export class C2S_GangPagodaOpen {	
			// 配置ID
			public CId: number; 
			// 地图对象实例ID 修复专用
			public Id: string; 
			// 坐标
			public Pos: dbmodel.Point; 
		}
		
		
		export class S2C_GangPagodaOpen {	
			// 0失败 1成功
			public Ret: number; 
		}
		
		
		export class S2C_GangPagodaObj {	
			
			public Obj: dbmodel.GangPagodaObj; 
		}
		
		
		export class S2C_GangPagodaObjDel {	
			
			public Obj: dbmodel.GangPagodaObj; 
		}
		
		
		export class C2S_GangPagodaDel {	
			// 坐标
			public Pos: dbmodel.Point; 
		}
		
		
		export class S2C_GangPagodaDel {	
			// 0失败 1成功
			public Ret: number; 
			// 配置ID
			public Pos: dbmodel.Point; 
		}
		
		
		export class C2S_GangPagodaInfo {	
		}
		
		
		export class S2C_GangPagodaInfo {	
			// 0失败 1成功
			public Ret: number; 
			
			public GangPagoda: dbmodel.GangPagoda; 
		}
		
		
		export class C2S_WMGangBuildRecall {	
			// 行军实例ID
			public Id: string; 
		}
		
		
		export class S2C_WMGangBuildRecall {	
			// 0失败 1成功
			public Ret: number; 
		}
		
		// 出兵GangBuild
		export class C2S_WMGangBuild {	
			// 坐标
			public Pos: dbmodel.Point; 
			// 战斗信息
			public Info: dbmodel.BattleInfo; 
		}
		
		
		export class S2C_WMGangBuild {	
			// 0失败 1成功
			public Ret: number; 
		}
		
		
		export class C2S_GangBuildMarchsInfo {	
			// 坐标
			public Pos: dbmodel.Point; 
		}
		
		
		export class S2C_GangBuildMarchsInfo {	
			// 0失败 1成功
			public Ret: number; 
			// 行军队列
			public Marchs: dbmodel.MarchData[]; 
		}
		
	}
}
