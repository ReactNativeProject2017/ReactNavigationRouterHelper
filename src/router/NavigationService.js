import {NavigationActions} from 'react-navigation';

let _navigator;
let _routers;
let _navigation;

function setTopLevelNavigator(navigatorRef) {
    _navigator = navigatorRef;
}

function setRouters(routers, navigation) {
    _routers = routers;
    _navigation = navigation;
}


function navigate(routeName, params) {
    _navigator.dispatch(
        NavigationActions.navigate({
            type: NavigationActions.NAVIGATE,
            routeName,
            params,
        })
    );
}

function popToTop() {
    _navigator.dispatch(NavigationActions.popToTop())
}

function goBack() {
    _navigator.dispatch(NavigationActions.back({type: NavigationActions.BACK}));
}

function popToRouter(routeName) {
    if (!routeName) {
        this.goBack();
        return;
    }
    let len = _routers.length;
    for (let i = len - 1; i >= 0; i--) {
        let route = _routers[i];
        if (routeName === route.routeName) {
            if (i === 0) {
                this.popToTop();
            } else {
                _navigation.goBack(route.key);
            }
            return;
        }
    }
}

export default {
    setTopLevelNavigator,
    setRouters,
    navigate,
    popToRouter,
    goBack,
    popToTop
};