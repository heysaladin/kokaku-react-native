import React, { PureComponent } from 'react';
import { View, TouchableOpacity, Platform, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { styles as s } from 'react-native-style-tachyons';
import { UniButton } from '../_global';
import { ms } from '../../utils';

const NAVBAR_HEIGHT = _.isEqual(Platform.OS, 'ios') ? 56 + ms(12) : 56;

class Navbar extends PureComponent {
    constructor(props) {
        super(props);
        this._leftAction = this._leftAction.bind(this);
        this._rightAction = this._rightAction.bind(this);
        this.state = {

        };
    }
    _leftAction() {
        this.props.leftAction(this.props.leftParams);
    }
    _rightAction() {
        this.props.rightAction(this.props.rightParams);
    }
    render() {
        const { width, height } = Dimensions.get('window');

        return (
            <View style={[s.jcc, { minHeight: NAVBAR_HEIGHT, maxHeight: 100, backgroundColor: this.props.bgColor,
                borderBottomWidth: this.props.noBorder ? 0 : 1, borderBottomColor: '#ddd',
            }]}>
                {
                    !!this.props.centerComponent &&
                    <View style={[s.absolute, s.aic, s.jcc, { width, height: NAVBAR_HEIGHT,
                        paddingTop: _.isEqual(Platform.OS, 'ios') ? ms(12) : 0,
                    }]}>
                        {this.props.centerComponent}
                    </View>
                }

                {
                    !!this.props.leftComponent &&
                    <View style={[s.absolute, s.left_0, { width: NAVBAR_HEIGHT, height: NAVBAR_HEIGHT, borderRadius: NAVBAR_HEIGHT / 2,
                        paddingTop: _.isEqual(Platform.OS, 'ios') ? ms(12) : 0,
                    }]}>
                        <UniButton action={this._leftAction} borderless={true} borderRadius={56 / 2}>
                            <View style={[s.jcc, s.aic, { height: 56, width: 56, borderRadius: 56 / 2 }]}>
                                {this.props.leftComponent}
                            </View>
                        </UniButton>
                    </View>
                }

                {
                    !!this.props.rightComponent &&
                    <View style={[s.absolute, s.right_0, { width: NAVBAR_HEIGHT, height: NAVBAR_HEIGHT, borderRadius: NAVBAR_HEIGHT / 2,
                        paddingTop: _.isEqual(Platform.OS, 'ios') ? ms(12) : 0,
                    }]}>
                        {
                            this.props.rightAction ?
                            <TouchableOpacity activeOpacity={0.8}
                                onPress={this._rightAction.bind(this)}
                            >
                                <View style={[s.jcc, s.aife, { height: 56, width: 56, paddingHorizontal: 16 }]}>
                                    {this.props.rightComponent}
                                </View>
                            </TouchableOpacity>
                            :
                            <View style={[s.jcc, { height: 56, width: 56, paddingHorizontal: 16 }]}>
                                {this.props.rightComponent}
                            </View>
                        }
                    </View>
                }
            </View>
        );
    }
}

Navbar.propTypes = {
    bgColor: PropTypes.string,
    centerComponent: PropTypes.any,
    leftComponent: PropTypes.any,
    leftAction: PropTypes.func,
    leftParams: PropTypes.any,
    rightComponent: PropTypes.any,
    rightAction: PropTypes.func,
    rightParams: PropTypes.any,
    noBorder: PropTypes.bool,
};

Navbar.defaultProps = {
    bgColor: 'transparent',
    noBorder: false,
};

export {
    Navbar,
    NAVBAR_HEIGHT,
};
