import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';
import { PostsType } from '../../../redux/state';

export type MyPostsType = {
  posts: Array<PostsType>;
  newPostText: string;
};

const MyPosts: React.FC<MyPostsType> = (props) => {
  const postsElements = props.posts.map((posts) => <Post message={posts.message} key={posts.id} />);

  // const newPostElement = (e) => {
  //   props.updateNewPostText(e.curre)
  // };

  // при вводе данных отправляет данные в state
  // const onPostChange = () => {
  //   if (newPostElement.current) {
  //     let text = newPostElement.current.value;
  //     props.updateNewPostText(text);
  //   }
  // };

  const onAddPost = () => {
    alert("dwd")
  };

  return (
    <div className={s.posts}>
      <div className={s.post}>My posts</div>
      <div className={s.new_post}>
        <textarea
          className={s.new_post_textarea}
          // onChange={onPostChange}
          value={props.newPostText}
          placeholder="your news..."
        />
      </div>
      <div className={s.posts_btn}>
        <button className={s.btn_button}
                onClick={onAddPost}>
          Send
        </button>
      </div>
      {postsElements}
    </div>
  );
};

export default MyPosts;
