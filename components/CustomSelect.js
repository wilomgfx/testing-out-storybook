import React from 'react';
import createClass from 'create-react-class';
import PropTypes from 'prop-types';
import Select from 'react-select';

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
      filters: [],
      filtered: [],
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
    const filters = [...value];
    this.setState({ filters });
    this.setState({ value });
    this.filterByOptions(filters);
  }
  
	toggleCheckbox = (e) => {
		this.setState({
			[e.target.name]: e.target.checked,
		});
  }

  filterByOptions = (filters) => {
    const newData = this.state.someData.filter(data =>{
      const passed = filters.some(filter => data.value >= filter.value);
      if(passed)
        return data;
    });
    this.setState({filtered: newData});
    // console.log(this.state);
  }

	render () {
    const { value, someData, filtered } = this.state;
    const { options, isMulti } = this.props;
    const dataToShow = filtered.length > 0  ? filtered : someData;
		return (
			<div className="section">
				<Select
					isMulti={isMulti}
					onChange={this.handleSelectChange}
					options={options}
					placeholder="Select your favourite(s)"
					value={value}
        />
        <ul>{dataToShow.map(data => <li key={data.name}>{data.name} : at {data.value}</li>)}</ul>
			</div>
		);
	}
};
CustomSelect.propTypes = {
  
}
export default CustomSelect;