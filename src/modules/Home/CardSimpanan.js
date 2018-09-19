import React from 'react';
import { View, Text, Image, Platform, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';
import { styles as s } from 'react-native-style-tachyons';
import * as Animatable from 'react-native-animatable';
import CardView from 'react-native-cardview';
import { UniText } from '../_global';
import { ms } from '../../utils';
import { colors } from '../../constants';

const CardSimpanan = (props) => {
    const { width } = Dimensions.get('window');

    const card = (
        <LinearGradient colors={colors.WHITE_GRADIENT}
            start={{ x: 0.5, y: 1.0 }} end={{ x: 0.0, y: 0.25 }}
            style={[s.asc, { width: ms(300), height: ms(200), borderRadius: ms(5) }]}
        >
            <View style={[s.flx_row, s.aic, s.jcc, { height: ms(40) }]}>
                <View style={{ width: ms(6), height: ms(6), borderRadius: ms(3), marginRight: ms(8), backgroundColor: '#667eea' }}/>
                <UniText.Semibold size={ms(13)} color={colors.PURPLE}>
                    SIMPANAN
                </UniText.Semibold>
                <View style={{ width: ms(6), height: ms(6), borderRadius: ms(3), marginLeft: ms(8), backgroundColor: '#667eea' }}/>
            </View>
            <View style={[s.flx_i, s.aic, s.jcc, { marginBottom: ms(12) }]}>
                <Text style={{ backgroundColor: 'transparent' }}>
                    <UniText.Regular>Rp </UniText.Regular>
                    <UniText.Bold size={ms(24)}>
                        100.000.000.000
                    </UniText.Bold>
                </Text>
            </View>
            <View style={[s.bg_white, { paddingHorizontal: ms(20), paddingVertical: ms(12), borderBottomLeftRadius: ms(5), borderBottomRightRadius: ms(5) }]}>
                <View style={{ marginBottom: ms(4) }}>
                    <UniText.Semibold size={ms(16)}>
                        Didien Geonk
                    </UniText.Semibold>
                </View>
                <UniText.Light size={ms(12)}>
                    Jl. Pulau Kawe, Denpasar
                </UniText.Light>
            </View>
            <View style={[s.absolute, s.bottom_0, s.right_0, { paddingRight: ms(16) }]}>
                <Image source={require('../../img/windmill.png')}
                    style={[s.rm_contain, { width: ms(80), height: ms(90), opacity: 0.5 }]}
                />
            </View>
        </LinearGradient>
    );

    return (
        <Animatable.View animation="zoomIn" duration={500}
            style={[s.aic, { width, backgroundColor: 'transparent' }]}
        >
            {
                Platform.OS === 'ios' ?
                <CardView cardElevation={2} cardMaxElevation={2} cornerRadius={ms(5)}>
                    {card}
                </CardView>
                :
                card
            }
        </Animatable.View>
    );
};

CardSimpanan.propTypes = {

};

export default CardSimpanan;
