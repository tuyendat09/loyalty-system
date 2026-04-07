import { useRef } from "react";
import { useLogin } from "@refinedev/core";

type LoginForm = {
  username: string;
  password: string;
};

export default function Login() {
  const { mutate, isPending, error } = useLogin();

  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  function prepareData(): LoginForm | null {
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;

    if (!username || !password) {
      alert("Please enter username and password");
      return null;
    }

    return { username, password };
  }

  function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = prepareData();
    if (formData) {
      mutate(formData);
    }
  }

  return (
    <div style={{ maxWidth: 400, margin: "100px auto" }}>
      <h2>Login</h2>

      <form onSubmit={handleLogin}>
        <div style={{ marginBottom: 12 }}>
          <label>Username</label>
          <input
            ref={usernameRef}
            type="text"
            placeholder="Enter username"
            style={{ width: "100%", padding: 8 }}
          />
        </div>

        <div style={{ marginBottom: 12 }}>
          <label>Password</label>
          <input
            ref={passwordRef}
            type="password"
            placeholder="Enter password"
            style={{ width: "100%", padding: 8 }}
          />
        </div>

        <button
          type="submit"
          disabled={isPending}
          style={{
            width: "100%",
            padding: 10,
            background: "#1677ff",
            color: "#fff",
            border: "none",
          }}
        >
          {isPending ? "Logging in..." : "Login"}
        </button>
      </form>

      {error && (
        <p style={{ color: "red", marginTop: 10 }}>
          Login failed: {(error as Error).message}
        </p>
      )}
    </div>
  );
}
