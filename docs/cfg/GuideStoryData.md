namespace ns {
	export namespace global {
		export interface story_1000 {
				//操作相当数值(X坐标,Y坐标,动画表现时间)
		}

		export interface story_1100 {
				//操作相当数值(X坐标,Y坐标,动画表现时间)
		}

		export interface story_1001 {
				//操作相当数值(X坐标,Y坐标,动画表现时间)
		}

		export interface story_1012 {
				//操作相当数值(X坐标,Y坐标,动画表现时间)
		}

		export interface story_1002 {
				//
		}

		export interface story_1003 {
				//
		}

		export interface story_1004 {
				//
		}

		export interface story_1005 {
				//
		}

		export interface story_1006 {
				//
		}

		export interface story_1007 {
				//
		}

		export interface story_1008 {
				//
		}

		export interface story_1009 {
				//
		}

		export interface story_1010 {
				//
		}

		export interface story_1011 {
				//
		}

		export interface story_1013 {
				//
		}

		export interface story_1014 {
				//
		}

		export interface mov_1001 {
			createArmy: number[][];				//格式为[索引,ID,x坐标,y坐标,朝向,缩放比]
			moveArmy: number[][];				//移动士兵
		}

		export interface mov_1002 {
			moveArmy: number[][];				//移动士兵
		}

		export interface mov_1003 {
			showBuild: number[][];				//格式为[建筑类型,状态（1修理中，0正常状态）]
			deleteArmy: number[][];				//删除士兵[要删除的士兵ID列表]
			playEffect: number[][];				//格式为[索引,光效名,坐标X,坐标Y,播放次数]
		}

		export interface mov_1004 {
			showBuild: number[][];				//格式为[建筑类型,状态（1修理中，0正常状态）]
			deleteEffect: number[][];				//删除光效[要删除的士兵ID列表]
		}

		export interface mov_1005 {
			showBuild: number[][];				//格式为[建筑类型,状态（1修理中，0正常状态）]
			deleteArmy: number[][];				//删除士兵[要删除的士兵ID列表]
			deleteEffect: number[][];				//删除光效[要删除的士兵ID列表]
		}

		export interface GuideStoryData {
			story_1000: story_1000;				//剧情段落
			story_1100: story_1100;				//剧情段落
			story_1001: story_1001;				//剧情段落
			story_1012: story_1012;				//剧情段落
			story_1002: story_1002;				//剧情段落
			story_1003: story_1003;				//剧情段落
			story_1004: story_1004;				//剧情段落
			story_1005: story_1005;				//剧情段落
			story_1006: story_1006;				//剧情段落
			story_1007: story_1007;				//剧情段落
			story_1008: story_1008;				//剧情段落
			story_1009: story_1009;				//剧情段落
			story_1010: story_1010;				//剧情段落
			story_1011: story_1011;				//剧情段落
			story_1013: story_1013;				//剧情段落
			story_1014: story_1014;				//剧情段落
			mov_1001: mov_1001;				//动作段1001
			mov_1002: mov_1002;				//动作段1002
			mov_1003: mov_1003;				//动作段1003
			mov_1004: mov_1004;				//动作段1004
			mov_1005: mov_1005;				//动作段1005
				//聊天剧情
				//聊天剧情
				//聊天剧情
				//聊天剧情
				//聊天剧情
				//聊天剧情
				//聊天剧情
				//聊天剧情
				//聊天剧情
				//聊天剧情
				//聊天剧情
				//聊天剧情
				//聊天剧情
				//聊天剧情
				//聊天剧情
				//聊天剧情
				//聊天剧情
				//聊天剧情
				//聊天剧情
				//聊天剧情
				//聊天剧情
				//聊天剧情
				//聊天剧情
				//聊天剧情
		}

	}
}
