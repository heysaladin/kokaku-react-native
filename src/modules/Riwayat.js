import React, { Component } from 'react';
import { View, ScrollView, Dimensions, Modal, Image, TextInput, Text, Platform,
    TouchableOpacity, ActivityIndicator, InteractionManager, WebView, FlatList,
} from 'react-native';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import _ from 'lodash';
import { styles as s } from 'react-native-style-tachyons';
import IonIcon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { accountLogin } from '../actions/action.account';
import { colors } from '../constants';
import { ms, handleDeepLink } from '../utils';
import { UniText, UniButton, Navbar, NAVBAR_HEIGHT } from './_global';
import Card from 'react-native-cardview';

class Riwayat extends Component {
    static navigatorStyle = {
        navBarHidden: true,
    };
    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this._handleNavigatorEvent.bind(this));

        this._handleDrawer = this._handleDrawer.bind(this);
        this._openNotification = this._openNotification.bind(this);
        
        this.state = {

            simpanan: [
                {
                    id: 2,
                    date: '2018-03-12',
                    amount: 15000000,
                    type: 'deposit',
                    collector: 'Wayan Gobler',
                    status: 'done',
                },
                {

                    id: 1,
                    date: '2018-03-11',
                    amount: 5000000,
                    type: 'withdraw',
                    collector: '',
                    status: 'pending',
                },
                {
                    id: 2,
                    date: '2018-03-12',
                    amount: 15000000,
                    type: 'deposit',
                    collector: 'Wayan Gobler',
                    status: 'done',
                },
                {

                    id: 1,
                    date: '2018-03-11',
                    amount: 5000000,
                    type: 'withdraw',
                    collector: '',
                    status: 'pending',
                },
                {

                    id: 1,
                    date: '2018-03-11',
                    amount: 5000000,
                    type: 'withdraw',
                    collector: '',
                    status: 'pending',
                },
                {
                    id: 2,
                    date: '2018-03-12',
                    amount: 15000000,
                    type: 'deposit',
                    collector: 'Wayan Gobler',
                    status: 'done',
                },
                {

                    id: 1,
                    date: '2018-03-11',
                    amount: 5000000,
                    type: 'withdraw',
                    collector: '',
                    status: 'pending',
                },
                {
                    id: 2,
                    date: '2018-03-12',
                    amount: 15000000,
                    type: 'deposit',
                    collector: 'Wayan Gobler',
                    status: 'done',
                },
                {

                    id: 1,
                    date: '2018-03-11',
                    amount: 5000000,
                    type: 'withdraw',
                    collector: '',
                    status: 'pending',
                },
                {

                    id: 1,
                    date: '2018-03-11',
                    amount: 5000000,
                    type: 'withdraw',
                    collector: '',
                    status: 'pending',
                },
            ],
            pinjaman: [

            ],

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
                                        Riwayat
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



                        <View style={{ height }}>

                        <Animatable.View animation="fadeInUp" style={[s.aic, { marginTop: ms(10), marginBottom: ms(10) }]}>
                          
                        
                        {/*
                        
                        <Card cornerRadius={ms(8)}
                                style={[s.bg_white, { width: ms(330), minHeight: ms(70), padding: ms(10) }]}
                                >

                        */}

                                {/*
                                <View style={[s.flx_row, { height: ms(45), marginTop: ms(0), padding: ms(10) }]}>
                                    <View style={[s.flx_i]}>
                                        <UniText.Semibold color="#777" size={ms(14)} style={{ width: '30%' }} >
                                            Setoran
                                        </UniText.Semibold>
                                    </View>
                                    <View style={[s.flx_i]}>
                                        <UniText.Semibold color="#777" size={ms(16)} style={{ width: '40%' }} >
                                            50000
                                        </UniText.Semibold>
                                    </View>
                                    <View style={[s.flx_i, s.jcc, { alignItems: 'flex-end' }]}>
                                        <UniText.Semibold color="#777" size={ms(12)} style={{ width: '30%' }} >
                                            12 Maret 2018
                                        </UniText.Semibold>
                                    </View>
                                </View>
                                <View style={[s.flx_row, { height: ms(45), marginTop: ms(0), padding: ms(10) }]}>
                                    <View style={[s.flx_i]}>
                                        <UniText.Semibold color="#777" size={ms(14)} style={{ width: '30%' }} >
                                            Setoran
                                        </UniText.Semibold>
                                    </View>
                                    <View style={[s.flx_i]}>
                                        <UniText.Semibold color="#777" size={ms(16)} style={{ width: '40%' }} >
                                            50000
                                        </UniText.Semibold>
                                    </View>
                                    <View style={[s.flx_i, s.jcc, { alignItems: 'flex-end' }]}>
                                        <UniText.Semibold color="#777" size={ms(12)} style={{ width: '30%' }} >
                                            12 Maret 2018
                                        </UniText.Semibold>
                                    </View>
                                </View>
                                <View style={[s.flx_row, { height: ms(45), marginTop: ms(0), padding: ms(10) }]}>
                                    <View style={[s.flx_i]}>
                                        <UniText.Semibold color="#777" size={ms(14)} style={{ width: '30%' }} >
                                            Setoran
                                        </UniText.Semibold>
                                    </View>
                                    <View style={[s.flx_i]}>
                                        <UniText.Semibold color="#777" size={ms(16)} style={{ width: '40%' }} >
                                            50000
                                        </UniText.Semibold>
                                    </View>
                                    <View style={[s.flx_i, s.jcc, { alignItems: 'flex-end' }]}>
                                        <UniText.Semibold color="#777" size={ms(12)} style={{ width: '30%' }} >
                                            12 Maret 2018
                                        </UniText.Semibold>
                                    </View>
                                </View>
                                <View style={[s.flx_row, { height: ms(45), marginTop: ms(0), padding: ms(10) }]}>
                                    <View style={[s.flx_i]}>
                                        <UniText.Semibold color="#777" size={ms(14)} style={{ width: '30%' }} >
                                            Setoran
                                        </UniText.Semibold>
                                    </View>
                                    <View style={[s.flx_i]}>
                                        <UniText.Semibold color="#777" size={ms(16)} style={{ width: '40%' }} >
                                            50000
                                        </UniText.Semibold>
                                    </View>
                                    <View style={[s.flx_i, s.jcc, { alignItems: 'flex-end' }]}>
                                        <UniText.Semibold color="#777" size={ms(12)} style={{ width: '30%' }} >
                                            12 Maret 2018
                                        </UniText.Semibold>
                                    </View>
                                </View>
                                <View style={[s.flx_row, { height: ms(45), marginTop: ms(0), padding: ms(10) }]}>
                                    <View style={[s.flx_i]}>
                                        <UniText.Semibold color="#777" size={ms(14)} style={{ width: '30%' }} >
                                            Setoran
                                        </UniText.Semibold>
                                    </View>
                                    <View style={[s.flx_i]}>
                                        <UniText.Semibold color="#777" size={ms(16)} style={{ width: '40%' }} >
                                            50000
                                        </UniText.Semibold>
                                    </View>
                                    <View style={[s.flx_i, s.jcc, { alignItems: 'flex-end' }]}>
                                        <UniText.Semibold color="#777" size={ms(12)} style={{ width: '30%' }} >
                                            12 Maret 2018
                                        </UniText.Semibold>
                                    </View>
                                </View>
                                */}




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

                            ListFooterComponent={() =>
                                
                                <View style={{ width, height: ms(170) }} />

                            }

                        />


                        {/*

                            </Card>

                        */}

                        </Animatable.View>

                        </View>

                    </View>
                </View>

                <Animatable.View
                    ref={animatedBottomButton => { this.animatedBottomButton = animatedBottomButton; }}
                    animation="fadeInUp" delay={2000}
                    style={[s.absolute, s.bottom_0, { width, height: ms(86), bottom: 0 }]}
                >
                    <LinearGradient colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.5)']}
                        style={[s.absolute, s.bottom_0, { width, height: ms(75), bottom: 0 }]}
                    />

                    <View style={[s.absolute, s.bottom_0, s.aic, { width, height: ms(71), paddingBottom: ms(16), paddingHorizontal: ms(10), bottom: 0 }]}>
                    
                    <Card cornerRadius={ms(8)}
                        style={[s.bg_white, { width: ms(330), minHeight: ms(70), padding: ms(10) }]}
                        >
                        <View style={[s.flx_row, { height: ms(45), marginTop: ms(0), padding: ms(10) }]}>
                            <View style={[s.flx_i, s.jcc]}>
                                <UniText.Semibold color="#777" size={ms(12)} style={{ width: '40%' }} >
                                    Saldo Kokaku Nama Desa
                                </UniText.Semibold>
                            </View>
                            <View style={[s.flx_i, s.jcc, { alignItems: 'flex-end' }]}>
                                <UniText.Semibold color="#777" size={ms(21)} style={{ width: '60%', textAlign: 'right', fontWeight: 'bold' }} >
                                    765000
                                </UniText.Semibold>
                            </View>
                        </View>
                    </Card>

                    </View>

                </Animatable.View>


            </View>
        );
    }
}

Riwayat.propTypes = {
    navigator: PropTypes.object.isRequired,
    
};

const mapStateToProps = (state) => ({
    
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Riwayat);
