# QDictioonary

## set(key: string | number, value: T): void;
- 参数：`key` -- 索引，可填 `string` 类型或 `number` 类型
- 参数：`value` -- 值，类型为 `any`
- 返回值： 无

向字典中添加索引和内容

## get(key: string | number): T;
- 参数：`key` -- 索引，可填 `string` 类型或 `number` 类型
- 返回值： 根据索引 `key` 取到的值，如果没有则返回 `null`

根据传入的字典索引，从字典中取得相应的值

## shift(): T;
- 返回值： 取得字典中最先压入的值，如果不存在则返回 `null`

## pop(): T;
- 返回值： 取得字典中最后压入的值，如果不存在则返回 `null`

## contentsKey(key: string | number): boolean;
- 参数：`key` -- 索引，可填 `string` 类型或 `number` 类型
- 返回值： 判断指定索引 `key` 是否有设置值，能找到则返回 `true`，否则返回 `false`

判断索引是否在字典中（与该索引的值是否有效无关）

## remove(key: string | number): boolean;
- 参数：`key` -- 索引，可填 `string` 类型或 `number` 类型
- 返回值： 删除以索引 `key` 以及对应的值，操作成功返回 `true`，否则返回 `false`

从字典中删除指定索引以及对应的值

## clear(): void;
清空字典，删除所有的字典及对应的值

## keys: Array<any>;
- 返回值： 取得索引的数组

## values: Array<T>;
- 返回值： 取得字典中所有的值`该方法尽量少用，可以循环用datas，建议只在需要数组排序的时候使用，避免在循环中set后再获取该值，会大幅降低效率`

## datas: { [key: string]: T; };
- 返回值： 取得字典中所有的数据项（原始值）

## length: number;
- 返回值： 取得字典中索引的条目数

## toString(): string;
- 返回值： 测试时使用的方法，会以 `[索引:值]` 的格式打印出字典中所有的内容
