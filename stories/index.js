import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '../components/Button';
import Select from '../components/Select';
import MultiSelect from '../components/MultiSelect';
import BooleanFilter from '../components/filters/BooleanFilter';

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <button onClick={action('clicked')}><span role="img" aria-label="so cool">😀 😎 👍 💯</span></button>
  ));

storiesOf('React-select', module)
  .add('basic', () => <Select />)
  .add('basic multi select', () => <MultiSelect />)

storiesOf('Boolean filters', module)
  .add('basic', () => <BooleanFilter />)
  .add('basic multi select', () => <BooleanFilter />)