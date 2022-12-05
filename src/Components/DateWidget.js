const DateWidget = (props) => {
    let date = props.date
    if (typeof date === Date) {
        // date = `${props.date.getMonth()+1}/${props.date.getDate()}/${props.date.getFullYear()}`;
        console.log(date + " 3")
    } else {
        const object = new Date(date)
        date = `${object.getMonth()+1}/${object.getDate()}/${object.getFullYear()}`;
        console.log(date + " 2")
    }
        return (
            <div>
                <p>{date}</p>
            </div>
        );
}

export default DateWidget