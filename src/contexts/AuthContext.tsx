import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { authService } from '@/lib/services';
import { useToast } from '@/hooks/use-toast';

interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  avatar?: string;
  type: 'user' | 'admin' | 'agency';
  planId?: string;
  createdAt: string;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (data: RegisterData) => Promise<void>;
  logout: () => void;
  updateUser: (user: User) => void;
  isAuthenticated: boolean;
  isAdmin: boolean;
  isAgency: boolean;
}

interface RegisterData {
  name: string;
  email: string;
  password: string;
  phone?: string;
  type?: 'user' | 'agency';
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  // Carregar usuário do localStorage ao iniciar
  useEffect(() => {
    const loadUser = async () => {
      try {
        const savedToken = localStorage.getItem('token');
        const savedUser = localStorage.getItem('user');

        console.log('🔄 Carregando autenticação...', { hasToken: !!savedToken, hasUser: !!savedUser });

        if (savedToken && savedUser) {
          const parsedUser = JSON.parse(savedUser);
          setToken(savedToken);
          setUser(parsedUser);
          
          console.log('✅ Usuário carregado do localStorage:', parsedUser.email);

          // Tentar atualizar o perfil do usuário do backend
          // Mas se falhar, manter o usuário salvo localmente
          try {
            const profile = await authService.getProfile();
            if (profile.success && profile.data) {
              setUser(profile.data);
              localStorage.setItem('user', JSON.stringify(profile.data));
              console.log('✅ Perfil atualizado do backend');
            }
          } catch (error: any) {
            // Apenas loga o erro mas mantém o usuário logado com dados do localStorage
            console.log('⚠️ Não foi possível atualizar perfil do backend, usando dados salvos');
            // Só limpa se for erro de autenticação (401/403)
            if (error?.response?.status === 401 || error?.response?.status === 403) {
              console.log('❌ Token inválido, fazendo logout');
              localStorage.removeItem('token');
              localStorage.removeItem('user');
              setToken(null);
              setUser(null);
            }
          }
        } else {
          console.log('ℹ️ Nenhum usuário salvo encontrado');
        }
      } catch (error) {
        console.error('❌ Erro ao carregar usuário:', error);
      } finally {
        setLoading(false);
        console.log('✅ Carregamento de autenticação finalizado');
      }
    };

    loadUser();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const response = await authService.login(email, password);

      if (response.success) {
        const { token, user } = response.data;
        setToken(token);
        setUser(user);
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));

        toast({
          title: 'Login realizado!',
          description: `Bem-vindo, ${user.name}!`,
        });
      }
    } catch (error: any) {
      const message = error.response?.data?.message || 'Erro ao fazer login';
      toast({
        title: 'Erro no login',
        description: message,
        variant: 'destructive',
      });
      throw error;
    }
  };

  const register = async (data: RegisterData) => {
    try {
      const response = await authService.register(data);

      if (response.success) {
        const { token, user } = response.data;
        setToken(token);
        setUser(user);
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));

        toast({
          title: 'Conta criada!',
          description: 'Sua conta foi criada com sucesso!',
        });
      }
    } catch (error: any) {
      const message = error.response?.data?.message || 'Erro ao criar conta';
      toast({
        title: 'Erro no cadastro',
        description: message,
        variant: 'destructive',
      });
      throw error;
    }
  };

  const logout = () => {
    authService.logout();
    setToken(null);
    setUser(null);
    // Limpar qualquer estado de navegação
    sessionStorage.clear();
    toast({
      title: 'Logout realizado',
      description: 'Até logo!',
    });
  };

  const updateUser = (updatedUser: User) => {
    setUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
  };

  const value: AuthContextType = {
    user,
    token,
    loading,
    login,
    register,
    logout,
    updateUser,
    isAuthenticated: !!token && !!user,
    isAdmin: user?.type === 'admin',
    isAgency: user?.type === 'agency',
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
