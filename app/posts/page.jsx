import fs from 'fs';
import Link from 'next/link';
import matter from 'gray-matter';

const getPostMetadata = () => {
  const folder = 'posts/';
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith('.md'));

  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`posts/${fileName}`, 'utf8');
    const matterResults = matter(fileContents);
    return {
      title: matterResults.data.title,
      date: matterResults.data.date,
      slug: fileName.replace('.md', ''),
    };
  });

  return posts;
};

const BlogPage = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <div key={post.slug}>
      <Link href={`/posts/${post.slug}`}>
        <h2>{post.slug}</h2>
      </Link>
    </div>
  ));
  return <div>{postPreviews}</div>;
};

export default BlogPage;
