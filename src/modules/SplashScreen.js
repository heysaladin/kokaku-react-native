import React, { Component } from 'react';
import { View, Image, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import { styles as s } from 'react-native-style-tachyons';
import LinearGradient from 'react-native-linear-gradient';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { colors } from '../constants';
import { ms } from '../utils';

class SplashScreen extends Component {
    static navigatorStyle = {
        navBarHidden: true,
    };
    componentDidMount() {
        setTimeout(() => {
            this.props.navigator.resetTo({
                screen: 'kliklpd.Walkthrough',
                overrideBackPress: true,
            });
        }, 3000);
    }
    render() {
        const { width, height } = Dimensions.get('window');
        return (
            <View style={[s.flx_i, s.bg_white]}>
                <Image source={require('../img/bg-splash.png')}
                    style={[s.rm_cover, { width, height }]}
                />
                {/*
                <LinearGradient
                    colors={['rgba(235,51,73,0.8)', 'rgba(244,92,67,0.8)']}
                    style={[s.absolute, s.aic, s.jcc, { width, height }]}
                />
                */}
                <View style={[s.absolute, s.aic, s.jcc, {width}]}>
                    <Image source={require('../img/logo-large.png')}
                        style={[s.rm_contain, { width: ms(225), height }]}
                    />
                </View>
            </View>
        );
    }
}

SplashScreen.propTypes = {
    navigator: PropTypes.object.isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
    isSetPasscode: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
    isLoggedIn: state.account.isLoggedIn,
    isSetPasscode: state.account.isSetPasscode,
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen);
