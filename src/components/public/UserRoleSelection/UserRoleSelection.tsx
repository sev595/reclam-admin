import { MenuItem, TextField } from '@mui/material';
import { useEffect, useState } from 'react';

interface OrderTypeSelectionProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const UserRoleSelection = ({
  handleChange,
  value
}: OrderTypeSelectionProps) => {
  const options = [
    {
      value: 'user',
      label: 'User'
    },
    {
      value: 'admin',
      label: 'Admin'
    }
  ];

  return (
    <TextField
      id="role"
      select
      label="Role"
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
export default UserRoleSelection;
