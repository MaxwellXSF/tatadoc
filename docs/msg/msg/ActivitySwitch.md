// Generated by msgts
// DO NOT EDIT!

namespace ns {
	export namespace msg {
	
		
		
		export const ActivityCalendar_Null:number = 0; 
		// 普通活动
		export const ActivityCalendar_Common:number = 1; 
		// 名城
		export const ActivityCalendar_FamousCity:number = 2; 
		// 遗迹试炼
		export const ActivityCalendar_RuinsProbe:number = 3; 
		
		// 活动开关
		export class C2S_ActivitySwitch {	
		}
		
		
		export class S2C_ActivitySwitch {	
			// 运行活动
			public RunMap: data.ActivitySwitchMap; 
		}
		
		
		export class ActivityCalendar {	
			// 类型
			public Type: number; 
			// 配置ID
			public CId: string; 
			// 开始时间
			public OTime: number; 
			// 结束时间
			public ETime: number; 
		}
		
		// 活动日历
		export class C2S_ActivityCalendar {	
		}
		
		
		export class S2C_ActivityCalendar {	
			// 0失败 1成功
			public Ret: number; 
			
			public List: ActivityCalendar[]; 
		}
		
	}
}