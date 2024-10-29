import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { Button, Container, Grid } from '@mui/material';

interface DeleteModalProps {
  isOpenPopup: boolean;
  setIsOpenPopup: (item: boolean) => void;
  calback: () => void;
}
function DeleteModal({
  isOpenPopup,
  setIsOpenPopup,
  calback
}: DeleteModalProps) {
  return (
    <Container maxWidth="lg">
      <Grid item xs={12}>
        <Dialog
          onClose={() => {
            setIsOpenPopup(false);
          }}
          open={isOpenPopup}
        >
          <DialogTitle>Do you want to delete?</DialogTitle>
          <Button
            onClick={() => {
              setIsOpenPopup(false);
            }}
          >
            No
          </Button>
          <Button onClick={calback}>Yes</Button>
        </Dialog>
      </Grid>
    </Container>
  );
}

export default DeleteModal;
