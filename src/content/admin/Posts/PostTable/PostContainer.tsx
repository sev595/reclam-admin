import { useEffect } from 'react';
import { Card } from '@mui/material';
import RecentOrdersTable from './PostsTable';
import { subDays } from 'date-fns';
import { useDispatch } from 'react-redux';
import { AppDispatch, RootState, useAppSelector } from 'src/store';
import { getAllPostsEffect } from 'src/store/effects/post/post.effect';

function PostConteiner() {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPostsEffect());
  }, []);

  const { postList } = useAppSelector((state: RootState) => state.post);

  return (
    <Card>
      <RecentOrdersTable posts={postList} />
    </Card>
  );
}

export default PostConteiner;
