declare class CityMapMain extends BaseSpriteLayer {
   
    /**
     * 初始化地图【主要函数】
     */
    initMap(cx: number, cy: number): void;
    /**
     * 放大或缩小地图（备用函数）
     */    
    zoomIn(): void;
    zoomOut(): void;
    /**
     * 跳转到指定的坐标格子上
     */
    jumpToTile(xTile: number, yTile: number, isRefreshView?: boolean): void;
    /**
     * 取得指定建筑头顶按钮的坐标
     */
    getBuildButtonPosByType(buildType: number, btnName: string, isCheckSelected: boolean, isMoveCenter: boolean): egret.Point;
    /**
     * 取得指定配置类型的建筑对象的坐标
     */
    getBuildButtonPosByCfgID(cfgID: number, btnName: string, isRepairModel: boolean, isMoveCenter: boolean): egret.Point;
    /**
     * 取得特殊操作对象中的按钮的坐标
     */
    getSpecialMenuPos(objName: string, btnName: string): egret.Point;
    /**
     * 隐藏所有的菜单对象
     */
    hideAllMenus(): void;
    /**
     * 取得指定解锁格子顶部按钮的坐标
     */
    getMapUnlockTipPos(unlockIndex: number, btnName: string): egret.Point;
    /**
     * 删除对象【主要函数】
     */
    onDestroy(): void;
    private clearArmature();
    private cleanGuideMovieData();
    private getMapUrl(xTile, yTile, isWellMap);
    private createCityMapBgLoop();
    private createCityMapBgObject();
    private createCityMapObjects();
    private createCityMapMenuObjects();
    private initCityMapValues();
    private syncCellPos(cellObj, xTile, yTile);
    /**
     * 根据坐标取得地图数据项
     */
    private getPosData(xTile, yTile, cellData);
    /**
     * 根据坐标取得地图数据项
     */
    private getMenuPosData(xTile, yTile, cellData);
    /**
     * 根据坐标取得地图数据项
     */
    private getDuplicatePosData(xTile, yTile, cellData);
    /**
     * 根据坐标取得副本相关地图数据项
     */
    private getCloudPosData(xTile, yTile, cellData);
    /**
     * 取得最终的数据（先取有对象的，再取没有对象的）
     */
    private getBgCache();
    private getWellCache();
    private getCloudObjectCache();
    private getObjectCache();
    private getMovieCache();
    private getMenuCache();
    private hiddenObjectCache(cell);
    private regEvent();
    private unregEvent();
    private onWheelEvent(obj);
    /**
     * 更新牢笼状态
     */
    private syncCaptureInfo(objId);
    private onTouchBeginEvent(e);
    private onTouchMoveEvent(e);
    private onTouchEndEvent(e);
    private onTouchCancelEvent(e);
    private onTouchReleaseOutsideEvent(e);
    private m_nFrame;
    private m_nDelayFrame;
    private m_isRemoveDeleteOption;
    private m_autoMovePosX;
    private m_autoMovePosY;
    private m_xMoveSpeed;
    private m_yMoveSpeed;
    private m_bgLastPos;
    private m_loadTime;
    private m_loadTimeDelay;
    private onEnterFrameEvent();
    /**
    * 取得两个触点间的距离（用于计算缩放）
    */
    private getStageTouchDictance();
    /**
     * 移动整个地图
     */
    private moveLayer(xMoveSpeed, yMoveSpeed, isRefreshView?);
    private m_posCheck;
    private m_xMinMove;
    private m_xMaxMove;
    private m_yMinMove;
    private m_yMaxMove;
    private m_idxCache;
    private m_isCached;
    private syncView(isRefreshView?);
    private syncBgLoopView();
    private syncBgView();
    /** 墙面图更新 **/
    private syncBgWellView();
    private syncCouldCellObject();
    private syncAllObjectView();
    private syncDuplicateInfo();
    private m_lstArmsMovie;
    private m_moveComplete;
    private createNewArms();
    private onArmyMoveDone(fObj);
    /**
     * 设置当前选择的对象
     */
    private setSelectTileObj(unitData);
    /**
     * 移动当前选择的对象（拖动对象过程中的判定函数）
     */
    private m_posMEnd;
    private moveSelectTile(xMoveSpeed, yMoveSpeed);
    private reshowSelectTileObj();
    private resetVisualCell();
    private hiddenMovieCells();
    /**
     * 检测是否可以合成
     */
    private getCompleteArmyFlag();
    /**
     * 当前选择的对象拖动停止时的处理
     */
    private m_lastShowTipTime;
    private m_lastShowTipDelay;
    private onSelectTileTouchEnd();
    /**
     * 清空重复的坐标指向
     */
    private playSelectTileReturnMovie(lstUnit?);
    /**
     * 停止选中对象
     */
    private stopSelectTile(actKey?);
    /**
    * 发送合并消息
    */
    private sendGroupUpgradeMessage(lstCells);
    private sortByDis(obj1, obj2);
    private checkSelectTile(xStage, yStage);
    /**
     * 移动新建对象
     */
    private moveNewObjectTile(xMoveSpeed, yMoveSpeed);
    /**
     * 更新新建对象的状态
     */
    private syncNewTileState();
    setLight(value: MapViewCellData): void;
    /**
     * 清空选中光效
     */
    private clearLight();
    /**
     * 还原显示拖动的对象
     */
    private reshowDragObject();
    /**
     * 根据坐标复位对象
     */
    private reshowCellByPos(xTile, yTile, playSelectEffect);
    /**
     * 重新显示对象
     */
    private reshowCell(objID, playSelectEffect, isCanCreate?);
    /**
     * 更新菜单表现
     */
    private reshowMenuById(objID, isCreateNew?);
    /**
     * 单独刷新指定格子上的菜单对象
     */
    private reshowMenuCell(xTile, yTile);
    /**
     * 根据对象的ID来删除对象
     */
    private clearCell(objID, isClearData);
    /**
     * 清空菜单对象的显示
     */
    private clearMenuCell(objID, isDelete?);
    /**
     * 根据ID选择对象
     */
    private getObjectCellByObjID(objID);
    private getObjectCellByTile(xTile, yTile, isCreateNew?);
    /**
     * 取得指定ID的菜单对象
     */
    private getMenuCellById(objID, isCreateNew?);
    private getMenuCellByTile(xTile, yTile, isCreateNew?);
    private m_lastRefreshTime;
    private m_delayRefreshTime;
    private m_isNeedRefresh;
    private syncDepth();
    private sortByPos(c1, c2);
    /**
    * 更新对象层的深度
    */
    private syncObjectDepth();
    /**
     *
     *
     */
    getNearCell(cell: any): GMapSubCityObjectCell;
    /** 根据全局坐标取得点击处的对象 */
    getPosByCell(cell: any): egret.Point;
    getPos(xStage: number, yStage: number): egret.Point;
    /**
     * 取得点击处的显示对象
     */
    private getTouchObj(px, py);
    /**
     * 判断是否点击了阴影对象
     */
    private getTouchHeadCell(xStage, yStage);
    private onAddBuildEvent();
    private onCancelAddBuildEvent();
    private onCreateNewMapTileEvent(cfgID);
    /**
     * 发送创建新对象的消息
     */
    private sendCreateBuild();
    /**
     * 发送训练士兵的请求
     */
    private m_armyTipTime;
    private onCreateArmyEvent(unitID);
    private m_stopUnitID;
    private onStopBuildingEvent(unitID);
    private sendStopMessage(isSelected?);
    private onShowDeleteMenu();
    private onGuideTipDragUnit(type, cfgID, isResetPos?);
    private onGuideTipDragUnitClear();
    private onNewUserGuideComplete();
    /**
     * 向地图数据中添加一个新的格子信息
     * @param   unitID  新对象的编号（备用项）
     *
     */
    private onAddMapTileEvent(unitID);
    private clearScreenActObject(isCleanFull?);
    /**
    * 在屏幕上显示相关的对象
    */
    private onAddUnityToSceneEvent(unitID, isSyncDepth?);
    private onDeleteMapTileEvent(objID);
    private onDeleteSelectEvent();
    /**
     * 集合士兵
     */
    private onMusterUnitEvent();
    /**
     * 移动镜头到屏幕中心点
     */
    private centerViewPos(cell, isSyncView?);
    /**
     * 判断选中框是否在移动
     */
    private m_selectPlayMovieTime;
    private m_selectPlayMovieDelay;
    private IsPlaySelectMovie();
    private onMovePosEvent(unitID, actKey);
    private onSwapPosEvent(unitIDA, unitIDB, actKey);
    private onSwapMovieHidden(mov);
    private onSwapComplete(unitIDA, unitIDB, actKey?);
    /**
     * 合并对象操作
     */
    private onUpgradeTitleEvent(msg);
    private onDoubleMergeComplete(msg, movEnd);
    private onGroupMergeComplete(msg, idList);
    /**
     * 合成动画结束，移动菜单对象的位置
     */
    private onGroupMergeReturn(msg);
    private syncMergeInfo(msg, isRefreshView?);
    private onSyncStatue(unitID, isAddExp, isSalfModel, isComplete, isSyncDepth?);
    private onResetPosEvent();
    private lockedTouch(isHalfModel?);
    private unlockedTouch();
    private onSyncMapMask(xTile, yTile);
    private resetSelectTile(isClearSelect?);
    private resetNewTile();
    private cleanDeleteMenu();
    /**
     * 从建筑头顶飘获得金币的文字
     */
    private onAddMoneyEvent(unitID, add);
    /**
     *  从建筑头顶上飘获得经验值的文字
     */
    private onAddExpEvent(unitID);
    private onShowRedBagMovie(objID);
    private onBuildUpgradeEvent(obj);
    /**
     * 科技升级（同步检测并更新当前新建对象的状态）
     */
    private onColleteUpgradeEvent(type);
    /**
     * 民居金币飘飞到金融中心动画
     */
    private onPlayFlyMoneyMovie(posBase);
    private playFlyMoneyMovieDone(cell);
    /**
    * 金融中心状态更新
    */
    private onSyncHarvesteEvent();
    /**
     * 金融中心领取到金币
     */
    private onHarvesteGetMoney(money, bei);
    /**
     * 牢笼收取金币
     */
    private onCaptureGetMoney(objID, money);
    /**
     * 更新联盟帮助信息，同步医院和学院的按钮状态
     */
    private onSyncGuideHelpInfo();
    private onSyncCitySkinEvent();
    /**
     * 批量更新士兵的状态
     */
    private onSyncArmyListStatue(lst);
    /**
     * 更新医院治疗士兵的状态
     */
    private syncArmyMovie();
    /**
     * 特殊的刷新事件，当在主城时，判断民居的金币飘飞动画表现
     */
    private onUpdateView();
    private onCacheUpdateEvent();
    /**
     * 取得指定类型的建筑头顶按钮名称按钮的全局坐标
     *  （如果有多个同类型建筑，仅取第一个）
     *
     * @param buildType 建筑类型
     * @param btnName   按钮名称
     */
    private getBuildButtonGlobalPosByType(buildType, btnName, isMoveToCenter?, isCheckSelected?);
    /**
     * 取得指定类型的建筑头顶按钮名称按钮的全局坐标
     *  （如果有多个同类型建筑，仅取第一个）
     *
     * @param buildType 建筑类型
     * @param btnName   按钮名称
     */
    private getBuildButtonGlobalPosByCfgID(buildCfgID, btnName, isRepair, isMoveToCenter?);
    /**
     * 取得特殊面板上的按钮的坐标
     */
    private getSpecialObjButtonGlobalPos(objName, btnName);
    /**
    * 取得指定解锁地块格子对应按钮的坐标
    *  （如果有多个同类型建筑，仅取第一个）
    *
    * @param unlockIndex   要解锁的地块的编号
    * @param btnName       按钮名称
    */
    private getMapUnlockTileButtonGlobalPos(unlockIndex, btnName, isMoveToCenter?);
    private syncGuildInfo();
    /**
     * 自动解锁
     */
    private onGuildAutoUnlock(unlockIndex);
    /**
     * 自动解锁功能
     */
    private onAutoUnlockMoveComplete(unlockIndex);
    private onAutoSendUnlockMsg(unlockIndex);
    /**
     * 播放丰收动画
     */
    private onPlayResMovie();
    /** 更新地图格子对象的显示层级 */
    private onSyncMapTileVisible();
    private onSyncMapUnitMovie();
    private onSyncMapUnitLevel();
    private onSyncMapMenuInfo();
    /**
     * 更新神兽祭坛建筑表现
     */
    private onSyncGodBeastInfo();
    /** 更新神兽对象的信息 */
    private onSyncGodBeastObjectInfo();
    private onClearSelecteInfo();
    private onSyncSupperShopInfo();
    /**
     * 更新兵源对象的状态
     */
    private syncArmyVal();
    private onUIShowEvent();
    /**
     * 打开暴击礼包
     */
    private onOpenMapBoxEvent(msg);
    /**
     * 更新对象列表
     */
    private onSyncUnitList(lst);
    private onPlayStoryMovie(idx);
    /**
     * 停止动画的播放
     */
    private onStopStoryMovie();
    private playStoryStep();
    /**
     * 屏幕移动动作完毕
     */
    private onScreenMoveDone(isCheckNext);
    /**
     * 检测下一个执行步骤
     */
    private checkNextStep();
    private playStoryMovie(movData);
    /**
     * 剧情动画 - 生成士兵单位
     */
    private createMovieArmy(arr);
    /**
     * 剧情动画 - 移动士兵单位
     */
    private moveMovieArmy(arr);
    /**
     * 剧情动画 - 显示相关的建筑（根据实际情况进行显示）
     */
    private showMovieBuild(arr);
    /**
     * 批定的士兵播放相关的动作
     */
    private playMovieArmyAnimation(arr);
    /**
     * 播放光效动画
     */
    private playMovieShowEffect(arr);
    /**
     * 播放删除士兵的动画
     */
    private playMovieDeleteArmy(arr);
    /**
     * 播放删除光效的动画
     */
    private playMovieDeleteEffect(arr);
    private runAppEvent(key);
}