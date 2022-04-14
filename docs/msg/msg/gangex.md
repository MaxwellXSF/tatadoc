// Generated by msgts
// DO NOT EDIT!

namespace ns {
	export namespace msg {
	
		
		// 普通礼包
		export const GangOrdinary:number = 0; 
		// 稀有礼包
		export const GangRare:number = 1; 
		// 联盟珍藏
		export const GangCollection:number = 2; 
		
		// 发送help
		export class C2S_GangSendHelp {	
			// 0道具时使用
			public NeedItems: data.Item[]; 
			// 0道具 1医疗 2兵种强化 3采集
			public Type: number; 
			
			public Text: string; 
			// 关联ID
			public Id: string; 
		}
		
		
		export class S2C_GangSendHelp {	
			// 0失败 1成功
			public Ret: number; 
		}
		
		// 提供help
		export class C2S_GangSupplyHelp {	
			
			public HId: string; 
		}
		
		
		export class S2C_GangSupplyHelp {	
			// 0失败 1成功
			public Ret: number; 
		}
		
		// 使用同步HelpInfo后则此消息作废
		export class S2C_NGangHelpDel {	
			
			public Help: dbmodel.GHelpData; 
		}
		
		// 同步HelpInfo
		export class S2C_NGangHelpInfo {	
			
			public Help: dbmodel.GHelpData; 
			// 0 add 1modify 2del
			public State: number; 
		}
		
		// 告诉受帮助者 告知是谁帮助了他
		export class S2C_NGangHelpWhoHelp {	
			// 0道具 1医疗 2兵种强化
			public HelpType: number; 
			
			public WhoHelp: string; 
		}
		
		// 领取help
		export class C2S_GangRecHelp {	
			
			public HId: string; 
		}
		
		
		export class S2C_GangRecHelp {	
			// 0失败 1成功
			public Ret: number; 
		}
		
		// 联盟helpList
		export class C2S_GangHelpList {	
		}
		
		
		export class S2C_GangHelpList {	
			// 0失败 1成功
			public Ret: number; 
			
			public Helps: { [key: string]: dbmodel.GHelpData }; 
		}
		
		// 礼物列表
		export class C2S_GangGiftList {	
		}
		
		
		export class S2C_GangGiftList {	
			// 0失败 1成功
			public Ret: number; 
			
			public GiftsPT: dbmodel.GGiftData[]; 
			
			public GiftsGJ: dbmodel.GGiftData[]; 
			
			public GiftMap: { [key: string]: number }; 
			
			public GiftId: number; 
			
			public GiftExp: number; 
			
			public GiftKey: number; 
		}
		
		// 礼物开启
		export class C2S_GangGiftOpen {	
			// 普通1 高级2
			public Flag: number; 
			
			public MapId: string; 
		}
		
		
		export class S2C_GangGiftOpen {	
			
			public Flag: number; 
			// 0失败 1成功
			public Ret: number; 
			
			public Award: data.Item[]; 
			
			public GiftNum: number; 
			
			public GiftMap: { [key: string]: number }; 
			
			public GiftId: number; 
			
			public GiftExp: number; 
			
			public GiftKey: number; 
		}
		
		// 礼物自己
		export class C2S_GangGiftSelf {	
			
			public SelfId: number[]; 
		}
		
		
		export class S2C_GangGiftSelf {	
			// 0失败 1成功
			public Ret: number; 
			
			public Award: data.Item[]; 
			
			public GiftSelf: number[]; 
		}
		
		// 礼物钥匙
		export class C2S_GangGiftKey {	
		}
		
		
		export class S2C_GangGiftKey {	
			// 0失败 1成功
			public Ret: number; 
			
			public GiftKey: number; 
			
			public Award: data.Item[]; 
			
			public MemberGiftBox: number; 
		}
		
		
		export class S2C_NGangGiftKey {	
			// 帮里剩余钥匙
			public GiftKey: number; 
			// 成员新增宝箱数量
			public GiftBox: number; 
		}
		
		
		export class S2C_NGangContribution {	
			// 累计贡献
			public ContributionSum: number; 
			// 这周贡献
			public ContributionWeek: number; 
			// 这Day贡献
			public ContributionDay: number; 
		}
		
