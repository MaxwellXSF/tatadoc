// Generated by msgts
// DO NOT EDIT!

namespace ns {
	export namespace dbmodel {
		// 联盟矿
		export class GangIron {	
			
			public List: { [key: string]: GangIronObj }; 
		}
		
		// 联盟矿对象
		export class GangIronObj {	
			// 配置ID
			public CId: number; 
			// 建筑值
			public Exp: number; 
			// 地图对象实例ID
			public Id: string; 
			// 坐标
			public Pos: Point; 
			// 摆放时间
			public Time: number; 
			// 所属领地ID
			public LandId: number; 
			// 持续时间
			public KeepTime: number; 
			
			public BuildInfo: GangBuildInfo; 
		}
		
	}
}
