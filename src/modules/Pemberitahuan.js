import React, { Component } from 'react';
import { View, ScrollView, Dimensions, Modal, Image, TextInput, Text, Platform,
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
import { ms } from '../utils';
import { UniText, UniButton, Navbar, NAVBAR_HEIGHT } from './_global';
import Card from 'react-native-cardview';

class Pemberitahuan extends Component {
    static navigatorStyle = {
        navBarHidden: true,
    };
    constructor(props) {
        super(props);
    
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
                                        Pemberitahuan
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
                                <View style={[s.flx_row, { height: ms(40), marginTop: ms(0), padding: ms(10) }]}>
                                    <View style={[s.flx_i, s.jcc]}>
                                        <UniText.Semibold color="#777" size={ms(16)} style={{ }}>
                                            Segera tambah simpanan dana Anda
                                        </UniText.Semibold>
                                    </View>
                                </View>
                            </Card>
                            <Card cornerRadius={ms(8)}
                                style={[s.bg_white, { width: ms(330), minHeight: ms(70), padding: ms(10) }]}
                                >
                                <View style={[s.flx_row, { height: ms(40), marginTop: ms(0), padding: ms(10) }]}>
                                    <View style={[s.flx_i, s.jcc]}>
                                        <UniText.Semibold color="#777" size={ms(16)} style={{ }}>
                                            Petugas dalam perjalanan menjemput dana simpanan Anda
                                        </UniText.Semibold>
                                    </View>
                                </View>
                            </Card>
                            <Card cornerRadius={ms(8)}
                                style={[s.bg_white, { width: ms(330), minHeight: ms(70), padding: ms(10) }]}
                                >
                                <View style={[s.flx_row, { height: ms(40), marginTop: ms(0), padding: ms(10) }]}>
                                    <View style={[s.flx_i, s.jcc]}>
                                        <UniText.Semibold color="#777" size={ms(16)} style={{ }}>
                                            Pinjaman berhasil, segera periksa saldo Anda
                                        </UniText.Semibold>
                                    </View>
                                </View>
                            </Card>
                        </Animatable.View>
                    </View>
                </View>
            </View>
        );
    }
}

Pemberitahuan.propTypes = {
    navigator: PropTypes.object.isRequired,
    
};

const mapStateToProps = (state) => ({
    
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Pemberitahuan);
