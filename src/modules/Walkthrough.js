import React, { Component } from 'react';
import { View, Dimensions, Image } from 'react-native';
import PropTypes from 'prop-types';
import { styles as s } from 'react-native-style-tachyons';
import LinearGradient from 'react-native-linear-gradient';
import { ViewPager, UniText, UniButton } from './_global';
import { ms } from '../utils';

class Walkthrough extends Component {
    static navigatorStyle = {
        navBarHidden: true,
    };
    constructor(props) {
        super(props);

        this._handleNext = this._handleNext.bind(this);
        this._handlePrev = this._handlePrev.bind(this);
        this._handleSkip = this._handleSkip.bind(this);
        this._onSelectedIndexChange = this._onSelectedIndexChange.bind(this);

        this.state = {
            selectedIndex: 0,
            screens: [
                {
                    image: require('../img/simpan.png'),
                    title: 'Simpanan Untung',
                    text: 'Lebih untung simpan dana sesuai kebutuhan Anda.',
                },
                {
                    image: require('../img/pinjam.png'),
                    title: 'Pinjaman Mudah',
                    text: 'Kemudahan memperoleh pinjaman sesuai kebutuhan Anda.',
                },
                {
                    image: require('../img/siaga.png'),
                    title: 'Dana Siaga',
                    text: 'Selalu ada Dana dengan Cepat dan Mudah untuk Kebutuhan Anda.',
                },
                {
                    image: require('../img/cepat.png'),
                    title: 'Tinggal Klik!',
                    text: 'Melalui platform online proses pengajuan dana Anda dengan jari Anda.',
                },
            ],
        };
    }
    _handleNext() {
        
    }
    _handlePrev() {

    }
    _handleSkip() {
        this.props.navigator.resetTo({
            screen: 'kliklpd.SignUp',
        });
    }
    _onSelectedIndexChange() {

    }
    render() {
        const { width } = Dimensions.get('window');

        return (
            <View style={[s.flx_i, s.bg_white]}>
                <ViewPager count={this.state.screens.length}
                    selectedIndex={this.state.selectedIndex}
                    onSelectedIndexChange={this._onSelectedIndexChange}
                >
                    {
                        this.state.screens.map((screen, index) => {
                            return (
                                <View key={index} style={[s.flx_i, s.jcc, s.aic]}>
                                    <Image source={screen.image} style={[s.fm_cover, { height: ms(170) }]}
                                    />
                                    <View style={{ margin: ms(20), marginBottom: ms(10) }}>
                                    <UniText.Bold size={ms(18)}>
                                        {screen.title}
                                    </UniText.Bold>
                                    </View>
                                    <View style={{ paddingLeft: ms(50), paddingRight: ms(50) }}>
                                    <UniText.Regular textAlign='center' >
                                        {screen.text}
                                    </UniText.Regular>
                                    </View>
                                </View>
                            );
                        })
                    }
                </ViewPager>

                <View style={[s.absolute, s.bottom_0, s.aic, { width, height: ms(70) }]}>
                    <View style={[s.flx_row, { paddingHorizontal: ms(20) }]}>
                        <View style={s.flx_i}>

                        </View>
                        <View style={[s.flx_i, s.aife]}>
                            <View style={{ width: ms(100), height: ms(45), borderRadius: ms(22.5),
                                borderTopColor: '#C91F2C',
                                borderTopWidth: ms(1),
                                borderBottomColor: '#C91F2C',
                                borderBottomWidth: ms(1),
                                borderLeftColor: '#C91F2C',
                                borderLeftWidth: ms(1),
                                borderRightColor: '#C91F2C',
                                borderRightWidth: ms(1),
                            }}>
                                <UniButton action={this._handleSkip} borderRadius={ms(22.5)} >
                                    <LinearGradient colors={['rgba(225,225,225,0.0)', 'rgba(225,225,225,0.0)']}
                                        start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
                                        style={[s.aic, s.jcc, { width: ms(100), height: ms(45), borderRadius: ms(22.5) }]}
                                    >
                                        <UniText.Semibold size={ms(16)} color='#C91F2C' >
                                            SKIP
                                        </UniText.Semibold>
                                    </LinearGradient>
                                </UniButton>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

Walkthrough.propTypes = {
    navigator: PropTypes.object.isRequired,
};

export default Walkthrough;
