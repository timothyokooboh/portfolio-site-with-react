import { StyledBlogItem } from "./Blog.styled";

const BlogItem = ({ blog }) => {
    return ( 
        <StyledBlogItem>
            <a href={blog.url} target="_blank" rel="noreferrer">
                <h3>{ blog.title }</h3>
                <div>
                    <span className="date">{ blog.datePublished }</span>
                    {
                        blog.tags.map(tag => <span key={tag} className="tag"> { tag }</span>)
                    }
                </div>
                <div className="description">{ blog.description }</div>
            </a>
        </StyledBlogItem>
    );
}
 
export default BlogItem;