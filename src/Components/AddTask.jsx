import { React, useState } from 'react';


const AddTask = ({ onAdd }) => {

    const [text, setText] = useState('');
    const [day, setDate] = useState('');
    const [reminder, setReminder] = useState(true);

    const onSubmit = (e) => {
        e.preventDefault()

        if (!text) {
            alert('Please add text')
            return
        }

        onAdd({ text, day, reminder })

        setText('');
        setDate('');
        setReminder(false);
    }
    return (
        <div>
            <form className='add-form' onSubmit={onSubmit}>
                <div className='form-control'>
                    <label>Task</label>
                    <input type='text' placeholder='addTask' value={text} onChange={(e) => setText(e.target.value)}></input>
                </div>
                <div className='form-control'>
                    <label>Time and day</label>
                    <input type='text' placeholder='add time and day' value={day} onChange={(e) => setDate(e.target.value)}></input>
                </div>
                <div className='form-control form-control-check'>
                    <label>Set reminder</label>
                    <input type='checkbox' value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} checked={reminder}></input>
                </div>

                <input type='submit' className='btn btn-block' value='Save task'></input>
            </form>
        </div>
    )
}

export default AddTask
