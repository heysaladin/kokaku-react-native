import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions, Modal, Image, TextInput,
    TouchableOpacity, ActivityIndicator, InteractionManager, WebView, Platform
} from 'react-native';
import PropTypes from 'prop-types';
import { styles as s } from 'react-native-style-tachyons';
import IonIcon from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { accountLogin } from '../actions/action.account';
import { colors } from '../constants';
import { ms, handleDeepLink } from '../utils';
import { UniText, UniButton, Navbar, NAVBAR_HEIGHT, FloatingInput } from './_global';

class AddNasabah extends Component {
    static navigatorStyle = {
        navBarHidden: true,
    };
    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this._handleNavigatorEvent.bind(this));

        this._handleDrawer = this._handleDrawer.bind(this);
        this._openNotification = this._openNotification.bind(this);

        this._gotoSimpanan = this._gotoSimpanan.bind(this);
        
        this.state = {

        };
    }
    componentDidMount() {
        InteractionManager.runAfterInteractions(() => {
            this.setState({ renderComponents: true });
        });
    }
    _handleNavigatorEvent(event) {
        handleDeepLink(event, this.props.navigator);
    }
    _handleDrawer() {
        this.props.navigator.toggleDrawer({
            side: 'left',
            animated: true,
            to: 'open',
        });
    }
    _openNotification() {

        if (Platform.OS === 'ios') {
            this.props.navigator.handleDeepLink({ link: 'Pemberitahuan' });
        } else {
            this.props.navigator.resetTo({
                screen: 'kokaku.Pemberitahuan',
            });
        }

    }
    _gotoSimpanan() {
        if (Platform.OS === 'ios') {
            this.props.navigator.handleDeepLink({ link: 'Pinjaman' });
        } else {
            this.props.navigator.resetTo({
                screen: 'kokaku.Pinjaman',
            });
        }
    }
    render() {
        const { width, height } = Dimensions.get('window');

        return (
            <View style={[s.flx_i, s.bg_white]}>
                <View style={{ height: ms(155) }}>
                    <LinearGradient
                        colors={colors.DARK_GRADIENT}
                        style={{ height: NAVBAR_HEIGHT }}
                    />
                    <View style={[s.absolute, { width, height: ms(155) }]}>
                        <Navbar noBorder
                            leftComponent={
                                <Animatable.View animation="fadeInRight">
                                    <IonIcon name="md-menu" color="#fff" size={ms(28)}/>
                                </Animatable.View>
                            }
                            leftAction={this._handleDrawer}
                            centerComponent={
                                <Animatable.View animation="fadeInRight">
                                    <UniText.Bold color="#fff" size={ms(20)}>
                                        Tambah Nasabah
                                    </UniText.Bold>
                                </Animatable.View>
                            }
                            rightComponent={
                                <Animatable.View animation="fadeInRight">
                                    <IonIcon name="ios-notifications" color="#fff" size={ms(28)}/>
                                </Animatable.View>
                            }
                            rightAction={this._openNotification}
                        />

                        {/* -------------------------------- */}
                            
                        <View>

                        <View>

                        <View style={{ marginVertical: ms(15), paddingHorizontal: ms(30) }}>
                            <View style={[s.flx_row, s.aic, { height: ms(45), marginTop: ms(4), borderBottomWidth: 1, borderBottomColor: '#eee' }]}>
                                <IonIcon name="ios-person-outline" size={ms(24)} color="#aaa"/>
                                <View style={[s.flx_i]}>
                                    <FloatingInput ref={username => { this.usernameField = username; }}
                                        value={this.state.username}
                                        placeholder="Jumlah Dana Pinjaman"
                                        onEndEditing={() => this.setState({ username: this.usernameField.state.text })}
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={{ paddingHorizontal: ms(30) }}>
                            <View style={[s.flx_row, s.aic, { height: ms(45), marginTop: ms(4), borderBottomWidth: 1, borderBottomColor: '#eee' }]}>
                                <IonIcon name="ios-lock-outline" size={ms(20)} color="#aaa"/>
                                <View style={[s.flx_i]}>
                                    <FloatingInput ref={password => { this.passwordField = password; }}
                                        value={this.state.password}
                                        placeholder="Kebutuhan"
                                        onEndEditing={() => this.setState({ password: this.passwordField.state.text })}
                                        secureTextEntry={true}
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={{ paddingHorizontal: ms(30) }}>
                            <View style={[s.flx_row, s.aic, { height: ms(45), marginTop: ms(4), borderBottomWidth: 1, borderBottomColor: '#eee' }]}>
                                <IonIcon name="ios-lock-outline" size={ms(20)} color="#aaa"/>
                                <View style={[s.flx_i]}>
                                    <FloatingInput ref={password => { this.passwordField = password; }}
                                        value={this.state.password}
                                        placeholder="Jaminan"
                                        onEndEditing={() => this.setState({ password: this.passwordField.state.text })}
                                        secureTextEntry={true}
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={{ paddingHorizontal: ms(30) }}>
                            <View style={[s.flx_row, s.aic, { height: ms(45), marginTop: ms(4), borderBottomWidth: 1, borderBottomColor: '#eee' }]}>
                                <IonIcon name="ios-lock-outline" size={ms(20)} color="#aaa"/>
                                <View style={[s.flx_i]}>
                                    <FloatingInput ref={password => { this.passwordField = password; }}
                                        value={this.state.password}
                                        placeholder="Durasi Pinjaman"
                                        onEndEditing={() => this.setState({ password: this.passwordField.state.text })}
                                        secureTextEntry={true}
                                    />
                                </View>
                            </View>
                        </View>

                        </View>

                        <View style={[{
                            display: 'flex',
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: ms(25), width: '100%', height: ms(45), elevation: 2, marginTop: ms(25), marginBottom: ms(25) }]}>

                        <UniButton
                            action={this._gotoSimpanan}
                            borderless={true} borderRadius={ms(20)}
                            style={[{ width: '100%' }]}
                            >
                            <LinearGradient colors={colors.RED_GRADIENT}
                                start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
                                style={[s.aic, s.jcc, { width: ms(200), height: ms(45), borderRadius: ms(20) }]}
                                >
                                <UniText.Bold color="#fff" size={ms(18)}>
                                    TAMBAHKAN
                                </UniText.Bold>
                            </LinearGradient>
                        </UniButton>

                        </View>

                        </View>

                        {/* -------------------------------- */}

                        {/*
                        <View style={[s.aic, s.jcc, { height: ms(100) }]}>
                            <UniText.Light color="#fff">
                                Total Pinjaman Anda
                            </UniText.Light>
                            <Text style={{ backgroundColor: 'transparent' }}>
                                <UniText.Regular color="#fff" size={ms(16)}>
                                    Rp
                                </UniText.Regular> <UniText.Semibold color="#fff" size={ms(30)}>
                                    2.757.000,-
                                </UniText.Semibold>
                            </Text>
                        </View>
                        */}

                    </View>
                </View>
            </View>
        );
    }
}

AddNasabah.propTypes = {
    navigator: PropTypes.object.isRequired,
    
};

const mapStateToProps = (state) => ({
    
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AddNasabah);
