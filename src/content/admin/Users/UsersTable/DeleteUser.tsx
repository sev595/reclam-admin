import { Box, IconButton } from '@mui/material';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import { useState } from 'react';
import DeleteModal from 'src/modals/DeleteModal';
import { deleteUserEffect } from 'src/store/effects/user/user.effect';
import { useDispatch } from 'react-redux';

interface DeleteUserProps {
  theme: any;
  id: string;
}
const DeleteUser = ({ theme, id }: DeleteUserProps) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const deleteUserHandler = () => {
    dispatch(deleteUserEffect(id));
  };

  return (
    <Box>
      <IconButton
        sx={{
          '&:hover': { background: theme.colors.error.lighter },
          color: theme.palette.error.main
        }}
        color="inherit"
        size="small"
        onClick={() => {
          setOpen(true);
        }}
      >
        <DeleteTwoToneIcon fontSize="small" />
      </IconButton>
      <DeleteModal
        isOpenPopup={open}
        setIsOpenPopup={setOpen}
        calback={deleteUserHandler}
      />
    </Box>
  );
};
export default DeleteUser;
