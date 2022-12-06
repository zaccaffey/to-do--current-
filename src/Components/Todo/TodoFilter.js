import './TodoFilter.css';

const TodoFilter = (props) => {

    const handleSelectedFilter = (event) => {
        let index = event.nativeEvent.target.selectedIndex;
        let selected = event.nativeEvent.target[index].text
        props.onChangeFilter(selected)
        console.log(selected)
    }

    return (
        <div className='todo-filter'>
            <div className='todo-filter__control'>
                <label>Filter by priority</label>
                <select onChange={handleSelectedFilter}>
                    <option value='reset'>Filter by priority</option>
                    <option value='High'>High</option>
                    <option value='Medium'>Medium</option>
                    <option value='Low'>Low</option>
                </select>
            </div>
        </div>
    );
};

export default TodoFilter;