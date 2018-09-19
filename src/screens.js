import { Navigation } from 'react-native-navigation';
import { ImageViewer, Drawer } from './modules/_global';
import SplashScreen from './modules/SplashScreen';
import Login from './modules/Login';
// import SignUp from './modules/SignUp';
import Home from './modules/Home';
import Pinjaman from './modules/Pinjaman';
import Simpanan from './modules/Simpanan';
import Walkthrough from './modules/Walkthrough';
import Pemberitahuan from './modules/Pemberitahuan';
// import Belanja from './modules/Belanja';
import Riwayat from './modules/Riwayat';
import Profile from './modules/Profile';
import Pengaturan from './modules/Pengaturan';
import AddSimpanan from './modules/AddSimpanan';
import AddPinjaman from './modules/AddPinjaman';
import Nasabah from './modules/Nasabah';

export default (store, Provider) => {
    Navigation.registerComponent('kliklpd.ImageViewer', () => ImageViewer, store, Provider);
    Navigation.registerComponent('kliklpd.Drawer', () => Drawer, store, Provider);

    Navigation.registerComponent('kliklpd.SplashScreen', () => SplashScreen, store, Provider);
    Navigation.registerComponent('kliklpd.Walkthrough', () => Walkthrough, store, Provider);
    Navigation.registerComponent('kliklpd.Login', () => Login, store, Provider);
    // Navigation.registerComponent('kliklpd.SignUp', () => SignUp, store, Provider);
    Navigation.registerComponent('kliklpd.Home', () => Home, store, Provider);
    Navigation.registerComponent('kliklpd.Pinjaman', () => Pinjaman, store, Provider);
    Navigation.registerComponent('kliklpd.Simpanan', () => Simpanan, store, Provider);
    // Navigation.registerComponent('kliklpd.Belanja', () => Belanja, store, Provider);
    Navigation.registerComponent('kliklpd.Riwayat', () => Riwayat, store, Provider);
    Navigation.registerComponent('kliklpd.Profile', () => Profile, store, Provider);
    Navigation.registerComponent('kliklpd.Pengaturan', () => Pengaturan, store, Provider);
    Navigation.registerComponent('kliklpd.AddSimpanan', () => AddSimpanan, store, Provider);
    Navigation.registerComponent('kliklpd.AddPinjaman', () => AddPinjaman, store, Provider);
    Navigation.registerComponent('kliklpd.Pemberitahuan', () => Pemberitahuan, store, Provider);
    Navigation.registerComponent('kliklpd.Nasabah', () => Nasabah, store, Provider);
};
