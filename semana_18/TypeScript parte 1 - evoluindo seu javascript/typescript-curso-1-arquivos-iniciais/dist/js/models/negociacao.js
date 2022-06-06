export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    // Programação defensiva
    // está blindando o acesso a _data
    // criando um clone para ela
    get data() {
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
