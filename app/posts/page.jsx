import PostPreview from '@/components/PostPreview';

const BlogPage = () => {
  const postPreview = PostPreview();
  return <div>{postPreview}</div>;
};

export default BlogPage;
