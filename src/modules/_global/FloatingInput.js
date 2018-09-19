import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Animated, Platform } from 'react-native';
import { ms } from '../../utils';
import { colors } from '../../constants';

class FloatingLabel extends Component {
    constructor(props) {
        super(props);

        let initialPadding = 9;
        let initialOpacity = 0;

        if (this.props.visible) {
            initialPadding = 5;
            initialOpacity = 1;
        }

        this.state = {
            paddingAnim: new Animated.Value(initialPadding),
            opacityAnim: new Animated.Value(initialOpacity),
        };
    }

    componentWillReceiveProps(newProps) {
        Animated.timing(this.state.paddingAnim, {
            toValue: newProps.visible ? 5 : 9,
            duration: 230,
        }).start();

        return Animated.timing(this.state.opacityAnim, {
            toValue: newProps.visible ? 1 : 0,
            duration: 230,
        }).start();
    }

    render() {
        return (
            <Animated.View style={[styles.floatingLabel, {
                paddingTop: this.state.paddingAnim, opacity: this.state.opacityAnim,
                paddingHorizontal: Platform.OS === 'ios' ? 12 : 0,
            }]}>
                {this.props.children}
            </Animated.View>
        );
    }
}

class TextFieldHolder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            marginAnim: new Animated.Value(this.props.withValue && this.props.floating ? 10 : 0)
        }
    }
    componentWillReceiveProps(newProps) {
        if (this.props.floating) {
            const top = this.props.multiline ? 36 : 10;
            return Animated.timing(this.state.marginAnim, {
                toValue: newProps.withValue ? top : 0,
                duration: 230,
            }).start();
        }
    }
    render() {
        return (
            <Animated.View style={{
                marginTop: this.state.marginAnim,
                paddingHorizontal: Platform.OS === 'ios' ? 12 : 0
            }}>
                {this.props.children}
            </Animated.View>
        );
    }
}

class FloatingInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            focused: false,
            text: this.props.defaultValue,
        };
    }
    componentWillReceiveProps(newProps) {
        if (newProps.hasOwnProperty('value') && newProps.value !== this.state.text) {
            this.setState({ text: newProps.value })
        }
    }
    withBorder() {
        if (!this.props.noBorder) {
            return styles.withBorder;
        }
    }
    _onChangeText(value) {
        this.setState({ text: value });
        if (typeof this.props.onChangeText !== 'undefined') {
            this.props.onChangeText(value);
        }
    }
    render() {
        return (
            <View style={[styles.container, { height: this.props.height }]}>
                <View style={styles.viewContainer}>

                    <View style={styles.paddingView} />
                    
                    <View style={[styles.fieldContainer, this.withBorder()]}>
                        {
                            this.props.placeholder !== '' &&
                            <FloatingLabel visible={this.state.text}>
                                <Text style={[styles.fieldLabel, this.labelStyle()]}>{this.placeholderValue()}</Text>
                            </FloatingLabel>
                        }
                        <TextFieldHolder multiline={this.props.multiline}
                            withValue={this.state.text}
                            floating={this.props.placeholder !== ''}
                        >
                            <TextInput {...this.props}
                                ref='input'
                                placeholderTextColor="#999"
                                underlineColorAndroid="transparent"
                                style={[styles.valueText, {
                                    height: this.props.height,
                                    textAlignVertical: this.props.textAlignVertical,
                                    color: this.props.color,
                                }]}
                                defaultValue={this.props.defaultValue}
                                value={this.state.text}
                                maxLength={this.props.maxLength}
                                numberOfLines={this.props.multiline ? this.props.numberOfLines : 1}
                                onFocus={() => this.setFocus()}
                                onBlur={() => this.unsetFocus()}
                                onChangeText={value => this._onChangeText(value)}
                                keyboardType={this.props.keyboardType}
                                secureTextEntry={this.props.secureTextEntry}
                                autoCapitalize={this.props.autoCapitalize}
                                multiline={this.props.multiline}
                                onEndEditing={() => this.props.onEndEditing()}
                            />
                        </TextFieldHolder>
                    </View>
                </View>
            </View>
        );
    }
    inputRef() {
        return this.refs.input;
    }
    focus() {
        this.inputRef().focus();
    }
    blur() {
        this.inputRef().blur();
    }
    isFocused() {
        return this.inputRef().isFocused();
    }
    clear() {
        this.inputRef().clear();
    }
    setFocus() {
        this.setState({
            focused: true
        });
        try {
            return this.props.onFocus();
        } catch (_error) { }
    }
    unsetFocus() {
        this.setState({
            focused: false
        });
        try {
            return this.props.onBlur();
        } catch (_error) { }
    }
    labelStyle() {
        if (this.state.focused) {
            return styles.focused;
        }
    }
    placeholderValue() {
        if (this.state.text) {
            return this.props.placeholder.toUpperCase();
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        justifyContent: 'center',
    },
    viewContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    paddingView: {
        width: Platform.Version < 21 ? 12 : 8,
    },
    floatingLabel: {
        position: 'absolute',
        top: 0,
        ...Platform.select({
            ios: {
                left: 8,
            },
            android: {
                left: Platform.Version < 21 ? 4 : 4,
            },
        }),
    },
    fieldLabel: {
        fontSize: ms(8),
        color: '#999',
    },
    fieldContainer: {
        flex: 1,
        justifyContent: 'center',
        position: 'relative',
    },
    withBorder: {
        borderBottomWidth: 1 / 2,
        borderColor: '#C8C7CC',
    },
    valueText: {
        // height: (Platform.OS == 'ios' ? 20 : 60),
        paddingLeft: (Platform.OS === 'ios' ? 8 : 4),
        fontSize: ms(14),
        paddingVertical: -5,
    },
    focused: {
        color: '#666',
    },
});

FloatingInput.defaultProps = {
    noBorder: true,
    keyboardType: 'default',
    secureTextEntry: false,
    autoCapitalize: 'none',
    defaultValue: '',
    height: 55,
    multiline: false,
    placeholder: '',
    numberOfLines: 3,
    color: '#000',
    textAlignVertical: 'center',
};

export default FloatingInput;
