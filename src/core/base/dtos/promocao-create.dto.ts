export interface PromocaoDto {
  id: number;
  idEstabelecimento: number;
  descricao: string;
  promocaoCategoria: [
    {
      idCategoriaPromocao: number;
    },
  ];
  promocaoDia: [
    {
      idDiaFuncionamento: number;
    },
  ];
  status: boolean;
}
