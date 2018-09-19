import React, { Component } from 'react';
import { View, ScrollView, Dimensions, Modal, Image, TextInput, FlatList,
    TouchableOpacity, ActivityIndicator, InteractionManager, WebView, Text, Platform,
} from 'react-native';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import _ from 'lodash';
import { styles as s } from 'react-native-style-tachyons';
import IonIcon from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { accountLogin } from '../actions/action.account';
import { colors } from '../constants';
import { ms, handleDeepLink  } from '../utils';
import { UniText, UniButton, Navbar, NAVBAR_HEIGHT, FloatingInput } from './_global';

class AddSimpanan extends Component {
    static navigatorStyle = {
        navBarHidden: true,
    };
    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this._handleNavigatorEvent.bind(this));

        this._handleDrawer = this._handleDrawer.bind(this);
        this._openNotification = this._openNotification.bind(this);

        // this._addSimpanan = this._addSimpanan.bind(this);
        // this._showAllHistorySimpanan = this._showAllHistorySimpanan.bind(this);

        this._gotoSimpanan = this._gotoSimpanan.bind(this);

        this.state = {

            // simpanan: [
            //     {
            //         id: 2,
            //         date: '2018-03-12',
            //         amount: 15000000,
            //         type: 'deposit',
            //         collector: 'Wayan Gobler',
            //         status: 'done',
            //     },
            //     {

            //         id: 1,
            //         date: '2018-03-11',
            //         amount: 5000000,
            //         type: 'withdraw',
            //         collector: '',
            //         status: 'pending',
            //     },
            //     {
            //         id: 2,
            //         date: '2018-03-12',
            //         amount: 15000000,
            //         type: 'deposit',
            //         collector: 'Wayan Gobler',
            //         status: 'done',
            //     },
            //     {

            //         id: 1,
            //         date: '2018-03-11',
            //         amount: 5000000,
            //         type: 'withdraw',
            //         collector: '',
            //         status: 'pending',
            //     },
            //     {

            //         id: 1,
            //         date: '2018-03-11',
            //         amount: 5000000,
            //         type: 'withdraw',
            //         collector: '',
            //         status: 'pending',
            //     },
            // ],
            // pinjaman: [

            // ],

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
    // _addSimpanan() {

    // }
    // _showAllHistorySimpanan() {

    // }
    _gotoSimpanan() {
        if (Platform.OS === 'ios') {
            this.props.navigator.handleDeepLink({ link: 'Simpanan' });
        } else {
            this.props.navigator.resetTo({
                screen: 'kliklpd.Simpanan',
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
                                <Animatable.View animation="fadeInLeft">
                                    <IonIcon name="md-menu" color={colors.DARK_TYPE} size={ms(28)}/>
                                </Animatable.View>
                            }
                            leftAction={this._handleDrawer}
                            centerComponent={
                                <Animatable.View animation="fadeInUp">
                                    <UniText.Bold color="#fff" size={ms(20)}>
                                        Simpanan
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
{/*

                    <Animatable.View animation="fadeInUp">

                        <FlatList
                            data={this.state.simpanan}
                            keyExtractor={(item) => item.id}
                            scrollEnabled={false}
                            ListHeaderComponent={() =>
                                <UniButton action={this._toggleLastActivity}>
                                    <View style={[s.flx_row, s.aic, { paddingHorizontal: ms(20), height: ms(55) }]}>
                                        <View style={s.flx_i}>
                                            <UniText.Medium color={colors.PURPLE}>
                                                Aktivitas Terakhir
                                            </UniText.Medium>
                                            <UniText.Light size={ms(13)} color="#666">
                                                Geser ke atas untuk melihat lebih banyak.
                                            </UniText.Light>
                                        </View>
                                        <View style={[s.aife, { width: ms(30) }]}>
                                            <IonIcon name="ios-arrow-dropup" size={ms(20)} color={colors.PURPLE}/>
                                        </View>
                                    </View>
                                </UniButton>
                            }
                            renderItem={({ item }) =>
                                <View style={[s.flx_row, s.aic, { paddingHorizontal: ms(20), paddingVertical: ms(8) }]}>
                                    <View style={[{ width: ms(80) }]}>
                                        <UniText.Semibold size={ms(30)} color={colors.RED}>
                                            {format(item.date, 'DD')}
                                        </UniText.Semibold>
                                        <UniText.Light color={colors.RED} size={ms(13)}>
                                            {format(item.date, 'MMM YYYY')}
                                        </UniText.Light>
                                    </View>
                                    <View style={[s.flx_i, s.aife]}>
                                        {
                                            item.status === 'pending' &&
                                            <UniText.Semibold color={colors.PURPLE} size={ms(12)}>
                                                PENDING
                                            </UniText.Semibold>
                                        }
                                        <Text>
                                            <UniText.Light>
                                                Rp
                                            </UniText.Light>
                                            <UniText.Semibold size={ms(20)}>
                                                {`${item.amount}`}
                                            </UniText.Semibold>
                                        </Text>
                                        {
                                            !_.isEmpty(item.collector) &&
                                            <Text>
                                                <UniText.Light>
                                                    Kolektor:
                                                </UniText.Light> <UniText.Regular>
                                                    {item.collector}
                                                </UniText.Regular>
                                            </Text>
                                        }
                                    </View>
                                    <View style={{ paddingLeft: ms(12) }}>
                                        {
                                            item.type === 'deposit'
                                            ? <IonIcon name="ios-add-circle-outline" size={ms(20)} color={colors.GREEN}/>
                                            : <IonIcon name="ios-remove-circle-outline" size={ms(20)} color={colors.RED}/>
                                        }
                                    </View>
                                </View>
                            }
                        />
                        
                        </Animatable.View>
*/}
                        {/* -------------------------------- */}

                        <View>

                        <View>

                        <View style={{ marginVertical: ms(15), paddingHorizontal: ms(30) }}>
                            <View style={[s.flx_row, s.aic, { height: ms(45), marginTop: ms(4), borderBottomWidth: 1, borderBottomColor: '#eee' }]}>
                                <IonIcon name="ios-person-outline" size={ms(24)} color="#aaa"/>
                                <View style={[s.flx_i]}>
                                    <FloatingInput ref={username => { this.usernameField = username; }}
                                        value={this.state.username}
                                        placeholder="Jumlah Dana Simpanan"
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
                            action={this._gotoSimpanan}
                            borderless={true} borderRadius={ms(20)}
                            style={[{ width: '100%' }]}
                            >
                            <LinearGradient colors={colors.RED_GRADIENT}
                                start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
                                style={[s.aic, s.jcc, { width: ms(200), height: ms(45), borderRadius: ms(20) }]}
                                >
                                <UniText.Bold color="#fff" size={ms(18)}>
                                    KIRIM
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

AddSimpanan.propTypes = {
    navigator: PropTypes.object.isRequired,
    
};

const mapStateToProps = (state) => ({
    
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AddSimpanan);
