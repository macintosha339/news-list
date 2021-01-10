import Header from './components/Header';
import AddPostComponent from './components/AddPostComponent'
import List from './components/List'
import { useState } from 'react'
import { IPost } from './interfaces'

const App: React.FC = () => {
  const [posts, setPosts] = useState<IPost[]>([])
  const [term, setTerm] = useState('')

  const addHandler = (title: string) => {
    const newPost: IPost = {
      title: title,
      id: Date.now()
    }
    setPosts(prev => [newPost, ...prev])
  }

  const removeHandler = (id: number) => {
    const shouldRemove = window.confirm('You are sure in deleting this post?')
    if (shouldRemove) setPosts(prev => prev.filter(post => post.id !== id))
  }

 

  const search = (items: any, term: any) => {
    if (term.length === 0) {
      return items
    }

    console.log(items)

    return items.filter((item: any) => {
      return item.title.indexOf(term.title) > -1
    })
  }

  const onSearchChange = (term: any) => {
    setTerm(term)
  }

  const visibleItems = search(posts, term)



  return (
    <div className="App">
      <Header />
      <AddPostComponent onAdd={addHandler} onSearchChange={onSearchChange} posts={posts}  />
      <List posts={visibleItems} onRemove={removeHandler}/>
    </div>
  );
}

export default App;
