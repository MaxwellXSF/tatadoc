// Generated by msgts
// DO NOT EDIT!

namespace ns {
	export namespace dbmodel {
		// 章节模块
		export class Chapter {	
			
			public List: { [key: string]: ChapterObj }; 
		}
		
		// 章节对象
		export class ChapterObj {	
			// 配置ID
			public CId: number; 
			// 坐标
			public Pos: Point; 
			// 进度
			public Stage: number; 
		}
		
	}
}