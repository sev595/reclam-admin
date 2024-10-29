import { Helmet } from 'react-helmet-async';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Grid, Container } from '@mui/material';
import PostConteiner from './PostContainer';
import PostsPageHeader from './PostsPageHeader';

function Psots() {
  return (
    <>
      <Helmet>
        <title>Posts</title>
      </Helmet>
      <PageTitleWrapper>
        <PostsPageHeader />
      </PageTitleWrapper>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12}>
            <PostConteiner />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Psots;
