import './AddPostComponent.scss'

import {useRef, useState} from 'react'

interface AddPostComponentProps {
    onAdd(title: string): void
    onSearchChange : Function
    posts: Array<any>
}

const AddPostComponent: React.FC<AddPostComponentProps> = (props) => {
    const ref = useRef<HTMLInputElement>(null)

    const [term, setTerm] = useState('')
    
    const search = useRef<HTMLInputElement>(null)

    //const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    //    setTitle(event.target.value)
    //}

    const keyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            props.onAdd(ref.current!.value)
            ref.current!.value = ''
        }
    }

    const filterPressHandler = (event: any) => {
        const term = event.target.value
        setTerm( term );
        props.onSearchChange(term)
    }

    return (
        <div className="addPostContainer">
            <div className="input-field col">
                <input ref={ref} id="addText" type="text" onKeyPress={keyPressHandler}/>
                <label className="active" htmlFor="addText">Type new post</label>
            </div>
            <div className="input-field col">
                <input  ref={search} id="filterText" type="text" onChange={filterPressHandler} value={term}/>
                <label className="active" htmlFor="filterText">Filter posts</label>
            </div>
        </div>
    )
}

export default AddPostComponent;