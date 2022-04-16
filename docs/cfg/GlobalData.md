namespace ns {
	export namespace global {
		export interface Bag {
			MaxUseCount: number;				//单次道具最多使用数量
			MaxCompCount: number;				//单次道具合成最多数量
			MaxSellCount: number;				//单次出售最多数量（仅可以出售时有效）
			MaxFastBuyCount: number;				//单次快捷购买最多数量
			VipArmPart: number;				//部件一键合成限制贵族等级
		}

		export interface TeamTaskActivity {
			NewLeader: number;				//队长三天不上线，自动更换队长
			MNum: number;				//每日最多的完成任务次数
			BoxAddOneAwardOdds: number;				//宝箱加个人数奖励加成【万分比】
			BoxIcon: string[][];				//宝箱进度展示的对应icon[最小进度,最大进度,图标资源]
		}

		export interface Recharge {
			RechargeVipAdds: number;				//充值金额转换的vip经验系数
		}

		export interface yllgameRecharge {
			FirstAward: number[][];				//首次第三方充值奖励
			EveryTimeAward: number[][];				//每次第三方充值奖励
		}

		export interface Milestone {
			Buffid: number;				//默认buffid
			OpenDays: number;				//里程碑开启自开服天数
		}

		export interface HeroTJ {
			LowCost: number[][];				//众将录消耗
		}

		export interface HeroBF {
			DiaUnlockCost: number[][];				//钻石解锁消耗
			WarArtMaxNum: number;				//兵法最大数量
			FavoritesMaxNum: number;				//心仪兵法最大数量
			ReplaceSingleTimes: number;				//替换单次最大次数
			AddProbability: number;				//增加心仪兵法获取的概率
			NeedAddTimes: number;				//达到这个次数需要增加心仪兵法获取概率
			WarArtGetDayTimes: number;				//抽取兵法次数
			WarArtGetCost: number[];				//单次兵法抽取的消耗
			LimitAttrGrowth: number[][];				//领悟成长取值范围([min,max] min <= value < max)
		}

		export interface Staff {
			HeroQuality: number[];				//英雄品质加成
		}

		export interface ZSFreeGift {
			Time: number;				//时间
			Num: number;				//次数
			ItemId: number;				//奖励ID
			Odds: number;				//触发比例
		}

		export interface Capture {
			TaxOdds: number;				//税收比率
			Time: number;				//占领时长（秒）
			TriggerTime: number;				//触发时长（秒）
			HitCDTime: number;				//拷打CD时间（秒）
			RansomRange: number[];				//赎金调整区间[最小值,最大值,增符]均为百分比
		}

		export interface FriendPoint {
			MaxNum: number;				//最大次数
			One: number[][];				//友情招募单次消耗
			Ten: number[][];				//友情招募十次消耗
		}

		export interface Equip {
			Mould: number[];				//磨具悟性
			MouldEnergy: number[];				//磨具精力
			Artifact: number[];				//神器悟性
			Energy: number;				//精力上限
			EnergySec: number;				//精力每点恢复秒数
			SkillPointRatio: number;				//悟性转化为技能点的比率
			ResetCost: number[][];				//重置消耗
			StoneId: number[];				//熔炼石ID
			StoneUseMax: number;				//单种石头每次可使用的上限
			StoneRatio: number[][];				//熔炼石抽取比率
			SlotEnhance: number;				//槽位强化经验上限
			SkillLvMax: number;				//技能最大等级
			SkillLvCost: number[][];				//技能洗练消耗
			SkillLookCost: number[][];				//技能鉴定消耗
			SkillSplit: number[][];				//技能分解获得
		}

		export interface Recharge2 {
			Money: number;				//金额限制
			Time: number;				//额外奖励计时
			AutoShowPanel: number;				//自动弹出界面的等级
			UIMoney: number;				//未折扣的金额(显示)
		}

		export interface AutoMonster {
			Time: number;				//持续时间
			TimeCom: number;				//持续时间野怪
		}

		export interface RedBlue {
			BlueCost: number[][];				//蓝区消耗递增
			RedCost: number[];				//红区消耗
		}

		export interface VideoShop {
			ItemNum: number;				//物品数量
			UpdateNum: number;				//刷新次数
		}

		export interface MapRes {
			NewObjNoPut: number[];				//新对象不能摆放
			BlackLandTime: number;				//黑土地加时
		}

		export interface Robot {
			HitFlyOdds: number;				//击飞检测概率
			CollectionOdds: number;				//采集检测概率
			HospitalOdds: number;				//治疗检测概率
			AttackOdds: number;				//攻击检测概率
			LevelOdds: number;				//升级检测概率
			LevelMax: number;				//升级上限
			AttackLv: number;				//攻击等级
			TokensMax: number[];				//代币上限
			RankMax: number;				//排行榜限制
			VipMax: number;				//VIP限制
		}

		export interface Visit {
			HelpArmTime: number;				//减少训练士兵时间(秒)
			HelpHospitalTime: number;				//减少恢复伤兵时间比率
			HelpCollegeTime: number;				//减少研究科技时间比率
			BHelpArmNum: number;				//被帮助训练士兵次数
			BHelpHospitalNum: number;				//被帮助恢复伤兵次数
			BHelpCollegeNum: number;				//被帮助研究科技次数
			BHelpGodBeastNum: number;				//被帮助喂养神兽次数
			HelpAward: number[][];				//帮助奖励
			HelpAwardNum: number;				//帮助奖励次数
			VisitAwardNum: number;				//拜访奖励次数
			BVisitAwardNum: number;				//被拜访奖励次数
		}

		export interface GodBeast {
			OpenDay: number;				//解锁开服天数
			BuildCost: number[][];				//建造消耗
			LowEatExp: number;				//低级喂养经验
			HighEatExp: number;				//高级喂养经验
			FreeEatNum: number;				//免费喂养次数
			Eat10: number;				//第几次喂养暴击
			Eat10Rate: number;				//第几次喂养暴击倍率
			Eat10Dis: number;				//10次喂养折扣
			EatBase: number;				//喂养计算基数
			EatOdds: number;				//触发喂养暴击概率
			EatRate: number[];				//触发喂养暴击倍率
		}

		export interface MemoryCard {
			GameTime: number;				//每局游戏的时间（秒）
			ScoreOnce: number;				//每次消除积分
		}

		export interface MagicBall {
			GameTime: number;				//每局游戏的时间（秒）
			BaseScore: number;				//基础分值
			AddScore: number;				//额外增加分值
		}

		export interface MiniGames {
			GameItem: number;				//游戏币道具
			GameCost: number[][];				//一次游戏币道具数量
			MemoryCard: MemoryCard;				//记忆卡牌
			MagicBall: MagicBall;				//魔法水晶球
		}

		export interface Guide {
			UnlockHUDStepIndex: number;				//解锁HUD主界面需要的最小引导关键步骤编号
			UnlockMapTileStepIndex: number;				//解锁地块功能开启的关键步骤编号（在这之后才允许解锁地块）
			HeroChapter: number;				//英雄副本章节
			HeroChapterHeroInfo: number[];				//英雄副本章节英雄信息[ID,等级,星级,技能ID]
		}

		export interface Expedition {
			HangTime: number;				//挂机时间(秒)
			HangTimeMax: number;				//挂机时间上限(秒)
			GetAwardDelayTime: number;				//邻奖励提示最少时间（秒）
			HangTimeIcon: string[][];				//挂机对应秒数显示的资源【秒数,对应的icon资源】
			RandomHero: number[];				//随机推荐英雄数量(对应品质)
			JianJunAdd: number;				//监军加成(百分比)
			HeroJianJun: number[];				//英雄固定监军值(对应品质)
			HeroLvAdd: number[];				//英雄等级加成 等级,数值(每20级加10监军值)
			HeroStarAdd: number[];				//英雄星级加成 等级,数值(每5级增加20%监军值)
			FastTime: number;				//快速收集时间(秒)
			FastNum: number;				//快速收集次数
			FastCost: number[][];				//快速收集消耗(对应次数)
			RecoveryTime: number;				//每点恢复时间
			DropFlag: number[];				//道具掉落标记
			DropSum: number;				//道具掉落总数
			RecruitCost: number[][];				//招兵道具
			RentHeroNum: number;				//每日共合计可被租借次数
			RentHeroFree: number;				//每日免费租借次数
			RentHeroBuyCost: number[][];				//每日购买租借次数消耗
			RentHeroAward: number[][];				//出租奖励
		}

		export interface AddQueue {
			VipQueue: number[][];				//vip功能【vip等级,跳转id,队列描述,tip描述】
			CollegeQueue: number[][];				//学院【学院科技id,跳转id,队列描述,tip描述】
		}

		export interface PlayerCollege {
			Name: string;				//默认名字
			ActivateCost: number[][];				//激活消耗
			ActivateNum: number;				//激活数量
			SelCost: number[][];				//切换消耗
			SelVip: number;				//切换VIP免费
			ResetCost: number[][];				//重置消耗
			TreeNum: number;				//技能树数量
		}

		export interface WarHall {
			MNum: number;				//援助基础数量
		}

		export interface Cover {
			CDOdds: number;				//CD系数
			CDMinute: number;				//CD分钟
		}

		export interface Token {
			ItemId: number[];				//货币对应物品ID
			BindingItemId: number[];				//货币绑定关联的物品ID
		}

		export interface Strength {
			OneCost: number;				//每次消耗
			GroupBattleMonsterCost: number;				//集结打怪消耗
			RecoveryTime: number;				//每点恢复时间
		}

		export interface Sweep {
			RecoveryTime: number;				//每点恢复时间
		}

		export interface Defense {
			RecoveryTime: number;				//每点恢复时间
			MaxDefense: number;				//最大城防
		}

		export interface College {
			ArmPart: number[][];				//强化部件（解锁等级）
			ArmEnhanceFastItem: number[][];				//兵种强化加速道具 物品ID,秒
			ArmEnhanceFastCash: number;				//兵种强化加速钻石（每分钟）
			InitCId: number[];				//初始化对象
			DefaultPartShopId: number;				//默认部件购买项对应的商品ID
		}

		export interface Build {
			MakeArmNum: number;				//生产兵种数量
			ArmFastItem: number[][];				//兵种加速道具 物品ID,秒
			ArmFastCash: number;				//兵种加速钻石（每分钟）
			Unlock: number[][];				//建筑解锁 建筑类型,地图格子数
			ArmValTime: number;				//兵源值恢复时间
			BuildingResID: number[];				//修理状态的资源ID [2x2对象,3x3对象]
			ExBuildPos: number[][];				//特殊对象的坐标位置
		}

		export interface Hospital {
			InitNum: number;				//医院初始格子数量
			DropLv: number;				//掉级等级
			FastItem: number[][];				//医院加速道具 物品ID,秒
			FastCash: number;				//医院加速钻石（每分钟）
		}

		export interface Battle {
			Round: number;				//回合数
			FightDefeatJump: number[];				//战斗失败后的提示
			BattleDamageNum: number;				//战损礼包损失数
		}

		export interface Camp {
			MapResId: number;				//地图资源ID
		}

		export interface FamousCity {
			Open: number[][];				//每周开始列表
			FCApply: number;				//每轮报名次数
			FirstOpenTime: number;				//第一轮开启时间
			FirstApplyTime: number;				//第一轮报名时间
			FirstBattleTime: number;				//第一轮战斗时间
			FirstRewardTime: number;				//第一轮领奖时间
			OpenWeek: number;				//第几周开始
			Week: number;				//周几开始
			ApplyTime: number;				//报名时间
			BattleTime: number;				//战斗时间
			RewardTime: number;				//领奖时间
			DefTime: number;				//防守时间
			HoldRewardTime: number;				//占领奖励间隔时间
			SpecialRewardMax: number;				//特殊奖励上限
			AttSplitRewardMax: number;				//攻占联盟分配奖励上限
			HoldSplitRewardMax: number;				//占领联盟分配奖励上限
			HelpOdds: number;				//援助系数
			LowAttReward: number[][];				//低阶攻占者奖励
			LowAttAllReward: number[][];				//低阶攻占联盟全员奖励
			LowAttSplitReward: number[][];				//低阶攻占联盟分配奖励
			HighAttReward: number[][];				//高阶攻占者奖励
			HighAttAllReward: number[][];				//高阶攻占联盟全员奖励
			HighAttSplitReward: number[][];				//高阶攻占联盟分配奖励
			HoldAllReward: number[][];				//占领联盟全员奖励
			HoldSplitReward: number[][];				//占领联盟分配奖励
		}

		export interface Ruins {
			Time: number[];				//驻守时间(分钟)
			DropTime: number;				//掉落一次时间（秒）
		}

		export interface RuinsProbe {
			FirstOpenTime: number;				//第一轮开启时间
			OpenWeek: number;				//第几周开始
			Week: number;				//周几开始
			StartCost: number[][];				//开启消耗
			Dead: number;				//死亡次数失败
			RunSecs: number;				//运行时间数单位秒
			RunSkin: number;				//遗迹怪物行军皮肤编号
		}

		export interface EmperorCityCross {
			RankNum: number;				//排行个数
			GotoFree: number;				//免费3次跨服机会
			GotoCost: number[][];				//消耗跨服道具跨服
			OpenTime: number;				//开启基准时间戳
			IntWeek: number;				//基于开启基准时间戳间隔几周后第一次开始，之后每间隔1周开启
			BoxCollection: number;				//获得资源数量为玩家采集量的万分比
			GotoRBaseOdds: number;				//恢复死兵基本系数
			GotoRCash: number;				//消耗钻石
			GotoRCashOdds: number;				//消耗钻石一次加的系数
			GotoRCashNum: number;				//消耗钻石上限
			GotoRHelp: number[][];				//帮助消耗
			GotoRHelpOdds: number;				//帮助一次加的系数
			GotoRHelpNum: number;				//帮助上限
		}

		export interface OtherUse {
			OtherUseMoney: number;				//挪用500000
			OtherUseToCash: number;				//兑换500钻石
			OtherUseToCashNum: number;				//每天可以兑换3次
			OtherUseToBuff: number;				//皇帝挪用国策银两会受到采集速度减少20%，4小时的惩罚
		}

		export interface EmperorCity {
			OpenWeek: number;				//第几周开始
			Week: number;				//周几开始
			Time1Start: number;				//第1阶段
			Time1Win: number;				//需持续占领60分钟获胜
			Time2Start: number;				//第2阶段
			Time2Win: number;				//需持续占领30分钟获胜
			Time3Start: number;				//第3阶段
			EndTime: number;				//最后结束
			TaTime: number;				//皇城塔伤害间隔
			OtherUse: OtherUse;				//挪用
			BoxCollection: number;				//获得资源数量为玩家采集量的万分比
			DayResSum: number;				//每天每个君主可分配20000000负重总量的资源
			EmperorPos: number;				//皇帝职位
			GuoKuDonationCost: number[][];				//单次国库捐献消耗
			GuoCeDonationCost: number[][];				//单次国策捐献消耗
			ResItemData: number[];				//资源分配顺序id
			DLNeedGKMoney: number;				//捣乱需要国库至少有多少银两
			Open: number;				//皇城功能开启【0关闭1开启】
		}

		export interface DragonComing {
			Open: number[][];				//开放时间[星期几,开启时间（秒）,持续时间（秒）]
			UpSecs: number[];				//每轮刷新间隔（秒）[boss出现时间，下一轮刷新时间]
			AddSecs: number[];				//影响加强间隔（秒）[前三次间隔，后续间隔]
			OpenAddOdds: number;				//下次活动影响系数（百分比）
			UpAddOdds: number;				//本轮影响系数（百分比）
			SHp: number[];				//小怪怪物血条[总血条数,最后一条血百分比]
			BHp: number[];				//大怪怪物血条[总血条数,最后一条血百分比]
			AttNum: number;				//可以攻击次数
			FirstBossKillAward: number;				//击杀每次活动第一只Boss全服奖励
			AttBaseAward: number[][];				//进攻保底奖励
		}

		export interface Divination {
			Cost: number[][];				//翻牌消耗
			LimitLun: number;				//排行榜上前3名限制的轮数
		}

		export interface HeroLook {
			Cost: number[][];				//连连看点击卡片消耗
			ResetCost: number[][];				//连连看重置卡片消耗
			ResetCashNum: number;				//连连看钻石重置次数限制
			CostBuy: number[][];				//连连看卡片消耗道具购买
			LunBase: number[][];				//首轮保底[[轮数，奖励类型]]
			CostBase: number[][];				//消耗钻石保底[[消耗钻石，奖励类型]]
		}

		export interface Arena {
			RobotNum: number;				//机器人数量
			CDTime: number;				//恢复冷却时间秒
			ArenaNum: number;				//免费挑战次数
			OpenLv: number;				//开放等级
			ArenaCost: number[][];				//购买次数消耗
			ArenaPoint: number;				//Arena积分itemid
		}

		export interface Hero {
			LowOne: number[][];				//普通招募单次消耗
			LowTen: number[][];				//普通招募十次消耗
			HighOne: number[][];				//高级招募单次消耗
			HighTen: number[][];				//高级招募十次消耗
			LowNum: number;				//普通招募免费次数
			LowTime: number;				//普通招募免费时间(秒)
			LowLook: number;				//普通招募寻访次数
			HighLook: number;				//高级招募寻访次数
			LowMax: number;				//普通招募每日次数
			HighMax: number;				//高级招募每日次数
			XFOdds: number[];				//寻访加成权重 索引对应品质
			HeroLevel: number[][];				//英雄升级物品 物品ID,经验
			SkillLevel: number[][];				//技能升级物品 物品ID,经验
			SkillLock: number[];				//技能解锁等级
			SkillDelExpOdds: number;				//技能遗忘经验比率
			HeroLevelLimit: number[];				//英雄等级限制(星级)
			SkillLevelLimit: number[];				//技能等级限制(星级)
			HeroFragment: number[];				//英雄万能碎片(对应品质)
			SkillLowOne: number[][];				//技能普通招募单次消耗
			SkillLowTen: number[][];				//技能普通招募十次消耗
			SkillLowNum: number;				//技能普通招募免费次数
			SkillLowTime: number;				//技能普通招募免费时间(秒)
			SkillLowMax: number;				//技能普通招募每日次数
			SkillFragmentNum: number;				//技能碎片自动转换技能数量
			GiftOpen: number;				//礼包开启类型
			GiftSecs: number;				//礼包持续时间秒
			GiftCost: number[][];				//礼包消耗
			GiftAward: number[][];				//礼包物品（第一个物品为返还的钻石数）
			GiftTotalEmoney: number;				//礼包总价值
			BaseAttrOdds: number;				//基础属性转换系数
			BaseAttrAdd: number[];				//基础属性转换属性ID [战争,发展,辅助]
			JBTypeName: string[][];				//英雄羁绊【tab名字,表里面的类型】
			TJTypeName: string[][];				//英雄图鉴【tab名字,表里面的类型】-第一个占类型不用
		}

		export interface WorldMap {
			SLookX: number;				//对象查询x半径
			SLookY: number;				//对象查询y半径
			LookX: number;				//视野x半径
			LookY: number;				//视野y半径
			BaseSMaxLev: number;				//1-10级野怪搜索
			BaseSLookX: number;				//1-10级野怪搜索查询x半径
			BaseSLookY: number;				//1-10级野怪搜索查询y半径
			DefaultSkin: number;				//角色默认的城堡皮肤
			MarchOdds: number;				//行军系数
			LookSpeed: number;				//侦查速度
			AttackSpeed: number;				//攻击速度
			MarchFastItem: number[][];				//队列加速道具 物品ID,万分比
			RecallCost: number[][];				//撤退消耗
			FireTime: number;				//着火时间(秒)
			AddMapLv: number;				//添加对象玩家等级
			SearchMonsterType: number[];				//可搜索怪物类型
			SearchResourceType: number[];				//可搜索资源类型
			WorldMonsterMaxLevel: number;				//大世界怪物的最大等级（用于搜索）
			WorldResourceMaxLevel: number;				//大世界资源的最大等级（用于搜索）
			WorldSearchResDefaultLev: number;				//大世界资源搜索的默认等级
			MonsterHurt: number;				//野怪仅计算10%伤兵数量
			WorldResTownInfo: string[][];				//大世界资源塔配置[ID,名称]
			WorldBuffTownInfo: string[][];				//大世界属性塔配置[ID,名称]
			MaxPVEMusterCount: number;				//大世界可同时发起暗夜女王组队的数量
		}

		export interface Collection {
			DropTime: number;				//掉落一次时间（秒）
			Weight: number[];				//重量 0Null 1粮食 2木材 3铁矿 4金币
			UnLockLev: number[];				//各资源的采集解锁需要的城堡等级 0Null 1粮食 2木材 3铁矿 4金币
		}

		export interface Supply {
			DropId: number;				//物资补给掉落id
			Times: number[];				//物资补给每日间隔
		}

		export interface Shop {
			KeepTime: number;				//限时补给持续时间
			NextTime: number;				//限时补给下次开启时间
			ShopBuy: number[];				//限时补给刷新价格
		}

		export interface WeiDuan {
			Award: number[][];				//礼包
		}

		export interface Rebate {
			ReachMoney: number;				//金额限制
			Award: number[][];				//首次礼包
			Ratio: number;				//返利百分比
		}

		export interface WxGameReMindId {
			0: string;				//
			1: string;				//
			2: string;				//
			3: string;				//
			4: string;				//
			5: string;				//
			100: string;				//
			101: string;				//
			102: string;				//
			103: string;				//
			104: string;				//
			105: string;				//
		}

		export interface SubscribeLimid {
			ArmVal: number;				//兵源值限制【万分比】
			ArmTimeGet: number[][];				//兵源值某个时间段领取【当天的秒数，结束秒数】
			ArmTimeGetItems: string[][];				//兵源值某个时间段领取道具
		}

		export interface FriendInvation {
			BindingAward: number[][];				//绑定的奖励
			InvationMaxNum: number;				//邀请的最大人数数量
		}

		export interface AntiAddiction {
			DayTime: number;				//每天累计的时长
			LimitDayTime: number[];				//限制登陆的时间段[从零点开始算的秒数,到晚上12点的秒数]
			LimitMoney: number[][];				//每月限制充值的金额【最小年龄,最大年龄,每笔的充值上限,每月的充值上限】
		}

		export interface SdkNeedData {
			validTime: number;				//有效累计时长用户
			QQQunAward: number[][];				//加群奖励
			delayPayTime: number;				//延迟显示支付功能的时间秒数
		}

		export interface SwitchLanguage {
			yllgameH5: number[][];				//对应的渠道:[['语言的类型','语言的文本']]
		}

		export interface Role {
			AttrId: number;				//属性ID
			NewItem: number[][];				//新角色添加物品
			NewMail: number[][];				//新角色Mail物品
			NameCost: number[][];				//改名消耗
			PosCost: number[][];				//位置消耗
			SexCost: number[][];				//性别消耗
			OfflineTime: number;				//离线时间
			MapUnlock: number[];				//初始地图解锁
			NewSelfArm: number[];				//新手对战己方布阵
			NewTarArm: number[];				//新手对战敌方布阵
			HeroGet: number[][];				//第一次高级招募1次必得指定英雄
			CoverTime: number;				//新手保护罩时间
			CoverDelLv: number;				//玩家主城达到几级解除
			MonUpTime: number;				//智能刷怪时间(秒)
			MonUpNum: number;				//智能刷怪数量
			LookX: number;				//对象查询x半径
			LookY: number;				//对象查询y半径
			NewRoleQueueTime: number;				//新手赠送限时队列时间
			GuideDelaySec: number;				//软引导的前置空闲时间（秒）
			GuideShowHandTime: number;				//软引导手指光标出现的持续时间（秒）
			MonsterLv: number;				//创建新角色，前6级野怪不受打怪等级限制，初始默认可以打6级怪
			RepairBtnMaxClickTime: number;				//修理按钮需要点击的次数
			ArmyCritBoxImage: number;				//暴击宝箱校场中的图片ID
		}

		export interface Forbes {
			LCost: number[][];				//购买一个活跃消耗
			WeekBuyPointLimit: number;				//每周可购买的活跃点上限
			ViewCAward: number[][];				//活跃特权预览奖励
			ViewGAward: number[][];				//至尊特权预览奖励
		}

		export interface RedBag {
			Num: number;				//发送最低数量以及联盟最低人数
			Limit: number;				//发放钻石的上限为总充值上限的50%
		}

		export interface Probe {
			CheckSecs: number;				//每半小时触发1次随机事件
			DelaySecs: number;				//随机事件存在15分钟
			Limit: number;				//每日最可多可完成10次随机事件
		}

		export interface Hunting {
			MaxPoint: number;				//满值为15000分
			DayMaxNum: number;				//每天拥有3次次数
			PointToFood: number;				//多少积分兑换一份食物
			Food: number[][];				//一份食物
			RoundTime: number;				//每局的时间限制（秒）
			BaseArrowNum: number;				//初始箭支数量
		}

		export interface Family {
			CreGangCst: number[][];				//创建家族消耗元宝
			CreGangSkillId: number[];				//创建家族开始技能科技Id
			RecallTimes: number;				//罢免盟主需要的时间描述
			RecallCst: number[][];				//罢免盟主的消耗
			ChangeInfoCst: number[][];				//修改联盟信息消耗
			DonateGetMaxNum: number;				//联盟捐献每日获得积分上限
			DayGetGiftNum: number;				//联盟礼包每天领取的礼包上限
			PosNum: number[][];				//联盟posnum[职位类型（0:帮众,1:精英,2:长老,3:副盟主,4:帮主），数量(-1不限制人数)]
			AddItems: number[][];				//加入联盟赠送
			CZGGift: number;				//锤子怪奖励联盟普通礼包
			BoxCollection: number;				//金库获得资源数量为玩家采集量的万分比
			BoxSkill: number;				//联盟科技捐献资源进入联盟金库万分比
			CollectionAtt: number;				//领地里采集属性
				//资源点
			SupplyHour: number;				//资源点资源产出最多累计8小时资源产量
			Forbes: Forbes;				//资源点资源产出最多累计8小时资源产量
			GangPagodaRange: number;				//联盟塔势力范围
			PagodaDel: number;				//PagodaDel时间单位秒
			PagodaNum: number;				//PagodaNum默认个数
			HelpMax: number[];				//单个帮助上限
			AutoHelp: number[][];				//自动帮助
			AutoOpen: number;				//自动帮助Open
			LandGiveNum: number;				//领地捐献获得
			LandCashGive: number[][];				//领地钻石捐献(次数递增)
			LandGoldGive: number[][];				//领地金币捐献
			LandGoldNum: number;				//领地金币捐献次数
			LandRange: number;				//领地范围
			CreGangNoCostLv: number;				//创建家族不需要消耗道具的等级
			BagGiveNum: number;				//联盟仓库捐献获得
			BagCashGive: number[][];				//联盟仓库钻石捐献(次数递增)
			BagGoldGive: number[][];				//联盟仓库金币捐献
			BagGoldNum: number;				//联盟仓库金币捐献次数
			BagWeight: number;				//联盟仓库个人负重限制
			BagWeightDay: number;				//联盟仓库个人负重限制每日
			BagItemId: number[];				//联盟仓库保存ID
			MusterTime: number[];				//集结时间(分钟)
			MusterHelpOdds: number;				//集结部队上限系数
			MusterDelCost: number[][];				//联盟战争行军中解散队伍消耗
			SystemMainCityLv: number;				//系统盟限制申请跟踢出时的主城等级
			SkillLiveness: number[];				//技能捐献活跃
			RedBag: RedBag;				//联盟红包
			Probe: Probe;				//Gang探索
			Hunting: Hunting;				//联盟狩猎
			GangRecordListNum: number;				//帮派领取列表数
			AuctionNotice: number;				//联盟拍卖开启后公示期
			AuctionDuration: number;				//Auction持续时间
			AuctionDelay: number;				//Auction一次延迟时间
			AuctionDelayNum: number;				//Auction延迟次数
			AuctionRebateRate: number;				//联盟拍卖返利比率【万分比】
			AuctionPersonRebateRate: number;				//联盟拍卖个人再限制返利比率【万分比】
			AuctionBiddingRate: number;				//拍卖单次竞价加的比率【万分比】
			WishNum: number;				//许愿次数
			WeekWishNum: number;				//WeekCard许愿次数
			GodNum: number;				//帮助实现免费次数
			GodAward: number[][];				//帮助实现奖励
			GodCost: number[][];				//帮助实现钻石不受次数限制，钻石消耗
			ShowQrcode: number;				//上传二维码按钮开关
		}

		export interface Auction {
			AuctionNotice: number;				//拍卖开启后公示期
			AuctionDuration: number;				//Auction持续时间
			AuctionDelay: number;				//Auction一次延迟时间
			AuctionDelayNum: number;				//Auction延迟次数
		}

		export interface Treasure {
			ClaimLimitTime: number;				//索要的限制时间
			WaAwardItemNum: number;				//每天获得挖掘奖励宝箱有数量
			UseNum: number;				//每个藏宝图可以使用的道具上限次数
		}

		export interface Tax {
			Num: number;				//免费次数
			Cash: number;				//基础钻石
			Bei: number[];				//倍率计算
			Luck: number;				//幸运暴击次数
			CostMaxNum: number;				//每天最大的消耗元宝数
		}

		export interface TaskDay {
			DTaskNum: number;				//每日任务Num
			DTaskOkMax: number;				//每日任务完成Max次数
			DTaskFree: number;				//每日任务刷新免费次数
			DTaskCash: number;				//每日任务刷新消耗钻石
		}

		export interface Mining {
			TimeWork: number;				//最大挖矿时间单位秒
			TimeDrop: number;				//单次收益时间单位秒
			DropId: number;				//挖矿掉落id
			ExTime: number;				//兑换材料的延迟时间
			ExTimeOut: number;				//兑换材料的Out时间
			ExchangeItems: number[];				//联盟交换材料道具ID
			GameCount: number;				//每天挖矿小游戏次数
			GameRewardView: number[][];				//挖矿小游戏预览奖励
			GameMapData: number[][];				//矿洞小游戏地图数据
		}

		export interface MagicalBox {
			BoxID: number[];				//宝箱itemID
			shopID: number[];				//购买单个NewShopID
		}

		export interface DShop {
			MNum: number;				//一次生成个数
			RefreshTime: number[];				//刷新时间
		}

		export interface DefaultGang {
			RobotId: number;				//
			Name: string;				//
			GangId: number;				//
			GangName: string;				//
			Code: string;				//
			Notice: string;				//
			JiaXun: string;				//
			OwnerWX: string;				//
			QQQun: string;				//
			Flag: number;				//
			Color: number;				//
		}

		export interface GangCopy {
			Num: number;				//免费次数
			Cash: number;				//消耗钻石
		}

		export interface MoveCity {
			Cost: number[][];				//高级迁城消耗的道具
			GangCost: number[][];				//联盟迁城消耗的道具-没有在消耗高级迁城消耗
		}

		export interface Forbes {
			LYHZK: number;				//今日首次lev优惠折扣万分比
			LNum: number;				//今日首次优惠LNum
			LCost: number[][];				//等级一级消耗
			LMax: number;				//等级最多个数
			LPer: number;				//多少等级一份
			FYHZK: number;				//今日首次feng优惠折扣万分比
			FNum: number;				//今日首次优惠FNum
			FCost: number[][];				//积分十分消耗
			FMax: number;				//积分最多个数
			FPer: number;				//多少积分一份
			AddLev: number;				//高级金榜加的等级
			CfMax: number;				//配置固定等级
			CfExp: number;				//配置经验
			Des: number;				//金榜档位描述
			MaxAddLv: number;				//超过最大等级后加的等级
			DayTNum: number;				//每日任务数量
			DayUpCost: string[][];				//每日任务刷新消耗
			DayUpNum: number;				//每日任务刷新次数
		}

		export interface GlobalData {
			TiledMap: string[];				//地图配置
			NoChatNum: number;				//禁言重复次数
			NoChatTime: number;				//禁言时间（秒）
			VersionRepair: number;				//版本修复
			Bag: Bag;				//背包
			TeamTaskActivity: TeamTaskActivity;				//组队任务
			Recharge: Recharge;				//充值
			yllgameRecharge: yllgameRecharge;				//第三方充值
			SeniorPlayerMainLv: number;				//高级玩家主城等级多少级后需要展示下载界面更新
			Milestone: Milestone;				//里程碑
			HeroTJ: HeroTJ;				//英雄图鉴
			HeroBF: HeroBF;				//英雄兵法
			Staff: Staff;				//参谋部
			ZSFreeGift: ZSFreeGift;				//战损免费礼包
			Capture: Capture;				//占领
			FriendPoint: FriendPoint;				//友情点
			Equip: Equip;				//装备
			Recharge2: Recharge2;				//首冲2
			AutoMonster: AutoMonster;				//自动打怪
			RedBlue: RedBlue;				//红蓝对撞
			VideoShop: VideoShop;				//视频商店
			MapRes: MapRes;				//地图资源
			Robot: Robot;				//机器人
			Visit: Visit;				//拜访
			GodBeast: GodBeast;				//神兽祭坛
			MiniGames: MiniGames;				//小游戏
			Guide: Guide;				//新手相关
			Expedition: Expedition;				//远征
			AddQueue: AddQueue;				//客户端新增队列
			PlayerCollege: PlayerCollege;				//城主技能
			WarHall: WarHall;				//战争大厅
			Cover: Cover;				//防护罩
			Token: Token;				//货币
			Strength: Strength;				//体力
			Sweep: Sweep;				//扫荡
			Defense: Defense;				//城防
			ComAddSpeedItem: number[][];				//万能加速类道具[物品ID,秒]
			College: College;				//学院
			Build: Build;				//建筑
			Hospital: Hospital;				//医院
			Battle: Battle;				//战斗
			Camp: Camp;				//驻扎
			FamousCity: FamousCity;				//名城
			Ruins: Ruins;				//遗迹
			RuinsProbe: RuinsProbe;				//遗迹试炼
			EmperorCityCross: EmperorCityCross;				//跨服皇城
			EmperorCity: EmperorCity;				//皇城
			DragonComing: DragonComing;				//恶龙来袭
			Divination: Divination;				//星座占卜
			HeroLook: HeroLook;				//英雄连连看
			Arena: Arena;				//竞技场
			Hero: Hero;				//英雄
			WorldMap: WorldMap;				//世界地图
			Collection: Collection;				//采集
			Supply: Supply;				//物资补给
			Shop: Shop;				//商店
			MailTime: number;				//邮件删除时间
			MailTimeItem: number;				//物品邮件删除时间
			BTVip: number;				//初始VIP
			BTRech1: number;				//首冲倍数
			BTRech2: number;				//非首冲倍数
			VipExpItemId: number;				//贵族经验道具id
			WeiDuan: WeiDuan;				//微端
			Rebate: Rebate;				//二维码返利
			SubscribeItem: number[][];				//订阅提醒奖励
			OfficialAccountsItem: number[][];				//公众号奖励
			WxGameReMindId: WxGameReMindId;				//微信-订阅模板id【功能模块（100之前是微信1,100以后是微信2）:对应的id】
			WxSubscribeMode: string;				//跳转小程序类型：developer为开发版；trial为体验版；formal为正式版；默认为正式版
			SubscribeLimid: SubscribeLimid;				//订阅限制的功能
			FriendInvation: FriendInvation;				//好友邀请
			HornId: number;				//喇叭ID
			ChatSendTime: number;				//聊天2条消息间隔时间秒数-分段显示
			ChatWorldLimitTime: number;				//大世界发送聊天的时间间隔秒数vip0 限制
			ChatWorldNum: number;				//大世界聊天次数vip0限制
			ActivityIconAutoChangeDelay: number;				//主界面活动按钮自动切换间隔(毫秒)
			AntiAddiction: AntiAddiction;				//防沉迷
			SdkNeedData: SdkNeedData;				//sdk 需要用到的参数
			SwitchLanguage: SwitchLanguage;				//sdk 切换语言
			Role: Role;				//角色
			Family: Family;				//家族
			Auction: Auction;				//黑市拍卖会
			Treasure: Treasure;				//组队探宝
			HarvesteShareAddTime: number;				//自动收割机分享一个加的收割时间
			Tax: Tax;				//税收
			TaskDay: TaskDay;				//每日任务
			Mining: Mining;				//挖矿
			MagicalBox: MagicalBox;				//神奇宝箱
			AppointSort: number[];				//Appoint顺序
			DShop: DShop;				//动态商店
			DefaultGang: DefaultGang;				//默认系统帮派
			GangCopy: GangCopy;				//帮派捐献
			MoveCity: MoveCity;				//迁城
			Forbes: Forbes;				//迁城
			PVPBattleLog: number;				//PVP战斗记录开关
		}

	}
}
