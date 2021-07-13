import React from 'react';
import s from './Post.module.css'

export type PostType = {
  message: string
}


const Post: React.FC<PostType> = (props) => {


  return (
    <div className={s.wrapper}>
      <div className={s.avatar}>
        <img className={s.avatar_img} src="https://yt3.ggpht.com/ytc/AAUvwniWcUyONM4Tu8W_39ae7hyeTOrxPjdmjeKjyb6U=s900-c-k-c0x00ffffff-no-rj" alt="avatar" />
      </div>
      <div className={s.message_wrapper}>
        <div className="messages_message">{props.message}</div>
      </div>
    </div>
  );
};

export default Post;