		// 收红包抢红包
		export class C2S_GRRedBag {	
			// 帮派名称
			public GangName: string; 
			// 红包实例id
			public Redid: number; 
		}
		
		
		export class S2C_GRRedBag {	
			// 0失败 1成功 2曾经抢过 3已经抢完
			public Ret: number; 
			
			public RedLog: dbmodel.RedLog; 
		}
		
		// 同步一个红包状态
		export class S2C_NGRedBagLog {	
			
			public RedLog: dbmodel.RedLog; 
		}
		
		// 查看红包列表状态
		export class C2S_GLRedBag {	
			// 帮派名称
			public GangName: string; 
		}
		
		
		export class S2C_GLRedBag {	
			
			public RedLogList: dbmodel.RedLog[]; 
			// 0失败 1成功
			public Ret: number; 
		}
		
		// 购买红包后直接发红包
		export class C2S_GBuyRedBag {	
			
			public StaicId: number; 
			// 发的人数数量
			public Num: number; 
			// 红包封面祝福语
			public Txt: string; 
		}
		
		
		export class S2C_GBuyRedBag {	
			
			public GangRedCash: number; 
			// 0失败 1成功
			public Ret: number; 
			
			public RedLog: dbmodel.RedLog; 
		}
		
		// 使用红包发红包
		export class C2S_GSRedBag {	
			// 道具实例ID
			public Id: string; 
			// 发的人数数量
			public Num: number; 
			// 红包封面祝福语
			public Txt: string; 
		}
		
		
		export class S2C_GSRedBag {	
			// 0失败 1成功
			public Ret: number; 
			
			public RedLog: dbmodel.RedLog; 
		}
		
		// 查看许愿列表
		export class C2S_GLWish {	
		}
		
		
		export class S2C_GLWish {	
			
			public WishMap: { [key: string]: dbmodel.Wish }; 
			// 0失败 1成功
			public Ret: number; 
		}
		
		// 许愿
		export class C2S_GWish {	
			
			public Need: data.Item[]; 
		}
		
		
		export class S2C_GWish {	
			// 0失败 1成功
			public Ret: number; 
			
			public Wish: dbmodel.Wish; 
		}
		
		// 同步Wish
		export class S2C_NGWish {	
			
			public Wish: dbmodel.Wish; 
			// 1add 2del
			public Do: number; 
		}
		
		// 帮助实现愿望
		export class C2S_GGod {	
			// 实例id
			public Wishid: string; 
		}
		
		
		export class S2C_GGod {	
			// 0失败 1成功
			public Ret: number; 
			
			public Award: data.Item[]; 
		}
		
		
		export class C2S_GangSkillNew {	
			// 1全局普通 2全局高级
			public Do: number; 
			
			public SkillId: number; 
		}
		
		// 联盟技能
		export class S2C_GangSkillNew {	
			
			public Bei: number; 
			// 0失败 1成功
			public Ret: number; 
			
			public GangSkill: dbmodel.GangSkillData; 
			
			public MemberSkillFree: number; 
			
			public MemberSkillFreeLook: number[]; 
			
			public MemberSkillCash: number; 
			
			public Liveness: number; 
		}
		
		
		export class S2C_NUserGangSkillFree {	
			
			public MemberSkillFree: number; 
			
			public MemberSkillFreeLook: number[]; 
		}
		
		
		export class C2S_GangAuctionGet {	
		}
		
		
		export class S2C_GangAuctionGet {	
			
			public AuctionItem: dbmodel.AuctionItem[]; 
			
			public AuctionStart: number; 
			
			public AuctionEnd: number; 
			
			public AuctionDelayNum: number; 
			// 0失败 1成功
			public Ret: number; 
		}
		
		
		export class C2S_GangAuctionItemDo {	
			
			public AuctionId: number; 
			// 0竞价 1一口价
			public Do: number; 
			
