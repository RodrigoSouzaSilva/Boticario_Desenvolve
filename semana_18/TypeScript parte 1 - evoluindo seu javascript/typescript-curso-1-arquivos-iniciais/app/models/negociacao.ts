export class Negociacao {
  constructor(
        private _data: Date,
        public readonly quantidade: number,
        public readonly valor: number
    ) {}

    get volume(): number {
        return this.quantidade * this.valor;
    }

    // Programação defensiva
    // está blindando o acesso a _data
    // criando um clone para ela
    get data():Date {
        const data = new Date(this._data.getTime());
        return data;
    }
}

// get data(): Date {
//     return this._data;
// }

// get quantidade(): number {
//     return this._quantidade;
// }

// get valor(): number {
//     return this._valor;
// }