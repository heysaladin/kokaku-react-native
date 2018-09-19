import React from 'react';
import { View, Image } from 'react-native';
import PropTypes from 'prop-types';
import { styles as s } from 'react-native-style-tachyons';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { ms } from '../../utils';
import { UniText } from '../_global';

const ShowAllRiwayat = (props) => {
    return (
        <View style={[s.flx_row, s.aic]}>
            <View style={[s.aic, s.jcc, { width: ms(80), height: ms(70) }]}>
                <Image
                    source={
                        props.type === 'Simpanan'
                            ? require('../../img/piggy-bank.png')
                            : require('../../img/wallet.png')
                    }
                    style={[s.rm_contain, { width: ms(30), height: ms(30) }]}
                />
            </View>
            <View style={[s.flx_i]}>
                <View style={{ marginBottom: ms(4) }}>
                    <UniText.Semibold color="#fff" size={ms(15)}>
                        Riwayat {props.type.toLowerCase()}
                    </UniText.Semibold>
                </View>
                <UniText.Regular color="#fff" size={ms(13)}>
                    Ketuk di sini untuk melihat semua riwayat {props.type} Anda.
                </UniText.Regular>
            </View>
            <View style={[s.aic, s.jcc, { width: ms(50), height: ms(70) }]}>
                <IonIcon name="ios-arrow-forward" size={ms(24)}/>
            </View>
        </View>
    );
};

ShowAllRiwayat.propTypes = {
    type: PropTypes.string.isRequired,
};

export default ShowAllRiwayat;
