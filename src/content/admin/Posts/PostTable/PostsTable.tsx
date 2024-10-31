import { FC, ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Divider,
  Box,
  FormControl,
  InputLabel,
  Card,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TableContainer,
  Checkbox,
  useTheme,
  CardHeader,
  TextField,
} from "@mui/material";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import { PostType } from "src/store/types/post/post";
import DeletePost from "./DeletePost";

interface PostsTableProps {
  className?: string;
  posts: PostType[];
}

const PostsTable: FC<PostsTableProps> = ({ posts }) => {
  const [selectedPosts, setSelectedPosts] = useState<string[]>([]);
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const navigate = useNavigate();
  const theme = useTheme();

  const handleChangePage = (asd: any, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const filteredPosts = posts.filter((post) =>
    `${post.description} ${post.title}`
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  return (
    <Card>
      <CardHeader
        action={
          <FormControl fullWidth variant="outlined">
            <InputLabel>Status</InputLabel>
          </FormControl>
        }
        title="Recent Posts"
      />
      <Divider />
      <Box sx={{ padding: "0 16px" }}>
        <FormControl fullWidth variant="outlined">
          <TextField
            label="Search"
            variant="outlined"
            fullWidth
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setPage(0);
            }}
          />
        </FormControl>
      </Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Description </TableCell>
              <TableCell>Post Format </TableCell>
              <TableCell>Slide Post </TableCell>
              <TableCell>Date </TableCell>
              <TableCell>Slug </TableCell>
              <TableCell>featured </TableCell>
 
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredPosts
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((post) => (
                <TableRow hover key={post.id} style={{ cursor: "pointer" }}>
                  <TableCell
                    onClick={() => navigate(`/admin/posts/${post.id}`)}
                    sx={{
                      "&:hover": { background: theme.colors.primary.lighter },
                    }}
                  >
                    {post.title}
                  </TableCell>
                  <TableCell>{post.description}</TableCell>
                  <TableCell>{post.postFormat}</TableCell>
                  <TableCell>{post.slidePost}</TableCell>
                  <TableCell>{post.date}</TableCell>
                  <TableCell>{post.slug}</TableCell>
                  <TableCell>{post.featureImg}</TableCell>
                  
                  <TableCell>
                    <Box>
                      <IconButton
                        sx={{
                          "&:hover": {
                            background: theme.colors.primary.lighter,
                          },
                          color: theme.palette.primary.main,
                        }}
                        color="inherit"
                        size="small"
                        onClick={() => {
                          navigate(`/admin/posts/${post.id}/edit`);
                        }}
                      >
                        <EditTwoToneIcon fontSize="small" />
                      </IconButton>
                    </Box>
                    {post.id && <DeletePost theme={theme} id={post.id} />}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={filteredPosts.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[5, 10, 25, 30]}
      />
    </Card>
  );
};

export default PostsTable;
