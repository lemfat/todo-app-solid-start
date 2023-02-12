import { createRouteData, Title } from "solid-start";
import AddTodo from "~/components/AddTodo";
import TodoList from "~/components/TodoList";
import { Todo } from "~/types/todo";

export function routeData() {
  const getData = async () => {
    const res = await fetch('http://localhost:3000/api/todo')
    return (await res.json() as Todo[]);
  }

  const todos = createRouteData(getData, { "key": "todos" })
  return { todos }
}

export default function Home() {

  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <Title>Todo app</Title>
      <AddTodo />
      <TodoList />
    </main>
  );
}
