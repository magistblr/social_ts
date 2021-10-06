import React, { ChangeEvent } from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';
import { MyPostsPropsType } from './MyPostsContainer';




const MyPosts: React.FC<MyPostsPropsType> = (props) => {
  const postsElements = props.profilePage.posts.map((posts) => <Post message={posts.message} key={posts.id} />);

  let text = props.profilePage.newPostText

  const onAddPost = () => {
    props.addPost(text)
  };


  const onPostChangeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let text = e.currentTarget.value
    props.onPostChangeText(text)
  }


  return (
    <div className={s.posts}>
      <div className={s.new_post}>
        <textarea
          className={s.new_post_textarea}
          onChange={onPostChangeText}
          value={text}
          placeholder="What is the news?"
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
