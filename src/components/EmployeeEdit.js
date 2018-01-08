import React, {Component} from 'react';
import Communications from 'react-native-communications';
import {connect} from 'react-redux';
import _ from 'lodash';
import {EmployeeUpdate, employeeSave, employeeDelete} from './../actions';
import EmployeeForm from './EmployeeForm';
import {Card, CardSection, Button, Confirm} from './common';

class EmployeeEdit extends Component {
    state = {
        showModal: false
    }

    componentWillMount() {
        _.each(this.props.employee, (value, prop) => {
            this
                .props
                .EmployeeUpdate({prop, value});
        })
    }

    onButtonPress() {
        const {name, phone, shift, employee} = this.props;
        this
            .props
            .employeeSave({name, phone, shift, uid: employee.uid})
    }

    onTextPress() {
        const {phone, shift} = this.props;
        Communications.text(phone, `You upcoming shift is on ${shift}`)
    }

    onAccept() {
        const {uid} = this.props.employee;
        this
            .props
            .employeeDelete({uid})
    }

    onDecline() {
        this.setState({showModal: false})
    }

    render() {
        return (
            <Card>
                <EmployeeForm/>
                <CardSection>
                    <Button
                        onPress={this
                        .onButtonPress
                        .bind(this)}>
                        Save changes
                    </Button>
                </CardSection>
                <CardSection>
                    <Button
                        onPress={this
                        .onTextPress
                        .bind(this)}>
                        Text Schedule
                    </Button>
                </CardSection>
                <CardSection>
                    <Button
                        onPress={() => this.setState({
                        showModal: !this.state.showModal
                    })}>
                        Delete Employee
                    </Button>
                </CardSection>

                <Confirm
                    visible={this.state.showModal}
                    onAccept={this
                    .onAccept
                    .bind(this)}
                    onDecline={this
                    .onDecline
                    .bind(this)}>
                    Are you sure to do this?
                </Confirm>

            </Card>

        )
    }
}

const mapStateToProps = (state) => {
    const {name, phone, shift} = state.employeeForm;
    return {name, phone, shift}
};

export default connect(mapStateToProps, {EmployeeUpdate, employeeSave, employeeDelete})(EmployeeEdit)
