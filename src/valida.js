import { produtos } from "./produtos";

class ValidacaoDeProdutos {
    
    /**
     * 
     * I choose to create a class to extend the main function where i can
     * implement all the validation methods. This way i can reuse functions in other parts
     * of the application and keep my main code cleanest as possible.
     * 
     * In case of future implements i can easily insert more validations without compromissing other parts
     * of my application.
     * 
     */

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
