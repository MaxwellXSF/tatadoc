// Generated by msgts
// DO NOT EDIT!

namespace ns {
	export namespace dbmodel {
		
		export class QuestionnaireData {	
			// 实例ID
			public Id: string; 
			// 问卷
			public Text: QuestionnaireText; 
			// 统计
			public Stats: QuestionnaireStats; 
		}
		
		// 问卷
		export class QuestionnaireText {	
			// 标题
			public Title: string; 
			// 到期时间
			public Time: number; 
			// 物品
			public Items: data.Item[]; 
			// 题目列表
			public Arr: QuestionnaireSub[]; 
		}
		
		// 题目
		export class QuestionnaireSub {	
			// 标题
			public Title: string; 
			// 类型 0单选 1多选
			public Type: number; 
			// 内容
			public Texts: string[]; 
		}
		
		// 统计
		export class QuestionnaireStats {	
			// 题目次数
			public SubNum: number[]; 
			// 选项次数
			public SelNum: data.Arr[]; 
		}
		
	}
}
