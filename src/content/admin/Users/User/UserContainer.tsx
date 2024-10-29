import {
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography
} from '@mui/material';
import { Helmet } from 'react-helmet-async';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { UserType } from 'src/store/types/user/user';
import UserPageTitle from './UserPageTitle';

type UserProps = {
  user: UserType;
};

const UserContainer: React.FC<UserProps> = ({ user }) => {
  return (
    <>
      <Helmet>
        <title>User Details</title>
      </Helmet>
      <PageTitleWrapper>
        <UserPageTitle
          heading="User Details"
          subHeading="View details of the selected user"
          docs=""
          userId={user?.id}
        />
      </PageTitleWrapper>
      <Box sx={{ flexGrow: 1, bgcolor: 'background.paper', py: 4, ml: 5 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Divider />
                <Typography variant="body1" color="text.secondary" paragraph>
                  <strong>Email:</strong> {user?.email || '-'}
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                  <strong>First Name:</strong> {user?.firstName || '-'}
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                  <strong>Last Name:</strong> {user?.lastName || '-'}
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                  <strong>Phone Number:</strong> {user?.phoneNumber || '-'}
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                  <strong>Eamil:</strong> {user?.email || '-'}
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                  <strong>Role:</strong> {user?.role || '-'}
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                  <strong>address:</strong> {user?.address || '-'}
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                  <strong>Email Verified:</strong>
                  <strong
                    style={{
                      color: user?.emailVerified ? 'green' : 'red'
                    }}
                  >
                    {user?.emailVerified ? ' Verified' : ' Not verified'}
                  </strong>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default UserContainer;
