import React, { Component } from 'react'
import Select from '../CustomSelect'
export default class BooleanFilter extends Component {
  render() {
    const { multi } = this.props;
    return (
      <React.Fragment>
          <Select options={[
            { label: '>= 1000', value: 1000 },
            { label: '>= 2000', value: 2000 },
            { label: '>= 3000', value: 3000 },
          ]}
          multi={multi}
        />
      </React.Fragment>
    )
  }
}
