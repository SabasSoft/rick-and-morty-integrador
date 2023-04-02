const validation = (userData, errors, setErrors) => {
  if (!userData.email)
    setErrors({
      ...errors,
      email: "Por favor, ingrese un nombre de usuario",
    });
  else if (userData.email.lenght > 35)
    setErrors({
      ...errors,
      email:
        "El nombre de usuario ingresado supera el límite de caracteres (35)",
    });
  else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{3})+$/.test(userData.email))
    setErrors({ ...errors, email: "El email es inválido" });
  else setErrors({ ...errors, email: "" });

  if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/.test(userData.password))
    setErrors({
      ...errors,
      password:
        "Contraseña inválida; debe contener al menos 1 número, 1 letra mayúscula, 1 minúscula y debe tener entre 6 y 12 caracteres",
    });
  else setErrors({ ...errors, password: "" });
};

export default validation;
