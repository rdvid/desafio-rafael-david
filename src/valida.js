import { produtos } from "./produtos";

class ValidacaoDeProdutos {
    
    calculaDesconto(metodoDePagamento, total){
        switch(metodoDePagamento){
            case "dinheiro":
                total -= (total / 100) * 5;
                return total.toFixed(2).replace(".", ",")
            case "credito":
                total += (total / 100) * 3;
                return total.toFixed(2).replace(".", ",")
            default:
                return total.toFixed(2).replace(".", ",");
        }
    }

    pedidoExtraPermitido(pedido){
        if(pedido.includes('queijo') && !pedido.includes('sanduiche')){
            return false
        }else if(pedido.includes('chantily') || !pedido.includes('cafe')){
            return false
        }else{
            return true
        }
    }


    quantidadeEstaVazia(quantidade){
        quantidade *= 1;
        switch(quantidade) {
            case 0:
                return true
            default:
                return false 
        }
    }

    produtoExiste(produto){
        if(!Object.keys(produtos).includes(produto)){
            return false
        }else{
            return true
        }
    }

    metodoPermitido(metodoDePagamento){
        if(!['credito', 'debito', 'dinheiro'].includes(metodoDePagamento)){
            return false
        }else{
            return true
        }
    }

    

}

export { ValidacaoDeProdutos };
