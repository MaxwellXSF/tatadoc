namespace ns {
	export namespace global {
		export interface MultilingualData {
			DefaultLanagage: number;				//默认语言包
			DefaultLanguageList: number[];				//默认金语言列表
			LanguageList: number[][];				//语言包列表,格式为[索引编号,备注名,扩展标识,文字显示模式(0从左到右,1从右到左),数值显示方式(0中文模式，1英文模式)]
				//各平台多语言设置
		}

	}
}
