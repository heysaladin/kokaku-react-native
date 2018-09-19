import React, { PureComponent } from 'react';
import { View, ViewPagerAndroid, ScrollView, Platform, Dimensions } from 'react-native';
import PropTypes from 'prop-types';

class ViewPager extends PureComponent {
    constructor(props) {
        super(props);

        this._handleHorizontalScroll = this._handleHorizontalScroll.bind(this);

        const { width, height } = Dimensions.get('window');
        this.state = {
            screen: { width, height },
            initialSelectedIndex: this.props.selectedIndex,
            selectedIndex: this.props.selectedIndex,
            scrollingTo: null,
        };
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.selectedIndex !== this.state.selectedIndex) {
            if (Platform.OS === 'ios') {
                this.scrollview.scrollTo({
                    x: nextProps.selectedIndex * this.state.screen.width,
                    animated: true,
                });
                this.setState({ scrollingTo: nextProps.selectedIndex });
            } else {
                this.scrollview.setPage(nextProps.selectedIndex);
                this.setState({ selectedIndex: nextProps.selectedIndex });
            }
        }
    }
    _handleHorizontalScroll(e) {
        let selectedIndex = e.nativeEvent.position;
        if (typeof selectedIndex === 'undefined') {
            selectedIndex = Math.round(e.nativeEvent.contentOffset.x / this.state.screen.width);
        }
        if (selectedIndex < 0 || selectedIndex >= this.props.count) {
            return;
        }
        if (this.state.scrollingTo !== null && this.state.scrollingTo !== selectedIndex) {
            return;
        }
        if (this.props.selectedIndex !== selectedIndex) {
            this.setState({ selectedIndex });
            this.props.onSelectedIndexChange(selectedIndex);
        }
    }
    renderContent() {
        return this.props.children.map((child, index) => {
            return (
                <View key={index} style={{ flex: 1 }}>
                    {child}
                </View>
            );
        });
    }
    render() {
        if (Platform.OS === 'ios') {
            return (
                <ScrollView
                    ref={scrollview => { this.scrollview = scrollview; }}
                    horizontal={true}
                    pagingEnabled={true}
                    onScroll={this._handleHorizontalScroll}
                    scrollEventThrottle={100}
                    removeClippedSubviews={true}
                    showsHorizontalScrollIndicator={false}
                >
                    {this.renderContent()}
                </ScrollView>
            );
        }

        return (
            <ViewPagerAndroid
                ref={scrollview => { this.scrollview = scrollview; }}
                initialPage={this.state.initialSelectedIndex}
                onPageSelected={this._handleHorizontalScroll}
                style={{ flex: 1 }}
            >
                {this.renderContent()}
            </ViewPagerAndroid>
        );
    }
}

ViewPager.propTypes = {
    children: PropTypes.array.isRequired,
    selectedIndex: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
    onSelectedIndexChange: PropTypes.func.isRequired,
};

export default ViewPager;
