import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Select from '../components/Select';
import MultiSelect from '../components/MultiSelect';
import BooleanFilter from '../components/filters/BooleanFilter';
import CustomStyling from '../components/CustomStyling';

storiesOf('React-select', module)
  .add('basic', () => <Select />)
  .add('basic multi select', () => <MultiSelect />)

storiesOf('Boolean filters', module)
  .add('basic', () => <BooleanFilter />)
  .add('basic multi select', () => <BooleanFilter isMulti />)
  .add('Custom styling', () => (
    <React.Fragment>
          <CustomStyling options={[
            { label: '>= 1000', value: 1000 },
            { label: '>= 2000', value: 2000 },
            { label: '>= 3000', value: 3000 },
          ]}
          isMulti
        />
      </React.Fragment>
  ))