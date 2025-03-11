import React, { useState } from 'react';
import { TextField, Button, Checkbox, FormControl, InputLabel, Select, MenuItem, ListItemText, OutlinedInput, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";

const roles = ['Adminstrator', 'Usuario', 'Editor', 'Moderador'];

const UserCreator = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [selectedRoles, setSelectedRoles] = useState([]);
  const navigate = useNavigate();

  const handleRoleChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedRoles(
      // Se asegura que mantenga una lista con múltiples selecciones
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const onSubmit = (data) => {
    const newUser = {
      ...data,
      role: selectedRoles, // Añadimos los roles seleccionados al objeto de usuario
      creationDate: new Date().toISOString(),
    };

    // Aquí harías la petición al backend para crear el usuario
    console.log(newUser);

    // Redirige a otra página después de crear el usuario
    navigate('/dashboard');
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800">Users Management</h2>
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      sx={{ display: 'flex', flexDirection: 'column', maxWidth: 400, margin: 'auto', mt: 5 }}
    >
      <TextField
        label="Email"
        variant="outlined"
        margin="normal"
        {...register('email', { required: 'Email es requerido' })}
        error={!!errors.email}
        helperText={errors.email?.message}
      />

      <TextField
        label="Username"
        variant="outlined"
        margin="normal"
        {...register('username', { required: 'Username es requerido' })}
        error={!!errors.username}
        helperText={errors.username?.message}
      />

      <TextField
        label="Password"
        type="password"
        variant="outlined"
        margin="normal"
        {...register('password', { required: 'Password es requerido' })}
        error={!!errors.password}
        helperText={errors.password?.message}
      />

      <FormControl sx={{ mt: 2 }}>
        <InputLabel id="role-label">Roles</InputLabel>
        <Select
          labelId="role-label"
          id="role"
          multiple
          value={selectedRoles}
          onChange={handleRoleChange}
          input={<OutlinedInput label="Roles" />}
          renderValue={(selected) => selected.join(', ')}
        >
          {roles.map((role) => (
            <MenuItem key={role} value={role}>
              <Checkbox checked={selectedRoles.indexOf(role) > -1} />
              <ListItemText primary={role} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Button type="submit" variant="contained" color="primary" sx={{ mt: 3 }}>
        Crear Usuario
      </Button>
    </Box>
    </div>
  );
};

export default UserCreator;
