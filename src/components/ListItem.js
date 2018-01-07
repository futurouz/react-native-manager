import React, {Component} from 'react';
import {Text, View, TouchableWithoutFeedback, TouchableNativeFeedback} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {CardSection} from './common';

class ListItem extends Component {
    onTouch() {
        Actions.employeeEdit({employee: this.props.employee})
    }

    render() {
        const {name} = this.props.employee;

        return (
            <TouchableNativeFeedback
                onPress={this
                .onTouch
                .bind(this)}>
                <View>
                    <CardSection>
                        <Text style={styles.textStyle}>
                            {name}
                        </Text>
                    </CardSection>
                </View>
            </TouchableNativeFeedback>
        )
    }
};

const styles = {
    textStyle: {
        paddingLeft: 15,
        fontSize: 18
    }
}

export default ListItem;