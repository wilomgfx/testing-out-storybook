import React from 'react';
import createClass from 'create-react-class';
import PropTypes from 'prop-types';
import Select from 'react-select';
// import 'react-select/dist/react-select.css';

const FLAVOURS = [
	{ label: 'Chocolate', value: 'chocolate' },
	{ label: 'Vanilla', value: 'vanilla' },
	{ label: 'Strawberry', value: 'strawberry' },
	{ label: 'Caramel', value: 'caramel' },
	{ label: 'Cookies and Cream', value: 'cookiescream' },
	{ label: 'Peppermint', value: 'peppermint' },
];

const WHY_WOULD_YOU = [
	{ label: 'Chocolate (are you crazy?)', value: 'chocolate', disabled: true },
].concat(FLAVOURS.slice(1));

class Multiselect extends React.Component {
  constructor(props){
    super(props);
  }
	state = {
			removeSelected: true,
			disabled: false,
			crazy: false,
			stayOpen: false,
			value: [],
			rtl: false,
  }
  
	handleSelectChange = (value) => {
    console.log('You\'ve selected:', value);
    this.setState({ value });
    // console.log(this.state.value)
  }
  
	toggleCheckbox = (e) => {
		this.setState({
			[e.target.name]: e.target.checked,
		});
  }
  
	toggleRtl = (e) => {
		let rtl = e.target.checked;
		this.setState({ rtl });
	}

	render () {
    const { crazy, disabled, stayOpen, value } = this.state;
    const { values } = this.props;
		const options = crazy ? WHY_WOULD_YOU : FLAVOURS;
		return (
			<div className="section">
				<Select
          closeMenuOnSelect={!stayOpen}
					isDisabled={disabled}
					isMulti
					onChange={this.handleSelectChange}
					options={options}
					placeholder="Select your favourite(s)"
          hideSelectedOptions={this.state.removeSelected}
					isRtl={this.state.rtl}
					value={value}
				/>

				<div className="checkbox-list">
					<label className="checkbox">
						<input type="checkbox" className="checkbox-control" name="removeSelected" checked={this.state.removeSelected} onChange={this.toggleCheckbox} />
						<span className="checkbox-label">Remove selected options</span>
					</label>
					<label className="checkbox">
						<input type="checkbox" className="checkbox-control" name="disabled" checked={this.state.disabled} onChange={this.toggleCheckbox} />
						<span className="checkbox-label">Disable the control</span>
					</label>
					<label className="checkbox">
						<input type="checkbox" className="checkbox-control" name="crazy" checked={crazy} onChange={this.toggleCheckbox} />
						<span className="checkbox-label">I don't like Chocolate (disabled the option)</span>
					</label>
					<label className="checkbox">
						<input type="checkbox" className="checkbox-control" name="stayOpen" checked={stayOpen} onChange={this.toggleCheckbox}/>
						<span className="checkbox-label">Stay open when an Option is selected</span>
					</label>
					<label className="checkbox">
						<input type="checkbox" className="checkbox-control" name="rtl" checked={this.state.rtl} onChange={this.toggleCheckbox} />
						<span className="checkbox-label">rtl</span>
					</label>
				</div>
			</div>
		);
	}
};

export default Multiselect;