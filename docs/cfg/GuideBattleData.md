namespace ns {
	export namespace global {
		export interface armInfo {
			atkName: string;				//
			atkIcon: number;				//
			defName: string;				//
			defIcon: number;				//
			atkRow: number[][];				//进攻方士兵（我方）
			defRow: number[][];				//防守方士兵（敌方）
		}

		export interface deadInfo {
			atk: number[][];				//进入方死亡士兵列表
			def: number[][];				//防守方死亡士兵列表
		}

		export interface heroSkill_1 {
			heroId: number;				//
			skillId: number;				//
			skillName: string;				//
			hitSkillName: string;				//
			loopSkillName: string;				//
			nameUrl: string;				//
			desc: string;				//
			isAttack: number;				//
		}

		export interface heroSkill_2 {
			heroId: number;				//
			skillId: number;				//
			skillName: string;				//
			hitSkillName: string;				//
			loopSkillName: string;				//
			nameUrl: string;				//
			targetArm: number[];				//
			desc: string;				//
			isAttack: number;				//
		}

		export interface heroInfo {
			enterPercent: number;				//英雄上场时间（攻击方总阵亡率）
			heroCfgID: number[];				//英雄配置ID
			heroLevel: number;				//英雄等级
			heroStar: number;				//英雄星级
			addArms: number[][];				//追加士兵
			killArms: number[][];				//追加士兵
			deadArms: number[][];				//追加士兵
			newDead: number[][];				//追加士兵
			heroSkill_1: heroSkill_1;				//追加士兵
			heroSkill_2: heroSkill_2;				//追加士兵
		}

		export interface openTalk2 {
			name: string;				//
			arrow: number;				//
			icon: string;				//
			info: string;				//
			sound: string;				//
			movePos: number[];				//
			delay: number;				//
		}

		export interface openTalk1 {
			name: string;				//
			arrow: number;				//
			icon: string;				//
			info: string;				//
			sound: string;				//
			movePos: number[];				//
			delay: number;				//
		}

		export interface centerTalk {
			name: string;				//
			arrow: number;				//
			icon: string;				//
			info: string;				//
			sound: string;				//
			delay: number;				//
		}

		export interface heroTalk {
			movePos: number[];				//
				//
		}

		export interface GuideBattleData {
			armInfo: armInfo;				//
			deadInfo: deadInfo;				//
			heroInfo: heroInfo;				//
			openTalk2: openTalk2;				//
			openTalk1: openTalk1;				//
			centerTalk: centerTalk;				//
			heroTalk: heroTalk;				//
				//
				//
		}

	}
}
