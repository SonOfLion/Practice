import { FaTimes } from 'react-icons/fa';

const Task = ({ task, handleDelete, handleToggle }) => {
  return (
    <div
      className={ `task ${ task.reminder ? 'reminder' : '' }` }
      onDoubleClick={ () => handleToggle(task.id) }
    >
      <h3>
        { task.text }{ '' }
        <FaTimes
          styles={{ color: 'red', cursor: 'pointer' }}
          onClick={ () => handleDelete(task.id) }
        />
      </h3>
      <p>{ task.day }</p>
    </div>
  );
};

export default Task;