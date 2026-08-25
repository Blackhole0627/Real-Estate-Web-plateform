"use client";

import { useActionState } from "react";
import { signIn } from "../actions";

export default function AdminLoginPage() {
  const [state, action, pending] = useActionState(signIn, null);

  return (
    <div className="adm-login">
      <form action={action}>
        <h1>Onker Home</h1>
        <p>Panel de administración</p>
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          autoComplete="email"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          autoComplete="current-password"
          required
        />
        {state?.error ? <div className="adm-err">{state.error}</div> : null}
        <button type="submit" disabled={pending}>
          {pending ? "Entrando…" : "Entrar"}
        </button>
      </form>
    </div>
  );
}
