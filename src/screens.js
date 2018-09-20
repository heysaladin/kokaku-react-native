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
    Navigation.registerComponent('kokaku.ImageViewer', () => ImageViewer, store, Provider);
    Navigation.registerComponent('kokaku.Drawer', () => Drawer, store, Provider);

    Navigation.registerComponent('kokaku.SplashScreen', () => SplashScreen, store, Provider);
    Navigation.registerComponent('kokaku.Walkthrough', () => Walkthrough, store, Provider);
    Navigation.registerComponent('kokaku.Login', () => Login, store, Provider);
    // Navigation.registerComponent('kokaku.SignUp', () => SignUp, store, Provider);
    Navigation.registerComponent('kokaku.Home', () => Home, store, Provider);
    Navigation.registerComponent('kokaku.Pinjaman', () => Pinjaman, store, Provider);
    Navigation.registerComponent('kokaku.Simpanan', () => Simpanan, store, Provider);
    // Navigation.registerComponent('kokaku.Belanja', () => Belanja, store, Provider);
    Navigation.registerComponent('kokaku.Riwayat', () => Riwayat, store, Provider);
    Navigation.registerComponent('kokaku.Profile', () => Profile, store, Provider);
    Navigation.registerComponent('kokaku.Pengaturan', () => Pengaturan, store, Provider);
    Navigation.registerComponent('kokaku.AddSimpanan', () => AddSimpanan, store, Provider);
    Navigation.registerComponent('kokaku.AddPinjaman', () => AddPinjaman, store, Provider);
    Navigation.registerComponent('kokaku.Pemberitahuan', () => Pemberitahuan, store, Provider);
    Navigation.registerComponent('kokaku.Nasabah', () => Nasabah, store, Provider);
};
