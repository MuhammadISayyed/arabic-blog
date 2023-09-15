import PostPreview from '@/components/PostPreview';
import getPostMetadata from '@/utils/getPostMetaData';

const BlogPage = () => {
  const getPostMetaData = getPostMetadata();
  const postPreviews = getPostMetaData.map((post) => <PostPreview key={post.slug} {...post} />);

  return (
    <div className="max-sm:m-9 flex flex-col justify-start gap-4 text-3xl max-w-lg m-32">
      {postPreviews}
    </div>
  );
};

export default BlogPage;
