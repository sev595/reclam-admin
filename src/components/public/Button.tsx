import Button from '@mui/material/Button';
import LoadingButton from '@mui/lab/LoadingButton';

interface IButton {
    text: string
    type?: string
    fullWidth?: any
    variant?: string
}

export const PublicButton: React.FC<IButton> = (props) => {

    return (
        <Button
            type="submit"
            variant="contained"
            sx={{ mt: 1, mb: 1 }}
        >
            {props.text}
        </Button>
    )
}

interface IPublicLoadingButton {
    styles?: any
}
export const PublicLoadingButton: React.FC<IPublicLoadingButton> = ({ styles }) => {

    return (
        <LoadingButton
            loading={true}
            type="submit"
            fullWidth
            variant="contained"
            sx={{ ...styles }}
        >
            Loading
        </LoadingButton>
    )
}