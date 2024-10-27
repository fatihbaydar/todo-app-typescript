interface ITodoType {
    task: string;
    isDone: boolean;
    id: string | number; // id string veya number olabilir.
    owner?: string; //! bu alan zorunlu değil. bu veri gelmişse type da string
  }