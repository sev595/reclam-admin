import { Box, IconButton } from '@mui/material';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import { useState } from 'react';
import DeleteModal from 'src/modals/DeleteModal';
import { useDispatch } from 'react-redux';
import { deletePostEffect } from 'src/store/effects/post/post.effect';

interface DeletePostProps {
  theme: any;
  id: string;
}
const DeletePost = ({ theme, id }: DeletePostProps) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const deletePostHandler = () => {
    dispatch(deletePostEffect(id));
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
        calback={deletePostHandler}
      />
    </Box>
  );
};
export default DeletePost;
