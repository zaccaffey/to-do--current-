const DateWidget = (props) => {
    const date = `${props.date.getMonth()+1}/${props.date.getDate()}/${props.date.getFullYear()}`;
        return (
            <div>
                <p>{date}</p>
            </div>
        );
}

export default DateWidget