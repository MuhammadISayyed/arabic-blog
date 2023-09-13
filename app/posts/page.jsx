import PostPreview from '@/components/PostPreview';
import getPostMetadata from '@/utils/getPostMetaData';

const BlogPage = () => {
  const getPostMetaData = getPostMetadata();
  const postPreviews = getPostMetaData.map((post) => <PostPreview key={post.slug} {...post} />);

  return <div>{postPreviews}</div>;
};

export default BlogPage;
