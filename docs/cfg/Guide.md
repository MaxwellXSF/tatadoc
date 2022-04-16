namespace ns {
	export namespace cfg {
		export class Guide {
			Id: number;		//#索引
			GuideType: number;		//引导类别
			NodeIndex: number;		//序号
			PlotTask: number;		//章节任务
			Desc: string;		//说明
			Step: number;		//步骤
			Type: number;		//类型
			Model: number;		//模式
			Value: number;		//值
			ShowJump: number;		//可跳过
			MaskAlpha: number;		//蒙板透明度
			RoleName: string;		//角色名
			TalkText: string;		//内容
			Sound: string;		//声音
			PanelName: string;		//面板名
			BtnName: string;		//按钮名
			ShowHand: number;		//是否有手
			HandAngle: number;		//手的角度
			BuildType: number;		//建筑类型
			BuildBtn: string;		//建筑按钮名
			LockDrag: number;		//锁事定拖动
			ShowTip: number;		//显示文字提示
			TipText: string;		//提示内容
			IsPrimary: number;		//是否关键步骤
			ClearUI: number;		//是否清空UI
			IsCanAction: number;		//是否允许操作
			MapType: number;		//地图需求
		}
	}
}