			public Price: data.Item[]; 
		}
		
		
		export class S2C_GangAuctionItemDo {	
			// 0失败 1成功 2已拍卖完 3价格过低
			public Ret: number; 
			
			public AuctionId: number; 
			// 0竞价 1一口价
			public Do: number; 
		}
		
		// 同步GangAuctionItem
		export class S2C_NGangAuctionItem {	
			// 1开始 2过程中更新
			public Flag: number; 
			
			public AuctionItem: dbmodel.AuctionItem[]; 
			
			public AuctionStart: number; 
			
			public AuctionEnd: number; 
			
			public AuctionDelayNum: number; 
		}
		
		
		export class S2C_NGlobalAuctionItem {	
			// 1开始 2过程中更新
			public Flag: number; 
			
			public AuctionItem: dbmodel.AuctionItem[]; 
			
			public AuctionStart: number; 
			
			public AuctionEnd: number; 
			
			public AuctionDelayNum: number; 
		}
		
		
		export class C2S_GlobalAuctionItemDo {	
			
			public AuctionId: number; 
			// 0竞价 1一口价
			public Do: number; 
			
			public Price: data.Item[]; 
		}
		
		
		export class S2C_GlobalAuctionItemDo {	
			// 0失败 1成功 2已拍卖完 3价格过低
			public Ret: number; 
			
			public AuctionId: number; 
			// 0竞价 1一口价
			public Do: number; 
		}
		
		
		export class C2S_GlobalAuctionGet {	
		}
		
		
		export class S2C_GlobalAuctionGet {	
			
			public AuctionItem: dbmodel.AuctionItem[]; 
			
			public AuctionStart: number; 
			
			public AuctionEnd: number; 
			
			public AuctionDelayNum: number; 
			// 0失败 1成功
			public Ret: number; 
		}
		
		// gang金库
		export class C2S_GangBox {	
		}
		
		
		export class DetailSupplyInfo {	
			// 物资id
			public SupplyId: number; 
			// 资源点产出
			public SupplyItems: data.Item[]; 
			// 资源点产出
			public SupplyVauitItems: data.Item[]; 
			
			public Num: number; 
		}
		
		
		export class S2C_GangBox {	
			
			public Box: data.Item[]; 
			// 资源点个数
			public Res: number; 
			
			public Detail: DetailSupplyInfo[]; 
			// 目前该成员积累补给
			public ResSupply: data.Item[]; 
			// 最近一次领取补给时间
			public ResSupplyTime: number; 
			
			public BoxLogs: dbmodel.BoxLog[]; 
			// 0失败 1成功
			public Ret: number; 
		}
		
		
		export class S2C_NGRSEvent {	
			// 1add 2del
			public Do: number; 
		}
		
		// 同步联盟金库
		export class S2C_NGangBox {	
			
			public Box: data.Item[]; 
		}
		
		// 领取资源补给
		export class C2S_GangResSupply {	
		}
		
		
		export class S2C_GangResSupply {	
			
			public ResSupply: data.Item[]; 
			// 最近一次领取补给时间
			public ResSupplyTime: number; 
			// 0失败 1成功
			public Ret: number; 
		}
		
		
		export class S2C_NGangProbe {	
			// Probepos
			public ProbePos: dbmodel.Point; 
			// 1add 2del
			public Do: number; 
			// Probe消失时间
			public ProbeOver: number; 
		}
		
		
		export class C2S_GangProbeMarch {	
			// 坐标
			public Pos: dbmodel.Point; 
			// 战斗信息
			public Info: dbmodel.BattleInfo; 
		}
		
		
		export class S2C_GangProbeMarch {	
			// 0失败 1成功
			public Ret: number; 
		}
		
		
		export class S2C_NGangProbeUp {	
			// Probeid
			public ProbeId: number; 
			// Probe任务
			public ProbeTask: dbmodel.TaskData; 
		}
		
		
		export class C2S_GangProbeEnd {	
			// Probeid
			public ProbeId: number; 
		}
		
		
		export class S2C_GangProbeEnd {	
			// 0失败 1成功
			public Ret: number; 
			// Probeid
			public ProbeId: number; 
			// Probe完成的次数
			public ProbeNUm: number; 
			// Probepos
			public ProbePos: dbmodel.Point; 
			// Probe任务
			public ProbeTask: dbmodel.TaskData; 
			
