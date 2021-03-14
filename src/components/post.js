import React from "react"
import * as styles from "./post.module.css"

const Post = props => (
    <div className={StyleSheet.post}> 
        <img src={props.avatar} className={styles.avatar} alt="" />
        <div className={styles.description}>
            <h2 className={styles.title}>{props.title}</h2>
            <p className={styles.excerpt}>{props.excerpt}</p>
        </div>
    </div>
)

export default Post