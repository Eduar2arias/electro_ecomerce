"use client"
import Image from "next/image";
import styles from "../page.module.css";
import "./page.css";
import {  useEffect, useState } from "react";
import { usuarios as allUsuarios } from "@/data/productos";
import users from "@/data/user.json" 
import { useRouter } from "next/navigation";

export default function Home() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    username: "",
  });

  const [usuarios, setUsuarios] = useState({})
  const router = useRouter();

  useEffect(() => {
    // Simulate an API call
    const usuerStorage =  localStorage.getItem("usuarios")
    // console.log('usuarios', usuerStorage);
    if (usuerStorage) {
      setUsuarios(JSON.parse(usuerStorage))
      
    }else{
      setUsuarios(users)
    }

    
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!isLogin && formData.password !== formData.confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }
    console.log(isLogin);
    
    if (isLogin) {
      console.log(usuarios[formData.email]);
      if (!usuarios[formData.email]) {
        console.log("Usuario no encontrado");
        alert("Usuario no encontrado");
        return;
      }
      if (usuarios[formData.email].password !== formData.password) {
        console.log("Contraseña incorrecta");
        alert("Contraseña incorrecta");
        return;
      }
      router.push("/")
      localStorage.setItem("user", JSON.stringify(usuarios[formData.email].nameUser))
      localStorage.setItem("session", JSON.stringify(true))
      console.log("Iniciando sesión con:", formData.email, formData.password);
    } else {
      if (usuarios[formData.email]) {
        console.log("El usuario ya existe");
        alert("El usuario ya existe");
        return;
      }
      const newUser = {
        password : formData.password,
        nameUser: formData.username,
        email: formData.email,
      }
      setUsuarios({...usuarios, newUser})
      users[formData.email] = newUser
      console.log(users);
      allUsuarios[formData.email] = newUser
      console.log(allUsuarios);
      setUsuarios({...allUsuarios, newUser})
      localStorage.setItem("usuarios", JSON.stringify(allUsuarios))
      router.push("/")
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">{isLogin ? "Iniciar Sesión" : "Registrarse"}</h2>

        <form onSubmit={handleSubmit} className="auth-form">
          {!isLogin && (
            <input
              type="text"
              name="username"
              placeholder="Nombre de usuario"
              value={formData.username}
              onChange={handleChange}
              className="auth-input"
              required
            />
          )}

          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            value={formData.email}
            onChange={handleChange}
            className="auth-input"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            value={formData.password}
            onChange={handleChange}
            className="auth-input"
            required
          />

          {!isLogin && (
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirmar contraseña"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="auth-input"
              required
            />
          )}

          <button type="submit" className="auth-button">
            {isLogin ? "Entrar" : "Registrarse"}
          </button>
        </form>

        <div className="auth-toggle">
          <p>
            {isLogin ? "¿No tenés cuenta?" : "¿Ya tenés cuenta?"}{" "}
            <button
              type="button"
              className="auth-link"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? "Registrate" : "Iniciar sesión"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
