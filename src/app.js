import { AsyncStorage, Platform } from 'react-native';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { Navigation } from 'react-native-navigation';
import registerScreens from './screens';
import { buildTachyons, configureStore, ms } from './utils';

export default class App {
    constructor() {
        // Disable on screen warning while in debug mode
        console.disableYellowBox = true;

        // Build the Tachyons CSS
        buildTachyons();

        const store = configureStore();
        persistStore(store, {
            storage: AsyncStorage,
            // whitelist: [],
        }, () => {
            // register all screens for navigation
            registerScreens(store, Provider);

            // Run app (single screen)
            this.runApp();
        });
    }
    runApp() {
        Navigation.startSingleScreenApp({
            screen: { screen: 'kliklpd.Home' },
            drawer: {
                left: {
                    screen: 'kliklpd.Drawer',
                    // fixedWidth: ms(280),
                },
                style: {
                    drawerShadow: false,
                    contentOverlayColor: 'rgba(0,0,0,0.75)',
                    shouldStretchDrawer: false,
                    leftDrawerWidth: Platform.OS === 'ios' ? 75 : ms(280),
                },
                disableOpenGesture: true,
            },
        });
    }
}
