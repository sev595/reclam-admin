import { MenuItem, TextField } from '@mui/material';
import { useEffect, useState } from 'react';

interface OrderTypeSelectionProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const OrderTypeSelection = ({
  handleChange,
  value
}: OrderTypeSelectionProps) => {
  const options = [
    {
      value: 'CREATED',
      label: 'Created'
    },
    {
      value: 'PROGRESS',
      label: 'Progress'
    },
    {
      value: 'DONE',
      label: 'Done'
    },
    {
      value: 'CANCEL',
      label: 'Cancel'
    }
  ];

  return (
    <TextField
      id="status"
      select
      label="Status"
      value={value}
      onChange={handleChange}
      SelectProps={{
        native: true
      }}
      variant="filled"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </TextField>
  );
};
export default OrderTypeSelection;
