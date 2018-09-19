import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import { ms } from '../../utils';

const BaseTemplate = (props) => {
    return (
        <Text numberOfLines={props.numberOfLines}
            style={{
                fontSize: props.size,
                color: props.color,
                backgroundColor: 'transparent',
                fontFamily: props.family,
                textDecorationLine: props.underline === true ? 'underline' : 'none',
                fontStyle: props.italic === true ? 'italic' : 'normal',
                textAlign: props.textAlign,
                // lineHeight: typeof props.lineHeight !== 'undefined'
                //     ? props.lineHeight
                //     : Math.round(props.size) + 4,
            }}
        >
            {props.children}
        </Text>
    );
};
BaseTemplate.propTypes = {
    children: PropTypes.any.isRequired,
    color: PropTypes.string,
    numberOfLines: PropTypes.number,
    size: PropTypes.number,
    family: PropTypes.string,
    lineHeight: PropTypes.number,
    underline: PropTypes.bool,
    italic: PropTypes.bool,
    textAlign: PropTypes.string,
};
BaseTemplate.defaultProps = {
    color: '#000',
    numberOfLines: 0,
    size: ms(14),
    family: 'Arial',
    textAlign: 'left',
};

export const Bold = (props) => (
    <BaseTemplate {...props} family="CircularStd-Bold" />
);

export const Medium = (props) => (
    <BaseTemplate {...props} family="CircularStd-Medium" />
);

export const Book = (props) => (
    <BaseTemplate {...props} family="CircularStd-Book" />
);

export const Light = (props) => (
    <BaseTemplate {...props} family="ProximaNova-Light" />
);

export const Regular = (props) => (
    <BaseTemplate {...props} family="ProximaNova-Regular" />
);

export const Semibold = (props) => (
    <BaseTemplate {...props} family="ProximaNova-Semibold" />
);

export const Demi = (props) => (
    <BaseTemplate {...props} family="AvenirNextLTPro-Demi" />
);

export const AvenirBook = (props) => (
    <BaseTemplate {...props} family="Avenir-Book" />
);
