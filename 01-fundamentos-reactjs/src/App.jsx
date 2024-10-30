import { Header } from "./components/Header";
import { Post } from "./Post";

import "./global.css";
export function App() {
  return (
    <div>
      <Header />
      <Post
        author="Kamila Santos"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate saepe earum similique in nemo cumque accusantium hic. Magni aliquam ipsum voluptatibus temporibus quam dicta dolor quasi et, expedita eos voluptatum!"
      />
      <Post
        author="teste"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate saepe earum similique in nemo cumque accusantium hic. Magni aliquam ipsum voluptatibus temporibus quam dicta dolor quasi et, expedita eos voluptatum!"
      />
      <Post />
      <Post />
      <Post />
    </div>
  );
}
