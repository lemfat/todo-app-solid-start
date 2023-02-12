import { Component, For } from 'solid-js';
import { useRouteData } from 'solid-start';
import { routeData } from '~/routes';

const TodoList: Component = () => {
  const { todos } = useRouteData<typeof routeData>();

  return (
    <ul>
      <For each={todos()}>
        {todo => <li>{todo.title}</li>}
      </For>
    </ul>
  )
}

export default TodoList;