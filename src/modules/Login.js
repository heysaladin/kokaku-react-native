import React, { Component } from 'react';
import { View, ScrollView, Dimensions, Image, TextInput,
    ActivityIndicator, InteractionManager, Platform,
} from 'react-native';
import PropTypes from 'prop-types';
import { styles as s } from 'react-native-style-tachyons';
import IonIcon from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';
import Card from 'react-native-cardview';
import _ from 'lodash';
import LinearGradient from 'react-native-linear-gradient';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { accountLogin } from '../actions/action.account';
import { colors } from '../constants';
import { ms } from '../utils';
import { UniText, UniButton, FloatingInput } from './_global';

class Login extends Component {
    static navigatorStyle = {
        navBarHidden: true,
    };
    constructor(props) {
        super(props);
    
        this._login = this._login.bind(this);

        this.state = {
            username: '',
            password: '',
        };
    }
    componentDidMount() {
        InteractionManager.runAfterInteractions(() => {
            this.setState({ renderComponents: true });
        });
    }
    _login() {
        this.props.navigator.resetTo({
            screen: 'kokaku.Home',
        });
    }
    render() {
        const { width, height } = Dimensions.get('window');

        const loginButton = (
            <UniButton action={_.debounce(this._login, 1000, { leading: true, trailing: false })}
                borderless={true} borderRadius={ms(20)}
                disabled={this.props.loginLoading}
            >
                <LinearGradient colors={colors.DARK_GRADIENT}
                    start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
                    style={[s.aic, s.jcc, { width: ms(200), height: ms(45), borderRadius: ms(20) }]}
                >
                    {
                        this.props.loginLoading ?
                        <ActivityIndicator color="#fff"/>
                        :
                        <UniText.Bold color="#fff" size={ms(18)}>
                            MASUK
                        </UniText.Bold>
                    }
                </LinearGradient>
            </UniButton>
        );

        return (
            <View style={[s.flx_i, s.bg_white]}>
                <Image source={require('../img/bg-general.png')}
                    style={[s.rm_cover, { width, height }]}
                />
                <LinearGradient
                    colors={['rgba(225,225,225,0.0)', 'rgba(225,225,225,0.0)']}
                    style={[s.absolute, s.aic, s.jcc, { width, height }]}
                >
                    <Animatable.View animation="fadeInUp" style={[s.aic, { marginTop: '-14%' }]}>
                        <Card cardElevation={0} cardMaxElevation={0} cornerRadius={ms(0)}
                                style={[{ backgroundColor: 'transparent', width: ms(300), height: ms(190), position: 'absolute', zIndex: 99999, marginBottom: ms(0) }]}
                            >
                            <View style={{ paddingHorizontal: ms(5), borderTopLeftRadius: ms(8), borderTopRightRadius: ms(8), backgroundColor: 'transparent', height: ms(190) }}>
                                <Image source={require('../img/showcase-officer.png')}
                                    style={[s.rm_contain, { backgroundSize: 'contain', width: ms(292), height: ms(190), marginTop: ms(0) }]}
                                />
                            </View>
                        </Card>
                        <Card cornerRadius={ms(8)}
                            style={[s.bg_white, { width: ms(300), height: ms(190), marginTop: ms(170) }]}
                            >
                            <View style={{ marginVertical: ms(15), paddingHorizontal: ms(30) }}>
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
                            <View style={{ paddingHorizontal: ms(30) }}>
                                <View style={[s.flx_row, s.aic, { height: ms(45), marginTop: ms(4), borderBottomWidth: 1, borderBottomColor: '#eee' }]}>
                                    <IonIcon name="ios-lock-outline" size={ms(20)} color="#aaa"/>
                                    <View style={[s.flx_i]}>
                                        <FloatingInput ref={password => { this.passwordField = password; }}
                                            value={this.state.password}
                                            placeholder="Kata Sandi"
                                            onEndEditing={() => this.setState({ password: this.passwordField.state.text })}
                                            secureTextEntry={true}
                                        />
                                    </View>
                                </View>
                            </View>
                        </Card>
                        <View style={{ marginTop: -1 * ms(22.5) }}>
                            {
                                Platform.OS === 'ios' ?
                                <Card cardElevation={1} cardMaxElevation={1} style={{ width: ms(200), height: ms(45), borderRadius: ms(20) }}>
                                    {loginButton}
                                </Card>
                                :
                                <View style={{ width: ms(200), height: ms(45), borderRadius: ms(20), elevation: 2 }}>
                                    {loginButton}
                                </View>
                            }
                        </View>
                    </Animatable.View>
                </LinearGradient>
                {/*
                <View style={[s.absolute, s.bottom_0, s.aic, s.jcc, { width, height: ms(80) }]}>
                    <UniText.Semibold color="#fff" size={ms(16)}>
                        Kokaku ver-1.0
                    </UniText.Semibold>
                </View>
                */}
            </View>
        );
    }
}

Login.propTypes = {
    navigator: PropTypes.object.isRequired,
    
};

const mapStateToProps = (state) => ({
    
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
