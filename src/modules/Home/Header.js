import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import * as Animatable from 'react-native-animatable';
import { styles as s } from 'react-native-style-tachyons';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { ms } from '../../utils';
import { UniText } from '../_global';

const Header = (props) => {
    return (
        <View style={[s.jcc, { height: ms(55), paddingHorizontal: ms(16), marginBottom: ms(8) }]}>
            <View style={[s.flx_row, s.aic]}>
                <Animatable.View animation="fadeInRight" style={[s.flx_i, s.aic, s.jcfs, s.flx_row, { display: 'flex' }] }>
                    <TouchableOpacity activeOpacity={0.8}
                        onPress={props.handleDrawer}
                        style={{ backgroundColor: 'transparent' }}
                    >
                    <IonIcon name="md-menu" color="#fff" size={ms(28)} style={{ marginRight: ms(10) }} />
                    </TouchableOpacity>
                    <UniText.Bold color="#fff" size={ms(20)}>
                        Kokaku
                    </UniText.Bold>
                </Animatable.View>
                <TouchableOpacity onPress={props.openNotification} activeOpacity={0.7}>
                    <View>
                        <Animatable.View
                            ref={animatedNotif => { this.animatedNotif = animatedNotif; }}
                            animation="bounceIn"
                            delay={ms(1000)}
                            style={[s.flx_row, s.aic, { backgroundColor: 'rgba(255,255,255,0.2)', height: ms(35), borderRadius: ms(17.5) }]}
                        >
                            <View style={[{ paddingLeft: ms(12), paddingRight: ms(12) + ms(35) }]}>
                                <UniText.Regular color="#fff">
                                    1 pemberitahuan baru
                                </UniText.Regular>
                            </View>
                        </Animatable.View>
                        <Animatable.View
                            animation="bounceIn" delay={400} duration={2000}
                            style={[s.absolute, s.right_0, s.aic, s.jcc, { width: ms(35), height: ms(35), borderRadius: ms(17.5), backgroundColor: 'rgba(255,255,255,0.15)' }]}
                        >
                            <IonIcon name="ios-notifications" color="#fff" size={ms(24)}/>
                        </Animatable.View>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

Header.propTypes = {
    openNotification: PropTypes.func.isRequired,
    handleDrawer: PropTypes.func.isRequired,
};

export default Header;
