import getPostMetadata from '@/utils/getPostMetaData';
import Link from 'next/link';

const PostPreview = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <div key={post.slug}>
      <Link href={`/posts/${post.slug}`}>
        <h2>{post.title}</h2>
      </Link>
      <p>Created At:{post.date}</p>
    </div>
  ));
  return <div>{postPreviews}</div>;
};

export default PostPreview;
