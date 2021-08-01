import React, { ChangeEvent } from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';
import { PostsType } from '../../../redux/redux-store';

type MyPostsType = {
  posts: Array<PostsType>;
  newPostText: string;
  updateNewPostText: (text: string) => void
  addPost: (text: string) => void
};



const MyPosts: React.FC<MyPostsType> = (props) => {
  const postsElements = props.posts.map((posts) => <Post message={posts.message} key={posts.id} />);


  const onAddPost = () => {
    let text = props.newPostText
    props.addPost(text)
  };


  const onPostChangeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let text = e.currentTarget.value
    props.updateNewPostText(text)
    console.log("render");
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
                onClick={onAddPost}
                >
          Send
        </button>
      </div>
      {postsElements}
    </div>
  );
};

export default MyPosts;
