import { produtos } from "./produtos";
import { ValidacaoDeProdutos } from "./valida";

class CaixaDaLanchonete extends ValidacaoDeProdutos{

    /**
     * 
     * I can think in several ways to perform upgrades in this code:
     * 
     *  - Add typescript to upgrade our development process 
     *  - Use local servers starting thinking in GUI implements
     * 
     * This project can easily become an API and perform solutions with several features involving mailing,
     * billing (stripe) and even Auth0 for authentication. 
     * But i'll choose stick to the goal and keep my eyes on the requirements.
     * 
     * 
     */

    calcularValorDaCompra(metodoDePagamento, itens) {
        let total = 0, carrinho = [];

        if(this.quantidadeEstaVazia(itens)){
            return "Não há itens no carrinho de compra!";
        };

        if(!this.metodoPermitido(metodoDePagamento)){
            return "Forma de pagamento inválida!"
        }
        
        for(let item of itens){
            let [ produto, quantidade ] = item.split(',');

            if(!this.produtoExiste(produto)){
                return "Item inválido!";
            }

            carrinho.push(produto)

            if(this.quantidadeEstaVazia(quantidade)){
                return "Quantidade inválida!";
            }

            total += (produtos[produto] * quantidade) / 100;
        }
        
        if(!this.pedidoExtraPermitido(carrinho)){
            return "Item extra não pode ser pedido sem o principal";
        }

        total = this.calculaDesconto(metodoDePagamento, total)

        return `R$ ${total}`;
    }

    

}

export { CaixaDaLanchonete };
