import React, { Component } from 'react';
import {
    View, ScrollView, Dimensions, Modal, Image, FlatList, TextInput, Platform,
    TouchableOpacity, ActivityIndicator, InteractionManager, WebView, Text,
} from 'react-native';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { styles as s } from 'react-native-style-tachyons';
import IonIcon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import SimpleLine from 'react-native-vector-icons/SimpleLineIcons';
import * as Animatable from 'react-native-animatable';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { accountLogin } from '../actions/action.account';
import { colors } from '../constants';
import { ms, handleDeepLink } from '../utils';
import { UniText, UniButton, Navbar, NAVBAR_HEIGHT } from './_global';
import Card from 'react-native-cardview';
import CardView from 'react-native-cardview';
import Header from './Home/Header';
import CardSimpanan from './Home/CardSimpanan';
import CardPinjaman from './Home/CardPinjaman';
import BtnShowAllRiwayat from './Home/BtnShowAllRiwayat';
import { format } from 'date-fns';
import Interactable from 'react-native-interactable';

class Home extends Component {
    static navigatorStyle = {
        navBarHidden: true,
    };
    constructor(props) {
        super(props);
        // this.props.navigator.setOnNavigatorEvent(this._handleNavigatorEvent.bind(this));
    
        this._handleDrawer = this._handleDrawer.bind(this);
        this._openNotification = this._openNotification.bind(this);
    
        this._login = this._login.bind(this);

        this._gotoRiwayat = this._gotoRiwayat.bind(this);

        this._onScrollCard = this._onScrollCard.bind(this);
        
        this.state = {


            simpanan: [
                {
                    id: 2,
                    date: '2018-03-12',
                    amount: 15000000,
                    type: 'deposit',
                    collector: 'Wayan Gobler',
                    status: 'done',
                    image: 'https://cdn2.boombastis.com/wp-content/uploads/2014/12/Cantiknya-Gadis-Bali-cuakeh.com_-medium-compress.jpg',
                },
                {

                    id: 1,
                    date: '2018-03-11',
                    amount: 5000000,
                    type: 'withdraw',
                    collector: '',
                    status: 'pending',
                    image: 'http://www.nusapenidamedia.com/wp-content/uploads/2017/11/dosen.jpg',
                },
                {
                    id: 2,
                    date: '2018-03-12',
                    amount: 15000000,
                    type: 'deposit',
                    collector: 'Wayan Gobler',
                    status: 'done',
                    image: 'https://i.ytimg.com/vi/8qkKPJMRCOA/maxresdefault.jpg',
                },
                {

                    id: 1,
                    date: '2018-03-11',
                    amount: 5000000,
                    type: 'withdraw',
                    collector: '',
                    status: 'pending',
                    image: 'https://c2.staticflickr.com/4/3334/3420941025_7aeb3d0260_b.jpg',
                },
                {

                    id: 1,
                    date: '2018-03-11',
                    amount: 5000000,
                    type: 'withdraw',
                    collector: '',
                    status: 'pending',
                    image: 'https://cdn-image.hipwee.com/wp-content/uploads/2016/04/hipwee-kayak_orang_bali_by_harimau_apa_kucing-d344flt-750x500.jpg',
                },
                {
                    id: 2,
                    date: '2018-03-12',
                    amount: 15000000,
                    type: 'deposit',
                    collector: 'Wayan Gobler',
                    status: 'done',
                    image: 'https://cdn2.boombastis.com/wp-content/uploads/2014/12/Cantiknya-Gadis-Bali-cuakeh.com_-medium-compress.jpg',
                },
                {

                    id: 1,
                    date: '2018-03-11',
                    amount: 5000000,
                    type: 'withdraw',
                    collector: '',
                    status: 'pending',
                    image: 'http://www.nusapenidamedia.com/wp-content/uploads/2017/11/dosen.jpg',
                },
                {
                    id: 2,
                    date: '2018-03-12',
                    amount: 15000000,
                    type: 'deposit',
                    collector: 'Wayan Gobler',
                    status: 'done',
                    image: 'https://i.ytimg.com/vi/8qkKPJMRCOA/maxresdefault.jpg',
                },
                {

                    id: 1,
                    date: '2018-03-11',
                    amount: 5000000,
                    type: 'withdraw',
                    collector: '',
                    status: 'pending',
                    image: 'https://c2.staticflickr.com/4/3334/3420941025_7aeb3d0260_b.jpg',
                },
                {

                    id: 1,
                    date: '2018-03-11',
                    amount: 5000000,
                    type: 'withdraw',
                    collector: '',
                    status: 'pending',
                    image: 'https://cdn-image.hipwee.com/wp-content/uploads/2016/04/hipwee-kayak_orang_bali_by_harimau_apa_kucing-d344flt-750x500.jpg',
                },
            ],
            pinjaman: [

            ],
            news: [
                {
                    id: 1,
                    date: '2018-03-12',
                    title: 'LPD Melayani dengan Sepenuh Hati',
                    description: 'Wayan Gobler',
                    category: 'Cerita LPD',
                    image: 'http://2.bp.blogspot.com/-LVs-BiuJUic/Vkj5-s2H6II/AAAAAAAAC2Q/w6xC48Mp-JI/s1600/Pelayanan%2Bnasabah%2BLPD.jpg',
                },
                {
                    id: 2,
                    date: '2018-03-12',
                    title: 'Dana Siaga Upacara, Tak Pusing Lagi',
                    description: 'Wayan Gobler',
                    category: 'LPD dan Solusi',
                    image: 'https://2.bp.blogspot.com/-8cxvm1AbdfY/WRH0mBc6jBI/AAAAAAAABzc/qZ69SxAszD8byyaluhUiHMaNeXzPL8KNQCLcB/s1600/ngaben.jpg',
                },
                {
                    id: 3,
                    date: '2018-03-12',
                    title: 'Tentang Topeng dan Budaya Moyang',
                    description: 'Wayan Gobler',
                    category: 'Cerita Bali',
                    image: 'http://moneter.co.id/uploads/c0b9aa1cd258df7b73f54815af0870b5.png',
                },
                {
                    id: 4,
                    date: '2018-03-12',
                    title: 'Menjaga Tradisi & Memajukan Ekonomi',
                    description: 'Wayan Gobler',
                    category: 'LPD dan Solusi',
                    image: 'http://www.harnas.co/files/images/760420/2015/02/06/kerajinan-bali.jpg',
                },
                {
                    id: 5,
                    date: '2018-03-12',
                    title: 'Sosialisasi LPD',
                    description: 'Wayan Gobler',
                    category: 'LPD dan Solusi',
                    image: 'http://www.baliprov.go.id/files/gambar%20humas/3-pilar.jpg',
                },
            ],


        };
    }
    componentDidMount() {
        InteractionManager.runAfterInteractions(() => {
            this.setState({ renderComponents: true });
        });
    }
    // _handleNavigatorEvent(event) {
    //     handleDeepLink(event, this.props.navigator);
    // }
    _handleDrawer() {
        this.props.navigator.toggleDrawer({
            side: 'left',
            animated: true,
            to: 'open',
        });
    }
    _openNotification() {

    }
    _login() {
        this.props.navigator.resetTo({
            screen: 'kliklpd.Home',
        });
    }
    _gotoRiwayat() {
        if (Platform.OS === 'ios') {
            this.props.navigator.handleDeepLink({ link: 'Riwayat' });
        } else {
            this.props.navigator.resetTo({
                screen: 'kliklpd.Riwayat',
            });
        }
    }
    _onScrollCard(event) {
        const xPos = event.nativeEvent.contentOffset.x;
        const index = Math.round(xPos / Dimensions.get('window').width);
        this.setState({ activeCard: index === 0 ? 'simpanan' : 'pinjaman' });
    }
    render() {
        const { width, height } = Dimensions.get('window');

        const cardBerita = (
            <LinearGradient colors={colors.WHITE_GRADIENT}
                start={{ x: 0.5, y: 1.0 }} end={{ x: 0.0, y: 0.25 }}
                style={[s.asc, { width: ms(300), height: ms(200), borderRadius: ms(5), overflow: 'hidden' }]}
            >
                <Image source={require('../img/siaga.png')}
                    style={[s.rm_contain, { width: ms(300), height: ms(200), opacity: 1 }]}
                />
                <View style={{
                    marginTop: ms(-55),
                    paddingHorizontal: ms(20),
                    paddingVertical: ms(12),
                    borderBottomLeftRadius: ms(5),
                    borderBottomRightRadius: ms(5),
                    backgroundColor: 'rgba(0,0,0,.75)',
                }}>
                    <View style={{ marginBottom: ms(4) }}>
                        <UniText.Semibold size={ms(14)} color="#fff">
                            Dana Siaga Upacara, Tak Pusing Lagi
                        </UniText.Semibold>
                    </View>
                    <UniText.Light size={ms(12)} color="#fff">
                        LPD dan Solusi
                    </UniText.Light>
                </View>
            </LinearGradient>
        );

        return (
            <View style={[s.flx_i, s.bg_white]}>
            {/*
                <View style={{ height: NAVBAR_HEIGHT }}>
                    <LinearGradient
                        colors={colors.DARK_BASIC}
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
                                    <Image source={require('../img/logo-action-bar.png')}
                                        style={[s.rm_contain, { width: ms(126), height: ms(33), opacity: 1 }]}
                                    />
                                </Animatable.View>
                            }
                            rightComponent={
                                <Animatable.View animation="fadeInRight">
                                    <IonIcon name="ios-notifications" color={colors.DARK_TYPE} size={ms(28)}/>
                                </Animatable.View>
                            }
                            rightAction={this._openNotification}
                        />

                        </View>
                        
                        </View>
                        */}




                <View style={{ height: ms(300) }}>
                    <LinearGradient
                        colors={colors.RED_GRADIENT}
                        style={{ height: ms(300) }}
                    />
                    <Image source={require('../img/bg-home-dark.jpg')}
                        style={[s.absolute, s.rm_cover, { width, height: ms(300), opacity: 0.7 }]}
                    />

                    <View style={[s.absolute, { width }]}>

                        <Header
                            openNotification={this._openNotification}
                            handleDrawer={this._handleDrawer}
                        />

                        <ScrollView
                            ref={scrollViewCard => { this.scrollViewCard = scrollViewCard; }}
                            contentContainerStyle={{ height: ms(200) }}
                            horizontal={true}
                            pagingEnabled={true}
                            showsHorizontalScrollIndicator={false}
                            scrollEventThrottle={200}
                            onScroll={this._onScrollCard}
                        >
                            <CardSimpanan />
                            <CardPinjaman />
                        </ScrollView>

                        <View style={[s.flx_row, s.aic, s.jcc, { height: ms(35) }]}>
                            <View style={{
                                marginRight: ms(3), width: ms(8), height: ms(8), borderRadius: ms(4),
                                backgroundColor: this.state.activeCard === 'simpanan' ? '#fff' : 'rgba(255,255,255,0.4)',
                            }} />
                            <View style={{
                                marginLeft: ms(3), width: ms(8), height: ms(8), borderRadius: ms(4),
                                backgroundColor: this.state.activeCard === 'pinjaman' ? '#fff' : 'rgba(255,255,255,0.4)',
                            }} />
                        </View>

                        {
                            this.state.activeCard === 'simpanan' &&
                            <View style={[s.absolute, s.right_0, { top: ms(55) + ms(8) }]}>
                                <TouchableOpacity onPress={this._swipeToPinjaman}>
                                    <View style={[s.aic, s.jcc, { height: ms(200), width: ms(20) }]}>
                                        <SimpleLine name="arrow-right" size={ms(20)} color="#fff" style={{ backgroundColor: 'transparent' }} />
                                    </View>
                                </TouchableOpacity>
                            </View>
                        }

                        {
                            this.state.activeCard === 'pinjaman' &&
                            <View style={[s.absolute, s.left_0, { top: ms(55) + ms(8) }]}>
                                <TouchableOpacity onPress={this._swipeToSimpanan}>
                                    <View style={[s.aic, s.jcc, { height: ms(200), width: ms(20) }]}>
                                        <SimpleLine name="arrow-left" size={ms(20)} color="#fff" style={{ backgroundColor: 'transparent' }} />
                                    </View>
                                </TouchableOpacity>
                            </View>
                        }

                    </View>
                </View>






                <Interactable.View
                    ref={interactableActivity => { this.interactableActivity = interactableActivity; }}
                    verticalOnly={true}
                    snapPoints={[{ y: ms(-245), id: 'bottom' }, { y: 0, id: 'top' }]}
                    boundaries={{ top: ms(-245), bottom: ms(0) }}
                    initialPosition={{ y: 0 }}
                    onSnap={this._onSnapInteractable}
                    style={[{ height: height - ms(55) - ms(23), backgroundColor: '#232647' }]}
                >
                    <Animatable.View animation="fadeInUp">
                        {
                            this.state.activeCard === 'simpanan' ?
                                <UniButton action={this._showAllHistorySimpanan}>
                                    <View style={[{ height: ms(70), backgroundColor: '#606999', borderBottomWidth: 0, borderBottomColor: '#353c64' }]}>
                                        <Animatable.View ref={animatableBtnRiwayatSimpanan => { this.animatableBtnRiwayatSimpanan = animatableBtnRiwayatSimpanan; }}>
                                            <BtnShowAllRiwayat type="Simpanan" />
                                        </Animatable.View>
                                    </View>
                                </UniButton>
                                :
                                <UniButton action={this._showAllHistoryPinjaman}>
                                    <View style={[{ height: ms(70), backgroundColor: '#606999', borderBottomWidth: 0, borderBottomColor: '#353c64' }]}>
                                        <Animatable.View ref={animatableBtnRiwayatPinjaman => { this.animatableBtnRiwayatPinjaman = animatableBtnRiwayatPinjaman; }}>
                                            <BtnShowAllRiwayat type="Pinjaman" />
                                        </Animatable.View>
                                    </View>
                                </UniButton>
                        }

                        <View
                            style={{ marginTop: ms(0), width, height: ms(460) }}
                            contentContainerStyle={{}}
                            vertical={true}
                            pagingEnabled={false}
                            showsVerticalScrollIndicator={false}
                            scrollEventThrottle={0}
                        >

                            {/* ------------------------------------- */}

                            <LinearGradient
                                colors={colors.DARK_GRADIENT}
                                style={{ height: ms(460) }}
                            />
                            <View style={[s.absolute, { marginTop: ms(0), width, height: ms(460) }]}>

                                <Animatable.View animation="fadeInUp" style={[s.aic, { marginBottom: ms(0) }]}>
                                    <ScrollView
                                        style={{ width, height: ms(460) }}
                                        contentContainerStyle={{}}
                                        vertical={true}
                                        pagingEnabled={false}
                                        showsVerticalScrollIndicator={false}
                                        scrollEventThrottle={0}
                                    >
                                        <View style={[s.relative, { marginTop: ms(0), width, height: ms(5), backgroundColor: '#232647' }]} />
                                    {this.state.simpanan.map((item, key) => {
                                        return (
                                            <TouchableOpacity key={key} activeOpacity={0.8}
                                                onPress={this._gotoRiwayat}
                                            >
                                                <View style={[s.aic, s.jcc, { flexDirection: 'row', paddingHorizontal: ms(10), marginVertical: ms(5) }]}>



                                                    <View style={[s.relative, s.aic, { zIndex: 9999999, width: ms(46), marginRight: ms(-23) }]}>

                                                        <View style={{
                                                            width: ms(46), height: ms(46), borderRadius: ms(18), backgroundColor: '#eee',

                                                            shadowColor: '#000',
                                                            shadowOffset: { width: 0, height: 2 },
                                                            shadowOpacity: 0.8,
                                                            shadowRadius: 2,

                                                        }}>
                                                            <Image source={{ uri: item.image }}
                                                                style={[s.rm_cover, { width: ms(46), height: ms(46), borderRadius: ms(15) }]}
                                                            />
                                                        </View>

                                                    </View>



                                                    <View style={[s.flx_row, s.aic, s.jcc,
                                                    {
                                                        backgroundColor: '#353c64',
                                                        borderRadius: ms(10),
                                                        shadowColor: '#000',
                                                        shadowOffset: { width: ms(0), height: ms(2) },
                                                        shadowOpacity: 0.8,
                                                        shadowRadius: ms(2),
                                                        zIndex: 99, width: (width - 50), minHeight: ms(70), padding: ms(0), paddingLeft: ms(20), marginLeft: ms(0)
                                                    }]}
                                                    >


                                                        <View style={[s.flx_row, s.aic, s.jcc, { paddingLeft: ms(20), paddingVertical: ms(8) }]}>


                                                            <View style={[s.aifs, s.jcc, { width: '43%' }]}>

                                                                <UniText.Semibold color={colors.WHITE} size={ms(12)}>
                                                                    PINJAMAN
                                    </UniText.Semibold>

                                                                <Text>
                                                                    <UniText.Light color={colors.WHITE} style={{ paddingRight: ms(5) }}>
                                                                        Rp
                                    </UniText.Light>
                                                                    <UniText.Semibold color={colors.WHITE} size={ms(20)}>
                                                                        5000000
                                    </UniText.Semibold>
                                                                </Text>

                                                                <Text>
                                                                    <UniText.Light color={colors.DARK_TYPE} size={ms(11)}>
                                                                    </UniText.Light>
                                                                    <UniText.Regular color={colors.DARK_TYPE} size={ms(11)}>
                                                                        Wayan Gobler
                                        </UniText.Regular>
                                                                </Text>

                                                            </View>
                                                            <View style={[s.aife, s.jcc, { width: '43%' }]}>
                                                                <UniText.Light color={colors.ORANGE} size={ms(12)}>
                                                                    24-03-2018
                                </UniText.Light>
                                                                <UniText.Semibold color={colors.ORANGE} size={ms(16)}>
                                                                    13.00 WITA
                                </UniText.Semibold>

                                                                <Text style={{ paddingTop: ms(5) }}>
                                                                    <UniText.Light color={colors.DARK_TYPE} size={ms(11)} style={{ paddingRight: ms(5) }}>
                                                                        Kolektor:
                                    </UniText.Light>
                                                                    <UniText.Regular color={colors.DARK_TYPE} size={ms(11)}>
                                                                        Wayan Gobler
                                    </UniText.Regular>
                                                                </Text>

                                                            </View>
                                                            <View style={[s.jcc, { marginLeft: '4%', marginRight: ms(0), width: '10%' }]}>
                                                                <IonIcon name="ios-arrow-dropright-outline" size={ms(20)} color={colors.WHITE} />
                                                            </View>
                                                        </View>

                                                    </View>

                                                </View>
                                            </TouchableOpacity>
                                        );
                                    })}

                                    <View style={[s.aic, s.jcc, { flexDirection: 'row', paddingHorizontal: ms(10), marginVertical: ms(5), paddingBottom: ms(25) }]}>



                                        <View style={[s.relative, s.aic, { zIndex: 9999999, width: ms(46), marginRight: ms(-23) }]}>
                                                {/* 606999 */}
                                            <View style={{
                                                    width: ms(46), height: ms(46), borderRadius: ms(18), backgroundColor: '#4b5380',

                                                shadowColor: '#353c64',
                                                shadowOffset: { width: 0, height: 2 },
                                                shadowOpacity: 0.8,
                                                shadowRadius: 2,

                                            }}>

                                            </View>

                                        </View>



                                        <View style={[
                                            {
                                                backgroundColor: '#353c64',
                                                borderRadius: ms(10),
                                                shadowColor: '#000',
                                                shadowOffset: { width: ms(0), height: ms(2) },
                                                shadowOpacity: 0.8,
                                                shadowRadius: ms(2),
                                                zIndex: 99, width: (width - 50), minHeight: ms(70), padding: ms(0), paddingLeft: ms(20), marginLeft: ms(0)
                                            }]}
                                        >


                                            <View style={[s.flx_row, s.aic, { paddingLeft: ms(20), paddingVertical: ms(8) }]}>


                                                <View style={[s.aifs, { width: '43%' }]}>

                                                </View>
                                                <View style={[s.aife, { width: '43%' }]}>


                                                </View>
                                                <View style={{ marginLeft: '4%', marginRight: ms(0), width: '10%' }}>

                                                </View>
                                            </View>

                                        </View>

                                    </View>


                                    </ScrollView>


                                </Animatable.View>

                            </View>

                            {/* ------------------------------------- */}


                            {/**/}
                            <Animatable.View animation="fadeInUp" style={[s.aic, { marginTop: ms(-75), marginBottom: ms(0) }]}>
                                <LinearGradient colors={['rgba(48,52,87,0)', 'rgba(48,52,87,1.0)']}
                                    style={[s.relative, { zIndex: 99999, width, marginTop: ms(0), height: ms(50) }]}
                                />
                                <View style={[s.relative, { marginTop: ms(0), width, height: ms(22), backgroundColor: '#303457' }]} />
                                <View style={[s.relative, { marginTop: ms(0), width, height: ms(3), backgroundColor: '#303457' }]} />

                                {/*
                                <View style={{ marginTop: ms(-26) }}>

                                    <UniButton action={_.debounce(this._gotoRiwayat, 1000, { leading: true, trailing: false })}
                                        borderless={true} borderRadius={ms(20)}
                                        disabled={this.props.loginLoading}
                                    >
                                        <LinearGradient colors={colors.RED_GRADIENT}
                                            start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
                                            style={[s.aic, s.jcc, { width: ms(200), height: ms(45), borderRadius: ms(20) }]}
                                        >
                                            {
                                                this.props.loginLoading ?
                                                    <ActivityIndicator color="#fff" />
                                                    :
                                                    <UniText.Bold color="#fff" size={ms(18)}>
                                                        LIHAT SEMUA
                                    </UniText.Bold>
                                            }
                                        </LinearGradient>
                                    </UniButton>

                                </View>
                                        */}


                            </Animatable.View>




                        </View>







                        {/*
                        // <Animatable.View
                        //     ref={animatableAktivitasSimpanan => { this.animatableAktivitasSimpanan = animatableAktivitasSimpanan; }}
                        // >
                        //     <FlatList
                        //         data={this.state.simpanan}
                        //         keyExtractor={(item) => item.id}
                        //         scrollEnabled={false}
                        //         ListHeaderComponent={() =>
                        //             <UniButton action={this._toggleLastActivity}>
                        //                 <View style={[s.flx_row, s.aic, { paddingHorizontal: ms(20), height: ms(55) }]}>
                        //                     <View style={s.flx_i}>
                        //                         <UniText.Medium color={colors.PURPLE}>
                        //                             Aktivitas Terakhir
                        //                         </UniText.Medium>
                        //                         <UniText.Light size={ms(13)} color="#666">
                        //                             Ketuk untuk melihat lebih {this.state.interactableOpened ? 'sedikit' : 'banyak'}.
                        //                         </UniText.Light>
                        //                     </View>
                        //                     <View style={[s.aife, { width: ms(30) }]}>
                        //                         <IonIcon name={this.state.interactableOpened ? 'ios-arrow-dropdown' : 'ios-arrow-dropup'} size={ms(20)} color={colors.PURPLE} />
                        //                     </View>
                        //                 </View>
                        //             </UniButton>
                        //         }
                        //         renderItem={({ item }) =>
                        //             <View style={[s.flx_row, s.aic, { paddingHorizontal: ms(20), paddingVertical: ms(8) }]}>
                        //                 <View style={[{ width: ms(80) }]}>
                        //                     <UniText.Semibold size={ms(30)} color={colors.RED}>
                        //                         {format(item.date, 'DD')}
                        //                     </UniText.Semibold>
                        //                     <UniText.Light color={colors.RED} size={ms(13)}>
                        //                         {format(item.date, 'MMM YYYY')}
                        //                     </UniText.Light>
                        //                 </View>
                        //                 <View style={[s.flx_i, s.aife]}>
                        //                     {
                        //                         item.status === 'pending' &&
                        //                         <UniText.Semibold color={colors.PURPLE} size={ms(12)}>
                        //                             PENDING
                        //                         </UniText.Semibold>
                        //                     }
                        //                     <Text>
                        //                         <UniText.Light>
                        //                             Rp
                        //                         </UniText.Light>
                        //                         <UniText.Semibold size={ms(20)}>
                        //                             {`${item.amount}`}
                        //                         </UniText.Semibold>
                        //                     </Text>
                        //                     {
                        //                         !_.isEmpty(item.collector) &&
                        //                         <Text>
                        //                             <UniText.Light>
                        //                                 Kolektor:
                        //                             </UniText.Light> <UniText.Regular>
                        //                                 {item.collector}
                        //                             </UniText.Regular>
                        //                         </Text>
                        //                     }
                        //                 </View>
                        //                 <View style={{ paddingLeft: ms(12) }}>
                        //                     {
                        //                         item.type === 'deposit'
                        //                             ? <IonIcon name="ios-add-circle-outline" size={ms(20)} color={colors.GREEN} />
                        //                             : <IonIcon name="ios-remove-circle-outline" size={ms(20)} color={colors.RED} />
                        //                     }
                        //                 </View>
                        //             </View>
                        //         }
                        //         ListFooterComponent={() =>
                        //             <View style={{ height: ms(77) }} />
                        //         }
                        //     />
                        // </Animatable.View>
                    */}
                    </Animatable.View>
                </Interactable.View>

                <Animatable.View
                    ref={animatedBottomButton => { this.animatedBottomButton = animatedBottomButton; }}
                    animation="fadeInUp" delay={2000}
                    style={[s.absolute, s.bottom_0, { width, height: ms(161) }]}
                >
                    <LinearGradient colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.5)']}
                        style={[s.absolute, s.bottom_0, { width, height: ms(76) }]}
                    />
                    <View style={[s.absolute, s.bottom_0, s.aife, s.jcc, { display: 'flex', width, height: ms(61), paddingBottom: ms(16), paddingHorizontal: ms(20) }]}>
                        <UniButton action={this._addSimpanan}>
                            <LinearGradient
                                colors={colors.RED_GRADIENT}
                                style={[s.aic, s.jcc, { width: ms(45), height: ms(45), borderRadius: ms(22.5) }]}
                            >
                                <UniText.Semibold color="#fff" size={ms(32)}>
                                    +
                                </UniText.Semibold>
                            </LinearGradient>
                        </UniButton>
                    </View>
                </Animatable.View>





                {/*


                        <ScrollView
                            contentContainerStyle={{}}
                            vertical={true}
                            pagingEnabled={false}
                            showsVerticalScrollIndicator={false}
                            scrollEventThrottle={0}
                        >

                        {/* ------------------------------------- * /}

                        <LinearGradient
                            colors={colors.DARK_GRADIENT}
                            style={{ height: ms(460) }}
                        />
                        <View style={[s.absolute, { marginTop: ms(10), width, height: ms(460) }]}>
                        
                        <Animatable.View animation="fadeInUp" style={[s.aic, { marginBottom: ms(0) }]}>
                         
                        { this.state.simpanan.map((item, key) => {
                                return (
                                    <TouchableOpacity key={key} activeOpacity={0.8}
                                onPress={this._gotoRiwayat}
                            >
                        <View style={[s.aic, s.jcc, { flexDirection: 'row', paddingHorizontal: ms(10), marginVertical: ms(5) }]}>



                        <View style={[s.relative, s.aic, { zIndex: 9999999, width: ms(46), marginRight: ms(-23) }]}>
                                 
                        <View style={{ width: ms(46), height: ms(46), borderRadius: ms(18), backgroundColor: '#eee',
                    
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.8,
                        shadowRadius: 2,

                        }}>
                            <Image source={{ uri: item.image }}
                                style={[s.rm_cover, { width: ms(46), height: ms(46), borderRadius: ms(15) }]}
                            />
                        </View>

                        </View>



                        <View style={[s.flx_row, s.aic, s.jcc,
                             {
                                 backgroundColor: '#353c64',
                            borderRadius: ms(10),
                            shadowColor: '#000',
                            shadowOffset: { width: ms(0), height: ms(2) },
                            shadowOpacity: 0.8,
                            shadowRadius: ms(2),
                            zIndex: 99, width: (width - 50), minHeight: ms(70), padding: ms(0), paddingLeft: ms(20), marginLeft: ms(0) }]}
                                >


                        <View style={[s.flx_row, s.aic, s.jcc, { paddingLeft: ms(20), paddingVertical: ms(8) }]}>


                            <View style={[s.aifs, s.jcc, { width: '43%' }]}>
                                 
                                    <UniText.Semibold color={colors.WHITE} size={ms(12)}>
                                        PINJAMAN
                                    </UniText.Semibold>
                                
                                <Text>
                                    <UniText.Light color={colors.WHITE} style={{ paddingRight: ms(5) }}>
                                        Rp
                                    </UniText.Light>
                                    <UniText.Semibold color={colors.WHITE} size={ms(20)}>
                                        5000000
                                    </UniText.Semibold>
                                </Text>
                                
                                    <Text>
                                        <UniText.Light color={colors.DARK_TYPE} size={ms(11)}>
                                        </UniText.Light>
                                        <UniText.Regular color={colors.DARK_TYPE} size={ms(11)}>
                                            Wayan Gobler
                                        </UniText.Regular>
                                    </Text>

                            </View>
                            <View style={[s.aife, s.jcc, { width: '43%' }]}>
                                <UniText.Light color={colors.ORANGE} size={ms(12)}>
                                    24-03-2018
                                </UniText.Light>
                                <UniText.Semibold color={colors.ORANGE} size={ms(16)}>
                                    13.00 WITA
                                </UniText.Semibold>
                                
                                <Text style={{ paddingTop: ms(5) }}>
                                    <UniText.Light color={colors.DARK_TYPE} size={ms(11)} style={{ paddingRight: ms(5) }}>
                                        Kolektor:
                                    </UniText.Light>
                                    <UniText.Regular color={colors.DARK_TYPE} size={ms(11)}>
                                        Wayan Gobler
                                    </UniText.Regular>
                                </Text>

                            </View>
                            <View style={[s.jcc, { marginLeft: '4%', marginRight: ms(0), width: '10%' }] }>
                                <IonIcon name="ios-arrow-dropright-outline" size={ms(20)} color={colors.WHITE}/>
                            </View>
                        </View>

                        </View>

                        </View>
                        </TouchableOpacity>
                             );
                    }) }


                    <View style={[s.aic, s.jcc, { flexDirection: 'row', paddingHorizontal: ms(10), marginVertical: ms(5) }]}>



                        <View style={[s.relative, s.aic, { zIndex: 9999999, width: ms(46), marginRight: ms(-23) }]}>
                                 
                        <View style={{ width: ms(46), height: ms(46), borderRadius: ms(18), backgroundColor: '#606999',
                    
                        shadowColor: '#353c64',
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.8,
                        shadowRadius: 2,

                        }}>

                        </View>

                        </View>



                        <View style={[
                             {
                                 backgroundColor: '#353c64',
                            borderRadius: ms(10),
                            shadowColor: '#000',
                            shadowOffset: { width: ms(0), height: ms(2) },
                            shadowOpacity: 0.8,
                            shadowRadius: ms(2),
                            zIndex: 99, width: (width - 50), minHeight: ms(70), padding: ms(0), paddingLeft: ms(20), marginLeft: ms(0) }]}
                                >


                        <View style={[s.flx_row, s.aic, { paddingLeft: ms(20), paddingVertical: ms(8) }]}>


                            <View style={[s.aifs, { width: '43%' }]}>
                                 
                            </View>
                            <View style={[s.aife, { width: '43%' }]}>
                                

                            </View>
                            <View style={{ marginLeft: '4%', marginRight: ms(0), width: '10%' }}>
                                
                            </View>
                        </View>

                        </View>

                        </View>


                        {/ *
                            <Card cornerRadius={ms(8)}
                                style={[s.bg_white, { width: ms(330), minHeight: ms(70), padding: ms(10) }]}
                                >
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
                            </Card>


                            * /}


                        </Animatable.View>

                        </View>
                        
                        {/ * ------------------------------------- * /}


                        <Animatable.View animation="fadeInUp" style={[s.aic, { marginTop: ms(-50), marginBottom: ms(0) }]}>
                        <LinearGradient colors={['rgba(48,52,87,0)', 'rgba(48,52,87,1.0)']}
                            style={[s.relative, { zIndex: 99999, width, marginTop: ms(0), height: ms(50) }]}
                        />
                        <View style={[s.relative, { marginTop: ms(0), width, height: ms(22), backgroundColor: '#303457' }]} />
                        <View style={[s.relative, { marginTop: ms(0), width, height: ms(3), backgroundColor: '#ffffff' }]} />

                        <View style={{ marginTop: ms(-26) }}>

                        <UniButton action={_.debounce(this._gotoRiwayat, 1000, { leading: true, trailing: false })}
                            borderless={true} borderRadius={ms(20)}
                            disabled={this.props.loginLoading}
                        >
                            <LinearGradient colors={colors.RED_GRADIENT}
                                start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
                                style={[s.aic, s.jcc, { width: ms(200), height: ms(45), borderRadius: ms(20) }]}
                            >
                                {
                                    this.props.loginLoading ?
                                    <ActivityIndicator color="#fff"/>
                                    :
                                    <UniText.Bold color="#fff" size={ms(18)}>
                                        LIHAT SEMUA
                                    </UniText.Bold>
                                }
                            </LinearGradient>
                        </UniButton>
                        
                        </View>


                        </Animatable.View>



                        <Animatable.View animation="fadeInUp" style={[s.aic, { marginTop: ms(10), marginBottom: ms(10) }]}>
                            
                        <View style={{
                            width,
                            backgroundColor: '#fff',
                            height: ms(290),
                            paddingBottom: ms(0),
                            marginTop: ms(0),
                        }}>


                        <View style={[s.flx_row, s.aic, { paddingHorizontal: ms(20), height: ms(65), paddingTop: ms(10), paddingBottom: ms(10) }]}>

                            <View style={s.flx_i}>
                                <UniText.Medium color={colors.PURPLE}>
                                    Kabar Terakhir
                                </UniText.Medium>
                                <UniText.Light size={ms(13)} color="#666">
                                    Kabar dan Informasi terbaru tentang LPD dan Bali.
                                </UniText.Light>
                            </View>

                        </View>

                        <ScrollView
                            ref={scrollViewCard => { this.scrollViewCard = scrollViewCard; }}
                            contentContainerStyle={{ height: ms(200) }}
                            horizontal={true}
                            pagingEnabled={false}
                            showsHorizontalScrollIndicator={false}
                            scrollEventThrottle={200}
                            >
                            {/ *
                            onScroll={this._onScrollCard}
                            * / }
                            <View style={[{ width: ms(10) }]}>
                            </View>
{
                            this.state.news.map(
                                (newsItem, newsKey) => {
                                    return (

                                        <TouchableOpacity key={newsKey} activeOpacity={0.8}
                                onPress={this._gotoRiwayat}
                            >

                            <View style={[{ width: ms(310) }]}>
                                {

                                    Platform.OS === 'ios' ?
                                    

                                    <CardView cardElevation={2} cardMaxElevation={2} cornerRadius={ms(5)}>
                                        
                                                    <LinearGradient colors={colors.WHITE_GRADIENT}
                                                        start={{ x: 0.5, y: 1.0 }} end={{ x: 0.0, y: 0.25 }}
                                                        style={[s.asc, { width: ms(300), height: ms(200), borderRadius: ms(5), overflow: 'hidden' }]}
                                                    >
                                                        <Image source={{ uri: newsItem.image }}
                                                            style={[s.rm_contain, { width: ms(300), height: ms(200), opacity: 1 }]}
                                                        />
                                                        <View style={{
                                                            marginTop: ms(-55),
                                                            paddingHorizontal: ms(20),
                                                            paddingVertical: ms(12),
                                                            borderBottomLeftRadius: ms(5),
                                                            borderBottomRightRadius: ms(5),
                                                            backgroundColor: 'rgba(0,0,0,.75)',
                                                        }}>
                                                            <View style={{ marginBottom: ms(4) }}>
                                                                <UniText.Semibold size={ms(14)} color="#fff">
                                                                    {newsItem.title}
                                                                </UniText.Semibold>
                                                            </View>
                                                            <UniText.Light size={ms(12)} color="#fff">
                                                                {newsItem.category}
                                                            </UniText.Light>
                                                        </View>
                                                    </LinearGradient>
                                                
                                    
                                    </CardView>
                        
                                    :

                                                <LinearGradient  colors={colors.DARK_GRADIENT}
                                                    start={{ x: 0.5, y: 1.0 }} end={{ x: 0.0, y: 0.25 }}
                                                    style={[s.asc, { width: ms(300), height: ms(200), borderRadius: ms(5), overflow: 'hidden' }]}
                                                >
                                                    <Image source={{ uri: newsItem.image }}
                                                        style={[s.rm_contain, { width: ms(300), height: ms(200), opacity: 1 }]}
                                                    />
                                                    <View style={{
                                                        marginTop: ms(-55),
                                                        paddingHorizontal: ms(20),
                                                        paddingVertical: ms(12),
                                                        borderBottomLeftRadius: ms(5),
                                                        borderBottomRightRadius: ms(5),
                                                        backgroundColor: 'rgba(0,0,0,.75)',
                                                    }}>
                                                        <View style={{ marginBottom: ms(4) }}>
                                                            <UniText.Semibold size={ms(14)} color="#fff">
                                                                {newsItem.title}
                                                            </UniText.Semibold>
                                                        </View>
                                                        <UniText.Light size={ms(12)} color="#fff">
                                                            {newsItem.category}
                                                        </UniText.Light>
                                                    </View>
                                                </LinearGradient>
                                            
                                }
                            </View>
                            </TouchableOpacity>
                            );
                        })
                    }
                    <View style={[{ width: ms(10) }]}>
                    </View>
                    {/ *
                    * / }

                        </ScrollView>

                        </View>

                        </Animatable.View>
                        

                { / * * / }

                        </ScrollView>

            */}
                    
                
            </View>
        );
    }
}

Home.propTypes = {
    navigator: PropTypes.object.isRequired,
    
};

const mapStateToProps = (state) => ({
    
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
