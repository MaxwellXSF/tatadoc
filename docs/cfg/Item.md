namespace ns {
	export namespace cfg {
		export class Item {
			Id: number;		//#配置ID
			Name: string;		//名称
			Show: string;		//显示
			Flag: number;		//标记
			Type: number;		//物品大类型
			ItemType: number;		//物品小类型
			SkillType: number;		//技能类型
			Quality: number;		//品质
			AmountLimit: number;		//叠加物品数量
			Price: number;		//出售价格
			Icon: string;		//物品图标
			Description: string;		//物品说明
			SkillDesc: string;		//技能说明
			AttrId: number;		//属性ID
			UseNeed: string;		//打开消耗
			UseGain: number;		//打开获得
			MergeId: number;		//合成ID
			BuyId: number;		//快捷购买ID
			JumpUI: string;		//跳转获取途径
			GoToUI: string;		//前往
		}
	}
}