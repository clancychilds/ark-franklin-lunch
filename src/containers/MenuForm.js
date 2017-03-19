import React, {
  Component,
  PropTypes
} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Select from 'react-select';
// Be sure to include styles at some point, probably during your bootstrapping
import 'react-select/dist/react-select.css';
import {pickDay, pickWeek} from '../actions/';

const weekOptions = [
    { value: '1', label: 'Week 1' },
    { value: '2', label: 'Week 2' },
    { value: '3', label: 'Week 3'}
];

const dayOptions = [
    { value: 'mo', label: 'Monday' },
    { value: 'tu', label: 'Tuesday' },
    { value: 'we', label: 'Wednesday' },
    { value: 'th', label: 'Thursday' },
    { value: 'fr', label: 'Friday' }
];

class MenuForm extends Component {
  render() {
    const { actions, day, week } = this.props;
    return <div>
    <Select clearable={ false } options={weekOptions} value={week} onChange={actions.pickWeek} placeholder="Select the week" />
    <Select clearable={ false } options={dayOptions} value={day} onChange={actions.pickDay} placeholder="Select the day" />
    </div>;
  }
}

MenuForm.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  const props = {week: state.lunchDate.week,
                 day: state.lunchDate.day};
  return props;
}

function mapDispatchToProps(dispatch) {
  const actions = {pickWeek, pickDay};
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuForm);
