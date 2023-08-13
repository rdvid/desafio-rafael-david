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

    // carrinhoEstaVazio(items){
    //     switch(items.length){
    //         case 0:
    //             return true
    //         default:
    //             return false
    //     }
    // }

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

/**
 * 
 * 
  | codigo    | descrição                   | valor   |
  |-----------|-----------------------------|---------|
  | cafe      | Café                        | R$ 3,00 |
  | chantily  | Chantily (extra do Café)    | R$ 1,50 |
  | suco      | Suco Natural                | R$ 6,20 |
  | sanduiche | Sanduíche                   | R$ 6,50 |
  | queijo    | Queijo (extra do Sanduíche) | R$ 2,00 |
  | salgado   | Salgado                     | R$ 7,25 |
  | combo1    | 1 Suco e 1 Sanduíche        | R$ 9,50 |
  | combo2    | 1 Café e 1 Sanduíche        | R$ 7,50 |
 * 
 * 
 * 
 */