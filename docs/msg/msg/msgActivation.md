// Generated by msgts
// DO NOT EDIT!

namespace ns {
	export namespace msg {
		
		export class C2S_Activation {	
			// 激活码
			public Check: string; 
		}
		
		
		export class S2C_Activation {	
			// 0失败 1成功 2该角色已使用过该码 3该激活码达到使用最大次数 4过期 5该激活码不可以在此服使用  6无此激活码 7vip等级不够
			public Ret: number; 
			
			public Award: data.Item[]; 
		}
		
	}
}