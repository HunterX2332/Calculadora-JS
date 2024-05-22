class CalcControlle{
    constructor(){
        this._displayClac = 0;
        this._dataAtual;
    }

    get displayClac(){
        return this._displayClac;
    }
    set displayClac(valor){
        this._displayClac = valor;
    }

    get dataAtual(){
        return this._dataAtual;
    }
    set dataAtual(valor){
        this._dataAtual = valor;
    }
}

