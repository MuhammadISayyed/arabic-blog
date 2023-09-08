import matter from 'gray-matter';
import fs from 'fs';

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

export default getPostMetadata;
