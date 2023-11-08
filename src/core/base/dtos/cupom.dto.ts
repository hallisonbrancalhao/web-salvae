export interface CupomDto {
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
