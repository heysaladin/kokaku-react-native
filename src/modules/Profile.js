import React, { Component } from 'react';
import { View, ScrollView, Dimensions, Modal, Image, TextInput, Platform,
    TouchableOpacity, ActivityIndicator, InteractionManager, WebView,
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
import _ from 'lodash';

class Profile extends Component {
    static navigatorStyle = {
        navBarHidden: true,
    };
    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this._handleNavigatorEvent.bind(this));

        this._handleDrawer = this._handleDrawer.bind(this);
        this._openNotification = this._openNotification.bind(this);

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
                screen: 'kliklpd.Pemberitahuan',
            });
        }

    }
    render() {
        const { width, height } = Dimensions.get('window');

        return (
            <View style={[s.flx_i, s.bg_white]}>
                <View style={{ height: NAVBAR_HEIGHT }}>
                    <LinearGradient
                        colors={colors.DARK_GRADIENT}
                        style={{ height: NAVBAR_HEIGHT }}
                    />
                    <View style={[s.absolute, { width, height: NAVBAR_HEIGHT }]}>
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
                                        Ubah Profil
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

                        <View style={{ marginVertical: ms(0), paddingHorizontal: ms(30) }}>
                            <View style={[s.flx_row, s.aic, { height: ms(45), marginTop: ms(4), borderBottomWidth: 1, borderBottomColor: '#eee' }]}>
                                <IonIcon name="ios-person-outline" size={ms(24)} color="#aaa"/>
                                <View style={[s.flx_i]}>
                                    <FloatingInput ref={username => { this.usernameField = username; }}
                                        value={this.state.username}
                                        placeholder="Nama Pengguna"
                                        onEndEditing={() => this.setState({ username: this.usernameField.state.text })}
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={{ marginVertical: ms(0), paddingHorizontal: ms(30) }}>
                            <View style={[s.flx_row, s.aic, { height: ms(45), marginTop: ms(4), borderBottomWidth: 1, borderBottomColor: '#eee' }]}>
                                <IonIcon name="ios-person-outline" size={ms(24)} color="#aaa"/>
                                <View style={[s.flx_i]}>
                                    <FloatingInput ref={username => { this.usernameField = username; }}
                                        value={this.state.username}
                                        placeholder="Nama Lengkap"
                                        onEndEditing={() => this.setState({ username: this.usernameField.state.text })}
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={{ marginVertical: ms(0), paddingHorizontal: ms(30) }}>
                            <View style={[s.flx_row, s.aic, { height: ms(45), marginTop: ms(4), borderBottomWidth: 1, borderBottomColor: '#eee' }]}>
                                <IonIcon name="ios-mail-outline" size={ms(24)} color="#aaa"/>
                                <View style={[s.flx_i]}>
                                    <FloatingInput ref={username => { this.usernameField = username; }}
                                        value={this.state.username}
                                        placeholder="Email"
                                        onEndEditing={() => this.setState({ username: this.usernameField.state.text })}
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={{ marginVertical: ms(0), paddingHorizontal: ms(30) }}>
                            <View style={[s.flx_row, s.aic, { height: ms(45), marginTop: ms(4), borderBottomWidth: 1, borderBottomColor: '#eee' }]}>
                                <IonIcon name="ios-home-outline" size={ms(24)} color="#aaa"/>
                                <View style={[s.flx_i]}>
                                    <FloatingInput ref={username => { this.usernameField = username; }}
                                        value={this.state.username}
                                        placeholder="Alamat"
                                        onEndEditing={() => this.setState({ username: this.usernameField.state.text })}
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
                            borderless={true} borderRadius={ms(20)}
                            style={[{ width: '100%' }]}
                            >
                            <LinearGradient colors={colors.RED_GRADIENT}
                                start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
                                style={[s.aic, s.jcc, { width: ms(200), height: ms(45), borderRadius: ms(20) }]}
                                >
                                <UniText.Bold color="#fff" size={ms(18)}>
                                    PERBAHARUI
                                </UniText.Bold>
                            </LinearGradient>
                        </UniButton>

                        </View>

                        </View>

                        {/* -------------------------------- */}

                    </View>
                </View>
            </View>
        );
    }
}

Profile.propTypes = {
    navigator: PropTypes.object.isRequired,
    
};

const mapStateToProps = (state) => ({
    
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