			public Award: data.Item[]; 
		}
		
		
		export class C2S_GangForbesAward {	
		}
		
		
		export class S2C_GangForbesAward {	
			// 0失败 1成功
			public Ret: number; 
			// 普通领取情况
			public GangForbesCAwards: number; 
			// 高级领取情况
			public GangForbesGAwards: number; 
			// Award
			public Award: data.Item[]; 
		}
		
		
		export class C2S_GangForbesBuy {	
			
			public Num: number; 
		}
		
		
		export class S2C_GangForbesBuy {	
			
			public GangForbesLevBuy: number; 
			// 0失败 1成功
			public Ret: number; 
		}
		
		
		export class C2S_GangDTaskOk {	
			
			public GangDTaskId: number; 
		}
		
		
		export class S2C_GangDTaskOk {	
			
			public Task: dbmodel.TaskData; 
			
			public Award: data.Item[]; 
			// 0失败 1成功
			public Ret: number; 
		}
		
		
		export class C2S_GangMTaskOk {	
			
			public GangMTaskId: number; 
		}
		
		
		export class S2C_GangMTaskOk {	
			
			public Task: dbmodel.TaskData; 
			
			public Award: data.Item[]; 
			// 0失败 1成功
			public Ret: number; 
		}
		
		
		export class S2C_NGangForbesReset {	
			
			public TokenGangForbesLev: number; 
			
			public GangForbesLevBuy: number; 
			// 0没有充值 1活跃特权 2至尊特权
			public GangForbesFlag: number; 
			// 普通领取情况
			public GangForbesCAwards: number; 
			// 高级领取情况
			public GangForbesGAwards: number; 
		}
		
		
		export class C2S_GangWTaskOk {	
			
			public GangWTaskId: number; 
		}
		
		
		export class S2C_GangWTaskOk {	
			
			public GangForbesLev: number; 
			// 每week任务
			public GangWTaskOk: number[]; 
			
			public Task: dbmodel.TaskData; 
			
			public Award: data.Item[]; 
			// 0失败 1成功
			public Ret: number; 
		}
		
		
		export class C2S_GangWTaskList {	
		}
		
		
		export class S2C_GangWTaskList {	
			
			public WTaskDatas: dbmodel.TaskData[]; 
			// 0失败 1成功
			public Ret: number; 
		}
		
		
		export class S2C_NGangWTask {	
			// 0reset 1update
			public Flag: number; 
			
			public NTaskDatas: dbmodel.TaskData[]; 
		}
		
		
		export class S2C_NGangWTaskOkReset {	
			// 每week任务
			public GangWTaskOk: number[]; 
		}
		
		
		export class C2S_GangDTaskList {	
		}
		
		
		export class S2C_GangDTaskList {	
			
			public GangDTaskDatas: dbmodel.TaskData[]; 
			// 0失败 1成功
			public Ret: number; 
		}
		
		// 联盟上传图片
		export class C2S_GangUploadImage {	
			// 图片
			public Image: string; 
		}
		
		
		export class S2C_GangUploadImage {	
			// 0失败 1成功
			public Ret: number; 
			// 实例ID
			public Id: string; 
		}
		
		// 联盟下载图片
		export class C2S_GangDownloadImage {	
			// 实例ID
			public Id: string; 
		}
		
		
		export class S2C_GangDownloadImage {	
			// 0失败 1成功
			public Ret: number; 
			// 实例ID
			public Id: string; 
			// 图片
			public Image: string; 
		}
		
		// 获取领取列表
		export class C2S_GetGangRecordLogList {	
		}
		
		
		export class S2C_GetGangRecordLogList {	
			// 结果:1=成功,0=失败
			public Ret: number; 
			
			public List: dbmodel.GangRecordLog[]; 
		}
		
	}
}