import { Component, For, Show } from 'solid-js';
import { createRouteMultiAction, useRouteData } from 'solid-start';
import { supabase } from '~/lib/db';
import { routeData } from '~/routes';
import TodoComponent from './Todo';

const TodoList: Component = () => {
  const { todos } = useRouteData<typeof routeData>();

  const [addingTodo, { Form }] = createRouteMultiAction(async (form: FormData) => {
    const title = form.get("title") as string;
    return (await supabase.from("todos").insert({ "title": title }).select("*")).data![0]
  }, { "invalidate": [] });

  return (
    <div>
      <ul class='gap-4 my-4'>
        <For each={todos()}>
          {todo => <TodoComponent todo={todo} />}
        </For>
        <For each={addingTodo}>
          {todo => (
            <Show
              when={todo.result}
              fallback={(
                <li class="bg-gray-100 text-gray-900 rounded-md p-4 flex items-center justify-between">
                  pending...
                </li>
              )}
            >
              <TodoComponent todo={todo.result!} />
            </Show>
          )}
        </For>
      </ul>

      <Form class='sticky bottom-4 w-full flex items-center bg-white rounded-3xl shadow-xl p-4 md:gap-6'>
        <input type="text" name="title" placeholder='ex. go shopping...' required class='w-full rounded-xl border-none outline-none px-4 py-2' />
        <button type="submit" class='rounded-xl text-white bg-green-500 border-2 border-green-600 px-4 py-2 mr-4 md:mr-8'>ADD</button>
      </Form>
    </div>
  )
}

export default TodoList;