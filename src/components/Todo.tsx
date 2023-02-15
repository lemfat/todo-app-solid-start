import { Todo } from '~/types/todo';

export type TodoComponentProps = {
  todo: Todo
}

const TodoComponent = (props: { todo: Todo }) => {
  return (
    <li class="bg-gray-100 text-gray-900 rounded-md p-4 flex items-center justify-between">
      <div class='flex gap-4 items-center'>
        <input type="checkbox" checked={props.todo.isCompleted} class="m-2 w-6 h-6" />
        <p class={props.todo.isCompleted ? "line-through" : ""}>{props.todo.title}</p>
      </div>
      <div>
        <button class='bg-red-50 rounded-md px-4 py-2'>
          delete
        </button>
      </div>
    </li>
  )
}

export default TodoComponent;