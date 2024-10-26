import { Form, redirect } from "react-router-dom";
import { login } from "../api/auth";

export async function action({ request }: { request: Request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  if (!data) return null;
  console.log(data);
  const res = await login(data);
  if (res?.err) {
    console.error(res.err)
    return res.err;
  }

  return redirect("/");
}


export default function Login() {

  return (

    <Form method="POST">
      <input type="text" name="email" />
      <input type="password" name="password" />
      <button type="submit"> Login </button>
    </Form>
  );
}
