// Generated by msgts
// DO NOT EDIT!

namespace ns {
	export namespace msg {
		
		export class C2S_HarvesterUp {	
			
			public ShareId: number; 
		}
		
		
		export class S2C_HarvesterUp {	
			// 上次手动收割时间
			public HarvesteTime: number; 
			// 结束时间
			public HarvesteOver: number; 
			
			public HarvesterLv: number; 
			// 0失败 1成功
			public Ret: number; 
			
			public ShareId: number; 
		}
		
		// 收集
		export class C2S_Harveste {	
		}
		
		
		export class S2C_Harveste {	
			// 上次手动收割时间
			public HarvesteTime: number; 
			// 结束时间
			public HarvesteOver: number; 
			// 结果倍数
			public Bei: number; 
			// 增加金币
			public Gold: number; 
			// 0失败 1成功
			public Ret: number; 
		}
		
		
		export class C2S_HarvesterHuiFu {	
		}
		
		
		export class S2C_HarvesterHuiFu {	
			// 上次手动收割时间
			public HarvesteTime: number; 
			// 结束时间
			public HarvesteOver: number; 
			// 0失败 1成功
			public Ret: number; 
		}
		
	}
}
