// Generated by msgts
// DO NOT EDIT!

namespace ns {
	export namespace dbmodel {
	// 邮件频道
		
		// 系统
		export const MailFlag_SYS:number = 0; 
		// 战报
		export const MailFlag_Battle:number = 1; 
		// 帮派
		export const MailFlag_Gang:number = 2; 
		// 收藏
		export const MailFlag_Save:number = 3; 
		
	// 邮件类型
		
		
		export const MailType_Null:number = 0; 
		// 战斗
		export const MailType_Battle:number = 1; 
		// 侦查
		export const MailType_Look:number = 2; 
		// 采集
		export const MailType_Collect:number = 3; 
		// 占领
		export const MailType_Capture:number = 4; 
		
	// 邮件占领类型
		
		
		export const MailCapture_Null:number = 0; 
		// 收复
		export const MailCapture_Win:number = 1; 
		// 拷打
		export const MailCapture_Hit:number = 2; 
		// 占领
		export const MailCapture_Loss:number = 3; 
		// 脱离占领
		export const MailCapture_TLoss:number = 4; 
		
	// 邮件状态
		
		// 未读
		export const MailState_Unread:number = 0; 
		// 已读
		export const MailState_Read:number = 1; 
		// 已领取
		export const MailState_Get:number = 2; 
		// 隐藏显示后期可能直接删除
		export const MailState_Del:number = 3; 
		
	
		
		// 普通
		export const MailCollectType_0:number = 0; 
		// 遗迹
		export const MailCollectType_1:number = 1; 
		// 联盟矿
		export const MailCollectType_2:number = 2; 
		// 暗黑堡垒掠夺
		export const MailCollectType_3:number = 3; 
		// 野怪
		export const MailCollectType_4:number = 4; 
		
	
		
		
		export const CollectAddType_Null:number = 0; 
		// 帮助
		export const CollectAddType_Help:number = 1; 
		
		
		export type MailT = { [key: string]: MailData }
		
		// 侦查数据
		export class MailLook {	
			// 名字
			public Name: string; 
			// 头像
			public Head: string; 
			// 等级
			public Lv: number; 
			// 坐标
			public Pos: Point; 
			// 状态 1侦查成功 2侦查失败 3被侦查
			public Sta: number; 
			// 跨服战配置ID
			public CWCId: number; 
			// 防守方战斗信息
			public DefInfo: PVPMailReportInfo[]; 
			// 掠夺资源
			public Items: data.Item[]; 
			// 类型
			public Type: number; 
			// 配置ID
			public CId: number; 
			// 联盟信息
			public Gang: WorldMapGang; 
		}
		
		// 采集数据
		export class MailCollect {	
			// 配置ID
			public CId: number; 
			// 坐标
			public Pos: Point; 
			// 奖励
			public Items: data.Item[]; 
			// MailCollectType
			public Type: number; 
			// 采集数量
			public Num: number; 
			// 采集速度
			public Speed: number; 
			// 采集时间
			public Time: number; 
			// 采集加成
			public Adds: { [key: string]: number }; 
			// 帮助次数
			public Help: number; 
		}
		
		// 占领数据
		export class MailCapture {	
			// 坐标
			public Pos: Point; 
			// 角色ID
			public UId: number; 
			// 角色名
			public UName: string; 
			// 角色头像
			public UHead: string; 
			// 角色战力
			public UPower: number; 
			// 角色位置
			public UPos: string; 
			// 角色等级
			public ULv: number; 
			// 角色主城等级
			public UMLv: number; 
			// 家族ID
			public GId: number; 
			// 家族名
			public GName: string; 
			// 家族Code
			public GCode: string; 
			// 税收 每分钟
			public Tax: number; 
			// 到期时间
			public Time: number; 
		}
		
		// 邮件报告士兵
		export class MailReportArm {	
			// 配置ID
			public CId: number; 
			// 数量
			public Num: number; 
			// 状态 ArmState
			public Sta: number; 
		}
		
		// 邮件报告信息
		export class MailReportInfo {	
			// 名字
			public Name: string; 
			// 头像
			public Head: string; 
			// 坐标
			public Pos: Point; 
			// 英雄
			public Hero: BattleHero[]; 
			// 士兵列表
			public Arms: MailReportArm[]; 
			// 怪物配置ID
			public CId: number; 
		}
		
		// 邮件报告
		export class MailReport {	
			// 战场坐标
			public Pos: Point; 
			// 时间
			public Time: number; 
			// 胜负
			public Win: boolean; 
			// 攻击方战斗信息
			public AttInfo: MailReportInfo[]; 
			// 防守方战斗信息
			public DefInfo: MailReportInfo[]; 
			// 掠夺资源
			public Items: data.Item[]; 
			// 首杀奖励
			public First: data.Item[]; 
		}
		
		
		export class MailTitle {	
			// 标题
			public Title: string; 
			// 内容
			public Text: string; 
			// 发送时间
			public Time: number; 
			// 状态 MailState
			public State: number; 
			// 物品个数
			public Num: number; 
			// 频道 MailFlag
			public Flag: number; 
			// 类型 MailType
			public Type: number; 
			// 小类型 功能对应
			public SType: number; 
		}
		
		
		export class MailText {	
			// 奖励
			public Items: data.Item[]; 
			// 报告
			public Report: PVPMailReport; 
			// 侦查
			public Look: MailLook; 
			// 采集
			public Collect: MailCollect; 
			// 占领
			public Capture: MailCapture; 
			// 战报
			public BReport: string; 
		}
		
		
		export class MailData {	
			// 标题数据
			public TitleD: MailTitle; 
			// 内容数据
			public TextD: MailText; 
		}
		
		// mail表数据
		export class MailDB {	
			// 邮件id
			public Id: string; 
			// 用户id
			public UserId: number; 
			// 状态 MailState
			public State: number; 
			// 标题
			public Title: string; 
			// 内容
			public Text: string; 
			// 发送时间
			public Time: number; 
			// 奖励
			public Items: data.Item[]; 
			// 报告
			public Report: PVPMailReport; 
			// 侦查
			public Look: MailLook; 
			// 采集
			public Collect: MailCollect; 
			// 占领
			public Capture: MailCapture; 
			// 频道 MailFlag
			public Flag: number; 
			// 类型 MailType
			public Type: number; 
			// 小类型 功能对应
			public SType: number; 
			// 战报
			public BReport: string; 
		}
		
	}
}
