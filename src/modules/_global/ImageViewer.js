import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import PhotoView from 'react-native-photo-view';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { styles as s } from 'react-native-style-tachyons';
import { UniButton } from '../_global';

class ImageViewer extends PureComponent {
    static navigatorStyle = {
        navBarHidden: true,
    };
    constructor(props) {
        super(props);
        this._dismiss = this._dismiss.bind(this);
        this.state = {

        };
    }
    _dismiss() {
        this.props.navigator.dismissModal();
    }
    render() {
        return (
            <View style={[s.flx_i, { backgroundColor: '#000' }]}>
                <PhotoView
                    source={{ uri: this.props.source }}
                    minimumZoomScale={1}
                    maximumZoomScale={2}
                    androidScaleType="center"
                    style={s.flx_i}
                />

                <View style={{ position: 'absolute', top: 16, left: 16, width: 50, height: 50, borderRadius: 50 }}>
                    <UniButton action={this._dismiss} borderRadius={50} borderless={true}>
                        <View style={[s.jcc, s.aic, { width: 50, height: 50, borderRadius: 50 }]}>
                            <IonIcon name="md-close" size={30} color="#fff"/>
                        </View>
                    </UniButton>
                </View>
            </View>
        );
    }
}

ImageViewer.propTypes = {
    source: PropTypes.any.isRequired,
    navigator: PropTypes.object.isRequired,
};

export default ImageViewer;
