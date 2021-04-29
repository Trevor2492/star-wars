import React from 'react';
import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function NativeSelects({ getQuery }) {
  const classes = useStyles();

  const [category, setCategory] = useState('');

  const handleChange = (q) => {
    setCategory(q);
    getQuery(q);
  };

  return (
    <div>
      <InputLabel className='label' htmlFor="age-native-simple">Category</InputLabel>        
      <FormControl className={classes.formControl}>
        <Select
          native
          value={category}
          onChange={e => handleChange(e.target.value)}
        >
          <option aria-label="None" value="" />
          <option value={'films'}>Films</option>
          <option value={'people'}>People</option>
          <option value={'planets'}>Planets</option>
        </Select>
      </FormControl>
    </div>
  );
}
