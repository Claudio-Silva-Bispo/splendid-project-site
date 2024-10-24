import React, { useState, useEffect } from 'react';

interface UserData {
  id: string;
  name: string;
  email: string;
  phone: string;
  password?: string;
}

interface EditarUsuarioModalProps {
  usuario: UserData | null;
  onClose: () => void;
  onSave: (data: UserData) => void;
}

const EditarUsuarioModal: React.FC<EditarUsuarioModalProps> = ({ usuario, onClose, onSave }) => {
  const [formData, setFormData] = useState<UserData>({
    id: '',
    name: '',
    email: '',
    phone: '',
    password: ''
  });

  useEffect(() => {
    if (usuario) {
      setFormData(usuario);
    }
  }, [usuario]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSave(formData);
  };

  if (!usuario) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded">
        <h2 className="text-xl font-semibold mb-4">Editar Usuário</h2>
        <form 
        onSubmit={handleSubmit} 
        className="space-y-4"
        name="update-form-splendid"
        method="post"
        data-netlify="false"
        id="form-update-splendid">
          <div>
            <label htmlFor="nome" className="block text-sm font-medium">Nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              className="w-full p-2 border border-gray-300 rounded"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 border border-gray-300 rounded"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="telefone" className="block text-sm font-medium">Telefone</label>
            <input
              type="tel"
              id="telefone"
              name="telefone"
              className="w-full p-2 border border-gray-300 rounded"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="senha" className="block text-sm font-medium">Senha</label>
            <input
              type="password"
              id="senha"
              name="senha"
              className="w-full p-2 border border-gray-300 rounded"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-end space-x-4">
            <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-300 rounded">Cancelar</button>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Salvar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditarUsuarioModal;
