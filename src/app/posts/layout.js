import { Counter } from "./Counter";

export default function PostsLayout ({ children }) { 
  return(
    <div>
      <small>home &bull; posts</small>
      <h1>Este es el Layout de los Posts</h1>
      {/* <Counter /> */}
      {children}
    </div>
  )
}
