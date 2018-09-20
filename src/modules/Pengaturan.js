import React, { Component } from 'react';
import { View, ScrollView, Dimensions, Modal, Image, TextInput, Text, Platform,
    TouchableOpacity, ActivityIndicator, InteractionManager, WebView, Switch,
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
import { UniText, UniButton, Navbar, NAVBAR_HEIGHT } from './_global';
import Card from 'react-native-cardview';

class Pengaturan extends Component {
    static navigatorStyle = {
        navBarHidden: true,
    };
    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this._handleNavigatorEvent.bind(this));

        this._handleDrawer = this._handleDrawer.bind(this);
        this._openNotification = this._openNotification.bind(this);
        this._toggleSwitch = this._toggleSwitch.bind(this);

        this.state = {
            switchNotification: true,
            switchGallery: true,
            switchCamera: true,
            switchLocation: false,
        };
    }
    componentDidMount() {
        InteractionManager.runAfterInteractions(() => {
            this.setState({ renderComponents: true });
        });
    }
    _toggleSwitch(idName, switchBool) {
        const switchStatus = new Object();
        switchStatus[idName] = !switchBool;
        this.setState(switchStatus);
        setTimeout(() => {
            return (
                console.log(this.state.switchStatus)
            );
        }, 1000);
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
    render() {
        const { width } = Dimensions.get('window');

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
                                <Animatable.View animation="fadeInLeft">
                                    <IonIcon name="md-menu" color={colors.DARK_TYPE} size={ms(28)}/>
                                </Animatable.View>
                            }
                            leftAction={this._handleDrawer}
                            centerComponent={
                                <Animatable.View animation="fadeInUp">
                                    <UniText.Bold color="#fff" size={ms(20)}>
                                        Pengaturan
                                    </UniText.Bold>
                                </Animatable.View>
                            }
                            rightComponent={
                                <Animatable.View animation="fadeInRight">
                                    <IonIcon name="ios-notifications" color={colors.DARK_TYPE} size={ms(28)}/>
                                </Animatable.View>
                            }
                            rightAction={this._openNotification}
                        />
                        <Animatable.View animation="fadeInUp" style={[s.aic, { marginTop: ms(10), marginBottom: ms(10) }]}>
                            <Card cornerRadius={ms(8)}
                                style={[s.bg_white, { width: ms(330), minHeight: ms(70), padding: ms(10) }]}
                                >
                                <View style={[s.flx_row, { height: ms(45), marginTop: ms(0), padding: ms(10) }]}>
                                    <IonIcon name="ios-notifications" size={ms(24)} color={colors.RED} style={{ width: '15%' }} />
                                    <View style={[s.flx_i]}>
                                        <UniText.Semibold color="#777" size={ms(16)} style={{ width: '70%' }} >
                                            Ijinkan notifikasi
                                        </UniText.Semibold>
                                    </View>
                                    <Switch
                                    value={this.state.switchNotification}
                                    disabled={false}
                                    onTintColor={colors.SOFTGREY}
                                    onValueChange={this._toggleSwitch.bind(this, 'switchNotification', this.state.switchNotification)}
                                    testID="notificationSetting"
                                    thumbTintColor={ this.state.switchNotification ? colors.RED : colors.GREY }
                                    tintColor={colors.SOFTGREY}
                                    />
                                </View>
                            </Card>
                            <Card cornerRadius={ms(8)}
                                style={[s.bg_white, { width: ms(330), minHeight: ms(70), padding: ms(10) }]}
                                >
                                <View style={[s.flx_row, { height: ms(45), marginTop: ms(0), padding: ms(10) }]}>
                                    <IonIcon name="ios-images" size={ms(24)} color={colors.RED} style={{ width: '15%' }} />
                                    <View style={[s.flx_i]}>
                                        <UniText.Semibold color="#777" size={ms(16)} style={{ width: '70%' }} >
                                            Ijinkan galeri
                                        </UniText.Semibold>
                                    </View>
                                    <Switch
                                    value={this.state.switchGallery}
                                    disabled={false}
                                    onTintColor={colors.SOFTGREY}
                                    onValueChange={this._toggleSwitch.bind(this, 'switchGallery', this.state.switchGallery)}
                                    testID="gallerySetting"
                                    thumbTintColor={ this.state.switchGallery ? colors.RED : colors.GREY }
                                    tintColor={colors.SOFTGREY}
                                    />
                                </View>
                            </Card>
                            <Card cornerRadius={ms(8)}
                                style={[s.bg_white, { width: ms(330), minHeight: ms(70), padding: ms(10) }]}
                                >
                                <View style={[s.flx_row, { height: ms(45), marginTop: ms(0), padding: ms(10) }]}>
                                    <IonIcon name="ios-camera" size={ms(24)} color={colors.RED} style={{ width: '15%' }} />
                                    <View style={[s.flx_i]}>
                                        <UniText.Semibold color="#777" size={ms(16)} style={{ width: '70%' }} >
                                            Ijinkan kamera
                                        </UniText.Semibold>
                                    </View>
                                    <Switch
                                    value={this.state.switchCamera}
                                    disabled={false}
                                    onTintColor={colors.SOFTGREY}
                                    onValueChange={this._toggleSwitch.bind(this, 'switchCamera', this.state.switchCamera)}
                                    testID="cameraSetting"
                                    thumbTintColor={ this.state.switchCamera ? colors.RED : colors.GREY }
                                    tintColor={colors.SOFTGREY}
                                    />
                                </View>
                            </Card>
                            <Card cornerRadius={ms(8)}
                                style={[s.bg_white, { width: ms(330), minHeight: ms(70), padding: ms(10) }]}
                                >
                                <View style={[s.flx_row, { height: ms(45), marginTop: ms(0), padding: ms(10) }]}>
                                    <IonIcon name="ios-navigate" size={ms(24)} color={colors.RED} style={{ width: '15%' }} />
                                    <View style={[s.flx_i]}>
                                        <UniText.Semibold color="#777" size={ms(16)} style={{ width: '70%' }} >
                                            Ijinkan lokasi
                                        </UniText.Semibold>
                                    </View>
                                    <Switch
                                    value={this.state.switchLocation}
                                    disabled={false}
                                    onTintColor={colors.SOFTGREY}
                                    onValueChange={this._toggleSwitch.bind(this, 'switchLocation', this.state.switchLocation)}
                                    testID="locationSetting"
                                    thumbTintColor={ this.state.switchLocation ? colors.RED : colors.GREY }
                                    tintColor={colors.SOFTGREY}
                                    />
                                </View>
                            </Card>
                        </Animatable.View>
                    </View>
                </View>
            </View>
        );
    }
}

Pengaturan.propTypes = {
    navigator: PropTypes.object.isRequired,
    
};

const mapStateToProps = (state) => ({
    
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Pengaturan);
