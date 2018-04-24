import React, { Component } from 'react'
import CustomSelect from '../CustomSelect'
export default class BooleanFilter extends Component {
  render() {
    const { isMulti } = this.props;
    return (
      <React.Fragment>
          <CustomSelect options={[
            { label: '>= 1000', value: 1000 },
            { label: '>= 2000', value: 2000 },
            { label: '>= 3000', value: 3000 },
          ]}
          isMulti={isMulti}
        />
      </React.Fragment>
    )
  }
}
