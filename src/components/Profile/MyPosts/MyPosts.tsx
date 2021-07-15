import React, { ChangeEvent } from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';
import { ActionType, addPostActionCreator, onPostChangeTextActionCreator, PostsType } from '../../../redux/store';

export type MyPostsType = {
  posts: Array<PostsType>;
  newPostText: string;
  dispatch: (action: ActionType) => void
};



const MyPosts: React.FC<MyPostsType> = (props) => {
  const postsElements = props.posts.map((posts) => <Post message={posts.message} key={posts.id} />);


  const addPost = () => {
    let text = props.newPostText
    props.dispatch( addPostActionCreator(text))
    props.dispatch( onPostChangeTextActionCreator("") )
  };


  const onPostChangeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let text = e.currentTarget.value
    let action = onPostChangeTextActionCreator(text)
    props.dispatch(action)
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
