import Task from './Task';

const Tasks = ({ tasks, handleDelete, handleToggle }) => {
  return (
    <>
      { tasks.map(task => (
        <Task
          key={ task.id }
          task={ task }
          handleDelete={ handleDelete }
          handleToggle={ handleToggle }
        />
      )) }
    </>
  );
};

export default Tasks;