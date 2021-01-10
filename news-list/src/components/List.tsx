import { IPost } from '../interfaces'
import './List.scss'
import { useRef, useEffect, useState } from 'react'

type ListProps = {
    posts: IPost[],
    onRemove: (id: number) => void
}

const List: React.FC<ListProps> = ({ posts, onRemove }) => {

    const ref = useRef<HTMLInputElement>(null)

    const [isEdit, setIsEdit] = useState<Boolean>(false)

    useEffect(()=> {
        console.log(posts)
    }, [isEdit])

    // if (posts.length === 0) {
    //    return <p className="center">No news!!!</p>
    // }

    
    return (
        <ul>
            {posts.map(post => {
                return(
                <li className="post" key={post.id}>
                    <label>
                        <span ref={ref}>{post.title}</span>
                        <div className="icons-wrapper">
                            <i className="material-icons red-text" onClick={() => {
                                const newContent: any = prompt('New value', post.title);
                                post.title = newContent
                                ref.current!.value = newContent
                                setIsEdit(!isEdit)
                            }}>edit</i>
                            <i className="material-icons red-text" onClick={() => onRemove(post.id)}>delete</i>
                        </div>
                    </label>
                </li>
                )
            })}
        </ul>
    )
}

export default List;