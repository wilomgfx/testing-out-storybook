import React from 'react';
import createClass from 'create-react-class';
import PropTypes from 'prop-types';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

// const FLAVOURS = [
// 	{ label: 'Chocolate', value: 'chocolate' },
// 	{ label: 'Vanilla', value: 'vanilla' },
// 	{ label: 'Strawberry', value: 'strawberry' },
// 	{ label: 'Caramel', value: 'caramel' },
// 	{ label: 'Cookies and Cream', value: 'cookiescream' },
// 	{ label: 'Peppermint', value: 'peppermint' },
// ];

// const WHY_WOULD_YOU = [
// 	{ label: 'Chocolate (are you crazy?)', value: 'chocolate', disabled: true },
// ].concat(FLAVOURS.slice(1));

class CustomSelect extends React.Component {
  constructor(props){
    super(props);
  }
	state = {
			removeSelected: true,
			disabled: false,
			crazy: false,
			stayOpen: false,
      filters: [],
      value: [],
      someData: [
        { name: 'Potato street', value: 1000},
        { name: 'Sweet baby jesus street', value: 1200},
        { name: 'Popo street', value: 1900},
        { name: 'Pickle street', value: 2000},
        { name: 'Bus street', value: 2100},
        { name: 'Sad street', value: 2500},
        { name: 'Happy street', value: 2400},
        { name: 'Jane Doe street', value: 3100},
        { name: 'John Doe street', value: 3999},
        { name: 'Beverly hils', value: 4000},
      ]
  }
  
	handleSelectChange = (value) => {
    console.log('You\'ve selected:', value);
    this.setState({ filters: [...value] });
    this.setState({ value });
    this.filterByOptions();
  }
  
	toggleCheckbox = (e) => {
		this.setState({
			[e.target.name]: e.target.checked,
		});
  }

  filterByOptions = (value) => {
    const filters = this.state.filters;
    console.log(filters);
    const newData = this.state.someData.map(data =>{
      const passed = filters.some(filter => data.value >= filter.value);
      if(passed)
        return data;
    })
    this.setState({someData: newData});
    console.log(this.state);
  }

	render () {
    const { crazy, disabled, stayOpen, value } = this.state;
    const { options, simple, multi } = this.props;
    
		return (
			<div className="section">
				<Select
					closeOnSelect={!stayOpen}
					disabled={disabled}
					multi={multi}
					onChange={this.handleSelectChange}
					options={options}
					placeholder="Select your favourite(s)"
          removeSelected={this.state.removeSelected}
					value={value}
        />
        <ul>{this.state.someData.map(data => <li key={data.name}>{data.name} : at {data.value}</li>)}</ul>
			</div>
		);
	}
};
CustomSelect.propTypes = {
  
}
export default CustomSelect;