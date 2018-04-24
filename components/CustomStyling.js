import React from 'react';
import createClass from 'create-react-class';
import PropTypes from 'prop-types';
import Select from 'react-select';
import CustomColorStyles from '../styles/CustomColorStyles'

const someData = [
  { value: 'ocean', label: 'Ocean', color: '#00B8D9' },
  { value: 'blue', label: 'Blue', color: '#0052CC', disabled: true },
  { value: 'purple', label: 'Purple', color: '#5243AA' },
  { value: 'red', label: 'Red', color: '#FF5630' },
  { value: 'orange', label: 'Orange', color: '#FF8B00' },
  { value: 'yellow', label: 'Yellow', color: '#FFC400' },
  { value: 'green', label: 'Green', color: '#36B37E' },
  { value: 'forest', label: 'Forest', color: '#00875A' },
  { value: 'slate', label: 'Slate', color: '#253858' },
  { value: 'silver', label: 'Silver', color: '#666666' },
];

class CustomStyling extends React.Component {
  constructor(props){
    super(props);
  }
	state = {
      filters: [],
      filtered: [],
      value: [],
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
    // console.log(filters);
    const newData = someData.filter(data =>{
      // console.log(data);
      const passed = filters.some(filter => {
        console.log(data.value >= filter.value)
        // console.dir({
        //   filterValue: filter.value,
        //   dataValue: data.value,
        // })
        return data.value >= filter.value;
      });
      if(passed)
        return data;
    })
    console.log(newData)
    this.setState({filtered: newData});
    // console.log(this.state);
  }

	render () {
    const { value, filtered } = this.state;
    const { options, isMulti } = this.props;
    const dataToShow = filtered.length > 0  ? filtered : someData;
		return (
			<div className="section">
				<Select
          isMulti={isMulti}
          defaultValue={[someData[0], someData[1]]}
					onChange={this.handleSelectChange}
					options={someData}
					placeholder="Select colors"
          value={value}
          styles={CustomColorStyles}
        />
        <ul>{dataToShow.map(data => <li key={data.color}>{data.color} : at {data.value}</li>)}</ul>
			</div>
		);
	}
};
CustomStyling.propTypes = {
  
}
export default CustomStyling;