export function selectTab(tabId){
    console.log(tabId);
    return{
        type: 'TAB_SELECTED',
        payload: tabId
    }
}

//operador ... neste caso transforma a lista de param em array
export function showTabs(...tabsIds){
    const tabToShow = {};
    tabsIds.forEach(e => tabToShow[e] = true);
    return {
        type:'TAB_SHOWED',
        payload: tabToShow
    }
}