// Generated by msgts
// DO NOT EDIT!

namespace ns {
	export namespace msg {
		// 装备天赋属性推送
		export class S2C_EquipCollegeAttr {	
			// 天赋属性
			public Attr: dbmodel.EquipCollegeAttr; 
		}
		
		// 装备模具
		export class C2S_EquipMould {	
			// 配置ID
			public CId: number; 
		}
		
		
		export class S2C_EquipMould {	
			// 0失败 1成功
			public Ret: number; 
			// 配置ID
			public CId: number; 
			// 悟性值
			public TalentVal: number; 
			// 悟性天赋点
			public TalentPoint: number; 
			// 道具
			public Items: data.Item[]; 
		}
		
		// 装备天赋学习
		export class C2S_EquipCollegeLearn {	
			// 1全部 2单次
			public Type: number; 
			// 当前配置ID
			public CId: number; 
		}
		
		
		export class S2C_EquipCollegeLearn {	
			// 0失败 1成功
			public Ret: number; 
			// 当前配置ID
			public CId: number; 
			// 技能对象
			public Obj: dbmodel.EquipCollegeObj; 
			// 使用点数
			public UsePoint: number; 
		}
		
		// 装备天赋重置
		export class C2S_EquipCollegeReset {	
		}
		
		
		export class S2C_EquipCollegeReset {	
			// 0失败 1成功
			public Ret: number; 
			// 技能树
			public Tree: dbmodel.EquipCollegeTree; 
		}
		
		// 装备附魔石
		export class C2S_EquipStone {	
			// 类型
			public Type: number; 
			// 数量
			public Nums: number[]; 
		}
		
		
		export class S2C_EquipStone {	
			// 0失败 1成功
			public Ret: number; 
			// 道具
			public Items: data.Item[]; 
		}
		
		// 装备锻造
		export class C2S_EquipMake {	
			// 模具ID
			public CId: number; 
			// 附魔石ID
			public CIds: number[]; 
		}
		
		
		export class S2C_EquipMake {	
			// 0失败 1成功
			public Ret: number; 
			// 实例ID
			public Id: string; 
			// 装备数据
			public Equip: dbmodel.Item; 
			// 悟性值
			public TalentVal: number; 
			// 悟性天赋点
			public TalentPoint: number; 
			// 悟性增加
			public TalentAdd: number; 
		}
		
		// 装备穿戴
		export class C2S_EquipWear {	
			// 实例ID
			public Id: string; 
			// 兵种
			public Arm: number; 
			// 槽位
			public Slot: number; 
		}
		
		
		export class S2C_EquipWear {	
			// 0失败 1成功
			public Ret: number; 
			// 兵种
			public Arm: number; 
			// 槽位
			public Slot: number; 
			// 实例ID
			public Id: string; 
			// 战力
			public Power: number; 
		}
		
		// 装备槽位强化
		export class C2S_EquipSlotEnhance {	
			// 兵种
			public Arm: number; 
			// 槽位
			public Slot: number; 
		}
		
		
		export class S2C_EquipSlotEnhance {	
			// 0失败 1成功
			public Ret: number; 
			// 兵种
			public Arm: number; 
			// 槽位
			public Slot: number; 
			// 强化等级
			public Enhance: number; 
			// 强化当前经验
			public EnhanceExp: number; 
		}
		
		// 装备槽位突破
		export class C2S_EquipSlotStar {	
			// 兵种
			public Arm: number; 
			// 槽位
			public Slot: number; 
		}
		
		
		export class S2C_EquipSlotStar {	
			// 0失败 1成功 2概率失败
			public Ret: number; 
			// 兵种
			public Arm: number; 
			// 槽位
			public Slot: number; 
			// 升星等级
			public Star: number; 
		}
		
		// 装备技能洗练
		export class C2S_EquipSkillLv {	
			// 实例ID
			public Id: string; 
			// 材料实例ID
			public TId: string; 
		}
		
		
		export class S2C_EquipSkillLv {	
			// 0失败 1成功
			public Ret: number; 
			// 实例ID
			public Id: string; 
		}
		
		// 装备技能鉴定
		export class C2S_EquipSkillLook {	
			// 实例ID
			public Id: string; 
		}
		
		
		export class S2C_EquipSkillLook {	
			// 0失败 1成功
			public Ret: number; 
			// 实例ID
			public Id: string; 
		}
		
		// 装备分解
		export class C2S_EquipSplit {	
			// 实例ID
			public Ids: string[]; 
		}
		
		
		export class S2C_EquipSplit {	
			// 0失败 1成功
			public Ret: number; 
			// 道具
			public Items: data.Item[]; 
		}
		
		// 装备锁定
		export class C2S_EquipLock {	
			// 实例ID
			public Id: string; 
			// 锁定 0没锁 1锁定
			public Lock: number; 
		}
		
		
		export class S2C_EquipLock {	
			// 0失败 1成功
			public Ret: number; 
			// 实例ID
			public Id: string; 
		}
		
	}
}
