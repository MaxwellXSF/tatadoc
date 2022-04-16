<style>
table th:first-of-type {
    width: 300pt;
}
table th:nth-of-type(2) {
    width: 300pt;
}
</style>

# 目录
    模块目录: src/ui/view/sceneUI

## 对应协议文件
+ [主城地图协议](msg/msg/MainCity.md)
+ [大世界协议](msg/msg/WorldMap.md)

## 文件注释
| UI文件 | 注释 |
|----|----|
|  src\ui\view\sceneUI\ArmyBuildInfoPanel.ts |    兵源面板     |
|  src\ui\view\sceneUI\BuildInfoPanel.ts |    |
|  src\ui\view\sceneUI\BuildUnlockInfoPanel.ts |    建筑解锁信息面板     |
|  src\ui\view\sceneUI\BuildUpgradePanel.ts |    大地图上建筑升级面板     |
|  src\ui\view\sceneUI\CaptureArmyInfoPanel.ts |    沦陷-驻守士兵查看界面     |
|  src\ui\view\sceneUI\CaptureBuildInfoPanel.ts |    沦陷-牢笼信息面板     |
|  src\ui\view\sceneUI\CaptureChangeMoneyPanel.ts |    沦陷-变更赎金的界面     |
|  src\ui\view\sceneUI\CaptureOccupyInfoPanel.ts |    沦陷-进攻成功后沦陷确认面板     |
|  src\ui\view\sceneUI\CapturePlayerInfoPanel.ts |    沦陷-玩家信息面板     |
|  src\ui\view\sceneUI\DeadArmyInfoPanel.ts |    跨服活动中死兵返还通用界面     |
|  src\ui\view\sceneUI\DeadsoldiersInfoWnd.ts |  死兵恢复信息界面-跨服    |
|  src\ui\view\sceneUI\HospitalPanel.ts |    医院主面板     |
|  src\ui\view\sceneUI\MoveCityWnd.ts |  通用的迁城弹窗界面    |
|  src\ui\view\sceneUI\SchoolYardArmyInfoPanel.ts |    校场士兵信息面板     |
|  src\ui\view\sceneUI\SchoolYardCompNewPanel.ts |    校场合成面板（新规则面板）     |
|  src\ui\view\sceneUI\SchoolYardCompPanel.ts |   // 校场合成面板 //    |
|  src\ui\view\sceneUI\SchoolYardEditPanel.ts |    校场编辑界面     |
|  src\ui\view\sceneUI\SchoolYardNewPanel.ts |    校场主界面     |
|  src\ui\view\sceneUI\SchoolYardPanel.ts |   // 校场主界面 //    |
|  src\ui\view\sceneUI\SpeedUpPanel.ts |    快捷加速面板（单体加速及全体加速功能）     |
|  src\ui\view\sceneUI\StrongPartOneKeyMergePanel.ts |  强化部件-一键合成    |
|  src\ui\view\sceneUI\sub\ArmyUnitCell.ts |    士兵对象     |
|  src\ui\view\sceneUI\sub\BuildIcon.ts |  |
|  src\ui\view\sceneUI\sub\ComAddCos.ts |    播放动画表现     |
|  src\ui\view\sceneUI\sub\GangBuildMarchInfoCell.ts |    联盟堡垒或者联盟塔中--单个玩家及其部队详细信息面板     |
|  src\ui\view\sceneUI\sub\MarchArmyInfoCell.ts |    单支部队详细信息面板     |
|  src\ui\view\sceneUI\sub\MarchPlayerCell.ts |    单个玩家及其部队详细信息面板     |
|  src\ui\view\sceneUI\sub\SchoolYardFightTeamCell.ts |    战争大厅编队信息子对象     |
|  src\ui\view\sceneUI\sub\SchoolYardNewCell.ts |    单个士兵信息对象     |
|  src\ui\view\sceneUI\sub\SchoolYardNewCell_2.ts |  单个士兵信息对象-通用    |
|  src\ui\view\sceneUI\sub\SchoolYardPlanArmyCell.ts |    单个士兵信息对象     |
|  src\ui\view\sceneUI\sub\SupllyCell.ts |   |
|  src\ui\view\sceneUI\sub\WorldBossMonsterCell.ts |    怪物小图标     |
|  src\ui\view\sceneUI\sub\WorldCityArmyInfoCell.ts |    设置数据项     |
|  src\ui\view\sceneUI\sub\WorldFavoritesCell.ts |    收藏夹子项     |
|  src\ui\view\sceneUI\sub\WorldSearchCell.ts |    设置数据项     |
|  src\ui\view\sceneUI\sub\WorldSpeedItemCell.ts |    购买并使用     |
|  src\ui\view\sceneUI\sub\WorldUnitTalkObject.ts |    大世界聊天对象     |
|  src\ui\view\sceneUI\SupllyHallPanel.ts |    补给大厅主界面     |
|  src\ui\view\sceneUI\TexCollectionPanel.ts |    金融中心主界面     |
|  src\ui\view\sceneUI\TexCollectionUpgradePanel.ts |    金融中心升级面板     |
|  src\ui\view\sceneUI\WorldAddFavoritesPanel.ts |    添加到收藏夹面板面板     |
|  src\ui\view\sceneUI\WorldAddSpeedItemPanel.ts |  如果当前要加速的队列已经回城，则自动关闭面板    |
|  src\ui\view\sceneUI\WorldBossInfoPanel.ts |    世界BOSS信息     |
|  src\ui\view\sceneUI\WorldBossListPanel.ts |    恶龙来袭活动恶龙列表     |
|  src\ui\view\sceneUI\WorldBuildCostPanel.ts |    更新当前的摆放的状态     |
|  src\ui\view\sceneUI\WorldCampInfoPanel.ts |    野外营地驻军信息     |
|  src\ui\view\sceneUI\WorldCheckDarkFortressInfoPanel.ts |  暗黑堡垒-守军详情界面    |
|  src\ui\view\sceneUI\WorldCityArmyInfoPanel.ts |    大世界-名城或皇城活动中的驻军详情面板     |
|  src\ui\view\sceneUI\WorldDarkFortressEarningsPanel.ts |  暗黑堡垒-掠夺收益界面    |
|  src\ui\view\sceneUI\WorldDarkFortressInfoPanel.ts |  大世界-暗黑堡垒    |
|  src\ui\view\sceneUI\WorldEmperorInfoPanel.ts |    皇城,名城,皇城箭塔信息面板     |
|  src\ui\view\sceneUI\WorldFavoritesPanel.ts |    点击选项按钮     |
|  src\ui\view\sceneUI\WorldGangBagInfoPanel.ts |  大世界-联盟仓库    |
|  src\ui\view\sceneUI\WorldGangBuildInfoMorePanel.ts |    联盟堡垒以及联盟旗帜（联盟塔）的详细界面     |
|  src\ui\view\sceneUI\WorldGangBuildInfoPanel.ts |    点击联盟建筑后弹出的信息界面     |
|  src\ui\view\sceneUI\WorldGangMineInfoPanel.ts |     |
|  src\ui\view\sceneUI\WorldGangTowerInfoPanel.ts |  大世界-联盟箭塔    |
|  src\ui\view\sceneUI\WorldJumpPanel.ts |    大世界跳转界面     |
|  src\ui\view\sceneUI\WorldMarchInfoPanel.ts |    编制详情面板     |
|  src\ui\view\sceneUI\WorldMonsterInfoPanel.ts |    取得按钮的模式     |
|  src\ui\view\sceneUI\WorldMonsterSelectPanel.ts |    大世界自动打野怪选择界面     |
|  src\ui\view\sceneUI\WorldPlayerCitySelectedPanel.ts |    玩家Debuff玩家选择对象     |
|  src\ui\view\sceneUI\WorldPlayerInfoPanel.ts |    更新按钮名称及状态     |
|  src\ui\view\sceneUI\WorldRandomEventInfoPanel.ts |    随机事件探索面板     |
|  src\ui\view\sceneUI\WorldRandomEventListPanel.ts |    随机事件列表     |
|  src\ui\view\sceneUI\WorldResourceInfoPanel.ts |   |
|  src\ui\view\sceneUI\WorldResTownInfoPanel.ts |    点击收藏夹按钮     |
|  src\ui\view\sceneUI\WorldRuinsInfoPanel.ts |    更新按钮名称及状态     |
|  src\ui\view\sceneUI\WorldSearchPanel.ts |    subType取CDef.WSearchSubType中的值     |
|  src\ui\view\sceneUI\WorldTeamTreasurePanel.ts |  大世界-组队探宝界面    |