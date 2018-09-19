import { StyleSheet } from 'react-native';
import NativeTachyons from 'react-native-style-tachyons';
import { colors } from '../constants';

export default () => {
    NativeTachyons.build({
        rem: 16,
        colors: {
            palette: {
                white: colors.WHITE,
                black: colors.BLACK,
                transparent: 'transparent',
            },
        },
        fonts: {
            bold: 'CircularStd-Bold',
            medium: 'CircularStd-Medium',
            book: 'CircularStd-Book',
            light: 'ProximaNova-Light',
            regular: 'ProximaNova-Regular',
            semibold: 'ProximaNova-Semibold',
            demi: 'AvenirNextLTPro-Demi',
            avenir_book: 'Avenir-Book',
        },
    }, StyleSheet);
};
