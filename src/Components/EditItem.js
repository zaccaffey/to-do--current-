const EditItem = () => {
    const [editTitle, setEditTitle] = useState('')
    const [editDescription, setEditDescription] = useState('')
    
    function handleEditTitle(event) {
        setEditTitle(event.target.value)
    }

    function handleEditDescription(event) {
        setEditDescription(event.target.value)
    }
}

export default EditItem