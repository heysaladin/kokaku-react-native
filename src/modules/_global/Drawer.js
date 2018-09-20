import React, { Component } from 'react';
import { ScrollView, View, Image, Platform, Linking } from 'react-native';
import PropTypes from 'prop-types';
import { styles as s } from 'react-native-style-tachyons';
import IonIcon from 'react-native-vector-icons/Ionicons';
import _ from 'lodash';
import { ms, Toast } from '../../utils';
import UniButton from './UniButton';
import * as UniText from './UniText';

const DrawerMenu = (props) => {
    return (
        <UniButton action={props.action}>
            <View style={[s.jcc, { height: ms(40), paddingHorizontal: ms(20) }]}>
                {
                    props.isSelected
                        ? <UniText.Semibold size={ms(16)}>{props.text}</UniText.Semibold>
                        : <UniText.Regular size={ms(16)} color="#666">{props.text}</UniText.Regular>
                }
            </View>
        </UniButton>
    );
};
DrawerMenu.propTypes = {
    action: PropTypes.func.isRequired,
    isSelected: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
};

class Drawer extends Component {
    constructor(props) {
        super(props);

        this._toggleDrawer = this._toggleDrawer.bind(this);
        this._gotoHome = this._gotoHome.bind(this);
        this._gotoSimpanan = this._gotoSimpanan.bind(this);
        this._gotoPinjaman = this._gotoPinjaman.bind(this);
        this._gotoRiwayat = this._gotoRiwayat.bind(this);
        this._gotoProfile = this._gotoProfile.bind(this);
        this._gotoPengaturan = this._gotoPengaturan.bind(this);
        this._gotoNasabah = this._gotoNasabah.bind(this);

        this.state = {
            selectedMenu: 'home',
        };
    }
    _toggleDrawer() {
        this.props.navigator.toggleDrawer({
            to: 'closed',
            side: 'left',
            animated: true,
        });
    }
    _gotoHome() {
        this._toggleDrawer();

        if (this.state.selectedMenu !== 'home') {
            this.setState({ selectedMenu: 'home' });
            if (Platform.OS === 'ios') {
                this.props.navigator.handleDeepLink({ link: 'Home' });
            } else {
                this.props.navigator.resetTo({
                    screen: 'kokaku.Home',
                });
            }
        }
    }
    _gotoSimpanan() {
        this._toggleDrawer();

        if (this.state.selectedMenu !== 'simpanan') {
            this.setState({ selectedMenu: 'simpanan' });
            if (Platform.OS === 'ios') {
                this.props.navigator.handleDeepLink({ link: 'Simpanan' });
            } else {
                this.props.navigator.resetTo({
                    screen: 'kokaku.Simpanan',
                });
            }
        }
    }
    _gotoPinjaman() {
        this._toggleDrawer();

        if (this.state.selectedMenu !== 'pinjaman') {
            this.setState({ selectedMenu: 'pinjaman' });
            if (Platform.OS === 'ios') {
                this.props.navigator.handleDeepLink({ link: 'Pinjaman' });
            } else {
                this.props.navigator.resetTo({
                    screen: 'kokaku.Pinjaman',
                });
            }
        }
    }
    _gotoNasabah() {
        this._toggleDrawer();

        if (this.state.selectedMenu !== 'nasabah') {
            this.setState({ selectedMenu: 'nasabah' });
            if (Platform.OS === 'ios') {
                this.props.navigator.handleDeepLink({ link: 'Nasabah' });
            } else {
                this.props.navigator.resetTo({
                    screen: 'kokaku.Nasabah',
                });
            }
        }
    }
    _gotoRiwayat() {
        this._toggleDrawer();

        if (this.state.selectedMenu !== 'riwayat') {
            this.setState({ selectedMenu: 'riwayat' });
            if (Platform.OS === 'ios') {
                this.props.navigator.handleDeepLink({ link: 'Riwayat' });
            } else {
                this.props.navigator.resetTo({
                    screen: 'kokaku.Riwayat',
                });
            }
        }
    }
    _gotoProfile() {
        this._toggleDrawer();

        if (this.state.selectedMenu !== 'profile') {
            this.setState({ selectedMenu: 'profile' });
            if (Platform.OS === 'ios') {
                this.props.navigator.handleDeepLink({ link: 'Profile' });
            } else {
                this.props.navigator.resetTo({
                    screen: 'kokaku.Profile',
                });
            }
        }
    }
    _gotoPengaturan() {
        this._toggleDrawer();

        if (this.state.selectedMenu !== 'pengaturan') {
            this.setState({ selectedMenu: 'pengaturan' });
            if (Platform.OS === 'ios') {
                this.props.navigator.handleDeepLink({ link: 'Pengaturan' });
            } else {
                this.props.navigator.resetTo({
                    screen: 'kokaku.Pengaturan',
                });
            }
        }
    }
    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false}
                contentContainerStyle={[s.flx_i, { backgroundColor: '#fff', width: ms(280) }]}
                scrollEnabled={false}
            >
                <View style={{ paddingHorizontal: ms(20), paddingTop: ms(30), paddingBottom: ms(20) }}>
                    <View style={{ width: ms(90), height: ms(90), borderRadius: ms(45), backgroundColor: '#eee' }}>
                        <Image source={{ uri: 'https://cdn.iconscout.com/public/images/icon/free/png-256/avatar-user-business-man-399587fe24739d5a-256x256.png' }}
                            style={[s.rm_cover, { width: ms(90), height: ms(90), borderRadius: ms(45) }]}
                        />
                    </View>
                </View>
                <View style={{ paddingHorizontal: ms(20), marginBottom: ms(28) }}>
                    <UniText.Semibold size={ms(18)}>
                        Nama Petugas
                    </UniText.Semibold>
                </View>
                <DrawerMenu action={this._gotoHome}
                    isSelected={_.isEqual(this.state.selectedMenu, 'home')}
                    text="Halaman Utama"
                />
                <DrawerMenu action={this._gotoSimpanan}
                    isSelected={_.isEqual(this.state.selectedMenu, 'simpanan')}
                    text="Simpanan"
                />
                <DrawerMenu action={this._gotoPinjaman}
                    isSelected={_.isEqual(this.state.selectedMenu, 'pinjaman')}
                    text="Pinjaman"
                />
                <DrawerMenu action={this._gotoNasabah}
                    isSelected={_.isEqual(this.state.selectedMenu, 'nasabah')}
                    text="Daftar Nasabah"
                />
                <View style={[s.flx_i, s.jcfe, { paddingBottom: ms(20) }]}>
                    <DrawerMenu action={this._gotoRiwayat}
                        isSelected={_.isEqual(this.state.selectedMenu, 'riwayat')}
                        text="Riwayat Kokaku Nama Desa"
                    />
                    <DrawerMenu action={this._gotoProfile}
                        isSelected={_.isEqual(this.state.selectedMenu, 'profile')}
                        text="Ubah Profil"
                    />
                    <DrawerMenu action={this._gotoPengaturan}
                        isSelected={_.isEqual(this.state.selectedMenu, 'pengaturan')}
                        text="Pengaturan"
                    />
                </View>
            </ScrollView>
        );
    }
}

Drawer.propTypes = {
    navigator: PropTypes.object.isRequired,
};

export default Drawer;
