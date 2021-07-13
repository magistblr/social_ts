import React, { ChangeEvent } from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';
import { PostsType } from '../../../redux/state';

export type MyPostsType = {
  posts: Array<PostsType>;
  newPostText: string;
  addPostCallBack: (postText: string) => void
  onPostChange: (newText: string) => void
};

const MyPosts: React.FC<MyPostsType> = (props) => {
  const postsElements = props.posts.map((posts) => <Post message={posts.message} key={posts.id} />);



  const addPost = () => {
    props.addPostCallBack(props.newPostText)
  };


  const onPostChangeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.onPostChange(e.currentTarget.value)
  }


  return (
    <div className={s.posts}>
      <div className={s.post}>My posts</div>
      <div className={s.new_post}>
        <textarea
          className={s.new_post_textarea}
          onChange={onPostChangeText}
          value={props.newPostText}
          placeholder="your news..."
        />
      </div>
      <div className={s.posts_btn}>
        <button className={s.btn_button}
                onClick={addPost}
                >
          Send
        </button>
      </div>
      {postsElements}
    </div>
  );
};

export default MyPosts;
