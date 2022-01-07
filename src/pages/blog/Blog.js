import { StyledBlog } from "./Blog.styled";
import useBlogDetails from "../../hooks/useBlogDetails";
import BlogItem from "./BlogItem";

const Blog = () => {
    const blogs = useBlogDetails()
    return ( 
        <StyledBlog>
            <h1>Blog</h1>
            {
                blogs.map(blog => <BlogItem key={blog.id} blog={blog}></BlogItem>)
            }
        </StyledBlog>
    );
}
 
export default Blog;