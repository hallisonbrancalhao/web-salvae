export interface PromocaoDto {
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
