// Generated by msgts
// DO NOT EDIT!

namespace ns {
	export namespace dbmodel {
	
		
		
		export const HeroTJ_TagType_Null:number = 0; 
		// 神将录
		export const HeroTJ_TagType_1:number = 1; 
		// 名将录
		export const HeroTJ_TagType_2:number = 2; 
		// 众将录
		export const HeroTJ_TagType_3:number = 3; 
		
		export const HeroTJ_TagType_Max:number = 4; 
		
	
		
		
		export const HeroTJ_FunType_Null:number = 0; 
		// 英雄数量
		export const HeroTJ_FunType_1:number = 1; 
		// 星级数量
		export const HeroTJ_FunType_2:number = 2; 
		
		// HeroTJ容器
		export class HeroTJ {	
			
			public List: { [key: string]: HeroTJObj }; 
			// 购买标记
			public Tag: number[]; 
		}
		
		// HeroTJ对象
		export class HeroTJObj {	
			// 配置ID
			public CId: number; 
			// 领取标记
			public Get: number[]; 
		}
		
	}
}