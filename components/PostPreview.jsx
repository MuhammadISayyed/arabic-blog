import Link from 'next/link';

const PostPreview = (props) => {
  return (
    <div key={props.slug}>
      <Link href={`/posts/${props.slug}`}>
        <h2>{props.title}</h2>
      </Link>
      <p>نُشر في: {props.date}</p>
    </div>
  );
};

export default PostPreview;
