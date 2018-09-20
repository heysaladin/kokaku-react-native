import React from 'react';
import { View, Text, Image, Dimensions, Platform } from 'react-native';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';
import { styles as s } from 'react-native-style-tachyons';
import CardView from 'react-native-cardview';
import { UniText } from '../_global';
import { ms } from '../../utils';
import { colors } from '../../constants';

const CardPinjaman = (props) => {
    const { width } = Dimensions.get('window');

    const card = (
        <LinearGradient colors={colors.BLACK_GRADIENT}
            start={{ x: 0.5, y: 1.0 }} end={{ x: 0.0, y: 0.25 }}
            style={[s.asc, { width: ms(300), height: ms(200), borderRadius: ms(5) }]}
        >
            <View style={[s.flx_row, s.aic, s.jcc, { height: ms(40) }]}>
                <View style={{ width: ms(6), height: ms(6), borderRadius: ms(3), marginRight: ms(8), backgroundColor: '#21d4fd' }}/>
                <UniText.Semibold size={ms(13)} color="#21d4fd">
                    SILARURRAHIM
                </UniText.Semibold>
                <View style={{ width: ms(6), height: ms(6), borderRadius: ms(3), marginLeft: ms(8), backgroundColor: '#21d4fd' }}/>
            </View>
            <View style={[s.flx_i, s.aic, s.jcc, { marginBottom: ms(12) }]}>
                <Text style={{ backgroundColor: 'transparent' }}>
                    {/* <UniText.Regular color="#fff">- </UniText.Regular> */}
                    <UniText.Bold size={ms(24)} color="#fff" style={{ paddingHorizontal: ms(50) }}>
                        Halo Dolor... Yoopo Kabare?
                    </UniText.Bold>
                    {/* <UniText.Regular color="#fff"> -</UniText.Regular> */}
                </Text>
            </View>
            <View style={{ paddingHorizontal: ms(20), paddingVertical: ms(12),
                borderBottomLeftRadius: ms(5), borderBottomRightRadius: ms(5),
                backgroundColor: '#29323c',
            }}>
                <View style={{ marginBottom: ms(4) }}>
                    <UniText.Semibold size={ms(16)} color="#fff">
                        Didien Geonk
                    </UniText.Semibold>
                </View>
                <UniText.Light size={ms(12)} color="#fff">
                    Jl. Pulau Kawe, Denpasar
                </UniText.Light>
            </View>
            <View style={[s.absolute, s.bottom_0, s.right_0, { paddingRight: ms(16) }]}>
                <Image source={require('../../img/cottage.png')}
                    style={[s.rm_contain, { width: ms(80), height: ms(90), opacity: 0.3 }]}
                />
            </View>
        </LinearGradient>
    );

    return (
        <View style={[s.aic, { width }]}>
            {
                Platform.OS === 'ios' ?
                <CardView cardElevation={2} cardMaxElevation={2} cornerRadius={ms(5)}>
                    {card}
                </CardView>
                :
                card
            }
        </View>
    );
};

CardPinjaman.propTypes = {

};

export default CardPinjaman;
