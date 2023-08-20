<template>
  <div>
    <!-- Seu formulário de criação de usuário -->
    <form @submit="criarUsuario">
      <label for="nome">Nome:</label>
      <input type="text" id="nome" v-model="nome" required>

      <label for="senha">Senha:</label>
      <input type="password" id="senha" v-model="senha" required>

      <button type="submit">Criar Usuário</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nome: '',
      senha: ''
    };
  },
  methods: {
    async criarUsuario() {
      try {
        const response = await this.$axios.post('/api/criar-usuario', {
          nome: "leandro",
          senha: 1234
        });

        // Lógica para lidar com a resposta, por exemplo, redirecionar para outra página
        console.log('Usuário criado:', response.data);

        // Redirecionar para outra página após a criação bem-sucedida, se necessário
        // this.$router.push('/outra-pagina');
      } catch (error) {
        console.error('Erro ao criar o usuário:', error);
      }
    }
  }
};
</script>
